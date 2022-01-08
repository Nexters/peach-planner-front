import axios from 'axios';
import { useHistory } from 'react-router';
import PButton from 'src/component/PButton';
import styled from 'styled-components';

interface Props {
  isUser: boolean;
}

const Message = ({ isUser }: Props) => {
  const history = useHistory();
  const handleChat = () => {
    history.push('/chats');
  };

  return (
    <Container>
      <Content>
        {isUser
          ? '견적서 전달이 완료되었습니다. 1:1 메시지를 확인해 주세요.'
          : '견적서 요청을 확인하셨나요?<br></br> 1:1 메시지에서 고객에게 답변해 보세요.'}
      </Content>
      <InnerContainer>
        <PButton color="pink" onClick={handleChat} width="176px" height="44px" margin="22px 0px 0px 0px">
          1:1 문의하기
        </PButton>
      </InnerContainer>
    </Container>
  );
};

export default Message;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 860px;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  height: 42px;
  width: auto;
  color: #000;
  font-size: 14px;
  letter-spacing: 0;
  text-align: center;
  line-height: normal;
  margin: 40px 0px 0px 0px;
`;
