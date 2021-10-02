import React, { FC, ReactNode } from 'react';
import BoldTitle from '../../component/BoldTitle';
import styled from 'styled-components';
import HorizontalLine from '../../component/HorizontalLine';

interface ContainerProps {
  title: string;
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
      <HorizontalLine height="0.1px" color="#dee2e6" top="40px" bottom="40px" />
    </>
  );
};

export default Container;

export const Title = styled.p`
  margin-bottom: 25px;
  font-weight: bold;
  font-size: 18px;
`;