import styled from 'styled-components';
import { FlexDiv } from '../../../component/style/style';
import planner1 from './dummy/planner1.png';
import planner2 from './dummy/planner2.png';
import planner3 from './dummy/planner3.png';

const PopularPlanner = () => {
  return (
    <FlexDiv margin={'54px 0 0 0'} direction="column">
      <FlexDiv height={'56px'} justify="between" margin={'0 0 40px 0'}>
        <Title>인기 플래너</Title>
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
  height: 198px;
  width: 352px;
  margin: 0 22px 0 0;
  border-radius: 10px;
`;

const Title = styled.div`
  height: 29px;
  width: auto;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 29px;
  margin: 0 0 14px 0;
`;
