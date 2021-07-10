import React from 'react';
import UserInfoIcon from '../../component/UserInfoIcon';
import Container from './Container';

const CompanyInfo = () => {
  return (
    <Container title="업체정보">
      <UserInfoIcon title="아이니웨딩" buttonText="프로필 보기" />
    </Container>
  );
};

export default CompanyInfo;
