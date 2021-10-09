import React, { FC } from 'react';
import styled from 'styled-components';
import HorizontalLine from '../../component/HorizontalLine';
import { ReactComponent as AccountDefault } from '../../assets/svg/ic_account_default.svg';
import { ReviewData } from 'src/api/Review';

interface ReviewProps {
  data: ReviewData;
  noLine?: boolean;
}

const Review: FC<ReviewProps> = ({ data, noLine = false }) => {
  return (
    <OuterContainer>
      <Container>
        <AccountDefault />
        {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs33kicMrwTO3bQTdskuUlvJRK9JAgmaGjZw&usqp=CAU" /> */}
        <RightContainer>
          <Name>{data.userName}</Name>
          <Date>{'2021년 6월 12일'}</Date>
          <Comment>{data.comment}</Comment>
        </RightContainer>
      </Container>
      {!noLine && <HorizontalLine height="0.1px" color="#dee2e6" />}
    </OuterContainer>
  );
};

export default Review;

const OuterContainer = styled.div`
  margin: 20px 0 35px 0;
`;

const Container = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 53.33px;
  height: 53.33px;
`;

const RightContainer = styled.div`
  margin-left: 20px;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Date = styled.div`
  font-size: 13px;
  margin-bottom: 13px;
  color: #868e96;
`;

const Comment = styled.div`
  font-size: 14px;
  margin-bottom: 24px;
`;