import React, { FC } from 'react';
import styled from 'styled-components';
import PButton from './PButton';
import { ReactComponent as Heart } from 'public/assets/svg/ic_heart.svg';
import { ReactComponent as Review } from 'public/assets/svg/ic_review.svg';

interface UserInfoIconProps {
  imgSrc: string;
  title: string;
  detail?: string;
  buttonText?: string;
  likeCount?: number;
  reviewCount?: number;
  onButtonClick?: () => void;
}

const UserInfoIcon: FC<UserInfoIconProps> = ({ imgSrc, title, detail, buttonText, likeCount, reviewCount, onButtonClick }) => {
  return (
    <Container>
      <Image src={imgSrc} />

      <InnerContainer>
        <Title detail={detail}>{title}</Title>
        {detail && (
          <>
            <Detail>{detail}</Detail>
            <IconContainer>
              <Heart /> {likeCount}
              <Review /> {reviewCount}
            </IconContainer>
          </>
        )}
        {buttonText && (
          <PButton
            fontSize="12px"
            height="31px"
            width="83px"
            padding="5.5px"
            otherBgColor="#f1f3f5"
            border="none"
            onClick={onButtonClick}
          >
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

const Title = styled.div<{ detail: string | undefined }>`
  margin-bottom: ${({ detail }) => (detail ? '5px' : '10.5px')};
  font-size: 16px;
`;

const Detail = styled.div`
  font-size: 16px;
  color: #495057;
  margin-top: 15px;
`;

const IconContainer = styled.div`
  margin-top: 15px;
  display: flex;
  font-size: 14px;

  svg {
    margin-right: 4px;
  }

  svg:last-child {
    margin-left: 16px;
  }
`;
