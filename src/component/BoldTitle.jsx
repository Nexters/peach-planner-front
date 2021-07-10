import React from 'react';
import styled from 'styled-components';

const BoldTitle = ({ size, children }) => {
  return <Title size={size}>{children}</Title>;
};

export default BoldTitle;

const Title = styled.p`
  margin: 0;
  font-size: ${({ size }) => (size ? `${size}px` : '18px')};
  font-weight: bold;
`;
