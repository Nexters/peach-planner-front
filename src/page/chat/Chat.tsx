import { Title } from '../../component/style/style';
import styled from 'styled-components';
import shape from 'src/images/Shape 2.png';
import imgWedding from 'src/images/img_wedding_1.png';
import React, { useEffect } from 'react';
import { useQuery, QueryFunctionContext } from 'react-query';
import { ChatRoom, ChatRoomParticipant, fetchChatRoomParticipant, fetchChatRooms } from 'src/api/ChatRoom';
import { ChatMessage, ChatMessageReq, fetchChatMessages, sendMessage } from 'src/api/ChatMessage';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Client, Message, IFrame, ActivationState, StompSocketState } from '@stomp/stompjs';
import { useMemo } from 'react';
import { User, getUser } from 'src/api/User';
import axios from 'axios';

const client = new Client({
  brokerURL: 'ws://localhost:8080/websocket',
  connectHeaders: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  },
  // debug: (str) => console.log(str),
  reconnectDelay: 5000, //자동 재 연결
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
  onConnect: (receipt: IFrame) => {
    console.log(receipt.body);
  }
});
const subscribeIds = new Set();

interface ChatMessageModel {
  id: number;
  sender: ChatRoomParticipant;
  senderId: number;
  messageType: 'SYSTEM_START' | 'NORMAL' | 'SYSTEM_END';
  senderType: 'SYSTEM' | 'USER' | 'PLANNER';
  message: string;
  dateTime: string;
}

const ChatContainer = () => {
  const [selected, setSelected] = React.useState(-1);
  const { data: rooms } = useQuery(['rooms'], fetchChatRooms);
  const { data: user } = useQuery(['getUser'], getUser);
  const currentRoom = React.useRef<ChatRoom>({} as ChatRoom);
  const [typingMessage, setTypingMessage] = React.useState('');

  const chatRoomParticipant = React.useRef<{ [key: string]: ChatRoomParticipant }>();
  const [chatMessages, setChatMessages] = React.useState<ChatMessageModel[]>([]);

  const messagesEndRef = React.useRef<null | HTMLDivElement>(null);

  const me = React.useRef<User>();

  useEffect(() => {
    client.activate();
    if (user) {
      me.current = user;
    }
  }, [user]);

  useEffect(() => {
    const subscribeRooms = () => {
      rooms?.forEach((room) => {
        if (subscribeIds.has(room.id)) return;

        if (client.state === ActivationState.ACTIVE) {
          client.subscribe(`/topic/chat/${room.id}`, (message: IFrame) => {
            console.log(currentRoom.current.id);
            if (currentRoom.current.id === room.id) {
              const chatMessage = JSON.parse(message.body) as ChatMessage;
              setChatMessages((draft) => [
                ...draft,
                {
                  id: chatMessage.id,
                  sender: chatRoomParticipant.current?.[chatMessage.senderId],
                  senderId: chatMessage.senderId,
                  messageType: chatMessage.messageType,
                  senderType: chatMessage.senderType,
                  message: chatMessage.message,
                  dateTime: chatMessage.dateTime
                } as ChatMessageModel
              ]);
              console.log(chatMessages);
            }
          });
        }

        subscribeIds.add(room.id);
      });
    };

    if (client.state === ActivationState.ACTIVE && client.webSocket?.readyState === StompSocketState.OPEN) {
      subscribeRooms();
    }
    if (client.state === ActivationState.INACTIVE) {
      client.onConnect = (receipt: IFrame) => {
        subscribeRooms();
      };
    }
  }, [rooms]);

  useEffect(() => {
    // messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  return (
    <Container>
      <Page>
        <Row>
          <Cell width="35%">
            <Title height="27px" width="auto" fontSize="18px" lineHeight="27px" padding="24px 0 24px 16px">
              메시지
            </Title>
          </Cell>
          <Cell width="65%">
            <ChatRoomTitleLine>
              <Title height="20px" width="auto" fontSize="14px" lineHeight="20px" padding="24px 0 24px 16px">
                {currentRoom.current.roomName}
              </Title>
              <PlannerProfileTitleDiv>
              {
                chatRoomParticipant.current &&
                <PlannerProfileLink href={`/planner/${Object.values(chatRoomParticipant.current).filter(a => a.participantType == 'PLANNER')[0].participantTypeId}`}>
                  <PlannerProfileCTA color="#000000">프로필 보기</PlannerProfileCTA>
                </PlannerProfileLink>
              }
              {
                me.current?.userType == 'PLANNER' && currentRoom.current.estimationId != null && currentRoom.current.chatRoomStatus == 'OPEN' &&
                <PlannerProfileEndConsult onClick={() => {
                  axios
                    .post(
                      `/estimate/${currentRoom.current.estimationId}/complete`,
                      {},
                      { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
                    )
                  console.log('상담 완료 ' + currentRoom.current.estimationId);
                }}>
                  <PlannerProfileCTA color="#FFFFFF">상담 완료하기</PlannerProfileCTA>
                </PlannerProfileEndConsult>
              }
              {
                me.current?.userType == 'PLANNER' && currentRoom.current.estimationId != null && currentRoom.current.chatRoomStatus == 'CLOSED' &&
                <PlannerProfileEndedConsult>
                  <PlannerProfileCTA color="#FFFFFF">완료됨</PlannerProfileCTA>
                </PlannerProfileEndedConsult>
              }
              </PlannerProfileTitleDiv>
            </ChatRoomTitleLine>
          </Cell>
        </Row>

        <Row height="60vh">
          <Cell width="35%">
            <CellContent>
              {rooms ? (
                rooms.map((room, index) => {
                  return (
                    <ChatCard
                      selected={selected === index}
                      onClick={() => {
                        setSelected(index);
                        currentRoom.current = rooms[index];

                        (async () => {
                          await Promise.all([
                            fetchChatMessages(currentRoom.current.id),
                            fetchChatRoomParticipant(currentRoom.current.id)
                          ]).then(([messages, roomParticipants]) => {
                            setChatMessages(
                              messages.map((message) => {
                                return {
                                  id: message.id,
                                  sender: roomParticipants[message.senderId],
                                  senderId: message.senderId,
                                  messageType: message.messageType,
                                  senderType: message.senderType,
                                  message: message.message,
                                  dateTime: message.dateTime
                                } as ChatMessageModel;
                              })
                            );
                            chatRoomParticipant.current = roomParticipants;
                          });
                        })();
                      }}
                    >
                      <ChatProfileImg src={room.profileImage || shape}/>
                      <ChatProfileText>
                        <ChatProfileLine>
                          <ChatProfileName>{room.roomName}</ChatProfileName>
                          <ChatLastMessageDate>{new Date(room.lastMessageDateTime).toDateString()}</ChatLastMessageDate>
                        </ChatProfileLine>
                        <ChatLastMessage>{room.lastMessage}</ChatLastMessage>
                      </ChatProfileText>
                    </ChatCard>
                  );
                })
              ) : (
                <></>
              )}
            </CellContent>
          </Cell>
          <Cell width="65%">
            <CellContent>
              {chatMessages && chatMessages.length > 0 ? (
                <ChatMessageDate>{new Date(chatMessages[0].dateTime).toLocaleDateString('ko-KR')}</ChatMessageDate>
              ) : (
                <></>
              )}
              {chatMessages ? (
                chatMessages.map((message) => {
                  if (message.messageType === 'SYSTEM_START') {
                    return (
                      <SystemMessageDiv>
                        <SystemMessage>{message.message}</SystemMessage>
                      </SystemMessageDiv>
                    );
                  }

                  if (message.messageType === 'SYSTEM_END') {
                    return (
                      <SystemMessageDiv>
                        <SystemMessage>{me.current?.userType == 'PLANNER' ? message.message : '상담에 만족하셨나요? 플래너 리뷰를 작성하실 수 있습니다.'}</SystemMessage>
                        {me.current?.userType != 'PLANNER' && <a href="/">
                          <SystemMessageLink>플래너 리뷰 작성하기</SystemMessageLink>
                        </a>}
                      </SystemMessageDiv>
                    );
                  }

                  if (me.current?.id === message.senderId) {
                    return (
                      <MyChatMessageDiv>
                        <MyChatMessageCard>
                          <MyChatMessageTitle>
                            <ChatMessageProfileName>{message.sender.name}</ChatMessageProfileName>
                            <ChatMessageProfileDatetime>
                              {new Date(message.dateTime).toLocaleTimeString('ko-KR', {
                                hour12: true,
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </ChatMessageProfileDatetime>
                          </MyChatMessageTitle>
                          <MyChatMessageText>{message.message}</MyChatMessageText>
                        </MyChatMessageCard>
                        <ChatMessageProfileImg src={message.sender.profileImage || shape} />
                      </MyChatMessageDiv>
                    );
                  }

                  return (
                    <ChatMessageDiv>
                      <ChatMessageProfileImg src={message.sender.profileImage || shape} />
                      <ChatMessageCard>
                        <ChatMessageTitle>
                          <ChatMessageProfileName>{message.sender.name}</ChatMessageProfileName>
                          <ChatMessageProfileDatetime>
                            {new Date(message.dateTime).toLocaleTimeString('ko-KR', {
                              hour12: true,
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </ChatMessageProfileDatetime>
                        </ChatMessageTitle>
                        <ChatMessageText>{message.message}</ChatMessageText>
                      </ChatMessageCard>
                    </ChatMessageDiv>
                  );
                })
              ) : (
                <></>
              )}
              <div ref={messagesEndRef} />
            </CellContent>
            <ChatMessageBoxDiv>
              <ChatMessageClipDiv>
                <FontAwesomeIconDiv icon={faPaperclip}></FontAwesomeIconDiv>
              </ChatMessageClipDiv>
              <ChatMessageInputForm
                onSubmit={(e) => {
                  e.preventDefault();

                  sendMessage({
                    roomId: currentRoom.current.id,
                    message: typingMessage
                  } as ChatMessageReq);
                  setTypingMessage('');
                  return false;
                }}
              >
                <ChatMessageInput
                  placeholder="메시지를 입력하세요."
                  value={typingMessage}
                  onChange={(e) => setTypingMessage(e.target.value)}
                ></ChatMessageInput>
              </ChatMessageInputForm>
            </ChatMessageBoxDiv>
          </Cell>
        </Row>
      </Page>
    </Container>
  );
};

export default ChatContainer;

const Container = styled.div`
  background-color: white;
  padding: 0 21vw;
`;

const Page = styled.div`
  display: table;
  background-color: white;
  height: 100%;
  width: 100%;
`;

interface RowProps {
  height?: string;
}

const Row = styled.div<RowProps>`
  display: table-row;
  width: 100%;
  height: ${(props: RowProps) => props.height};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 20px 0;
`;

interface CellProps {
  width: string;
}

const Cell = styled.div<CellProps>`
  display: table-cell;
  width: ${(props: CellProps) => props.width};
  border: 1px solid;
  border-color: #d8d8d8;
  vertical-align: top;
  max-height: 340px;
  position: relative;
`;

const CellContent = styled.div`
  overflow-y: auto;
  position: relative;
  display: flex;
  max-height: 500px;
  flex-direction: column;
  padding-bottom: 24px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f354266;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const ChatRoomTitleLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface ChatCardProps {
  selected?: boolean;
}

const ChatCard = styled.div<ChatCardProps>`
  display: flex;
  margin: 8px 8px 8px 8px;
  height: 76px;
  border-radius: 8px;
  background-color: ${(props: ChatCardProps) => (props.selected ? '#F1F3F5' : 'inherit')};
`;

const ChatProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 8px;
  border-radius: 30px;
`;

const ChatProfileLine = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4px;
`;

const PlannerProfileTitleDiv = styled.div`
  margin: 20px 20px 20px 20px;
  display: flex;
  /* justify-content: space-between;
  padding-bottom: 4px;
  vertical-align: bottom; */
  justify-content: flex-end;
`;

const PlannerProfileLink = styled.a`
  width: 90px;
  margin: 0 8px 0 0;
  padding: 6px 16px 8px;
  border-radius: 3px;
  border: solid 2px #adb5bd;

  color: transparent;

  font-weight: 700;
  font-style: normal;
  font-size: medium;
  transition-duration: 0.4s;
  :hover {
    background-color: #ced4da;
  }
`;

const PlannerProfileEndConsult = styled.button`
  width: 120px;
  margin: 0 8px 0 0;
  padding: 6px 16px 8px;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  background-color: #e64980;

  font-weight: 700;
  font-style: normal;
  font-size: medium;
  transition-duration: 0.4s;
`;

const PlannerProfileEndedConsult = styled(PlannerProfileEndConsult)`
cursor: initial;
  background-color: #868e96;
`;


interface PlannerProfileCTAProps {
  color: string;
}

const PlannerProfileCTA = styled.p<PlannerProfileCTAProps>`
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${(props: PlannerProfileCTAProps) => props.color};
`;


const ChatProfileText = styled.div`
  padding: 4px;
`;

const ChatProfileName = styled.p`
  color: #000000;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 19px;
  font-weight: bold;
`;

const ChatLastMessageDate = styled.p`
  height: 17px;
  color: #868e96;
  font-size: 11px;
  letter-spacing: 0;
  line-height: 17px;
  text-align: right;
`;

const ChatLastMessage = styled.p`
  width: 19rem;
  height: 38px;
  color: #868e96;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 19px;
`;

const ChatMessageDate = styled.p`
  padding: 20px 40px 20px 40px;
  height: 18px;
  color: #495057;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
`;

const SystemMessageDiv = styled.div`
  margin: 0 39px 0 39px;
  width: 645px;
  border-radius: 3px;
  background-color: #f1f3f5;
`;

const SystemMessage = styled.p`
  padding: 11px 0 11px 12px;
  height: 18px;
  color: #868e96;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 18px;
`;

const ChatMessageDiv = styled.div`
  display: flex;
  margin: 0 39px 0 39px;
  width: 645px;
`;

const ChatMessageTitle = styled.div`
  padding: 20px 0 2px 4px;
  display: flex;
  /* justify-content: space-between; */
  padding-bottom: 4px;
  vertical-align: bottom;
`;

const ChatMessageProfileName = styled.p`
  color: #000000;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
`;

const ChatMessageBoxDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  bottom: 0;
  border-top: 1px solid;
  border-color: #d8d8d8;
  background-color: white;
`;

const ChatMessageClipDiv = styled.div`
  padding: 14px 14px 14px 14px;
`;

const ChatMessageInputForm = styled.form`
  width: 80%;
`;

const ChatMessageInput = styled.input.attrs({ type: 'text' })`
  margin: 15.5px;
  margin-left: 0px;
  padding: 15.5px;
  width: 100%;
  border: 1px solid #495057;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 24px;
  ::placeholder {
    color: #868e96;
  }
`;

const FontAwesomeIconDiv = styled(FontAwesomeIcon)`
  padding: 16px;
  background-color: #dddddddd;
  border-radius: 10px;
`;

const ChatMessageProfileImg = styled.img`
  margin: 20px 0 20px 0;
  width: 40px;
  height: 40px;
  border-radius: 90px;
`;

const ChatMessageProfileDatetime = styled.p`
  margin-top: auto;
  bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;

  height: 15px;
  color: #495057;
  font-size: 10px;
  letter-spacing: 0;
  line-height: 15px;
`;

const ChatMessageText = styled.pre`
  padding-left: 4px;
  padding-right: 4px;
  color: #000000;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 19px;
`;

const ChatMessageCard = styled.div``;

const SystemMessageLink = styled.p`
  padding: 0 0 11px 12px;
  color: #212529;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 18px;
`;

const MyChatMessageDiv = styled(ChatMessageDiv)`
  justify-content: flex-end;
`;

const MyChatMessageCard = styled(ChatMessageCard)`
  justify-content: flex-end;
`;

const MyChatMessageTitle = styled(ChatMessageTitle)`
  justify-content: flex-end;
`;
const MyChatMessageText = styled(ChatMessageText)`
  text-align: right;
`;
