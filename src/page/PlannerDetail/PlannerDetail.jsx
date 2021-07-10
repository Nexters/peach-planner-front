import React from 'react';
import styled from 'styled-components';
import CompanyInfo from './CompanyInfo';
import Detail from './Detail';
import PartnerInfo from './PartnerInfo';
import PlannerInfo from './PlannerInfo';
import Summary from './Summary';

const PlannerDetail = () => {
  return (
    <Container>
      <Summary />
      <Detail />
      <PlannerInfo />
      <CompanyInfo />
      <PartnerInfo />
    </Container>
  );
};

export default PlannerDetail;

const Container = styled.div`
  width: 860px;
  margin: 0 auto;
`;
