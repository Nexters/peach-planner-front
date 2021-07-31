import React, { FC } from 'react';
import styled from 'styled-components';

interface HorizontalLineProps {
  top?: string;
  bottom?: string;
}

const HorizontalLine: FC<HorizontalLineProps> = ({ top, bottom }) => {
  return <Line top={top} bottom={bottom} />;
};

export default HorizontalLine;

const Line = styled.hr<{ top?: string; bottom?: string }>`
  color: #dee2e6;
  width: 100%;
  ${({ top }) => `margin-top: ${top};`}
  ${({ bottom }) => `margin-bottom: ${bottom};`}
`;
