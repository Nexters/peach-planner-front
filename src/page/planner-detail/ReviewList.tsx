import React, { FC } from 'react';
import { Planner } from 'src/api/Planner';
import Container from './Container';
import Review from './Review';

export interface ReviewData {
  name: String;
  date: String;
  detail: String;
}

interface ReviewProps {
  plannerInfo: Planner;
}

const ReviewList: FC<ReviewProps> = ({ plannerInfo }) => {
  const REVIEW_COUNT: number = plannerInfo.reviews;
  const REVIEW_DATA: ReviewData[] = [
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
      {REVIEW_DATA.slice(0, -1).map((data, i) => (
        <Review data={data} key={i} />
      ))}
      {REVIEW_DATA.length > 0 && <Review data={REVIEW_DATA[REVIEW_DATA.length - 1]} noLine />}
    </Container>
  );
};

export default ReviewList;
