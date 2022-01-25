import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CompanyInfo from 'lib/pages/planner-detail/CompanyInfo';
import Detail from 'lib/pages/planner-detail/Detail';
import { PartnerInfo } from 'lib/pages/planner-detail/PartnerInfo';
import PlannerInfo from 'lib/pages/planner-detail/PlannerInfo';
import ReviewList from 'lib/pages/planner-detail/ReviewList';
import Summary from 'lib/pages/planner-detail/Summary';
import { useQuery } from 'react-query';
import { Planner } from 'lib/api/Planner';
import axios from 'axios';
import Interaction from 'lib/pages/planner-detail/Interaction';
import { useUserTypeState } from 'lib/atoms/AuthStatus';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface routeProps {
  id: string;
}

export default () => {
  const [plannerInfo, setPlannerInfo] = useState<Planner | null>(null);
  const [userType, _] = useUserTypeState();
  const history = useRouter();
  const plannerId = history.query.id as string;

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

  return plannerInfo ? (
    <Container>
      <Head>
        
        <title>피치플래너 - {plannerInfo.name} 플래너</title>
        <meta name="description" content={ plannerInfo.description || "한번뿐인 결혼식, 믿을 수 있는 웨딩플래너를 피치플래너에서 찾아보세요." } />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`피치플래너 - ${plannerInfo.name} 플래너`} />
        <meta property="og:description" content={ plannerInfo.description || "한번뿐인 결혼식, 믿을 수 있는 웨딩플래너를 피치플래너에서 찾아보세요." } />
        <meta property="og:image" content={ plannerInfo.images.length > 0 ? plannerInfo.images[0] : undefined } />
        <meta property="og:url" content="http://peachplanner.com/" />
      </Head>
      <Summary plannerInfo={ plannerInfo }>
        { userType === 'USER' ? (
          <Interaction plannerInfo={ plannerInfo } setPlannerInfo={ setPlannerInfo } />
        ) : (
          <></>
        ) }
      </Summary>
      <Detail plannerInfo={ plannerInfo } />
      <PlannerInfo plannerInfo={ plannerInfo } />
      { plannerInfo.company && <CompanyInfo companyInfo={ plannerInfo.company } /> }
      <PartnerInfo plannerId={ plannerId } />
      <ReviewList plannerId={ plannerId } />
    </Container>
  ) : (
    <></>
  );
};

const Container = styled.div`
  width: 860px;
  margin: 0 auto;
`;
