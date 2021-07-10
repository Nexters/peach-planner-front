import React, { useEffect, useState } from 'react';
import * as $ from './MyPageView';
import Enterprise from '../../../component/PlannerPageItem/Enterprise';
import Estimate from '../../../component/PlannerPageItem/Estimate';

const sideMenuItem = [
  {
    name: '나의 견적서',
    value: 'estimate'
  },
  {
    name: '1:1 문의',
    value: 'question'
  },
  {
    name: '업체 관리',
    value: 'enterprise'
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

const PlannerPage = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSideMenuItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <$.FlexDiv justify="flex-start">
      <$.FlexDiv justify="flex-start" direction="column" width="500px">
        <$.ProfileDiv>
          <$.ProfileImgBox></$.ProfileImgBox>
          <$.FlexDiv height="20px">
            <$.MyPageSpan color="#212529">이수영</$.MyPageSpan>
            <$.MyPageSpan color="#D6336C" size="10px" margin="0 0 0 5px">
              관리자
            </$.MyPageSpan>
          </$.FlexDiv>
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
            return <$.SideMenuItem onClick={() => handleSideMenuItem(item.value)}>{item.name}</$.SideMenuItem>;
          })}
        </$.SideMenuDiv>
      </$.FlexDiv>
      <$.FlexDiv justify="flex-start" direction="column" width="1000px">
        {selectedItem === '' && (
          <>
            <Enterprise />
            <Estimate />
          </>
        )}
        {selectedItem === 'enterprise' && <Enterprise />}
        {selectedItem === 'estimate' && <Estimate />}
      </$.FlexDiv>
    </$.FlexDiv>
  );
};

export default PlannerPage;
