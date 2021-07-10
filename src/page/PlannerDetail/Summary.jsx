import React from 'react';
import styled from 'styled-components';
import HorizontalLine from '../../component/HorizontalLine';
import PButton from '../../component/PButton';

const Summary = () => {
  const PLANNER_NAME = '이윤경';
  const COMPANY_NAME = '아이니웨딩';
  const HEART_COUNT = 12;
  const ONE_LINE = '당신의 웨딩로망을 서포트합니다 :)';

  return (
    <Container>
      <ImageContainer>Image?</ImageContainer>
      <InformationContainer>
        <InnerContainer>
          <NameContainer>
            <p>{PLANNER_NAME} 플래너</p>
            <div>HEART {HEART_COUNT}</div>
          </NameContainer>
          <CompanyName>{COMPANY_NAME}</CompanyName>
          <HorizontalLine top={12} bottom={15} />

          <BoldGray>플래너 한줄소개</BoldGray>
          <OneLine>{ONE_LINE}</OneLine>
          <HorizontalLine top={36} bottom={11} />

          <BoldGray>소셜미디어</BoldGray>
          <p>아이콘 추가하기~ </p>

          <PButton color="pink">견적 요청하기</PButton>
          <PButton>1:1 문의하기</PButton>
          <PButton>찜하기</PButton>
        </InnerContainer>
      </InformationContainer>
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  background-color: #e9ecef;
  flex: 1;
`;

const InformationContainer = styled.div`
  flex: 1;
`;

const InnerContainer = styled.div`
  padding: 32px;
`;

const NameContainer = styled.div`
  display: flex;
  margin-bottom: 6px;
  justify-content: space-between;

  p {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }

  div {
    font-size: 14px;
  }
`;

const CompanyName = styled.div`
  color: #e64980;
  font-size: 16px;
  font-weight: bold;
`;

const BoldGray = styled.div`
  margin-bottom: 4px;
  font-size: 13px;
  color: #868e96;
`;

const OneLine = styled.div`
  font-size: 14px;
`;
