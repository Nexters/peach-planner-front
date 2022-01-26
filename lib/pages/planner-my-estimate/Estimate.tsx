import { Content } from 'lib/pages/components/style/style';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface Props {
  id: number;
  requestDay: string;
  customerName: string;
  requestContent: string;
}

const Estimate = ({ id, requestDay, customerName, requestContent }: Props) => {
  const history = useRouter();

  const handleClick = () => {
    history.push(`/estimateDetail/${id}`);
  };

  return (
    <Container onClick={handleClick}>
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
  cursor: pointer;
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
