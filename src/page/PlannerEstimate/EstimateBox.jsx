import React from 'react';
import styled from 'styled-components';

const EstimateBox = ({ children }) => {
  return <Container>{children}</Container>;
};

export default EstimateBox;

const Container = styled.div`
  margin: 0 auto 24px auto;
  padding: 24px;
  background-color: white;
`;
