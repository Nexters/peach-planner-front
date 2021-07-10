import React from 'react';
import BoldTitle from '../../component/BoldTitle';
import styled from 'styled-components';

const Detail = () => {
  const DETAIL_LIST = ['서울', '경기', '동행하는 플래너에요', '모바일청첩장을 제공해요', '제휴웨딩홀이 있어요'];

  return (
    <div>
      <NewTitle>플래너가 담당해요</NewTitle>
      {DETAIL_LIST.map((detail) => (
        <DetailItem>체크! {detail}</DetailItem>
      ))}
    </div>
  );
};

export default Detail;

const NewTitle = styled(BoldTitle)`
  margin-bottom: 13px;
`;

const DetailItem = styled.span`
  margin-right: 8px;
`;
