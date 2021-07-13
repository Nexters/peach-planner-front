import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/svg/logo_peachplanner.svg';
import PButton from './PButton';

const Header = () => {
  let history = useHistory();
  const handleSignUp = () => history.push('/signup');

  return (
    <Container>
      <InnerContainer>
        <Link to="/">
          <Logo />
        </Link>
        <LeftLink to="/search">웨딩플래너 찾기</LeftLink>
        <LeftLink to="/community">커뮤니티</LeftLink>
      </InnerContainer>
      <InnerContainer>
        <RightLink to="/signup">플래너 가입</RightLink>
        <RightLink to="/login">로그인</RightLink>
        <PButton color="pink" width="114px" height="33px" fontSize="12px" padding="0" onClick={handleSignUp}>
          무료 회원가입
        </PButton>
      </InnerContainer>
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
