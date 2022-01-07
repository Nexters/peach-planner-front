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

const EstimateDetail = () => {
  const [userTypeState, _] = useUserTypeState();

  return (
    <Container>
      <InnerContainer>
        {userTypeState === 'USER' ? <UserPageSideMenu></UserPageSideMenu> : <PlannerPageSideMenu></PlannerPageSideMenu>}
        <ContentContainer>
          <Header></Header>
          {userTypeState === 'USER' ? <Planner></Planner> : <></>}
          <CustomerInformation isUser={userTypeState === 'USER'}></CustomerInformation>
          <Company></Company>
          <Requirement></Requirement>
          <File></File>
          <Message id={1} isUser={userTypeState === 'USER'}></Message>
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
