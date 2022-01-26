import { Content } from 'lib/pages/components/style/style';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface Props {
  id: number;
  createdAt: string;
  content: string;
  estimateNumber: number;
  plannerName: string;
  status: string;
}

const MyEstimate = ({ id, createdAt, content, estimateNumber, plannerName, status }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/estimateDetail/${id}`);
  };

  return (
    <Container onClick={handleClick}>
      <EstimateCreatedAtBox>
        <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#495057">
          {new Date(createdAt).toLocaleDateString()}
        </Content>
      </EstimateCreatedAtBox>
      <EstimateContentBox>
        <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#495057">
          {content}
        </Content>
      </EstimateContentBox>
      <EstimateNumberBox>
        <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#495057">
          {estimateNumber}
        </Content>
      </EstimateNumberBox>
      <CompanyBox>
        <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#495057">
          {plannerName}
        </Content>
      </CompanyBox>
      <EstimateStateBox>
        <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#495057">
          {status}
        </Content>
      </EstimateStateBox>
    </Container>
  );
};

export default MyEstimate;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  border-bottom-color: #ced4da;
  align-items: center;
  cursor: pointer;
`;

const EstimateCreatedAtBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 102px;
`;

const EstimateContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 436px;
`;

const EstimateNumberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 102px;
`;

const CompanyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 147px;
`;

const EstimateStateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 73px;
`;
