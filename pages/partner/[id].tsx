import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DefaultBigImage from 'public/assets/svg/img_defult_wedding.svg';
import ImageModal from 'lib/pages/components/ImageModal';
import axios from 'axios';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { MdHomeFilled } from 'react-icons/md';
import { PartnerInfo } from 'lib/api/Planner';
import { useRouter } from 'next/router';

export default () => {
  const [partnerInfo, setPartnerInfo] = useState<PartnerInfo | null>(null);
  const history = useRouter();
  const partnerId = history.query.id as string;

  const [selected, setSelected] = useState<boolean>(false);
  const [showImageModal, setShowImageModal] = useState<boolean>(false);

  const fetchCompany = () => {
    axios
      .get(`/partners/${partnerId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then((response) => {
        setPartnerInfo({ ...response.data });
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

  return partnerInfo ? (
    <OuterContainer>
      <ImageOuterContainer>
        <ImageContainer>
          {partnerInfo.images.length == 0 ? <img src={DefaultBigImage} /> : <BigImage src={partnerInfo.images[0]} />}
        </ImageContainer>
        {partnerInfo.images.length != 0 && <ShowImageButton onClick={openImageModal}>사진 모두 보기</ShowImageButton>}
        <ImageModal showImageModal={showImageModal} closeImageModal={closeImageModal} imageList={partnerInfo.images} />
      </ImageOuterContainer>
      <TopContainer>
        <Title>{partnerInfo.name}</Title>
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
            <Vertical>{partnerInfo.tel}</Vertical>
            <CopyLocation onClick={() => copy(partnerInfo?.tel)}>복사</CopyLocation>
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
            <Vertical>{partnerInfo.location}</Vertical>
            <CopyLocation onClick={() => copy(partnerInfo?.location)}>복사</CopyLocation>
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
            <Vertical>{partnerInfo.homepage && <a href={partnerInfo.homepage} style={{ color: '#868e96' }}>{partnerInfo.homepage}</a>}</Vertical>
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
            <Vertical>{partnerInfo.bizHour}</Vertical>
          </InformationElement>
        </Information>
      </TopContainer>
    </OuterContainer>
  ) : (
    <></>
  );
};


const OuterContainer = styled.div`
  width: 860px;
  display: flex;
  margin: 0 auto auto auto;
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