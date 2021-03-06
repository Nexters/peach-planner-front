import React, { useState, FC } from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import Close from 'public/assets/svg/ic_close_w.svg';
import Left from 'public/assets/svg/ic_left_img.svg';
import Right from 'public/assets/svg/ic_right_img.svg';
import SmallImage from './SmallImage';
import Image from 'next/image';

interface ImageModalProps {
  showImageModal: boolean;
  closeImageModal(): void;
  imageList: string[];
}

const ImageModal: FC<ImageModalProps> = ({ showImageModal, closeImageModal, imageList }) => {
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
      <CloseButton onClick={closeImageModal}>
        <Image src={Close}/> 닫기
      </CloseButton>
      <LeftImage onClick={showLeftImage} children={<Image src={Left} layout='fixed'/> }/>
      <RightImage onClick={showRightImage} children={<Image src={Right} layout='fixed'/> }/>
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


const LeftImage = styled.div`
  position: fixed;
  top: 45%;
  left: 8%;
  cursor: pointer;
`;

const RightImage = styled.div`
  position: fixed;
  top: 45%;
  right: 8%;
  cursor: pointer;
`;



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
  background-color: transparent;
  border: none;

  svg {
    margin-right: 4px;
  }
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
