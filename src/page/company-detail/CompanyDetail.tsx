import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useRouteMatch } from 'react-router';
import { useQuery } from 'react-query';
import { Company, fetchCompany } from '../../api/Company';
import { PickRequest, pick } from 'src/api/Pick';
import PButton from 'src/component/PButton';
import EmptyHeart from '../../assets/svg/ic_heart_black.svg';
import FullHeart from '../../assets/svg/ic_heart.svg';
import Map from '../../assets/svg/ic_map.svg';
import Call from '../../assets/svg/ic_call.svg';
import DefaultBigImage from '../../assets/svg/img_defult_wedding.svg';
import DefaultImage from '../../assets/svg/img_photo_default.svg';
import ImageModal from '../planner-detail/ImageModal';
import Container from '../planner-detail/Container';
import axios from 'axios';

interface routeProps {
  id: string;
}

const CompanyDetail = () => {
  const [companyInfo, setCompanyInfo] = useState<Company | null>(null);
  const history = useHistory();
  const { params } = useRouteMatch<routeProps>();
  const companyId = params.id;

  // const { data: companyInfo, error } = useQuery(['company', companyId], () => fetchCompany(companyId));

  const [selected, setSelected] = useState<boolean>(false);
  const [showImageModal, setShowImageModal] = useState<boolean>(false);

  const fetchCompany = () => {
    axios
      .get(`/companies/${companyId}`)
      .then((response) => {
        setCompanyInfo({ ...response.data });
      })
      .catch((err) => {
        history.push('/');
      });
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  const pickCompany = () => {
    pick({ targetCategoryType: 'COMPANY', targetId: parseInt(companyId), toBePick: !selected } as PickRequest);
    setSelected((selected) => !selected);
  };

  const openImageModal = () => setShowImageModal(true);
  const closeImageModal = () => setShowImageModal(false);

  const copyLocation = () => {
    if (!companyInfo) {
      return;
    }
    navigator.clipboard.writeText(companyInfo?.location);
  };

  return companyInfo ? (
    <OuterContainer>
      <TopContainer>
        <Title>{companyInfo.name}</Title>
        <div>
          <PButton onClick={pickCompany} otherBgColor="#f1f3f5" border="none">
            <Vertical>
              <img src={selected ? FullHeart : EmptyHeart} />
            </Vertical>{' '}
            <Vertical>찜하기</Vertical>
          </PButton>
        </div>
      </TopContainer>
      <Information>
        <InformationElement>
          <Vertical>
            <img src={Map} />
          </Vertical>{' '}
          <Vertical>{companyInfo.location}</Vertical>
          <CopyLocation onClick={copyLocation}>복사</CopyLocation>
        </InformationElement>
        <InformationElement>
          <Vertical>
            <img src={Call} />
          </Vertical>{' '}
          <Vertical>{companyInfo.tel}</Vertical>
        </InformationElement>
      </Information>
      <ImageOuterContainer>
        <ImageContainer>
          {companyInfo.images.length == 0 ? <img src={DefaultBigImage} /> : <BigImage src={companyInfo.images[0]} />}
          <ImageWrapper>
            {companyInfo.images.slice(1, 3).map((image, i) => (
              <SmallImage src={image} key={i} />
            ))}
            {companyInfo.images.length <= 1 && <Image src={DefaultImage} />}
            {companyInfo.images.length <= 2 && <Image src={DefaultImage} />}
          </ImageWrapper>
        </ImageContainer>
        <ImageModal showImageModal={showImageModal} closeImageModal={closeImageModal} imageList={companyInfo.images} />
        {companyInfo.images.length != 0 && <ShowImageButton onClick={openImageModal}>사진 모두 보기</ShowImageButton>}
      </ImageOuterContainer>
      <Container title="업체 정보">{companyInfo.summary ? companyInfo.summary : '업체 정보가 없습니다.'}</Container>
    </OuterContainer>
  ) : (
    <></>
  );
};

export default CompanyDetail;

const OuterContainer = styled.div`
  width: 860px;
  margin: 40px auto 0 auto;
`;

const ImageOuterContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Information = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: #495057;
`;

const InformationElement = styled.div`
  margin-bottom: 11px;
`;

const CopyLocation = styled.span`
  cursor: pointer;
  vertical-align: middle;
  display: inline-block;
  margin-left: 5px;
`;

const Vertical = styled.div`
  vertical-align: middle;
  display: inline-block;
  color: #868e96;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ShowImageButton = styled.button`
  cursor: pointer;
  border-radius: 3px;
  width: 97px;
  height: 31px;
  padding: 0px;
  font-size: 12px;
  border: none;
  background-color: white;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 19.5px;
`;

const BigImage = styled.img`
  width: 641px;
  height: 430px;
  object-fit: contain;
  flex: 3;
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

const SmallImage = styled.img`
  // width: 211px;
  // height: 211px;
  // flex: 1;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 211px;
  height: 211px;
  border-radius: 10px;
  & + & {
    margin-top: 8px;
  }
`;
