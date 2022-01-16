import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { Planner } from 'src/api/Planner';
import { fetchReview } from 'src/api/Review';
import { EmptyText } from './components/styles';
import Container from './Container';
import Review from './Review';

interface ReviewProps {
  plannerId: string;
}

const ReviewList: FC<ReviewProps> = ({ plannerId }) => {
  const { data: reviews } = useQuery(['reviews', plannerId], () => fetchReview(plannerId));

  return (
    <Container id='planner-review' title={`리뷰 (${reviews ? reviews.length : 0})`}>
      {reviews && reviews.slice(0, -1).map((data, i) => <Review data={data} key={i} />)}
      {reviews && reviews.length > 0 && <Review data={reviews[reviews.length - 1]} noLine />}
      {reviews?.length === 0 && <EmptyText>아직 작성된 리뷰가 없습니다.</EmptyText>}
    </Container>
  );
};

export default ReviewList;
