import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface EstimateRowProps {
  label: string;
  children: ReactNode;
}

const EstimateRow: FC<EstimateRowProps> = ({ label, children }) => {
  return (
    <Row label={label}>
      <Label label={label}>{label}</Label>
      <Content>{children}</Content>
    </Row>
  );
};

export default EstimateRow;

const Row = styled.div<{label?:string}>`
  display: flex;
  margin-top: 15px;
  align-items: ${(props) => props.label === '스튜디오' || props.label==='드레스' ||  props.label==='메이크업' ? 'flex-start' : 'center'};
`;

const Label = styled.label<{label?: string}>`
  flex: 1;
  font-size: 16px;
  color: #868e96;
  margin-top: ${(props) => props.label === '스튜디오' || props.label==='드레스' ||  props.label==='메이크업' ? '15px' : '0'};
`;

const Content = styled.div`
  flex: 5;
`;
