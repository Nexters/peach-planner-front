import React, { useEffect, useState } from 'react';
import { getUserMe } from 'lib/api/User';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import AccountDefault from 'public/assets/svg/ic_account_default.svg';
import { Content, Title } from 'lib/pages/components/style/style';
import { useRouter } from 'next/router';

const sideMenuItem = [
  {
    name: '1:1 문의',
    value: 'chat'
  },
  {
    name: '계정 설정',
    value: 'setting'
  }
];

const UserPageSideMenu = () => {
  const router = useRouter();
  const { data: user } = useQuery(['getUser'], getUserMe);
  const [selectedItem, setSelectedItem] = useState('');

  const handleSideMenuItem = (item: any) => {
    setSelectedItem(item);

    if (item === 'setting') {
      router.push('/userSetting');
    } else if (item == 'chat') {
      router.push('/chats');
    }
  };

  return (
    <FlexDiv justify="center" width="200px">
      <FlexDiv justify="flex-start" direction="column">
        <ProfileDiv>
          <ProfileImgBox src={user?.profileImage ?? AccountDefault.src} />
          <FlexDiv height="20px" margin="8px 0px 8px 0px">
            <Title fontSize="14px" height="21px" color="#212529" lineHeight="20px" margin="0px 4px 0px 0px">
              {user?.name}
            </Title>
          </FlexDiv>
          <Content color="#868E96" width="auto" height="18px" lineHeight="10px" fontSize="12px">
            {user?.email}
          </Content>
        </ProfileDiv>
        <SideMenuDiv>
          <TitleBox onClick={() => router.push('/userPage')}>
            <Title height="16px" fontSize="16px" lineHeight="10px">
              내 페이지
            </Title>
          </TitleBox>
          <Line />
          {sideMenuItem.map((item) => {
            return (
              <SideMenuItemContainer>
                <Content
                  height="17px"
                  width="auto"
                  color="#212529"
                  fontSize="14px"
                  lineHeight="17px"
                  onClick={() => handleSideMenuItem(item.value)}
                >
                  {item.name}
                </Content>
              </SideMenuItemContainer>
            );
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

interface ImageProps {
  src: string;
}

const ProfileImgBox = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 88px;
  width: 88px;
  border-radius: 100%;
`;

const SideMenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 21px;
`;

const Line = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  height: 1px;
  width: 200px;
  border-bottom: 1px solid;
  border-bottom-color: #212529;
`;

const SideMenuItemContainer = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled.div`
  width: 63px;
  height: 24px;
  cursor: pointer;
`;
