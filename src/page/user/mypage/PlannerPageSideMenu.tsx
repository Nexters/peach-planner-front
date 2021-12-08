import { useState } from 'react';
import styled from 'styled-components';
import AccountDefault from 'src/assets/svg/ic_account_default.svg';
import { Content, Title } from 'src/component/style/style';
import UserType from 'src/component/UserType';
import { useHistory } from 'react-router';
import { getUser } from 'src/api/User';
import { useQuery } from 'react-query';

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
  const history = useHistory();
  const { data: user } = useQuery(['getUser'], getUser);
  const [selectedItem, setSelectedItem] = useState('');

  const handleSideMenuItem = (item: string) => {
    setSelectedItem(item);
    if (item === 'profile') {
      history.push('/plannerProfile');
    } else if (item === 'setting') {
      history.push('/plannerSetting');
    } else if (item === 'estimate') {
      history.push('/plannerMyEstimate');
    }
  };

  return (
    <FlexDiv justify="flex-start" width="200px">
      <FlexDiv justify="flex-start" direction="column">
        <ProfileDiv>
          <ProfileImgBox src={AccountDefault}></ProfileImgBox>
          <FlexDiv height="20px" margin="8px 0px 8px 0px">
            <Title fontSize="14px" height="21px" color="#212529" lineHeight="20px" margin="0px 4px 0px 0px">
              {user?.name}
            </Title>
            <UserType
              type={user?.userType}
              textHeight="15px"
              typeHeight="16px"
              fontSize="10px"
              lineHeight="13px"
            ></UserType>
          </FlexDiv>
          <Content color="#868E96" width="auto" height="18px" lineHeight="10px" fontSize="12px">
            {user?.email}
          </Content>
        </ProfileDiv>
        <SideMenuDiv>
          <TitleBox onClick={() => history.push('/plannerPage')}>
            <Title height="16px" fontSize="16px" lineHeight="10px">
              내 페이지
            </Title>
          </TitleBox>
          <Line></Line>
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

const SideMenuItemContainer = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  height: 1px;
  width: 200px;
  border-bottom: 1px solid;
  border-bottom-color: #212529;
`;

const TitleBox = styled.div`
  width: 63px;
  height: 24px;
  cursor: pointer;
`;
