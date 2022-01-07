import { Title } from 'src/component/style/style';
import styled from 'styled-components';

const Requirement = () => {
  return (
    <Container>
      <Title height="24px" width="auto" fontSize="16px" color="#000" lineHeight="normal" margin="8px 0px 8px 0px">
        요청사항
      </Title>
      <Row>
        <Content>A스튜디오일 때와 B스튜디오일 때 가격이 궁금해요.</Content>
      </Row>
    </Container>
  );
};

export default Requirement;

const Container = styled.div`
  width: 860px;
  height: 120px;
  border-bottom: 1px solid;
  border-bottom-color: #e9ecef;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 860px;
  height: 40px;
`;

const Content = styled.div`
  height: 24px;
  width: auto;
  color: #000;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
`;
