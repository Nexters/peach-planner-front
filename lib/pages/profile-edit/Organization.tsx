import { Content } from 'lib/pages/components/style/style';
import styled from 'styled-components';
import Close from 'public/assets/svg/ic_close_w.svg';
import Image from 'next/image';

interface Props {
  name: string;
  image: string;
  handleOrgClose: () => void;
}

const Organization = ({ name, image, handleOrgClose }: Props) => {
  return (
    <Container>
      <ImageContainer>
        <Img src={image} />
        <ImageCloseContainer onClick={() => { handleOrgClose(); }}>
          <Image src={Close} layout='fixed'/>
        </ImageCloseContainer>
      </ImageContainer>
      <Content
        height={'19px'}
        width={'100px'}
        color={'#495057'}
        fontSize={'13px'}
        lineHeight={'19px'}
        margin={'8px 0 0 0'}
      >
        {name}
      </Content>
    </Container>
  );
};

export default Organization;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 8px;
  margin-bottom: 24px;
  :nth-child(5n) {
    margin-right: 0px;
  }
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