import React from 'react';
import styled from 'styled-components';
import PButton from './PButton';
import { ReactComponent as Heart } from '../assets/svg/ic_heart.svg';
import { ReactComponent as Review } from '../assets/svg/ic_review.svg';

const UserInfoIcon = ({ title, detail, buttonText }) => {
  return (
    <Container>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs33kicMrwTO3bQTdskuUlvJRK9JAgmaGjZw&usqp=CAU" />

      <InnerContainer>
        <Title detail={detail}>{title}</Title>
        {detail && (
          <>
            <Detail>{detail}</Detail>
            <IconContainer>
              <Heart /> 12
              <Review /> 24
            </IconContainer>
          </>
        )}
        {buttonText && (
          <PButton fontSize="12px" height="31px" width="83px" padding="5.5px">
            {buttonText}
          </PButton>
        )}
      </InnerContainer>
    </Container>
  );
};

export default UserInfoIcon;

const Container = styled.div`
  margin: 13px 0 16px 0;
  display: flex;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
`;

const InnerContainer = styled.div`
  margin-left: 17px;
`;

const Title = styled.div`
  margin-bottom: ${({ detail }) => (detail ? '5px' : '10.5px')};
  font-size: 16px;
`;

const Detail = styled.div`
  font-size: 16px;
  color: #495057;
`;

const IconContainer = styled.div`
  margin-top: 9px;
  display: flex;
  font-size: 14px;

  svg {
    margin-right: 4px;
  }

  svg:last-child {
    margin-left: 16px;
  }
`;
