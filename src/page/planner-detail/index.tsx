import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CompanyInfo from './CompanyInfo';
import Detail from './Detail';
import PartnerInfo from './PartnerInfo';
import PlannerInfo from './PlannerInfo';
import ReviewList from './ReviewList';
import Summary from './Summary';
import { useHistory, useRouteMatch } from 'react-router';
import { useQuery } from 'react-query';
import { Planner } from '../../api/Planner';
import axios from 'axios';
import Interaction from './Interaction';
import { useUserTypeState } from 'src/atoms/AuthStatus';

interface routeProps {
  id: string;
}

const PlannerDetail = () => {
  const [plannerInfo, setPlannerInfo] = useState<Planner | null>(null);
  const [userType, _] = useUserTypeState();
  const history = useHistory();
  const { params } = useRouteMatch<routeProps>();
  const plannerId = params.id;

  // const { data: plannerInfo, error } = useQuery(['planner', plannerId], () => fetchPlanner(plannerId));

  const fetchPlanner = () => {
    axios
      .get(`/planners/${plannerId}`, {
        headers: {
          Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``
        }
      })
      .then((response) => {
        setPlannerInfo({ ...response.data });
      })
      .catch((err) => {
        history.push('/');
      });
  };

  useEffect(() => {
    fetchPlanner();
  }, []);

  console.log(userType);

  return plannerInfo ? (
    <Container>
      <Summary plannerInfo={plannerInfo}>
        {userType === 'USER' ? (
          <Interaction plannerInfo={plannerInfo} setPlannerInfo={setPlannerInfo}></Interaction>
        ) : (
          <></>
        )}
      </Summary>
      <Detail plannerInfo={plannerInfo} />
      <PlannerInfo plannerInfo={plannerInfo} />
      {plannerInfo.company && <CompanyInfo companyInfo={plannerInfo.company} />}
      <PartnerInfo plannerId={plannerId} />
      <ReviewList plannerId={plannerId} />
    </Container>
  ) : (
    <></>
  );
};

export default PlannerDetail;

const Container = styled.div`
  width: 860px;
  margin: 0 auto;
`;
