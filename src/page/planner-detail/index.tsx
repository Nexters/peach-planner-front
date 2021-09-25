import React from 'react';
import styled from 'styled-components';
import CompanyInfo from './CompanyInfo';
import Detail from './Detail';
import PartnerInfo from './PartnerInfo';
import PlannerInfo from './PlannerInfo';
import ReviewList from './ReviewList';
import Summary from './Summary';
import { useRouteMatch } from 'react-router';
import { useQuery } from 'react-query';
import { Planner, fetchPlanner, fetchPlannerPartners } from '../../api/Planner';

interface routeProps {
  id: string;
}

const PlannerDetail = () => {
  const { params } = useRouteMatch<routeProps>();
  const plannerId = params.id;

  const { data: plannerInfo } = useQuery(['planner', plannerId], () => fetchPlanner(plannerId));

  return plannerInfo ? (
    <Container>
      <Summary plannerInfo={plannerInfo} />
      <Detail plannerInfo={plannerInfo} />
      <PlannerInfo plannerInfo={plannerInfo} />
      <CompanyInfo companyInfo={plannerInfo.company} />
      <PartnerInfo plannerId={plannerId} />
      <ReviewList plannerInfo={plannerInfo} />
    </Container>
  ) : (
    <>Loading</>
  );
};

export default PlannerDetail;

const Container = styled.div`
  width: 860px;
  margin: 0 auto;
`;
