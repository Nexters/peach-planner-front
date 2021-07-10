import React from 'react';
import Container from './Container';
import Review from './Review';

const ReviewList = () => {
  const REVIEW_COUNT = 24;
  const REVIEW_DATA = [
    { name: 'Alice', date: '2021년 6월 12일', detail: '너무 친절하시고 좋았습니다!' },
    {
      name: '초이밍',
      date: '2021년 6월 12일',
      detail: '계약 후에도 플래너님이 신경써주시는게 느껴져서 너무 감사했어요!'
    },
    {
      name: 'Oli1234',
      date: '2021년 6월 12일',
      detail: '플래너님이 너무 친절하시고 설명도 잘해주셔서 바로 계약했어요'
    }
  ];

  return (
    <Container title={`리뷰 (${REVIEW_COUNT})`}>
      {REVIEW_DATA.map((data, i) => (
        <Review data={data} key={i} />
      ))}
    </Container>
  );
};

export default ReviewList;
