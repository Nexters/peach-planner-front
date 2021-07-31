import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { ReactComponent as Check } from '../../assets/svg/ic_check.svg';

const Detail = () => {
  const DETAIL_LIST = ['서울', '경기', '동행하는 플래너에요', '모바일청첩장을 제공해요', '제휴웨딩홀이 있어요'];

  return (
    <Container title="플래너가 담당해요">
      <InnerContainer>
        {DETAIL_LIST.map((detail, i) => (
          <DetailItem key={i}>
            <Check /> {detail}
          </DetailItem>
        ))}
      </InnerContainer>
    </Container>
  );
};

export default Detail;

const InnerContainer = styled.div`
  margin-top: 13px;
  display: flex;
`;

const DetailItem = styled.span`
  margin-right: 8px;
  display: flex;
`;
