import React from 'react';
import styled from 'styled-components';

interface LineProp {
  color?: string;
  top?: string;
  bottom?: string;
}

const HorizontalLine = ({ color, top, bottom }: LineProp) => {
  return <Line color={color} top={top} bottom={bottom} />;
};

export default HorizontalLine;

const Line = styled.hr<LineProp>`
  color: ${(props: LineProp) => props.color};
  width: 100%;
  top: ${(props: LineProp) => props.top};
  bottom: ${(props: LineProp) => props.bottom};
`;
