import styled from 'styled-components';

interface Props {
  imageUrl: string;
}

const FileImage = ({ imageUrl }: Props) => {
  return (
    <Container>
      <Image src={imageUrl}></Image>
      <Content>다운로드</Content>
    </Container>
  );
};

export default FileImage;

const Container = styled.div`
  margin: 0px 8px 0px 0px;
`;

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 140px;
  width: 140px;
  margin: 0px 0px 6px 0px;
  object-fit: cover;
`;

const Content = styled.div`
  height: 21px;
  width: auto;
  color: #000;
  font-size: 14px;
  letter-spacing: 0;
  line-height: normal;
`;
