import React, { FC, useState } from 'react';
import styled from 'styled-components';
import BoldTitle from '../../component/BoldTitle';
import HorizontalLine from '../../component/HorizontalLine';
import PButton from '../../component/PButton';
import { ReactComponent as Heart } from '../../assets/svg/ic_heart.svg';
import { ReactComponent as Instagram } from '../../assets/svg/ic_instagram.svg';
import { ReactComponent as Blog } from '../../assets/svg/ic_blog.svg';
import ImageModal from './ImageModal';
import { Planner } from '../../api/Planner';
import DefaultImage from '../../assets/svg/img_photo_default.svg';
import { PickRequest, pick } from 'src/api/Pick';
import { useHistory } from 'react-router';
import axios from 'axios';
import EmptyHeart from '../../assets/svg/ic_heart_black.svg';
import FullHeart from '../../assets/svg/ic_heart.svg';

interface SummaryProps {
  plannerInfo: Planner;
}

const Summary: FC<SummaryProps> = ({ plannerInfo }) => {
  const history = useHistory();

  const PLANNER_NAME = plannerInfo.name;
  const COMPANY_NAME = plannerInfo.company ? plannerInfo.company.name : '';
  const ONE_LINE_SUMMARY = plannerInfo.summary;
  const EXTERNAL_LINKS = plannerInfo.externalLinks;
  const IMAGES = plannerInfo.images;

  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const [heartCount, setHeartCount] = useState<number>(plannerInfo.likes);

  const openImageModal = () => setShowImageModal(true);
  const closeImageModal = () => setShowImageModal(false);

  const handleEstimateClick = () => {
    const plannerId = plannerInfo.id;
    history.push(`/estimate/${plannerId}`);
  };

  const pickPlanner = () => {
    const plannerId = plannerInfo.id;
    pick({ targetCategoryType: 'PLANNER', targetId: plannerId, toBePick: !selected } as PickRequest);
    if (selected) {
      setHeartCount((heart) => heart - 1);
    } else {
      setHeartCount((heart) => heart + 1);
    }
    setSelected((selected) => !selected);
  };

  const handleChat = () => {
    axios
      .post(
        `/chat/rooms/${plannerInfo.id}`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
      )
      .then((res) => {
        if (res.status == 200) {
          history.push('/chats');
        }
      });
  };

  return (
    <Container>
      <ImageContainer>
        <ImageWrapper>
          {IMAGES.slice(0, 2).map((image, i) => (
            <Image src={image} key={i} />
          ))}
          {IMAGES.length == 0 && <Image src={DefaultImage} />}
          {IMAGES.length <= 1 && <Image src={DefaultImage} />}
        </ImageWrapper>
        <ImageWrapper>
          {IMAGES.slice(2, 4).map((image, i) => (
            <Image src={image} key={i} />
          ))}
          {IMAGES.length <= 2 && <Image src={DefaultImage} />}
          {IMAGES.length <= 3 && <Image src={DefaultImage} />}
        </ImageWrapper>
        {IMAGES.length != 0 && <ShowImageButton onClick={openImageModal}>사진 모두 보기</ShowImageButton>}
        <ImageModal showImageModal={showImageModal} closeImageModal={closeImageModal} imageList={IMAGES} />
      </ImageContainer>
      <InformationContainer>
        <InnerContainer>
          <NameContainer>
            <BoldTitle size={20}>{PLANNER_NAME} 플래너</BoldTitle>
            <HeartContainer>
              <Heart />
              {heartCount}
            </HeartContainer>
          </NameContainer>
          <CompanyName>{COMPANY_NAME}</CompanyName>
          <HorizontalLine height="0.1px" color="#dee2e6" top="12px" bottom="15px" />

          <BoldGray>플래너 한줄소개</BoldGray>
          <OneLine>{ONE_LINE_SUMMARY}</OneLine>
          <HorizontalLine height="0.1px" color="#dee2e6" top="36px" bottom="11px" />

          {EXTERNAL_LINKS != null && (
            <>
              <BoldGray>소셜미디어</BoldGray>
              <SocialIcon>
                <a href={EXTERNAL_LINKS.instagramLink} target="_blank">
                  <Instagram />
                </a>
                <a href={EXTERNAL_LINKS.blogLink} target="_blank">
                  <Blog />
                </a>
              </SocialIcon>
            </>
          )}

          <PButton color="pink" onClick={handleEstimateClick}>
            견적 요청하기
          </PButton>
          <ButtonContainer>
            <PButton onClick={handleChat} otherBgColor="#f1f3f5" border="none">
              1:1 문의하기
            </PButton>
            <PButton onClick={pickPlanner} otherBgColor="#f1f3f5" border="none">
              <Vertical>
                <img src={selected ? FullHeart : EmptyHeart} />
              </Vertical>{' '}
              <Vertical>찜하기</Vertical>
            </PButton>
          </ButtonContainer>
        </InnerContainer>
      </InformationContainer>
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const ImageContainer = styled.div`
  // background-color: #e9ecef;
  flex: 1;
  position: relative;
`;

const ImageWrapper = styled.div`
  display: flex;
  gap: 8px;
  & + & {
    margin-top: 8px;
  }
`;

const Image = styled.img`
  width: 211px;
  height: 211px;
  border-radius: 10px;
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

const InformationContainer = styled.div`
  flex: 1;
`;

const InnerContainer = styled.div`
  padding: 32px;
`;

const NameContainer = styled.div`
  display: flex;
  margin-bottom: 6px;
  justify-content: space-between;

  div {
    font-size: 14px;
  }
`;

const HeartContainer = styled.div`
  display: flex;

  svg {
    margin-right: 5px;
  }
`;

const CompanyName = styled.div`
  color: ${({ theme }) => theme.colors.pink};
  font-size: 16px;
  font-weight: bold;
`;

const BoldGray = styled.div`
  margin-bottom: 10px;
  font-size: 13px;
  color: #868e96;
`;

const SocialIcon = styled.div`
  display: flex;
  margin-bottom: 20px;

  a + a {
    margin-left: 9px;
  }
`;

const OneLine = styled.div`
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  margin-top: 13.5px;
  display: flex;

  button + button {
    margin-left: 13px;
  }
`;

const Vertical = styled.div`
  vertical-align: middle;
  display: inline-block;
`;
