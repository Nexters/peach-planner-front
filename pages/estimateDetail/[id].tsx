import { useUserTypeState } from 'lib/atoms/AuthStatus';
import styled from 'styled-components';
import PlannerPageSideMenu from 'lib/pages/planner-mypage/PlannerPageSideMenu';
import UserPageSideMenu from 'lib/pages/user-mypage/UserPageSideMenu';
import Company from 'lib/pages/estimate-detail/Company';
import CustomerInformation from 'lib/pages/estimate-detail/CustomerInformation';
import Header from 'lib/pages/estimate-detail/Header';
import Planner from 'lib/pages/estimate-detail/Planner';
import File from 'lib/pages/estimate-detail/File';
import Message from 'lib/pages/estimate-detail/Message';
import Requirement from 'lib/pages/estimate-detail/Requirement';
import { useQuery } from 'react-query';
import { fetchEstimate } from 'lib/api/Estimate';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  const id = router.query.id as string;
  const [userTypeState, _] = useUserTypeState();
  const { data: estimateDetail } = useQuery(['estimateDetail', id], fetchEstimate);

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
