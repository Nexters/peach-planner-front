import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/svg/logo_peachplanner.svg';
import PButton from './PButton';
import { usePeachTokenState } from 'src/atoms/AuthStatus';

const Header = () => {
  let history = useHistory();
  const handleSignUp = () => history.push('/signUp');
  const [peachTokenState] = usePeachTokenState();
  const LOGGED_IN = peachTokenState ? false : true;
  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.reload();
  };

  let right;
  if (LOGGED_IN) {
    right = (
      <InnerContainer>
        <RightLink to="/plannerSignUp">플래너 가입</RightLink>
        <RightLink to="/login">로그인</RightLink>
        <PButton color="pink" width="114px" height="33px" fontSize="12px" padding="0" onClick={handleSignUp}>
          무료 회원가입
        </PButton>
      </InnerContainer>
    );
  } else {
    right = (
      <InnerContainer>
        <DropdownContainer>
          {/* TODO: 버튼 디자인 */}
          <button>
            <span>User</span>
          </button>
          <nav>
            <ul>
              <li>메시지</li>
              <li>알림</li>
              <li>내 페이지</li>
              <li>프로필 관리</li>
              <li>계정 설정</li>
              <li onClick={logout}>로그아웃</li>
            </ul>
          </nav>
        </DropdownContainer>
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

const DropdownContainer = styled.div``;
