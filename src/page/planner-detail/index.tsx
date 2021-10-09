import React from 'react';
import styled from 'styled-components';
import CompanyInfo from './CompanyInfo';
import Detail from './Detail';
import PartnerInfo from './PartnerInfo';
import PlannerInfo from './PlannerInfo';
import ReviewList from './ReviewList';
import Summary from './Summary';
import { useHistory, useRouteMatch } from 'react-router';
import { useQuery } from 'react-query';
import { Planner, fetchPlanner, fetchPlannerPartners } from '../../api/Planner';

interface routeProps {
  id: string;
}

const PlannerDetail = () => {
  const history = useHistory();
  const { params } = useRouteMatch<routeProps>();
  const plannerId = params.id;

  const { data: plannerInfo } = useQuery(['planner', plannerId], () => fetchPlanner(plannerId));
  // if (plannerInfo == undefined) {
  //   history.push('/');
  // }

  return plannerInfo ? (
    <Container>
      <Summary plannerInfo={plannerInfo} />
      <Detail plannerInfo={plannerInfo} />
      <PlannerInfo plannerInfo={plannerInfo} />
      <CompanyInfo companyInfo={plannerInfo.company} />
      <PartnerInfo plannerId={plannerId} />
      <ReviewList plannerId={plannerId} />
    </Container>
  ) : (
    <Container>해당 플래너 정보가 없습니다. </Container>
  );
};

export default PlannerDetail;

const Container = styled.div`
  width: 860px;
  margin: 0 auto;
`;
