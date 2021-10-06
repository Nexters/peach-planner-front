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
import { useMutation, useQuery } from 'react-query';
import { getUser } from 'src/api/User';
import { PlannerRequest, updateProfile } from 'src/api/Planner';
import { useEffect, useState } from 'react';

export interface ProfileProps {
  isUpdate: boolean;
}
interface PlannerDescription {
  summary: string;
  description: string;
}

interface Sns {
  webUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  blogUrl: string;
}

export interface SupportStore {
  name: string;
  previewImage: string;
  imageUrl: string;
}

const Profile = ({ isUpdate }: ProfileProps) => {
  const { data: user } = useQuery(['getUser'], getUser);
  const { mutate, isLoading } = useMutation(updateProfile, {
    onSuccess: (data) => {}
  });
  const [description, setDescription] = useState<PlannerDescription>({ summary: '', description: '' });
  const [sns, setSns] = useState<Sns>({ webUrl: '', instagramUrl: '', facebookUrl: '', blogUrl: '' });
  const [regions, setRegions] = useState<string[]>([]);
  const [offers, setOffers] = useState<string[]>([]);
  const [orgName, setOrgName] = useState('');
  const [studios, setStudios] = useState<SupportStore[]>([]);
  const [dresses, setDresses] = useState<SupportStore[]>([]);
  const [makeUps, setMakeUps] = useState<SupportStore[]>([]);

  const handleDescription = (e: any) => {
    const id = e.target.name;
    const value = e.target.value;
    setDescription({
      ...description,
      [id]: value
    });
  };

  const handleSns = (e: any) => {
    const id = e.target.name;
    const value = e.target.value;
    setSns({
      ...sns,
      [id]: value
    });
  };

  const handleRegions = (selectedRegions: string[]) => {
    setRegions(selectedRegions);
  };

  const handleOffers = (selectedOffers: string[]) => {
    setOffers(selectedOffers);
  };

  const handleOrgName = (e: any) => {
    const value = e.target.value;
    setOrgName(value);
  };

  const handleStudio = (studio: SupportStore) => {
    studios.push(studio);
    setStudios(studios);
  };

  const handleDress = (dress: SupportStore) => {
    dresses.push(dress);
    setDresses(dresses);
  };

  const handleMakeUp = (makeUp: SupportStore) => {
    makeUps.push(makeUp);
    setMakeUps(makeUps);
  };

  const handleSubmit = () => {
    // mutate(request);
  };

  useEffect(() => {
    console.log(`스튜디오: ${studios}`);
    console.log(`드레스: ${dresses}`);
    console.log(`메이크업: ${makeUps}`);
  });

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
          <MyProfile handleDescription={handleDescription}></MyProfile>
          <SnsSetting handleSns={handleSns}></SnsSetting>
          <PlannerArea regions={regions} handleRegions={handleRegions}></PlannerArea>
          <PlannerOfferList offers={offers} handleOffers={handleOffers}></PlannerOfferList>
          <PlannerOrganization handleOrgName={handleOrgName}></PlannerOrganization>
          <AssociateOrganization
            id="studio"
            name="스튜디오"
            margin="0 0 72px 0"
            handleStores={handleStudio}
          ></AssociateOrganization>
          <AssociateOrganization
            id="dress"
            name="드레스"
            margin="0 0 72px 0"
            handleStores={handleDress}
          ></AssociateOrganization>
          <AssociateOrganization
            id="makeup"
            name="메이크업"
            margin="0 0 24px 0"
            handleStores={handleMakeUp}
          ></AssociateOrganization>
          <FlexDiv direction="row" margin="0 0 320px 48px" justify="flex-start">
            <PButton color="pink" fontSize="14px" height="40px" width="312px" fontWeight="bold">
              {isUpdate ? '수정하기' : '등록하기'}
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
