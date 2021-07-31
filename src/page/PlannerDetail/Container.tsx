import React, { FC, ReactNode } from 'react';
import BoldTitle from '../../component/BoldTitle';
import HorizontalLine from '../../component/HorizontalLine';
import styled from 'styled-components';

interface ContainerProps {
  title: string;
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
      <HorizontalLine top="40px" bottom="40px" />
    </>
  );
};

export default Container;

export const Title = styled(BoldTitle)`
  margin-bottom: 13px;
`;
