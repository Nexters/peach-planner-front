import { useUserTypeState } from 'src/atoms/AuthStatus';
import styled from 'styled-components';
import PlannerPageSideMenu from '../user/mypage/PlannerPageSideMenu';
import UserPageSideMenu from '../user/mypage/UserPageSideMenu';
import Company from './Company';
import CustomerInformation from './CustomerInformation';
import Header from './Header';
import Planner from './Planner';
import File from './File';
import Message from './Message';
import Requirement from './Requirement';
import { useQuery } from 'react-query';
import { useRouteMatch } from 'react-router';
import { fetchEstimate } from 'src/api/Estimate';

interface routeProps {
  id: string;
}

const EstimateDetail = () => {
  const { params } = useRouteMatch<routeProps>();
  const [userTypeState, _] = useUserTypeState();
  const { data: estimateDetail } = useQuery(['estimateDetail', params.id], fetchEstimate);

  return (
    <Container>
      <InnerContainer>
        {userTypeState === 'USER' ? <UserPageSideMenu /> : <PlannerPageSideMenu />}
        <ContentContainer>
          <Header isUser={userTypeState === 'USER'}></Header>
          {userTypeState === 'USER' ? (
            <Planner
              plannerImage={estimateDetail?.planner?.profileImage!}
              plannerName={estimateDetail?.planner?.name!}
              companyName={estimateDetail?.planner?.company?.name!}
            />
          ) : (
            <></>
          )}
          <CustomerInformation
            isUser={userTypeState === 'USER'}
            name={estimateDetail?.userName!}
            email={estimateDetail?.email!}
            phoneNumber={estimateDetail?.phoneNum!}
            weddingDate={estimateDetail?.weddingDate!}
          />
          <Company
            studio={estimateDetail?.studio!}
            dress={estimateDetail?.dress!}
            makeup={estimateDetail?.makeup!}
            weddingHall={estimateDetail?.weddingHall!}
            weddingCard={estimateDetail?.weddingCard!}
          />
          <Requirement requirement={estimateDetail?.description!} />
          <File filePaths={estimateDetail?.filePath!} />
          <Message isUser={userTypeState === 'USER'} />
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
};

export default EstimateDetail;

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
