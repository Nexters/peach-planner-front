import React from 'react';
import styled from 'styled-components';
import PartnerItem from './PartnerItem';

const PartnerRow = ({ info }) => {
  return (
    <Container>
      <TopContainer>
        <Title>{info.title}</Title>
        <div>더보기, 화살표 아이콘</div>
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

const BottomContainer = styled.div`
  display: flex;
`;
