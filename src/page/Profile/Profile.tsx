import styled from 'styled-components';
import { FlexDiv } from '../../component/CommonStyle/style';
import Footer from '../common/Footer';
import MyProfile from './component/MyProfile';
import PlannerArea from './component/PlannerArea';
import PlannerOfferList from './component/PlannerOfferList';
import PlannerOrganization from './component/PlannerOrganization';
import ProfileHeader from './component/ProfileHeader';
import SnsSetting from './component/SnsSetting';
import UserAthentication from './component/UserAthentication';
import UserProfile from './component/UserProfile';

export interface ProfileProps {
  isUpdate: boolean;
}

const Profile = ({ isUpdate }: ProfileProps) => {
  return (
    <Container>
      <InnerContainer>
        <ProfileHeader isUpdate={isUpdate}></ProfileHeader>
      </InnerContainer>
      <InnerContainer>
        <FlexDiv width="310px" height="auto" justify="flex-start" align="start" direction="column" margin="0 105px 0 0">
          <UserProfile></UserProfile>
          <UserAthentication></UserAthentication>
        </FlexDiv>
        <FlexDiv direction="column" margin="0" width="990px">
          <MyProfile></MyProfile>
          <SnsSetting></SnsSetting>
          <PlannerArea></PlannerArea>
          <PlannerOfferList></PlannerOfferList>
          <PlannerOrganization></PlannerOrganization>
        </FlexDiv>
      </InnerContainer>
      <FlexDiv margin="0">
        <Footer></Footer>
      </FlexDiv>
    </Container>
  );
};

const Container = styled.div``;

const InnerContainer = styled.div`
  display: flex;
  width: 1100px;
  margin: 0 auto;
`;

export default Profile;
