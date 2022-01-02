import axios from 'axios';
import styled from 'styled-components';
import { FlexDiv } from '../../component/style/style';
import PButton from '../../component/PButton';
import AssociateOrganization from './AssociateOrganization';
import MyProfile from './MyProfile';
import PlannerArea, { allRegions } from './PlannerArea';
import PlannerOfferList, { allOffers } from './PlannerOfferList';
import PlannerCompany from './PlannerCompany';
import ProfileHeader from './ProfileHeader';
import SnsSetting from './SnsSetting';
import UserCertification from './UserCertification';
import UserProfile from './UserProfile';
import { useMutation, useQuery } from 'react-query';
import { getUserMe } from 'src/api/User';
import { AffiliatedCompany, fetchPlannerMe, PlannerRequest, updateProfile } from 'src/api/Planner';
import { useEffect, useState } from 'react';
import { Company } from 'src/api/Company';
import { useHistory } from 'react-router';

export interface ProfileProps {
  isUpdate: boolean;
}

export interface PlannerDescription {
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
  id?: number;
  name: string;
  previewImage: string;
  imageUrl: string;
}

export interface Item {
  value: string;
  display: string;
}

const Profile = ({ isUpdate }: ProfileProps) => {
  const { data: user } = useQuery(['user'], getUserMe);
  const { data: planner } = useQuery(['planner'], fetchPlannerMe);
  const history = useHistory();
  const { mutate, isLoading } = useMutation(updateProfile, {
    onSuccess: (data) => {
      alert(`프로필 ${isUpdate ? '수정' : '등록'}이 완료되었습니다.`);
      history.push('/');
    }
  });

  const [images, setImages] = useState<string[]>([]);
  const [description, setDescription] = useState<PlannerDescription>({
    summary: '',
    description: '',
  });
  const [sns, setSns] = useState<Sns>({ webUrl: '', instagramUrl: '', facebookUrl: '', blogUrl: '' });
  const [regions, setRegions] = useState<Item[]>([]);
  const [offers, setOffers] = useState<Item[]>([]);
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

  const handleRegions = (selectedRegions: Item[]) => {
    setRegions(selectedRegions);
  };

  const handleOffers = (selectedOffers: Item[]) => {
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

  const handleRegister = () => {
    if (description.description === '' || description.summary === '') {
      alert('플래너 한줄 소개와 플래너 소개는 필수 값 입니다.');
      return;
    }
    const affilicatedDress: AffiliatedCompany[] = dresses.map((dress) => {
      return {
        id: dress.id,
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
        id: studio.id,
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
        id: makeUp.id,
        companyName: makeUp.name,
        description: '',
        location: '',
        primaryImageUrl: makeUp.imageUrl,
        tel: '',
        type: 'MAKEUP'
      };
    });

    const request: PlannerRequest = {
      portfolioImages: images,
      affiliatedCompanyInfo: {
        affiliatedCompanyId: company?.id!!
      },
      affiliatedDressCompanyList: affilicatedDress,
      affiliatedStudioCompanyList: affilicatedStudios,
      affiliatedMakeupCompanyList: affilicatedMakeUps,
      areaInfo: {
        locationList: regions.map((value) => value.display)
      },
      myProfile: description,
      snsInfo: {
        externalLinks: {
          blogLink: sns.blogUrl,
          facebookLink: sns.facebookUrl,
          instagramLink: sns.instagramUrl
        },
        webSiteUrl: sns.webUrl
      },
      supportInfo: {
        supportInfoList: offers.map((value) => value.value)
      }
    };
    mutate(request);
  };

  useEffect(() => {
    setImages(planner?.images ?? []);
    const plannerRegions = allRegions.filter((region) => planner?.locations.includes(region.display));
    setRegions(plannerRegions);
    const plannerOffers = allOffers.filter((offer) => planner?.supportInfos.includes(offer.display));
    setOffers(plannerOffers);
    setDescription({
      summary: planner?.summary ?? '',
      description: planner?.summary ?? '',
    });
    setCompany(planner?.company ?? undefined);
    setInputCompanyName(planner?.company?.name ?? '');
    setStudios(planner?.partners?.STUDIO?.map(e => {
      return {
        id: e.id,
        name: e.name,
        previewImage: e.primaryImage,
        imageUrl: e.primaryImage,
      };
    }) ?? []);
    setDresses(planner?.partners?.DRESS?.map(e => {
      return {
        id: e.id,
        name: e.name,
        previewImage: e.primaryImage,
        imageUrl: e.primaryImage,
      };
    }) ?? []);
    setMakeUps(planner?.partners?.MAKEUP?.map(e => {
      return {
        id: e.id,
        name: e.name,
        previewImage: e.primaryImage,
        imageUrl: e.primaryImage,
      };
    }) ?? []);
  }, [planner]);

  return (
    <Container>
      <InnerContainer>
        <ProfileHeader isUpdate={isUpdate}></ProfileHeader>
      </InnerContainer>
      <InnerContainer>
        <FlexDiv width="310px" height="auto" justify="flex-start" align="start" direction="column" margin="0 105px 0 0">
          <UserProfile name={user?.name} type={user?.userType} profileImage={user?.profileImage} />
          {/* TODO 인증 기능 없어서 주석 처리*/}
          {/* <UserCertification></UserCertification> */}
        </FlexDiv>
        <FlexDiv direction="column" margin="0" width="990px">
          <MyProfile
            summary={planner?.summary!!}
            description={planner?.summary!!}
            handleDescription={handleDescription}
            images={images}
            setImages={setImages}
          />
          <SnsSetting
            instagram={planner?.externalLinks?.instagramLink!!}
            blog={planner?.externalLinks?.blogLink!!}
            facebook={planner?.externalLinks?.facebookLink!!}
            handleSns={handleSns}
          />
          <PlannerArea
            plannerRegions={planner?.locations}
            regions={regions}
            handleRegions={handleRegions}
          />
          <PlannerOfferList
            plannerOffers={planner?.supportInfos}
            offers={offers}
            handleOffers={handleOffers}
          />
          <PlannerCompany
            defaultCompanyName={planner?.company?.name!!}
            companyName={inputCompanyName}
            handleCompanyName={handleCompanyName}
            handleCompanyItem={handleCompany}
          />
          <AssociateOrganization
            id="studio"
            name="스튜디오"
            margin="0 0 72px 0"
            stores={studios}
            setStores={setStudios}
          />
          <AssociateOrganization
            id="dress"
            name="드레스"
            margin="0 0 72px 0"
            stores={dresses}
            setStores={setDresses}
          />
          <AssociateOrganization
            id="makeup"
            name="메이크업"
            margin="0 0 24px 0"
            stores={makeUps}
            setStores={setMakeUps}
          />
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
