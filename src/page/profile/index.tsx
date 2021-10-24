import styled from 'styled-components';
import { FlexDiv } from '../../component/style/style';
import PButton from '../../component/PButton';
import AssociateOrganization from './AssociateOrganization';
import MyProfile from './MyProfile';
import PlannerArea from './PlannerArea';
import PlannerOfferList from './PlannerOfferList';
import PlannerCompany from './PlannerCompany';
import ProfileHeader from './ProfileHeader';
import SnsSetting from './SnsSetting';
import UserCertification from './UserCertification';
import UserProfile from './UserProfile';
import { useMutation, useQuery } from 'react-query';
import { getUser } from 'src/api/User';
import { AffiliatedCompany, PlannerRequest, updateProfile } from 'src/api/Planner';
import { useEffect, useState } from 'react';
import { Company } from 'src/api/Company';

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

export interface Offer {
  value: string;
  display: string;
}

const Profile = ({ isUpdate }: ProfileProps) => {
  const { data: user } = useQuery(['user'], getUser);
  const { mutate, isLoading } = useMutation(updateProfile, {
    onSuccess: (data) => {}
  });
  const [description, setDescription] = useState<PlannerDescription>({ summary: '', description: '' });
  const [sns, setSns] = useState<Sns>({ webUrl: '', instagramUrl: '', facebookUrl: '', blogUrl: '' });
  const [regions, setRegions] = useState<string[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [company, setCompany] = useState<Company>();
  const [inputCompanyName, setInputCompanyName] = useState('');
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

  const handleOffers = (selectedOffers: Offer[]) => {
    setOffers(selectedOffers);
  };

  const handleCompany = (company: Company) => {
    setCompany(company);
  };

  const handleCompanyName = (e: any) => {
    let value;
    if (typeof e !== 'string') {
      value = e.target.value;
    } else {
      value = e;
    }
    setInputCompanyName(value);
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

  const handleRegister = () => {
    const affilicatedDress: AffiliatedCompany[] = dresses.map((dress) => {
      return {
        companyName: dress.name,
        description: '',
        location: '',
        primaryImageUrl: dress.imageUrl,
        tel: '',
        type: 'DRESS'
      };
    });
    const affilicatedStudios: AffiliatedCompany[] = studios.map((studio) => {
      return {
        companyName: studio.name,
        description: '',
        location: '',
        primaryImageUrl: studio.imageUrl,
        tel: '',
        type: 'STUDIO'
      };
    });
    const affilicatedMakeUps: AffiliatedCompany[] = makeUps.map((makeUp) => {
      return {
        companyName: makeUp.name,
        description: '',
        location: '',
        primaryImageUrl: makeUp.imageUrl,
        tel: '',
        type: 'MAKEUP'
      };
    });

    const request: PlannerRequest = {
      affiliatedCompanyInfoDTO: {
        affiliatedCompanyId: company?.id!!
      },
      affiliatedDressCompanyList: affilicatedDress,
      affiliatedStudioCompanyList: affilicatedStudios,
      affiliatedMakeupCompanyList: affilicatedMakeUps,
      areaInfoDTO: {
        locationList: regions
      },
      myProfileDTO: description,
      snsInfoDTO: {
        externalLinks: {
          blogLink: sns.blogUrl,
          facebookLink: sns.facebookUrl,
          instagramLink: sns.instagramUrl
        },
        webSiteUrl: sns.webUrl
      },
      supportInfoDTO: {
        supportInfoList: offers.map((value) => value.value)
      }
    };
    mutate(request);
  };

  return (
    <Container>
      <InnerContainer>
        <ProfileHeader isUpdate={isUpdate}></ProfileHeader>
      </InnerContainer>
      <InnerContainer>
        <FlexDiv width="310px" height="auto" justify="flex-start" align="start" direction="column" margin="0 105px 0 0">
          <UserProfile name={user?.name} type={user?.userType}></UserProfile>
          {/* TODO 인증 기능 없어서 주석 처리*/}
          {/* <UserCertification></UserCertification> */}
        </FlexDiv>
        <FlexDiv direction="column" margin="0" width="990px">
          <MyProfile handleDescription={handleDescription}></MyProfile>
          <SnsSetting handleSns={handleSns}></SnsSetting>
          <PlannerArea regions={regions} handleRegions={handleRegions}></PlannerArea>
          <PlannerOfferList offers={offers} handleOffers={handleOffers}></PlannerOfferList>
          <PlannerCompany
            companyName={inputCompanyName}
            handleCompanyName={handleCompanyName}
            handleCompanyItem={handleCompany}
          ></PlannerCompany>
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
            <PButton
              color="pink"
              fontSize="14px"
              height="40px"
              width="312px"
              fontWeight="bold"
              onClick={handleRegister}
            >
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
