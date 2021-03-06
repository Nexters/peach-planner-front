import Image from 'next/image';
import styled from 'styled-components';
import { FlexDiv } from './components/style/style';
import Error from 'public/assets/img/img_error.png';

const Mobile = () => {
  return (
    <FlexDiv margin="0" direction="column">
      <Img 
        width={158}
        height={158}
        src={'/assets/img/img_error.png'}/>
      <Title>모바일 버전을 준비중이에요</Title>
      <Content>
        현재 피치플래너는 PC 웹으로 확인 가능합니다.<br></br> 모바일은 데스크톱 버전으로 변경해 주세요.
      </Content>
    </FlexDiv>
  );
};

export default Mobile;

interface ImageProps {
  src: string;
}

const Img = styled(Image).attrs((props: ImageProps) => ({ src: props.src, }))`
  margin: 115px 101px 0px 101px;
`;

const Title = styled.div`
  height: 36px;
  width: auto;
  color: #212529;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 36px;
  text-align: center;
  margin: 24px 0 16px 0;
`;

const Content = styled.div`
  height: 44px;
  width: auto;
  color: #343a40;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 22px;
  text-align: center;
  margin: 0 45px 0 45px;
`;
