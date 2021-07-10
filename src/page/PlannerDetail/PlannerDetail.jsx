import React from 'react';
import styled from 'styled-components';
import Summary from './Summary';

const PlannerDetail = () => {
  return (
    <Container>
      <Summary />
    </Container>
  );
};

export default PlannerDetail;

const Container = styled.div`
  width: 860px;
  margin: 0 auto;
`;
