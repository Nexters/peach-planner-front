

import React, { useState, FC } from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { ReactComponent as Close } from '../../assets/svg/ic_close_b.svg';
import { ReviewData } from 'src/api/Review';
import { Content } from 'src/component/style/style';

interface ReviewDetailModalProps {
    reviewDetailIndex: number;
    reviews: ReviewData[];
    showModal: boolean;
    closeModal(): void;
}

export const ReviewDetailPopup: FC<ReviewDetailModalProps> = ({ reviewDetailIndex, reviews, showModal, closeModal }) => {
    const reviewData = reviews[reviewDetailIndex] || {};

    return (
        <StyledPopup open={showModal} closeOnDocumentClick onClose={closeModal}>
            <PopupTitleContainer>
                <PopupTitle>리뷰 상세보기</PopupTitle>
                <CloseButton onClick={closeModal}>
                    <Close />
                </CloseButton>
            </PopupTitleContainer>
            <SizedBox height={"42px"} />
            <Divider />
            <SizedBox height={"8px"} />
            <ReviewTopLine>
                <div>{reviewData.user.nickName}</div>
                <div>{new Date(reviewData.writeDate).toLocaleDateString()}</div>
            </ReviewTopLine>
            <SizedBox height={"9px"} />
            <div style={{ display: 'flex'}}>
                <Content height="auto" width="auto" fontSize="14px" lineHeight="normal" color="#495057" margin="0 0 14px 0" fontFamily='SpoqaHanSans'>
                    {reviewData.comment}
                </Content>
            </div>
            <SizedBox height={"14px"} />
            {reviewData.imageUrl && <Image width={"200px"} height={"200px"} src={reviewData.imageUrl} />}
        </StyledPopup>
    );
};

const ReviewTopLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #868e96;
`;

const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgb(0, 0, 0, 0.8);
  }

  &-content {
    background-color: white;
    width: 45%;
    border-radius: 2px;
    padding: 40px;
  }
`;

const PopupTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PopupTitle = styled.div`
  font-family: 'SpoqaHanSans';
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;

const Divider = styled.div`
  width: 80%;
  height: 1px;
  flex-grow: 0;
  margin: 6px 252px 8px 0;
  background-color: #ced4da;
`;

const CloseButton = styled.button`
  cursor: pointer;
  outline: none;
  font-size: 18px;
  display: flex;
  line-height: 33px;
  background-color: transparent;
  border: none;

  svg {
    margin-right: 4px;
    color: black;
  }
`;

interface SizedBoxProps {
    width?: string;
    height?: string;
}

const SizedBox = styled.div<SizedBoxProps>`
  width: ${(props: SizedBoxProps) => (props.width)};
  height: ${(props: SizedBoxProps) => (props.height)};
  display: inline-block;
`;


const Image = styled.img<{ width: string, height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0;
`;
