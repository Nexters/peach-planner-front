import { FlexDiv, Title } from '../../../../component/CommonStyle/style';
import PlannerCard from '../../../../component/PlannerCard/PlannerCard';
import dummy5 from './dummy/img_wedding_5.png';
import dummy6 from './dummy/img_wedding_6.png';
import dummy7 from './dummy/img_wedding_7.png';
import dummy8 from './dummy/img_wedding_8.png';

const RecommendPlanner = () => {
  return (
    <FlexDiv margin={'64px 0 0 0'} direction="column">
      <FlexDiv height={'56px'} justify="between" margin={'0 0 8px 0'}>
        <Title height={'29px'} width={'auto'} fontSize={'20px'} lineHeight={'29px'}>
          추천 플래너
        </Title>
      </FlexDiv>
      <FlexDiv justify="flex-start" align="start" direction="row" margin="0">
        <PlannerCard
          margin={'0 28px 0 0'}
          width={'254px'}
          imageHeight={'254px'}
          subTextHeight={'150px'}
          imagePath={dummy5}
          heartCount={12}
          reviewCount={24}
          name={'송영주'}
          organization={'아이니웨딩'}
          region={'서울,경기'}
        ></PlannerCard>
        <PlannerCard
          margin={'0 28px 0 0'}
          width={'254px'}
          imageHeight={'254px'}
          subTextHeight={'150px'}
          imagePath={dummy6}
          heartCount={12}
          reviewCount={24}
          name={'이윤정'}
          organization={'베리굿웨딩'}
          region={'서울,경기'}
        ></PlannerCard>
        <PlannerCard
          margin={'0 28px 0 0'}
          width={'254px'}
          imageHeight={'254px'}
          subTextHeight={'150px'}
          imagePath={dummy7}
          heartCount={12}
          reviewCount={24}
          name={'정화진'}
          organization={'베리굿웨딩'}
          region={'서울,경기'}
        ></PlannerCard>
        <PlannerCard
          margin={'0 28px 0 0'}
          width={'254px'}
          imageHeight={'254px'}
          subTextHeight={'150px'}
          imagePath={dummy8}
          heartCount={12}
          reviewCount={24}
          name={'성시란'}
          organization={'르웨딩플랜'}
          region={'서울,경기'}
        ></PlannerCard>
      </FlexDiv>
    </FlexDiv>
  );
};

export default RecommendPlanner;
