import React from 'react';
import styled from 'styled-components';

const PButton = ({ color, width, height, fontSize, padding, children }) => {
  return (
    <Button color={color} width={width} height={height} fontSize={fontSize} padding={padding}>
      {children}
    </Button>
  );
};

export default PButton;

const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  padding: ${({ padding }) => (padding ? padding : '11px')};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  background-color: ${({ color }) => (color == 'pink' ? '#E64980' : 'white')};
  color: ${({ color }) => (color == 'pink' ? 'white' : 'black')};
  border: ${({ color }) => (color == 'pink' ? 'none' : '1px solid #adb5bd')};
`;
