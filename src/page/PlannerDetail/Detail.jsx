import React from 'react';
import * as $ from './DetailView';

const Detail = () => {
  const DETAIL_LIST = ['서울', '경기', '동행하는 플래너에요', '모바일청첩장을 제공해요', '제휴웨딩홀이 있어요'];

  return (
    <div>
      <$.NewTitle>플래너가 담당해요</$.NewTitle>
      {DETAIL_LIST.map((detail) => (
        <$.DetailItem>체크! {detail}</$.DetailItem>
      ))}
    </div>
  );
};

export default Detail;
