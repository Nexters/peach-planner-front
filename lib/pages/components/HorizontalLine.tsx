import React, { FC } from 'react';
import styled from 'styled-components';

interface HorizontalLineProps {
  height?: string;
  color?: string;
  top?: string;
  bottom?: string;
}

const HorizontalLine: FC<HorizontalLineProps> = ({ height = '1px', color, top, bottom }) => {
  return <Line height={height} color={color} top={top} bottom={bottom} />;
};

export default HorizontalLine;

const Line = styled.hr<HorizontalLineProps>`
  height: ${(props: HorizontalLineProps) => props.height};
  color: ${(props: HorizontalLineProps) => props.color};
  width: 100%;
  margin-top: ${(props: HorizontalLineProps) => props.top};
  margin-bottom: ${(props: HorizontalLineProps) => props.bottom};
`;
