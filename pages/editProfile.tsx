import axios from 'axios';
import styled from 'styled-components';
import { FlexDiv } from 'lib/pages/components/style/style';
import PButton from 'lib/pages/components/PButton';
import AssociateOrganization from 'lib/pages/profile-edit/AssociateOrganization';
import MyProfile from 'lib/pages/profile-edit/MyProfile';
import PlannerArea, { allRegions } from 'lib/pages/profile-edit/PlannerArea';
import PlannerOfferList, { allOffers } from 'lib/pages/profile-edit/PlannerOfferList';
import PlannerCompany from 'lib/pages/profile-edit/PlannerCompany';
import ProfileHeader, { ProfileProps } from 'lib/pages/profile-edit/ProfileHeader';
import SnsSetting from 'lib/pages/profile-edit/SnsSetting';
import UserProfile from 'lib/pages/profile-edit/UserProfile';
import { useMutation, useQuery } from 'react-query';
import { getUserMe } from 'lib/api/User';
import { AffiliatedCompany, fetchPlannerMe, PlannerRequest, updateProfile } from 'lib/api/Planner';
import { useEffect, useState } from 'react';
import { Company } from 'lib/api/Company';
import { useRouter } from 'next/router';
import { Item } from 'lib/pages/profile-edit/interface/item';
import { PlannerDescription } from 'lib/pages/profile-edit/interface/planner-description';
import { SupportStore } from 'lib/pages/profile-edit/interface/support-store';


interface Sns {
  websiteUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  blogUrl: string;
}

// isUpdate = true
export default ({ isUpdate }: ProfileProps) => {
  const { data: user } = useQuery(['user'], getUserMe);
  const { data: planner } = useQuery(['planner'], fetchPlannerMe);
  const history = useRouter();
  const { mutate, isLoading } = useMutation(updateProfile, {
    onSuccess: (data) => {
      alert(`프로필 ${isUpdate ? '수정' : '등록'}이 완료되었습니다.`);
      history.back();
    }
  });

  const [images, setImages] = useState<string[]>([]);
  const [description, setDescription] = useState<PlannerDescription>({
    summary: '',
    description: '',
  });
  const [sns, setSns] = useState<Sns>({ websiteUrl: '', instagramUrl: '', facebookUrl: '', blogUrl: '' });
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
    const affilicatedDress: number[] = dresses.map((dress) => dress.id);
    const affilicatedStudios: number[] = studios.map((studio) => studio.id);
    const affilicatedMakeUps: number[] = makeUps.map((makeUp) => makeUp.id);

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
        websiteLink: sns.websiteUrl,
        blogLink: sns.blogUrl ? `https://blog.naver.com/${sns.blogUrl}` : '',
        facebookLink: sns.facebookUrl ? `https://facebook.com/${sns.facebookUrl}` : '',
        instagramLink: sns.instagramUrl ? `https://www.instagram.com/${sns.instagramUrl}` : '',
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
    setSns({ 
      websiteUrl: planner?.externalLinks?.websiteLink ?? '', 
      instagramUrl: planner?.externalLinks?.instagramLink?.replace("https://www.instagram.com/", '') ?? '', 
      blogUrl: planner?.externalLinks?.blogLink?.replace("https://blog.naver.com/", '') ?? '', 
      facebookUrl: planner?.externalLinks?.facebookLink?.replace("https://facebook.com/", '') ?? '', 
    })
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
            website={planner?.externalLinks?.websiteLink ?? ''}
            instagram={planner?.externalLinks?.instagramLink?.replace("https://www.instagram.com/", '') ?? ''}
            blog={planner?.externalLinks?.blogLink?.replace("https://blog.naver.com/", '') ?? ''}
            facebook={planner?.externalLinks?.facebookLink?.replace("https://facebook.com/", '') ?? ''}
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
            type="STUDIO"
            margin="0 0 72px 0"
            stores={studios}
            setStores={setStudios}
          />
          <AssociateOrganization
            id="dress"
            name="드레스"
            type="DRESS"
            margin="0 0 72px 0"
            stores={dresses}
            setStores={setDresses}
          />
          <AssociateOrganization
            id="makeup"
            name="메이크업"
            type="MAKEUP"
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

const Container = styled.div`
  margin: 16px auto;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 1100px;
  margin: 0 auto;
`;
