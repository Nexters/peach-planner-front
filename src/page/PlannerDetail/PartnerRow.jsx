import React from 'react';
import styled from 'styled-components';
import PartnerItem from './PartnerItem';
import { ReactComponent as LeftArrow } from '../../assets/svg/ic_arrow_left.svg';
import { ReactComponent as RightArrow } from '../../assets/svg/ic_arrow_right.svg';

const PartnerRow = ({ info }) => {
  return (
    <Container>
      <TopContainer>
        <Title>{info.title}</Title>
        <TopRightContainer>
          <ViewMore>더 보기</ViewMore>
          <LeftArrow />
          <RightArrow />
        </TopRightContainer>
      </TopContainer>
      <BottomContainer>
        {info.data.map((item, i) => (
          <PartnerItem data={item} key={i} />
        ))}
      </BottomContainer>
    </Container>
  );
};

export default PartnerRow;

const Container = styled.div`
  margin: 13px 0 32px 0;
`;

const TopContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 16px;
  color: #495057;
  font-weight: bold;
`;

const TopRightContainer = styled.div`
  display: flex;

  svg {
    margin-left: 8px;
  }
`;

const ViewMore = styled.div`
  text-decoration: underline;
  margin-right: 16px;
`;

const BottomContainer = styled.div`
  display: flex;
`;
