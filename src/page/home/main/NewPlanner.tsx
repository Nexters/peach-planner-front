import styled from 'styled-components';
import Slick, { Settings } from 'react-slick';
import { FlexDiv } from '../../../component/style/style';
import PlannerCard from '../../../component/PlannerCard';
import dummy1 from './dummy/img_wedding_1.png';
import dummy2 from './dummy/img_wedding_2.png';
import dummy3 from './dummy/img_wedding_3.png';
import dummy4 from './dummy/img_wedding_4.png';
import LeftArrow from '../../../assets/svg/ic_arrow_left.svg';
import RightArrow from '../../../assets/svg/ic_arrow_right.svg';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchPlanners } from '../../../api/Planner';

const NewPlanner = () => {
  const { data: planners } = useQuery(['planners'], fetchPlanners);
  const [slider, setSlider] = useState<Slick>();
  const [slickSettings, setSlickSettings] = useState<Settings>({
    draggable: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true,
    arrows: false
  });

  return (
    <FlexDiv margin={'40px 0 0 0'} direction="column">
      <FlexDiv height={'56px'} justify="space-between" margin={'0 0 8px 0'}>
        <Title>신규 플래너</Title>
        <FlexDiv justify="flex-end">
          <More>더 보기</More>
          <ArrowButton src={LeftArrow} onClick={slider?.slickPrev} margin="0 8px 0 0"></ArrowButton>
          <ArrowButton src={RightArrow} onClick={slider?.slickNext} margin="0"></ArrowButton>
        </FlexDiv>
      </FlexDiv>
      <FlexDiv
        justify="flex-start"
        align="start"
        direction="row"
        margin="0"
        width="1100px"
        style={{ overflow: 'hidden' }}
      >
        <Slider {...slickSettings} ref={(ref) => setSlider(ref!)}>
          {planners ? (
            planners.map((planner) => {
              return (
                <PlannerCard
                  key={planner.id}
                  margin={'0 28px 0 0'}
                  size={'254px'}
                  imagePath={dummy1}
                  heartCount={planner.likes}
                  reviewCount={24}
                  name={planner.name}
                  organization={planner.company.name}
                  region={planner.locations.join(',')}
                  id={planner.id}
                />
              );
            })
          ) : (
            <>loading...</>
          )}
          <PlannerCard
            margin={'0 28px 0 0'}
            size={'254px'}
            imagePath={dummy1}
            heartCount={12}
            reviewCount={24}
            name={'송영주'}
            organization={'아이니웨딩'}
            region={'서울,경기'}
            id={0}
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
            id={0}
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
            id={0}
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
            id={0}
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
            id={0}
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
            id={0}
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
            id={0}
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
            id={0}
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
  width: 200px;
  letter-spacing: 0;
  color: #000000;
  display: flex;
  font-size: 20px;
  font-weight: bold;
`;

interface ImageProps {
  src: string;
  margin: string;
}

const ArrowButton = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  margin: ${(props: ImageProps) => props.margin};
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

const More = styled.div`
  height: 19px;
  font-size: 13px;
  line-height: 19px;
  margin: 0 16px 0 0;
  border-bottom: 1px solid;
  cursor: pointer;
`;
