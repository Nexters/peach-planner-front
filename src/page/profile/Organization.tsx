import { Content } from 'src/component/style/style';
import styled from 'styled-components';

interface Props {
  name: string;
  image: string;
}

const Organization = ({ name, image }: Props) => {
  return (
    <Container>
      <Image src={image}></Image>
      <Content
        height={'19px'}
        width={'auto'}
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

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 120px;
  width: 120px;
  margin: 6px 0px 6px 0;
  cursor: pointer;
`;
