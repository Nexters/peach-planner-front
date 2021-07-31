import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface BoldTitleProps {
  size?: number;
  children: ReactNode;
}

const BoldTitle: FC<BoldTitleProps> = ({ size, children }) => {
  return <Title size={size}>{children}</Title>;
};

export default BoldTitle;

const Title = styled.p<{ size: number | undefined }>`
  margin: 0;
  font-size: ${({ size }) => (size ? `${size}px` : '18px')};
  font-weight: bold;
`;
