import { Title } from 'src/component/style/style';
import styled from 'styled-components';

interface Props {
  studio: string;
  dress: string;
  makeup: string;
  weddingCard: boolean;
  weddingHall: boolean;
}

const Company = ({ studio, dress, makeup, weddingCard, weddingHall }: Props) => {
  return (
    <Container>
      <Title height="24px" width="auto" fontSize="16px" color="#000" lineHeight="normal" margin="8px 0px 8px 0px">
        업체 선택
      </Title>
      <Row>
        <Key>스튜디오</Key>
        <Value>{studio}</Value>
      </Row>
      <Row>
        <Key>드레스</Key>
        <Value>{dress}</Value>
      </Row>
      <Row>
        <Key>메이크업</Key>
        <Value>{makeup}</Value>
      </Row>
      <Row>
        <Key>웨딩홀</Key>
        <Value>{weddingHall ? 'O' : 'X'}</Value>
      </Row>
      <Row>
        <Key>모바일청첩장</Key>
        <Value>{weddingCard ? 'O' : 'X'}</Value>
      </Row>
    </Container>
  );
};

export default Company;

const Container = styled.div`
  width: 860px;
  height: 280px;
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
