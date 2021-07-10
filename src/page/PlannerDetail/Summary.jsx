import React from 'react';
import * as $ from './view/SummaryView';
import BoldTitle from '../../component/BoldTitle';
import HorizontalLine from '../../component/HorizontalLine';
import PButton from '../../component/PButton';
import { ReactComponent as Heart } from '../../assets/svg/ic_heart.svg';
import { ReactComponent as Instagram } from '../../assets/svg/ic_instagram.svg';
import { ReactComponent as Blog } from '../../assets/svg/ic_blog.svg';

const Summary = () => {
  const PLANNER_NAME = '이윤경';
  const COMPANY_NAME = '아이니웨딩';
  const HEART_COUNT = 12;
  const ONE_LINE = '당신의 웨딩로망을 서포트합니다 :)';

  return (
    <$.Container>
      <$.ImageContainer></$.ImageContainer>
      <$.InformationContainer>
        <$.InnerContainer>
          <$.NameContainer>
            <BoldTitle size={20}>{PLANNER_NAME} 플래너</BoldTitle>
            <$.HeartContainer>
              <Heart />
              {HEART_COUNT}
            </$.HeartContainer>
          </$.NameContainer>
          <$.CompanyName>{COMPANY_NAME}</$.CompanyName>
          <HorizontalLine top="12px" bottom="15px" />

          <$.BoldGray>플래너 한줄소개</$.BoldGray>
          <$.OneLine>{ONE_LINE}</$.OneLine>
          <HorizontalLine top="36px" bottom="11px" />

          <$.BoldGray>소셜미디어</$.BoldGray>
          <$.SocialIcon>
            <Instagram />
            <Blog />
          </$.SocialIcon>

          <PButton color="pink">견적 요청하기</PButton>
          <$.ButtonContainer>
            <PButton>1:1 문의하기</PButton>
            <PButton>찜하기</PButton>
          </$.ButtonContainer>
        </$.InnerContainer>
      </$.InformationContainer>
    </$.Container>
  );
};

export default Summary;
