import React, { useState, FC } from 'react';
import styled from 'styled-components';
import PartnerItem from './PartnerItem';
import { ReactComponent as LeftArrow } from '../../assets/svg/ic_arrow_left.svg';
import { ReactComponent as RightArrow } from '../../assets/svg/ic_arrow_right.svg';
import { PartnerInfo } from 'src/api/Planner';
import Slick, { Settings } from 'react-slick';

interface PartnerRowProps {
  title: string;
  partner: PartnerInfo[];
}

const PartnerRow: FC<PartnerRowProps> = ({ title, partner }) => {
  const [slider, setSlider] = useState<Slick>();
  const [slickSettings, setSlickSettings] = useState<Settings>({
    draggable: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    variableWidth: true,
    arrows: false
  });

  return partner ? (
    <Container>
      <TopContainer>
        <Title>{title}</Title>
        <TopRightContainer>
          <LeftArrow onClick={slider?.slickPrev} style={{ cursor: 'pointer' }} />
          <RightArrow onClick={slider?.slickNext} style={{ cursor: 'pointer' }} />
        </TopRightContainer>
      </TopContainer>
      <BottomContainer>
        <FlexContainer>
          <Slider {...slickSettings} ref={(ref) => setSlider(ref!)}>
            {partner.map((item, i) => {
              return <PartnerItem data={item} key={i} />;
            })}
          </Slider>
        </FlexContainer>
      </BottomContainer>
    </Container>
  ) : (
    <></>
  );
};

export default PartnerRow;

const Container = styled.div`
  margin: 13px 0 40px 0;
`;

const TopContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 16px;
  color: #495057;
  font-weight: bold;
`;

const TopRightContainer = styled.div`
  display: flex;

  svg {
    margin-left: 8px;
  }
`;

const ViewMore = styled.div`
  text-decoration: underline;
  margin-right: 16px;
`;

const BottomContainer = styled.div`
  display: flex;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 860px;
  justify-content: flex-start;
  align-item: start;
  flex-direction: row;
  overflow: hidden;
`;

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