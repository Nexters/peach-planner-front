import React, { useState, FC } from 'react';
import styled from 'styled-components';
import PartnerItem from './PartnerItem';
import LeftArrow from 'public/assets/svg/ic_arrow_left.svg';
import RightArrow from 'public/assets/svg/ic_arrow_right.svg';
import { PartnerInfo } from 'lib/api/Planner';
import Slick, { Settings } from 'react-slick';
import Image from 'next/image';

interface PartnerRowProps {
  title: string;
  partner: PartnerInfo[];
}

const PartnerRow: FC<PartnerRowProps> = ({ title, partner }) => {
  const [slider, setSlider] = useState<Slick>();
  const [slickSettings, setSlickSettings] = useState<Settings>({
    draggable: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    variableWidth: true,
    arrows: false
  });

  return partner && partner.length > 0 ? (
    <Container>
      <TopContainer>
        <Title>{title}</Title>
        <TopRightContainer>
          <div style={{ cursor: 'pointer' }}><Image src={LeftArrow} onClick={slider?.slickPrev} /></div>
          <div style={{ cursor: 'pointer' }}><Image src={RightArrow} onClick={slider?.slickNext} /></div>
        </TopRightContainer>
      </TopContainer>
      <BottomContainer>
        <FlexContainer>
          {
            (partner.length > 5) ? (
              <Slider {...slickSettings} ref={(ref) => setSlider(ref!)}>
                {partner.map((item, i) => {
                  return <PartnerItem data={item} key={i} />;
                })}
              </Slider>
            ) : (
              <>
                {partner.map((item, i) => {
                  return <PartnerItem data={item} key={i} />;
                })}
              </>
            )
          }

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
