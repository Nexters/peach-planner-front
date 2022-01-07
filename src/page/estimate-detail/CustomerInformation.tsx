import { Title } from 'src/component/style/style';
import styled from 'styled-components';

interface Props {
  isUser: boolean;
}

const CustomerInformation = ({ isUser }: Props) => {
  return (
    <Container>
      <Title height="24px" width="auto" fontSize="16px" color="#000" lineHeight="normal" margin="8px 0px 8px 0px">
        {isUser ? '내 정보' : '고객 정보'}
      </Title>
      <Row>
        <Key>이름</Key>
        <Value>이수영</Value>
      </Row>
      <Row>
        <Key>이메일</Key>
        <Value>이수영</Value>
      </Row>
      <Row>
        <Key>연락처</Key>
        <Value>이수영</Value>
      </Row>
      <Row>
        <Key>예식 예정일</Key>
        <Value>이수영</Value>
      </Row>
    </Container>
  );
};

export default CustomerInformation;

const Container = styled.div`
  width: 860px;
  height: 240px;
  border-bottom: 1px solid;
  border-bottom-color: #e9ecef;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 860px;
  height: 40px;
`;

const Key = styled.div`
  width: 114px;
  height: 24px;
  color: #868e96;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
`;

const Value = styled.div`
  height: 24px;
  width: auto;
  color: #000;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
`;
