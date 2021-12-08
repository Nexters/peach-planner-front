import { Content } from 'src/component/style/style';
import styled from 'styled-components';

interface Props {
  requestDay: string;
  customerName: string;
  requestContent: string;
}

const Estimate = ({ requestDay, customerName, requestContent }: Props) => {
  return (
    <Container>
      <RequestDayBox>
        <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#495057">
          {requestDay}
        </Content>
      </RequestDayBox>
      <CustomerNameBox>
        <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#495057">
          {customerName}
        </Content>
      </CustomerNameBox>
      <RequestContentBox>
        <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#495057">
          {requestContent}
        </Content>
      </RequestContentBox>
    </Container>
  );
};

export default Estimate;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  border-bottom-color: #ced4da;
`;

const RequestDayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 102px;
  height: 64px;
`;

const CustomerNameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 64px;
`;

const RequestContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 609px;
  height: 64px;
  margin-left: 10px;
`;
