import styled from 'styled-components';
import Slick, { Settings } from 'react-slick';
import { FlexDiv } from '../../../component/style/style';
import PlannerCard from '../../../component/PlannerCard';
import dummy1 from './dummy/img_wedding_1.png';
import dummy2 from './dummy/img_wedding_2.png';
import dummy3 from './dummy/img_wedding_3.png';
import dummy4 from './dummy/img_wedding_4.png';

const NewPlanner = () => {
  const slickSettings: Settings = {
    draggable: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    variableWidth: true,
    lazyLoad: 'ondemand'

    // beforeChange: handleBeforeChange,
    // afterChange: this.handleAfterChange
  };

  return (
    <FlexDiv margin={'40px 0 0 0'} direction="column">
      <FlexDiv height={'56px'} justify="between" margin={'0 0 8px 0'}>
        <Title>신규 플래너</Title>
      </FlexDiv>
      <FlexDiv
        justify="flex-start"
        align="start"
        direction="row"
        margin="0"
        width="1100px"
        style={{ overflow: 'hidden' }}
      >
        <Slider {...slickSettings}>
          <PlannerCard
            margin={'0 28px 0 0'}
            size={'254px'}
            imagePath={dummy1}
            heartCount={12}
            reviewCount={24}
            name={'송영주'}
            organization={'아이니웨딩'}
            region={'서울,경기'}
          ></PlannerCard>

          <PlannerCard
            margin={'0 28px 0 0'}
            size={'254px'}
            imagePath={dummy2}
            heartCount={12}
            reviewCount={24}
            name={'이윤정'}
            organization={'베리굿웨딩'}
            region={'서울,경기'}
          ></PlannerCard>

          <PlannerCard
            margin={'0 28px 0 0'}
            size={'254px'}
            imagePath={dummy3}
            heartCount={12}
            reviewCount={24}
            name={'정화진'}
            organization={'베리굿웨딩'}
            region={'서울,경기'}
          ></PlannerCard>

          <PlannerCard
            margin={'0 28px 0 0'}
            size={'254px'}
            imagePath={dummy4}
            heartCount={12}
            reviewCount={24}
            name={'성시란'}
            organization={'르웨딩플랜'}
            region={'서울,경기'}
          ></PlannerCard>
          <PlannerCard
            margin={'0 28px 0 0'}
            size={'254px'}
            imagePath={dummy1}
            heartCount={12}
            reviewCount={24}
            name={'송영주'}
            organization={'아이니웨딩'}
            region={'서울,경기'}
          ></PlannerCard>

          <PlannerCard
            margin={'0 28px 0 0'}
            size={'254px'}
            imagePath={dummy2}
            heartCount={12}
            reviewCount={24}
            name={'이윤정'}
            organization={'베리굿웨딩'}
            region={'서울,경기'}
          ></PlannerCard>

          <PlannerCard
            margin={'0 28px 0 0'}
            size={'254px'}
            imagePath={dummy3}
            heartCount={12}
            reviewCount={24}
            name={'정화진'}
            organization={'베리굿웨딩'}
            region={'서울,경기'}
          ></PlannerCard>

          <PlannerCard
            margin={'0 28px 0 0'}
            size={'254px'}
            imagePath={dummy4}
            heartCount={12}
            reviewCount={24}
            name={'성시란'}
            organization={'르웨딩플랜'}
            region={'서울,경기'}
          ></PlannerCard>
        </Slider>
      </FlexDiv>
    </FlexDiv>
  );
};

export default NewPlanner;

const Slider = styled(Slick)`
  .slick-initialized slick-slider {
    overflow: hidden;
    flex: 1;
    max-width: 1100px !important;
  }

  .slick-track {
    display: flex;
    width: 1100px;
    overflow: hidden;
  }
  .slick-list {
    display: flex;
    width: 100%;
    overflow: hidden;
  }
`;

interface DivisionBoxProps {
  marginBottom: number;
}

export const DivisionBox = styled.span<DivisionBoxProps>`
  height: 56px;
  width: 1100px;
  margin-bottom: ${(props: DivisionBoxProps) => props.marginBottom};
  display: flex;
  justify-content: between;
  align-items: center;
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
