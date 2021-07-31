import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface EstimateRowProps {
  label: string;
  children: ReactNode;
}

const EstimateRow: FC<EstimateRowProps> = ({ label, children }) => {
  return (
    <Row>
      <Label>{label}</Label>
      <Content>{children}</Content>
    </Row>
  );
};

export default EstimateRow;

const Row = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Label = styled.label`
  flex: 1;
  font-size: 16px;
  color: #868e96;
`;

const Content = styled.div`
  flex: 5;
`;
