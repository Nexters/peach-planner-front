import React from 'react';
import styled from 'styled-components';
import Detail from './Detail';
import Summary from './Summary';

const PlannerDetail = () => {
  return (
    <Container>
      <Summary />
      <Detail />
    </Container>
  );
};

export default PlannerDetail;

const Container = styled.div`
  width: 860px;
  margin: 0 auto;
`;
