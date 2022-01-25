import React, { FC, ReactNode } from 'react';
import BoldTitle from 'lib/pages/components/BoldTitle';
import styled from 'styled-components';
import HorizontalLine from 'lib/pages/components/HorizontalLine';

interface ContainerProps {
  id?: string;
  title: string;
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ id, title, children }) => {
  return (
    <>
      <Title id={id}>{title}</Title>
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
