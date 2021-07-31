import styled from 'styled-components';
import Check from '../../../assets/svg/ic_check.svg';
import { Content, FlexDiv } from '../../../component/style/style';

interface Props {
  name: string;
  isCertificated: boolean;
}

const Certification = ({ name, isCertificated }: Props) => {
  return (
    <FlexDiv margin="0 0 8px 21px" justify="flex-start">
      {isCertificated ? <Image src={Check}></Image> : <FlexDiv margin="0 8px 0 0" height="24px" width="24px"></FlexDiv>}
      <Content height={'24px'} width={'auto'} color={'#000000'} fontSize={'16px'} lineHeight={'24px'} margin={'0'}>
        {`${name} 인증`}
      </Content>
    </FlexDiv>
  );
};

export default Certification;

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 24px;
  width: 24px;
  margin: 0 8px 0 0;
`;
