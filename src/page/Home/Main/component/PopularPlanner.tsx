import styled from 'styled-components';
import { FlexDiv, Title } from '../../../../component/style/style';
import planner1 from './dummy/planner1.png';
import planner2 from './dummy/planner2.png';
import planner3 from './dummy/planner3.png';

const PopularPlanner = () => {
  return (
    <FlexDiv margin={'54px 0 0 0'} direction="column">
      <FlexDiv height={'56px'} justify="between" margin={'0 0 40px 0'}>
        <Title height={'29px'} width={'auto'} fontSize={'20px'} lineHeight={'29px'}>
          인기 플래너
        </Title>
      </FlexDiv>
      <FlexDiv margin={'0'} justify="flex-start" direction="row">
        <Image src={planner2}></Image>
        <Image src={planner3}></Image>
        <Image src={planner1}></Image>
      </FlexDiv>
    </FlexDiv>
  );
};

export default PopularPlanner;

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 258px;
  width: 458px;
  margin: 0 28px 0 0;
  border-radius: 10px;
`;
