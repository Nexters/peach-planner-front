import React, { FC } from 'react';
import styled from 'styled-components';

interface SmallImageProps {
  image: string;
  index: number;
  setImgIndex(imgIndex: number): void;
}

const SmallImage: FC<SmallImageProps> = ({ image, index, setImgIndex }) => {
  const imageClick = () => {
    setImgIndex(index);
  };

  return (
    <Container onClick={imageClick}>
      <Image src={image} />
    </Container>
  );
};

export default SmallImage;

const Container = styled.div`
  width: 72px;
  height: 72px;
  cursor: pointer;

  & + & {
    margin-left: 4px;
  }
`;

const Image = styled.img`
  height: 100%;
`;
