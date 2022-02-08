import { useState } from 'react';
import { Content, FlexDiv } from 'lib/pages/components/style/style';
import styled from 'styled-components';
import HorizontalLine from 'lib/pages/components/HorizontalLine';
import ImageUpload from 'lib/pages/components/ImageUpload';
import { upload } from 'lib/api/Image';
import { Dispatch, SetStateAction } from 'react';
import Close from 'public/assets/svg/ic_close_w.svg';
import Image from 'next/image';

interface Props {
  id: string;
  margin: string;
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}

export const PortfolioCollect = ({ id, margin, images, setImages }: Props) => {
  const [previewImage, setPreviewImage] = useState('');

  const changeImageFile = async (imageFile: any) => {
    if (images.length >= 6) {
        alert("포트폴리오는 6장까지만 등록이 가능해요!");
        return;
    };

    try {
      const s3ImageUrl = await upload(imageFile);
      setImages(images?.concat(s3ImageUrl));
    } catch (e) {
      window.alert("사진 용량이 너무 큽니다.");
    }
  };

  return (
    <FlexDiv width="632px" margin={margin} direction="column" justify="flex-start" align="start">
      <Content
        height={'19px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'13px'}
        lineHeight={'24px'}
        margin={'0 0 12px 0'} 
      >내 포트폴리오로 사용할 사진을 업로드해 주세요. (고객 웨딩 사진 등)</Content>
      <ImageUpload
        id={id}
        previewImage={previewImage}
        setPreviewImage={() => {}}
        setImageFile={changeImageFile}
      />
      <HorizontalLine color="#dee2e6"/>
      <ImageLists>
        {images ? (
          images.map((image, index) => {
              return <ImageContainer key={index}>
                <Img src={image} />
                <ImageCloseContainer onClick={() => { setImages(images.filter((e, i) => i !== index)); }}>
                  <Image src={Close} layout='fixed' />
                </ImageCloseContainer>
              </ImageContainer>
          })
        ) : (
          <></>
        )}
      </ImageLists>
    </FlexDiv>
  );
};

const ImageLists = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ImageCloseContainer = styled.div`
  position: absolute;
  background: grey;
  bottom: 2px;
  right: 0;
  cursor: pointer;
`;

const Img = styled.img`
  height: 100px;
  width: 100px;
  margin: 0px 0px 0px 0;
  object-fit: cover;
`;
