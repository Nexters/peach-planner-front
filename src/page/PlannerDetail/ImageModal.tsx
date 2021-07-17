import React, { useState, FC } from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { ReactComponent as Close } from '../../assets/svg/ic_close_w.svg';
import { ReactComponent as Left } from '../../assets/svg/ic_left_img.svg';
import { ReactComponent as Right } from '../../assets/svg/ic_right_img.svg';

// 임시 이미지 Import
import img1 from '../../images/img_wedding_1.png';
import img2 from '../../images/img_wedding_2.png';
import img3 from '../../images/img_wedding_3.png';
import img4 from '../../images/img_wedding_4.png';
import img5 from '../../images/img_wedding_5.png';
import img6 from '../../images/img_wedding_8.png';
import SmallImage from './SmallImage';

const imageList = [img1, img2, img3, img4, img5, img6];

interface ImageModalProps {
  showImageModal: boolean;
  closeImageModal(): void;
}

const ImageModal: FC<ImageModalProps> = ({ showImageModal, closeImageModal }) => {
  const [imgIndex, setImgIndex] = useState<number>(0);

  const showLeftImage = () => {
    if (imgIndex > 0) {
      setImgIndex((prevState) => prevState - 1);
    }
  };

  const showRightImage = () => {
    if (imgIndex < imageList.length - 1) {
      setImgIndex((prevState) => prevState + 1);
    }
  };

  return (
    <StyledPopup open={showImageModal} closeOnDocumentClick onClose={closeImageModal}>
      {/* TODO: X 아이콘 추가 */}
      <CloseButton onClick={closeImageModal}>
        <Close /> 닫기
      </CloseButton>
      <LeftImage onClick={showLeftImage} />
      <RightImage onClick={showRightImage} />
      <Count>
        {imgIndex + 1} / {imageList.length}
      </Count>
      <BigImageContainer>
        <BigImage src={imageList[imgIndex]} />
      </BigImageContainer>
      <SmallImageContainer>
        {imageList.map((image, index) => (
          <SmallImage image={image} index={index} setImgIndex={setImgIndex} key={index} />
        ))}
      </SmallImageContainer>
    </StyledPopup>
  );
};

export default ImageModal;

const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgb(0, 0, 0, 0.8);
  }

  &-content {
    background-color: white;
    width: 65%;
    height: 70%;
    border-radius: 10px;
    padding: 24px;
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 56px;
  left: 56px;
  color: white;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  display: flex;
  line-height: 33px;

  svg {
    margin-right: 4px;
  }
`;

const LeftImage = styled(Left)`
  position: fixed;
  top: 45%;
  left: 8%;
  cursor: pointer;
`;

const RightImage = styled(Right)`
  position: fixed;
  top: 45%;
  right: 8%;
  cursor: pointer;
`;

const Count = styled.div`
  font-size: 14px;
  color: #212529;
  text-align: center;
`;

const BigImageContainer = styled.div`
  text-align: center;
  margin: 24px 0;
`;

const BigImage = styled.img`
  height: 300px;
`;

const SmallImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
