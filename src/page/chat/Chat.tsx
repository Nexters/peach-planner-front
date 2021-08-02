import { Title } from 'src/component/style/style';
import styled from 'styled-components';
import shape from 'src/images/Shape 2.png';

export default () => {
  return (
    <Container>
      <Page>
        <Row>
          <Cell width="35%">
            <Title height="27px" width="auto" fontSize="18px" lineHeight="27px" padding='24px 0 24px 16px'>
              메시지
            </Title>
          </Cell>
          <Cell width="65%">
            <Title height="20px" width="auto" fontSize="14px" lineHeight="20px" padding='24px 0 24px 16px'>
              송영주 플래너
            </Title>
          </Cell>
        </Row>

        <Row height="60vh">
          <Cell width="35%">
            <ChatCard>
              <ChatProfileImg src={shape} />
              <ChatProfileText>
                <ChatProfileLine>
                  <ChatProfileName>A 플래너</ChatProfileName>
                  <ChatLastMessageDate>2021.07.13</ChatLastMessageDate>
                </ChatProfileLine>
                <ChatLastMessage>안녕하세요, 문의 주셔서 감사합니다. 현재 9월부터 예약이 가능하니, 참고 부탁드릴게요 :) </ChatLastMessage>
              </ChatProfileText>
            </ChatCard>
            <ChatCard selected={true}>
              <ChatProfileImg src={shape} />
              <ChatProfileText>
                <ChatProfileLine>
                  <ChatProfileName>송영주 플래너</ChatProfileName>
                  <ChatLastMessageDate>2021.07.13</ChatLastMessageDate>
                </ChatProfileLine>
                <ChatLastMessage>안녕하세요, 문의 주셔서 감사합니다. 현재 9월부터 예약이 가능하니, 참고 부탁드릴게요 :) </ChatLastMessage>
              </ChatProfileText>
            </ChatCard>
            <ChatCard>
              <ChatProfileImg src={shape} />
              <ChatProfileText>
                <ChatProfileLine>
                  <ChatProfileName>B 플래너</ChatProfileName>
                  <ChatLastMessageDate>2021.07.13</ChatLastMessageDate>
                </ChatProfileLine>
                <ChatLastMessage>안녕하세요, 문의 주셔서 감사합니다. 현재 9월부터 예약이 가능하니, 참고 부탁드릴게요 :) </ChatLastMessage>
              </ChatProfileText>
            </ChatCard>
            <ChatCard>
              <ChatProfileImg src={shape} />
              <ChatProfileText>
                <ChatProfileLine>
                  <ChatProfileName>C 플래너</ChatProfileName>
                  <ChatLastMessageDate>2021.07.13</ChatLastMessageDate>
                </ChatProfileLine>
                <ChatLastMessage>안녕하세요, 문의 주셔서 감사합니다. 현재 9월부터 예약이 가능하니, 참고 부탁드릴게요 :) </ChatLastMessage>
              </ChatProfileText>
            </ChatCard>
          </Cell>
          <Cell width="65%">
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
  border-color: #D8D8D8;
`;

interface ChatCardProps {
  selected?: boolean;
}

const ChatCard = styled.div<ChatCardProps>`
  display: flex;
  margin: 8px 8px 8px 8px;
  height: 76px;
  border-radius: 8px;
  background-color: ${(props: ChatCardProps) => props.selected ? '#F1F3F5' : 'inherit'};
`;

const ChatProfileImg = styled.img`
  width: 40px;
  height: 40px;
  padding: 8px;
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
  color: #868E96;
  font-family: SpoqaHanSans;
  font-size: 11px;
  letter-spacing: 0;
  line-height: 17px;
  text-align: right;
`;

const ChatLastMessage = styled.p`
  height: 38px;
  color: #868E96;
  font-family: SpoqaHanSans;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 19px;
`;