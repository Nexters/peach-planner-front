import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AccountDefault from 'src/assets/svg/ic_account_default.svg';
import { Content, Title } from 'src/component/style/style';
import UserType from 'src/component/UserType';

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
    name: '프로필 관리',
    value: 'profile'
  },
  {
    name: '계정 설정',
    value: 'setting'
  }
];

const PlannerPageSideMenu = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSideMenuItem = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <FlexDiv justify="flex-start" width="200px">
      <FlexDiv justify="flex-start" direction="column">
        <ProfileDiv>
          <ProfileImgBox src={AccountDefault}></ProfileImgBox>
          <FlexDiv height="20px" margin="8px 0px 8px 0px">
            <Title fontSize="14px" height="21px" color="#212529" lineHeight="20px" margin="0px 4px 0px 0px">
              이수영
            </Title>
            <UserType type="관리자" textHeight="15px" typeHeight="16px" fontSize="10px" lineHeight="13px"></UserType>
          </FlexDiv>
          <Content color="#868E96" width="auto" height="18px" lineHeight="10px" fontSize="12px">
            example@gmail.com
          </Content>
        </ProfileDiv>
        <SideMenuDiv>
          <Title height="16px" fontSize="16px" lineHeight="10px">
            내 페이지
          </Title>
          <Line></Line>
          {sideMenuItem.map((item) => {
            return <SideMenuItem onClick={() => handleSideMenuItem(item.value)}>{item.name}</SideMenuItem>;
          })}
        </SideMenuDiv>
      </FlexDiv>
    </FlexDiv>
  );
};

export default PlannerPageSideMenu;

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

interface ImageProps {
  src: string;
}

const ProfileImgBox = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 88px;
  width: 88px;
  border-radius: 100%;
`;

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SideMenuDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 21px;
  width: 200px;
`;

const SideMenuItem = styled.li`
  height: 32px;
  color: #212529;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17px;

  cursor: pointer;
  list-style: none;
`;

const Line = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  height: 1px;
  width: 200px;
  border-bottom: 1px solid;
  border-bottom-color: #212529;
`;
