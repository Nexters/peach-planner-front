import React from 'react';
import img1 from '../images/img_wedding_1.png';
import img2 from '../images/img_wedding_2.png';
import img3 from '../images/img_wedding_3.png';
import img4 from '../images/img_wedding_4.png';
import img5 from '../images/img_wedding_5.png';
import img6 from '../images/img_wedding_8.png';
import { Card, CardImg, More, MyPageItemSpan } from './MyPageItemView';
import { FlexDiv } from './style/style';

const Cards = [
  {
    img: img1,
    planner: '송영주 플래너',
    company: '아이니웨딩'
  },
  {
    img: img2,
    planner: '이윤경 플래너',
    company: '베리굿웨딩'
  },
  {
    img: img3,
    planner: '정화진 플래너',
    company: '베리굿웨딩'
  },
  {
    img: img4,
    planner: '성시란 플래너',
    company: '르웨딩플랜'
  },
  {
    img: img5,
    planner: '마이퍼스트레이디',
    company: '스튜디오'
  },
  {
    img: img6,
    planner: '루나',
    company: '스튜디오'
  }
];

const Heart = () => {
  return (
    <FlexDiv direction="column">
      <FlexDiv justify="space-between">
        <MyPageItemSpan>나의 하트</MyPageItemSpan>
        <More>더보기</More>
      </FlexDiv>
      <FlexDiv justify="space-between">
        {Cards.map((card, idx) => {
          return (
            <Card key={idx}>
              <CardImg src={card.img} />
              <MyPageItemSpan size="13px" color="#000000">
                {card.planner}
              </MyPageItemSpan>
              <MyPageItemSpan size="12px" color="#868E96">
                {card.company}
              </MyPageItemSpan>
            </Card>
          );
        })}
      </FlexDiv>
    </FlexDiv>
  );
};

export default Heart;
