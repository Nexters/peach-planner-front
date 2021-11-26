import React, { useEffect, useState } from 'react';
import Heart from '../../../component/Heart';
import Estimate from '../../../component/Estimate';
import Setting from 'src/component/Setting';
import { getUser } from 'src/api/User';
import { useQuery } from 'react-query';
import styled from 'styled-components';

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

const UserPageSideMenu = () => {
  const { data: user } = useQuery(['getUser'], getUser);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    console.log(user, 'useruseruseruseruser');
  }, []);

  const handleSideMenuItem = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <FlexDiv justify="center" width="200px">
      <FlexDiv justify="flex-start" direction="column">
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
    </FlexDiv>
  );
};

export default UserPageSideMenu;

interface FlexDivProps {
  width?: string;
  justify?: string;
  align?: string;
  direction?: string;
  margin?: string;
  height?: string;
}

const FlexDiv = styled.div<FlexDivProps>`
  width: ${(props) => props.width || '100%'};
  display: flex;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  flex-direction: ${(props) => props.direction || 'row'};
  margin: ${(props) => props.margin || '20px 0'};
  height: ${(props) => props.height || '100vh'};
`;

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

interface MyPageSpanProps {
  color?: string;
  size?: string;
  weight?: string;
  cursor?: string;
  margin?: string;
}

const MyPageSpan = styled.span<MyPageSpanProps>`
  height: 20px;
  color: ${(props) => props.color || '#495057'};
  font-size: ${(props) => props.size || '14px'};
  letter-spacing: 0;
  line-height: 20px;
  font-weight: ${(props) => props.weight || 'bold'};
  cursor: ${(props) => props.cursor || 'default'};
  margin: ${(props) => props.margin || '0'};
`;

const ProfileImgBox = styled.div`
  height: 88px;
  width: 88px;
  background-color: #adb5bd;
  border-radius: 100%;
`;

const SideMenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 21px;
`;

const Line = styled.hr`
  height: 1px;
  width: 200px;
  background-color: #212529;
  margin: 16px 0;
`;

const SideMenuItem = styled.li`
  height: 17px;
  color: #212529;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17px;
  margin: 12px 0;
  cursor: pointer;
  list-style: none;
`;
