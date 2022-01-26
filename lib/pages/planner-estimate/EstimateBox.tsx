import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface EstimateBoxProps {
  title?: string;
  children: ReactNode;
}

const EstimateBox: FC<EstimateBoxProps> = ({ title, children }) => {
  return (
    <Container>
      {title && <BoxTitle>{title}</BoxTitle>}
      {children}
    </Container>
  );
};

export default EstimateBox;

const Container = styled.div`
  width:812px;
  margin-bottom:10px;
  padding:24px;
  background-color: white;
`;

const BoxTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 20px;
`;
