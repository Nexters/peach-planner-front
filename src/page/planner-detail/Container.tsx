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
      <HorizontalLine color="#dee2e6" top="40px" bottom="40px" />
    </>
  );
};

export default Container;

export const Title = styled(BoldTitle)`
  margin-bottom: 13px;
`;
