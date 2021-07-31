import React, { FC } from 'react';
import styled from 'styled-components';
import HorizontalLine from '../../component/HorizontalLine';
import { ReactComponent as AccountDefault } from '../../assets/svg/ic_account_default.svg';
import { ReviewData } from './ReviewList';

interface ReviewProps {
  data: ReviewData;
}

const Review: FC<ReviewProps> = ({ data }) => {
  return (
    <>
      <Container>
        <AccountDefault />
        {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs33kicMrwTO3bQTdskuUlvJRK9JAgmaGjZw&usqp=CAU" /> */}
        <RightContainer>
          <Name>{data.name}</Name>
          <Date>{data.date}</Date>
          <Detail>{data.detail}</Detail>
        </RightContainer>
      </Container>
      <HorizontalLine color="#dee2e6" />
    </>
  );
};

export default Review;

const Container = styled.div`
  display: flex;
  margin-top: 16px;
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
  margin-bottom: 3px;
`;

const Date = styled.div`
  font-size: 13px;
  margin-bottom: 8px;
  color: #868e96;
`;

const Detail = styled.div`
  font-size: 14px;
  margin-bottom: 24px;
`;
