import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, CardImg, More, MyPageItemSpan } from './MyPageItemView';
import { FlexDiv } from './style/style';
import { fetchPicks } from 'src/api/Pick';

const Heart = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    fetchPicks()
      .then((data) => {
        setHearts(data.pickLists);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, []);

  return (
    <FlexDiv direction="column">
      <FlexDiv justify="space-between">
        <MyPageItemSpan margin={'0 0 25px'}>찜 목록</MyPageItemSpan>
      </FlexDiv>
      <CardContainer>
        {hearts.length > 0 &&
          hearts.map((heart, idx) => {
            return (
              <Card key={idx} margin={'0 20px 0 0'}>
                <CardImg src={heart?.imageUrlPath} width={'200px'} height={'200px'} />
                <MyPageItemSpan size="13px" color="#000000">
                  {heart?.name}
                </MyPageItemSpan>
                <MyPageItemSpan size="12px" color="#868E96">
                  {heart?.subName}
                </MyPageItemSpan>
              </Card>
            );
          })}
      </CardContainer>
    </FlexDiv>
  );
};

export default Heart;

const CardContainer = styled(FlexDiv)`
  justify-content: flex-start;
  flex-wrap: wrap;
`;
