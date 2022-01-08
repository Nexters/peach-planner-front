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
import { FaHome, FaPhone, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { MdHome, MdHomeFilled } from 'react-icons/md';

interface routeProps {
  id: string;
}

const CompanyDetail = () => {
  const [companyInfo, setCompanyInfo] = useState<Company | null>(null);
  const history = useHistory();
  const { params } = useRouteMatch<routeProps>();
  const companyId = params.id;

  const [selected, setSelected] = useState<boolean>(false);
  const [showImageModal, setShowImageModal] = useState<boolean>(false);

  const fetchCompany = () => {
    axios
      .get(`/companies/${companyId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then((response) => {
        setCompanyInfo({ ...response.data });
        setSelected(response.data.pick ?? false);
      })
      .catch((err) => {
        history.push('/');
      });
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  const openImageModal = () => setShowImageModal(true);
  const closeImageModal = () => setShowImageModal(false);


  const copy = (text: string) => {
    if (!text) {
      return;
    }
    navigator.clipboard.writeText(text);
  };

  return companyInfo ? (
    <OuterContainer>
      <ImageOuterContainer>
        <ImageContainer>
          {companyInfo.images.length == 0 ? <img src={DefaultBigImage} /> : <BigImage src={companyInfo.images[0]} />}
        </ImageContainer>
        {companyInfo.images.length != 0 && <ShowImageButton onClick={openImageModal}>사진 모두 보기</ShowImageButton>}
        <ImageModal showImageModal={showImageModal} closeImageModal={closeImageModal} imageList={companyInfo.images} />
      </ImageOuterContainer>
      <TopContainer>
        <Title>{companyInfo.name}</Title>
        <Information>
          <InformationElement>
            <Vertical>
              <div style={{
                margin: "3px 5px 2px 0",
                padding: "2.4px 2.4px 2.4px 2.4px",
              }}>
                <FaPhoneAlt size={16} />
              </div>
            </Vertical>{' '}
            <Vertical>{companyInfo.tel}</Vertical>
            <CopyLocation onClick={() => copy(companyInfo?.tel)}>복사</CopyLocation>
          </InformationElement>
          <InformationElement>
            <Vertical>
              <div style={{
                margin: "3px 5px 2px 0",
                padding: "2.4px 2.4px 2.4px 2.4px",
              }}>
                <FaMapMarkerAlt size={16} />
              </div>
            </Vertical>{' '}
            <Vertical>{companyInfo.location}</Vertical>
            <CopyLocation onClick={() => copy(companyInfo?.location)}>복사</CopyLocation>
          </InformationElement>
          <InformationElement>
            <Vertical>
              <div style={{
                margin: "3px 5px 2px 0",
                padding: "2.4px 2.4px 2.4px 2.4px",
              }}>
                <MdHomeFilled size={16} />
              </div>
            </Vertical>{' '}
            <Vertical>{companyInfo.homepage && <a href={companyInfo.homepage} style={{ color: '#868e96' }}>{companyInfo.homepage}</a>}</Vertical>
          </InformationElement>
          <InformationElement>
            <Vertical>
              <div style={{
                margin: "3px 5px 2px 0",
                padding: "2.4px 2.4px 2.4px 2.4px",
              }}>
                <FaClock size={16} />
              </div>
            </Vertical>{' '}
            <Vertical>{companyInfo.bizHour}</Vertical>
          </InformationElement>
        </Information>
      </TopContainer>
    </OuterContainer>
  ) : (
    <></>
  );
};

export default CompanyDetail;

const OuterContainer = styled.div`
  width: 860px;
  display: flex;
  margin: 0 auto 0 auto;
`;

const ImageOuterContainer = styled.div`
  position: relative;
  margin: 0 40px auto auto;
`;

const TopContainer = styled.div`
  flex: 1;
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
  object-fit: cover;
  border-radius: 10px;
  width: 240px;
  height: 240px;
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

const SmallImage = styled.img`
  width: 211px;
  height: 211px;
  // flex: 1;
  border-radius: 10px;
  object-fit: cover;
`;

const Image = styled.img`
  width: 211px;
  height: 211px;
  border-radius: 10px;
  & + & {
    margin-top: 8px;
  }
`;
