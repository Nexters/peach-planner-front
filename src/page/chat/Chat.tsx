import { Title } from '../../component/style/style';
import styled from 'styled-components';
import shape from 'src/images/Shape 2.png';
import imgWedding from 'src/images/img_wedding_1.png';
import React from 'react';

export default () => {
  const [selected, setSelected] = React.useState(0);

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
            <Title height="20px" width="auto" fontSize="14px" lineHeight="20px" padding="24px 0 24px 16px">
              송영주 플래너
            </Title>
          </Cell>
        </Row>

        <Row height="60vh">
          <Cell width="35%">
            <ChatCard selected={selected === 0} onClick={() => setSelected(0)}>
              <ChatProfileImg src={shape} />
              <ChatProfileText>
                <ChatProfileLine>
                  <ChatProfileName>A 플래너</ChatProfileName>
                  <ChatLastMessageDate>21.07.13</ChatLastMessageDate>
                </ChatProfileLine>
                <ChatLastMessage>
                  안녕하세요, 문의 주셔서 감사합니다. 현재 9월부터 예약이 가능하니, 참고 부탁드릴게요 :){' '}
                </ChatLastMessage>
              </ChatProfileText>
            </ChatCard>
            <ChatCard selected={selected === 1} onClick={() => setSelected(1)}>
              <ChatProfileImg src={shape} />
              <ChatProfileText>
                <ChatProfileLine>
                  <ChatProfileName>송영주 플래너</ChatProfileName>
                  <ChatLastMessageDate>21.07.13</ChatLastMessageDate>
                </ChatProfileLine>
                <ChatLastMessage>
                  안녕하세요, 문의 주셔서 감사합니다. 현재 9월부터 예약이 가능하니, 참고 부탁드릴게요 :){' '}
                </ChatLastMessage>
              </ChatProfileText>
            </ChatCard>
            <ChatCard selected={selected === 2} onClick={() => setSelected(2)}>
              <ChatProfileImg src={shape} />
              <ChatProfileText>
                <ChatProfileLine>
                  <ChatProfileName>B 플래너</ChatProfileName>
                  <ChatLastMessageDate>21.07.13</ChatLastMessageDate>
                </ChatProfileLine>
                <ChatLastMessage>
                  안녕하세요, 문의 주셔서 감사합니다. 현재 9월부터 예약이 가능하니, 참고 부탁드릴게요 :){' '}
                </ChatLastMessage>
              </ChatProfileText>
            </ChatCard>
            <ChatCard selected={selected === 3} onClick={() => setSelected(3)}>
              <ChatProfileImg src={shape} />
              <ChatProfileText>
                <ChatProfileLine>
                  <ChatProfileName>C 플래너</ChatProfileName>
                  <ChatLastMessageDate>2021.07.13</ChatLastMessageDate>
                </ChatProfileLine>
                <ChatLastMessage>
                  안녕하세요, 문의 주셔서 감사합니다. 현재 9월부터 예약이 가능하니, 참고 부탁드릴게요 :){' '}
                </ChatLastMessage>
              </ChatProfileText>
            </ChatCard>
          </Cell>
          <Cell width="65%">
            <ChatMessageDate>2021년 5월 10일</ChatMessageDate>
            <SystemMessageDiv>
              <SystemMessage>송영주 플래너에게 견적 상담을 요청했어요.</SystemMessage>
            </SystemMessageDiv>
            <ChatMessageDiv>
              <ChatMessageProfileImg src={imgWedding} />
              <ChatMessageCard>
                <ChatMessageTitle>
                  <ChatMessageProfileName>송영주 플래너</ChatMessageProfileName>
                  <ChatMessageProfileDatetime>오전 9:41</ChatMessageProfileDatetime>
                </ChatMessageTitle>
                <ChatMessage>
                  안녕하세요, 문의 주셔서 감사합니다. 현재 9월부터 예약이 가능하니, 참고 부탁드릴게요 :)
                </ChatMessage>
              </ChatMessageCard>
            </ChatMessageDiv>
            <ChatMessageDiv>
              <ChatMessageProfileImg src={shape} />
              <ChatMessageCard>
                <ChatMessageTitle>
                  <ChatMessageProfileName>홍길동</ChatMessageProfileName>
                  <ChatMessageProfileDatetime>오전 9:41</ChatMessageProfileDatetime>
                </ChatMessageTitle>
                <ChatMessage>감사합니다.</ChatMessage>
              </ChatMessageCard>
            </ChatMessageDiv>
            <SystemMessageDiv>
              <SystemMessage>상담에 만족하셨나요? 플래너 리뷰를 작성하실 수 있습니다.</SystemMessage>
              <a href="/">
                <SystemMessageLink>플래너 리뷰 작성하기</SystemMessageLink>
              </a>
            </SystemMessageDiv>
          </Cell>
        </Row>
      </Page>
    </Container>
  );
};

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

const ChatProfileText = styled.div`
  padding: 4px;
`;

const ChatProfileName = styled.p`
  color: #000000;
  font-family: SpoqaHanSans;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 19px;
  font-weight: bold;
`;

const ChatLastMessageDate = styled.p`
  height: 17px;
  color: #868e96;
  font-family: SpoqaHanSans;
  font-size: 11px;
  letter-spacing: 0;
  line-height: 17px;
  text-align: right;
`;

const ChatLastMessage = styled.p`
  width: 19rem;
  height: 38px;
  color: #868e96;
  font-family: SpoqaHanSans;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 19px;
`;

const ChatMessageDate = styled.p`
  padding: 20px 40px 20px 40px;
  height: 18px;
  color: #495057;
  font-family: SpoqaHanSans;
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
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 18px;
`;

const ChatMessageDiv = styled.div`
  display: flex;
  margin: 0 39px 0 39px;
  height: 80px;
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
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
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

  height: 15px;
  width: 42px;
  color: #495057;
  font-family: SpoqaHanSans;
  font-size: 10px;
  letter-spacing: 0;
  line-height: 15px;
`;

const ChatMessage = styled.p`
  padding-left: 4px;
  color: #000000;
  font-family: SpoqaHanSans;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 19px;
`;

const ChatMessageCard = styled.div``;

const SystemMessageLink = styled.p`
  padding: 0 0 11px 12px;
  color: #212529;
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 18px;
`;
