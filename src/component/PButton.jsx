import React from 'react';
import styled from 'styled-components';

const PButton = ({ color, children }) => {
  return <Button color={color}>{children}</Button>;
};

export default PButton;

const Button = styled.button`
  border-radius: 3px;
  width: 100%;
  padding: 11px;
  font-size: 14px;
  background-color: ${({ color }) => (color == 'pink' ? '#E64980' : 'white')};
  color: ${({ color }) => (color == 'pink' ? 'white' : 'black')};
  border: ${({ color }) => (color == 'pink' ? 'none' : '1px solid #adb5bd')};
`;
