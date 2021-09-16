import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/svg/logo_peachplanner.svg';
import PButton from './PButton';
import { usePeachTokenState } from 'src/atoms/AuthStatus';
import DefaultProfileImage from '../assets/svg/ic_account_default.svg';
import DownArrowImage from '../assets/svg/ic_arrow_down.svg';
import NotiDefault from '../assets/svg/ic_noti_default.svg';
import HorizontalLine from './HorizontalLine';

const Header = () => {
  let history = useHistory();
  const handleSignUp = () => history.push('/signUp');
  const [peachTokenState] = usePeachTokenState();
  const [isClickedProfile, setIsClickedProfile] = useState(false);
  const [isAlart, setIsAlart] = useState(false);
  const isLogin = peachTokenState ? true : false;
  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.reload();
  };

  const handleClickProfile = () => {
    setIsClickedProfile(!isClickedProfile);
  };

  const handleClickNoti = () => {
    setIsAlart(!isAlart);
  };

  let right;
  if (isLogin) {
    right = (
      <InnerContainer>
        <ProfileContainer>
          <NotiImage src={NotiDefault}></NotiImage>
          <ProfileBox onClick={handleClickProfile}>
            <ProfileImage src={DefaultProfileImage}></ProfileImage>
            <DropdownImage src={DownArrowImage}></DropdownImage>
          </ProfileBox>
        </ProfileContainer>
        {isClickedProfile ? (
          <DropdownContainer>
            <MenuTop>
              <Menu>
                <DropdownMessage>메시지</DropdownMessage>
              </Menu>
            </MenuTop>
            <MenuBody>
              <Menu>
                <MenuName>내 페이지</MenuName>
              </Menu>
              <Menu>
                <MenuName>프로필 관리</MenuName>
              </Menu>
              <Menu>
                <MenuName>계정 설정</MenuName>
              </Menu>
            </MenuBody>
            <MenuBottom>
              <Menu>
                <MenuName onClick={logout}>로그 아웃</MenuName>
              </Menu>
            </MenuBottom>
          </DropdownContainer>
        ) : (
          <></>
        )}
      </InnerContainer>
    );
  } else {
    right = (
      <InnerContainer>
        <RightLink to="/plannerSignUp">플래너 가입</RightLink>
        <RightLink to="/login">로그인</RightLink>
        <PButton color="pink" width="114px" height="33px" fontSize="12px" padding="0" onClick={handleSignUp}>
          무료 회원가입
        </PButton>
      </InnerContainer>
    );
  }

  return (
    <Container>
      <InnerContainer>
        <Link to="/">
          <Logo />
        </Link>
        <LeftLink to="/search">웨딩플래너 찾기</LeftLink>
      </InnerContainer>
      {right}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 1110px;
  margin: 0 auto;
  padding: 20px 0 18px 0;
  display: flex;
  justify-content: space-between;
`;

const InnerContainer = styled.div``;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #495057;
  font-size: 13px;
  line-height: 19px;
`;

const LeftLink = styled(StyledLink)`
  margin-left: 35px;
`;

const RightLink = styled(StyledLink)`
  margin-right: 32px;
`;

const DropdownContainer = styled.div`
  position: absolute;
  margin: 10px 0 0 0;
  height: auto;
  width: 234px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 #adb5bd;
`;

const ProfileBox = styled.div`
  box-sizing: border-box;
  border-radius: 30px;
  height: 41px;
  width: 91px;
  border: 1px solid #dee2e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

interface ImageProps {
  src: string;
}

const ProfileImage = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 32px;
  width: 32px;
  margin: 0 0 0 7px;
`;

const DropdownImage = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 24px;
  width: 24px;
  margin: 0 10px 0 0;
`;

const NotiImage = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 24px;
  width: 24px;
  margin: 0 10px 0 0;
`;

const MenuTop = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  border-bottom: solid 1px #ced4da;
`;

const Menu = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DropdownMessage = styled.div`
  height: 19px;
  width: auto;
  color: #000000;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
  margin-left: 16px;
`;

const MenuName = styled.div`
  height: 16px;
  width: auto;
  color: #000000;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 16px;
  margin-left: 16px;
`;

const MenuBody = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  border-bottom: solid 1px #ced4da;
`;

const MenuBottom = styled.div`
  margin-bottom: 16px;
`;
