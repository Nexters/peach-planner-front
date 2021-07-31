import React from 'react';
import * as $ from './MyPageItemView';
import img1 from '../images/img_wedding_1.png';
import img2 from '../images/img_wedding_2.png';
import img3 from '../images/img_wedding_3.png';

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
  { name: '이름', value: '' },
  { name: '상태', value: '' }
];

const Estimate = () => {
  return (
    <$.FlexDiv direction="column">
      <$.FlexDiv justify="space-between">
        <$.MyPageItemSpan>전체 견적서(8)</$.MyPageItemSpan>
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
                      {'견적서를 요청해요'}
                    </$.MyPageItemSpan>
                  </$.FlexDiv>
                </$.TD>
                <$.TD>{'7960'}</$.TD>
                <$.TD>{'홍길동'}</$.TD>
                <$.TD>{idx === 2 ? '답변완료' : idx === 0 ? '미확인' : '확인'}</$.TD>
              </$.TR>
            );
          })}
        </$.TBody>
      </$.Table>
    </$.FlexDiv>
  );
};

export default Estimate;
