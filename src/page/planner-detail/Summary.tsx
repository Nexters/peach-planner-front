import React, { useState } from 'react';
import styled from 'styled-components';
import BoldTitle from '../../component/BoldTitle';
import HorizontalLine from '../../component/HorizontalLine';
import PButton from '../../component/PButton';
import { ReactComponent as Heart } from '../../assets/svg/ic_heart.svg';
import { ReactComponent as Instagram } from '../../assets/svg/ic_instagram.svg';
import { ReactComponent as Blog } from '../../assets/svg/ic_blog.svg';
import ImageModal from './ImageModal';

const Summary = () => {
  const PLANNER_NAME = '이윤경';
  const COMPANY_NAME = '아이니웨딩';
  const HEART_COUNT = 12;
  const ONE_LINE = '당신의 웨딩로망을 서포트합니다 :)';

  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const openImageModal = () => setShowImageModal(true);
  const closeImageModal = () => {
    setShowImageModal(false);
    console.log('close');
  };

  return (
    <Container>
      <ImageContainer>
        <PButton width="97px" height="31px" fontSize="12px" padding="0" onClick={openImageModal}>
          사진 모두 보기
        </PButton>
        <ImageModal showImageModal={showImageModal} closeImageModal={closeImageModal} />
      </ImageContainer>
      <InformationContainer>
        <InnerContainer>
          <NameContainer>
            <BoldTitle size={20}>{PLANNER_NAME} 플래너</BoldTitle>
            <HeartContainer>
              <Heart />
              {HEART_COUNT}
            </HeartContainer>
          </NameContainer>
          <CompanyName>{COMPANY_NAME}</CompanyName>
          <HorizontalLine color="#dee2e6" top="12px" bottom="15px" />

          <BoldGray>플래너 한줄소개</BoldGray>
          <OneLine>{ONE_LINE}</OneLine>
          <HorizontalLine top="36px" bottom="11px" />

          <BoldGray>소셜미디어</BoldGray>
          <SocialIcon>
            <Instagram />
            <Blog />
          </SocialIcon>

          <PButton color="pink">견적 요청하기</PButton>
          <ButtonContainer>
            <PButton>1:1 문의하기</PButton>
            <PButton>찜하기</PButton>
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
  background-color: #e9ecef;
  flex: 1;
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
  margin-bottom: 4px;
  font-size: 13px;
  color: #868e96;
`;

const SocialIcon = styled.div`
  display: flex;
  margin-bottom: 20px;

  svg + svg {
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
