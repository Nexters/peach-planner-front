import React from 'react';
import BoldTitle from '../../component/BoldTitle';
import HorizontalLine from '../../component/HorizontalLine';
import styled from 'styled-components';

const Container = ({ title, children }) => {
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
