import React, { useEffect, useState } from 'react';
import { FlexDiv, ProfileDiv, ProfileImgBox, MyPageSpan, SideMenuDiv, Line, SideMenuItem } from './MyPageView';
import Heart from '../../../component/Heart';
import Estimate from '../../../component/Estimate';
import Setting from 'src/component/Setting';
import { getUser } from 'src/api/User';
import { useQuery } from 'react-query';

const sideMenuItem = [
  {
    name: '찜목록',
    value: 'heart'
  },
  {
    name: '나의 견적서',
    value: 'estimate'
  },
  // {
  //   name: '1:1 문의',
  //   value: 'question'
  // },
  // {
  //   name: '프로필 관리',
  //   value: 'profile'
  // },
  {
    name: '계정 설정',
    value: 'setting'
  }
];

const UserPage = () => {
  const { data: user } = useQuery(['getUser'], getUser);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    console.log(user, 'useruseruseruseruser');
  }, []);

  const handleSideMenuItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <FlexDiv justify="center">
      <FlexDiv justify="flex-start" direction="column" width="500px">
        <ProfileDiv>
          <ProfileImgBox></ProfileImgBox>
          <MyPageSpan color="#212529">{user?.name}</MyPageSpan>
          <MyPageSpan color="#868E96" weight="normal" size="12px">
            {user?.email}
          </MyPageSpan>
        </ProfileDiv>
        <SideMenuDiv>
          <MyPageSpan color="#000000" size="16px">
            내 페이지
          </MyPageSpan>
          <Line />
          {sideMenuItem.map((item) => {
            return <SideMenuItem onClick={() => handleSideMenuItem(item.value)}>{item.name}</SideMenuItem>;
          })}
        </SideMenuDiv>
      </FlexDiv>
      <FlexDiv justify="flex-start" direction="column" width="1000px">
        {selectedItem === '' && (
          <>
            <Heart />
            <Estimate />
          </>
        )}
        {selectedItem === 'heart' && <Heart />}
        {selectedItem === 'estimate' && <Estimate />}
        {selectedItem === 'setting' && <Setting />}
      </FlexDiv>
    </FlexDiv>
  );
};

export default UserPage;
