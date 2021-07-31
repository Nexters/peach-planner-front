import React from 'react';
import UserInfoIcon from '../../component/UserInfoIcon';
import Container from './Container';
import styled from 'styled-components';
import PButton from '../../component/PButton';

const PlannerInfo = () => {
  return (
    <Container title="플래너 소개">
      <UserInfoIcon title="이윤경" detail="당신의 웨딩로망을 서포트합니다 :)" />
      <Detail>* 2018 - 2020년 3년 연속최우수 플래너</Detail>
      <PButton width="108px">1:1 문의하기</PButton>
    </Container>
  );
};

export default PlannerInfo;

const Detail = styled.div`
  margin: 17px 0 23.5px 0;
  font-size: 16px;
  color: #495057;
`;
