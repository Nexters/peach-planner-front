import styled from 'styled-components';
import { FlexDiv } from '../../component/style/style';
import PButton from '../../component/PButton';
import AssociateOrganization from './AssociateOrganization';
import MyProfile from './MyProfile';
import PlannerArea from './PlannerArea';
import PlannerOfferList from './PlannerOfferList';
import PlannerOrganization from './PlannerOrganization';
import ProfileHeader from './ProfileHeader';
import SnsSetting from './SnsSetting';
import UserCertification from './UserCertification';
import UserProfile from './UserProfile';

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
          <UserCertification></UserCertification>
        </FlexDiv>
        <FlexDiv direction="column" margin="0" width="990px">
          <MyProfile></MyProfile>
          <SnsSetting></SnsSetting>
          <PlannerArea></PlannerArea>
          <PlannerOfferList></PlannerOfferList>
          <PlannerOrganization></PlannerOrganization>
          <AssociateOrganization name="스튜디오" margin="0 0 72px 0"></AssociateOrganization>
          <AssociateOrganization name="드레스" margin="0 0 72px 0"></AssociateOrganization>
          <AssociateOrganization name="메이크업" margin="0 0 24px 0"></AssociateOrganization>
          <FlexDiv direction="row" margin="0 0 320px 48px" justify="flex-start">
            <PButton color="pink" fontSize="14px" height="40px" width="312px" fontWeight="bold">
              수정하기
            </PButton>
          </FlexDiv>
        </FlexDiv>
      </InnerContainer>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  margin: 16px auto;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 1100px;
  margin: 0 auto;
`;
