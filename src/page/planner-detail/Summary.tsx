import { FC, useState } from 'react';
import styled from 'styled-components';
import BoldTitle from '../../component/BoldTitle';
import HorizontalLine from '../../component/HorizontalLine';
import { ReactComponent as Heart } from '../../assets/svg/ic_heart.svg';
import { ReactComponent as Instagram } from '../../assets/svg/ic_instagram.svg';
import { ReactComponent as Blog } from '../../assets/svg/ic_blog.svg';
import ImageModal from './ImageModal';
import { Planner } from '../../api/Planner';
import DefaultImage from '../../assets/svg/img_photo_default.svg';
import { EmptyText } from './components/styles';

interface SummaryProps {
  plannerInfo: Planner;
}

const Summary: FC<SummaryProps> = ({ plannerInfo, children }) => {
  const { name: plannerName, summary, externalLinks, images } = plannerInfo;
  const companyName = plannerInfo.company ? plannerInfo.company.name : '';

  const [showImageModal, setShowImageModal] = useState<boolean>(false);

  const openImageModal = () => setShowImageModal(true);
  const closeImageModal = () => setShowImageModal(false);

  return (
    <Container>
      <ImageContainer>
        <ImageWrapper>
          {images.slice(0, 2).map((image, i) => (
            <Image src={image} key={i} />
          ))}
          {images.length == 0 && <Image src={DefaultImage} />}
          {images.length <= 1 && <Image src={DefaultImage} />}
        </ImageWrapper>
        <ImageWrapper>
          {images.slice(2, 4).map((image, i) => (
            <Image src={image} key={i} />
          ))}
          {images.length <= 2 && <Image src={DefaultImage} />}
          {images.length <= 3 && <Image src={DefaultImage} />}
        </ImageWrapper>
        {images.length != 0 && <ShowImageButton onClick={openImageModal}>사진 모두 보기</ShowImageButton>}
        <ImageModal showImageModal={showImageModal} closeImageModal={closeImageModal} imageList={images} />
      </ImageContainer>
      <InformationContainer>
        <InnerContainer>
          <NameContainer>
            <BoldTitle size={20}>{plannerName} 플래너</BoldTitle>
            <HeartContainer>
              <Heart />
              {plannerInfo.likes}
            </HeartContainer>
          </NameContainer>
          <CompanyName>{companyName}</CompanyName>
          <HorizontalLine height="0.1px" color="#dee2e6" top="12px" bottom="15px" />

          <BoldGray>플래너 한줄소개</BoldGray>
          <OneLine>{summary || `안녕하세요. ${plannerName} 플래너 입니다.`}</OneLine>
          <HorizontalLine height="0.1px" color="#dee2e6" top="36px" bottom="11px" />

          <BoldGray>소셜미디어</BoldGray>
          {externalLinks != null && (
            <>
              <SocialIcon>
                {
                  externalLinks.instagramLink &&
                  <a href={externalLinks.instagramLink} target="_blank">
                    <Instagram />
                  </a>
                }
                {
                  externalLinks.blogLink &&
                  <a href={externalLinks.blogLink} target="_blank">
                    <Blog />
                  </a>
                }
                {
                  !externalLinks.instagramLink && !externalLinks.blogLink && <EmptyText>등록되어 있는 소셜미디어가 없습니다.</EmptyText>
                }
              </SocialIcon>
            </>
          )}

          {children}
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
  object-fit: cover;
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