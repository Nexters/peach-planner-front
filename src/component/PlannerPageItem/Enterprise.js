import React from 'react';
import * as $ from '../MyPageItem/MyPageItemView';

const Enterprise = () => {
  return (
    <$.FlexDiv direction="column">
      <$.FlexDiv justify="space-between">
        <$.MyPageItemSpan>나의 업체</$.MyPageItemSpan>
        <$.MyPageButton radius="3px" width="119px" height="40px">
          + 플래너 초대
        </$.MyPageButton>
      </$.FlexDiv>
      <$.FlexDiv justify="flex-start">
        <$.EnterpriseDiv>
          <$.ProfileImgBox width="70px" height="70px"></$.ProfileImgBox>
          <$.MyPageItemSpan margin="16px 0 6px 0">아이니웨딩</$.MyPageItemSpan>
          <$.MyPageItemSpan color="#000000" weight="normal" size="13px">
            서울특별시 강남구 언주로130길 35 동양애니메이션빌딩
          </$.MyPageItemSpan>
          <$.MyPageItemSpan margin="16px 0 6px 0" color="#000000" weight="normal" size="13px">
            소속 플래너 1
          </$.MyPageItemSpan>
          <$.MyPageButton
            background="transparent"
            radius="3px"
            width="96px"
            height="33px"
            border="1px solid #ADB5BD"
            margin="24px 0 0 0"
            color="#000000"
          >
            플래너 보기
          </$.MyPageButton>
        </$.EnterpriseDiv>
      </$.FlexDiv>
    </$.FlexDiv>
  );
};

export default Enterprise;
