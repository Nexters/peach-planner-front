import { FlexDiv, ImageBox, Title } from '../../../../component/CommonStyle/style';
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
        <ImageBox height={'258px'} width={'458px'} margin={'0 28px 0 0'} src={planner2}></ImageBox>
        <ImageBox height={'258px'} width={'458px'} margin={'0 28px 0 0'} src={planner3}></ImageBox>
        <ImageBox height={'258px'} width={'458px'} margin={'0 28px 0 0'} src={planner1}></ImageBox>
      </FlexDiv>
    </FlexDiv>
  );
};

export default PopularPlanner;
