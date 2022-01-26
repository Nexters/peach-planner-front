import { useQuery } from 'react-query';
import { fetchPlannerMyEstimations } from 'lib/api/Planner';
import { Title } from 'lib/pages/components/style/style';
import styled from 'styled-components';
import PlannerPageSideMenu from 'lib/pages/planner-mypage/PlannerPageSideMenu';
import Estimate from 'lib/pages/planner-my-estimate/Estimate';

const PlannerMyEstimate = () => {
  const { data: myEstimations } = useQuery('planner/my/estimations', fetchPlannerMyEstimations);

  return (
    <Container>
      <InnerContainer>
        <PlannerPageSideMenu></PlannerPageSideMenu>
        <ContentContainer>
          <TitleBox>
            <Title height="27px" fontSize="18px" lineHeight="normal" color="#000000">
              나의 견적서
            </Title>
          </TitleBox>
          <TableHeader>
            <RequestDay>
              <Title height="18px" fontSize="12px" lineHeight="normal" color="#212529">
                요청일
              </Title>
            </RequestDay>
            <CustomerName>
              <Title height="18px" fontSize="12px" lineHeight="normal" color="#212529">
                요청일
              </Title>
            </CustomerName>
            <RequestContent>
              <Title height="18px" fontSize="12px" lineHeight="normal" color="#212529">
                요청 사항
              </Title>
            </RequestContent>
          </TableHeader>
          {myEstimations?.content.map((estimation, index) => {
            return (
              <Estimate
                key={index}
                id={estimation.id}
                requestDay={new Date(estimation.createDate).toLocaleDateString()}
                customerName={estimation.userName}
                requestContent={estimation.description}
              ></Estimate>
            );
          })}
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
};

export default PlannerMyEstimate;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  margin-left: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 860px;
  height: 56px;
`;

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 860px;
  height: 34px;
  margin-top: 1px;
  border-top: 1px solid;
  border-top-color: #ced4da;
  border-bottom: 1px solid;
  border-bottom-color: #ced4da;
`;

const RequestDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 102px;
  height: 34px;
`;

const CustomerName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 34px;
`;

const RequestContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 609px;
  height: 34px;
  margin-left: 10px;
`;
