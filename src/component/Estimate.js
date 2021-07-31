import React from 'react';
import * as $ from './MyPageItemView.js';
import img1 from '../images/img_wedding_1.png';
import img2 from '../images/img_wedding_2.png';
import img3 from '../images/img_wedding_3.png';
import img4 from '../images/img_wedding_4.png';
import img5 from '../images/img_wedding_5.png';
import img6 from '../images/img_wedding_8.png';

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
  }
];

const tableHeads = [
  { name: '요청일', value: '' },
  { name: '요청 내역', value: '' },
  { name: 'No', value: '' },
  { name: '업체', value: '' },
  { name: '상태', value: '' }
];

const Estimate = () => {
  return (
    <$.FlexDiv direction="column">
      <$.FlexDiv justify="space-between">
        <$.MyPageItemSpan>나의 견적서(8)</$.MyPageItemSpan>
      </$.FlexDiv>
      <$.Table>
        <$.THead>
          <$.TR height="45px">
            {tableHeads.map((tableHead, idx) => {
              return <$.TH key={idx}>{tableHead.name}</$.TH>;
            })}
          </$.TR>
        </$.THead>
        <$.TBody>
          {Cards.map((card, idx) => {
            return (
              <$.TR key={idx}>
                <$.TD>{'2021.06.24'}</$.TD>
                <$.TD>
                  <$.FlexDiv margin="0">
                    <$.CardImg src={card.img} height="48px" width="47.95px" />
                    <$.MyPageItemSpan size="13px" color="#000000" margin="0 12px">
                      {card.planner}
                    </$.MyPageItemSpan>
                  </$.FlexDiv>
                </$.TD>
                <$.TD>{'7960'}</$.TD>
                <$.TD>{'아이니웨딩'}</$.TD>
                <$.TD>{idx === 2 ? '답변완료' : idx === 0 ? '요청중' : '작성중'}</$.TD>
              </$.TR>
            );
          })}
        </$.TBody>
      </$.Table>
    </$.FlexDiv>
  );
};

export default Estimate;
