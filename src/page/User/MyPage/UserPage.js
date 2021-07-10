import React, { useEffect, useState } from 'react';
import * as $ from './MyPageView';

const sideMenuItem = [
  {
    name: '나의 하트',
    value: 'heart'
  },
  {
    name: '나의 견적서',
    value: 'estimate'
  },
  {
    name: '1:1 문의',
    value: 'question'
  },
  {
    name: '프로필 관리',
    value: 'profile'
  },
  {
    name: '계정 설정',
    value: 'setting'
  }
];

const UserPage = () => {
  return (
    <$.FlexDiv justify="flex-start">
      <$.FlexDiv direction="column">
        <$.ProfileDiv>
          <$.ProfileImgBox></$.ProfileImgBox>
          <$.MyPageSpan color="#212529">홍길동</$.MyPageSpan>
          <$.MyPageSpan color="#868E96" weight="normal" size="12px">
            example@gmail.com
          </$.MyPageSpan>
        </$.ProfileDiv>
        <$.SideMenuDiv>
          <$.MyPageSpan color="#000000" size="16px">
            내 페이지
          </$.MyPageSpan>
          <$.Line />
          {sideMenuItem.map((item) => {
            return <$.SideMenuItem>{item.name}</$.SideMenuItem>;
          })}
        </$.SideMenuDiv>
      </$.FlexDiv>
      <$.FlexDiv direction="column"></$.FlexDiv>
    </$.FlexDiv>
  );
};

export default UserPage;
