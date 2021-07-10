import React from 'react';
import styled from 'styled-components';

const HorizontalLine = ({ top, bottom }) => {
  return <Line top={top} bottom={bottom} />;
};

export default HorizontalLine;

const Line = styled.hr`
  color: #dee2e6;
  width: 100%;
  ${({ top }) => `margin-top: ${top}px;`}
  ${({ bottom }) => `margin-bottom: ${bottom}px;`}
`;
