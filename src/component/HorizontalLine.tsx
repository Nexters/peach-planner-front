import React, { FC } from 'react';
import styled from 'styled-components';

interface HorizontalLineProps {
  color?: string;
  top?: string;
  bottom?: string;
}

const HorizontalLine: FC<HorizontalLineProps> = ({ color, top, bottom }) => {
  return <Line color={color} top={top} bottom={bottom} />;
};

export default HorizontalLine;

const Line = styled.hr<HorizontalLineProps>`
  height: 1px;
  color: ${(props: HorizontalLineProps) => props.color};
  width: 100%;
  margin-top: ${(props: HorizontalLineProps) => props.top};
  margin-bottom: ${(props: HorizontalLineProps) => props.bottom};
`;
