import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const Detail = () => {
  const DETAIL_LIST = ['서울', '경기', '동행하는 플래너에요', '모바일청첩장을 제공해요', '제휴웨딩홀이 있어요'];

  return (
    <Container title="플래너가 담당해요">
      {DETAIL_LIST.map((detail, i) => (
        <DetailItem key={i}>체크! {detail}</DetailItem>
      ))}
    </Container>
  );
};

export default Detail;

const DetailItem = styled.span`
  margin-right: 8px;
`;
