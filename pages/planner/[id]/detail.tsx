import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CompanyInfo from 'lib/pages/planner-detail/CompanyInfo';
import Detail from 'lib/pages/planner-detail/Detail';
import { PartnerInfo } from 'lib/pages/planner-detail/PartnerInfo';
import PlannerInfo from 'lib/pages/planner-detail/PlannerInfo';
import ReviewList from 'lib/pages/planner-detail/ReviewList';
import Summary from 'lib/pages/planner-detail/Summary';
import { Planner } from 'lib/api/Planner';
import axios from 'axios';
import Interaction from 'lib/pages/planner-detail/Interaction';
import { useUserTypeState } from 'lib/atoms/AuthStatus';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';


export const getServerSideProps: GetServerSideProps = async (context) => {
  const plannerId = context.params?.id as string;
  const planner = await axios.get(`/planners/${plannerId}`);
  return { props: { initialData: planner.data } };
}

export default ({ initialData }: { initialData: Planner }) => {
  const router = useRouter();
  const plannerId = router.query.id as string;
  const [userType, _] = useUserTypeState();
  const { data: plannerInfo, refetch: plannerRefetch } = useQuery(['planner', plannerId], async () => {
    return (await axios.get<Planner>(`/planners/${plannerId}`, {
      headers: {
        Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``
      }
    })).data;
  }, { initialData });

  useEffect(() => {
    plannerRefetch();
  }, []);

  if (!plannerInfo) {
    return <></>
  }

  return <Container>
    <Head>
      <title>피치플래너 - { initialData.name } 플래너</title>
      <meta key="description" name="description" content={ initialData.description || "한번뿐인 결혼식, 믿을 수 있는 웨딩플래너를 피치플래너에서 찾아보세요." } />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={ `피치플래너 - ${initialData.name} 플래너` } />
      <meta key="og:description" property="og:description" content={ initialData.description || "한번뿐인 결혼식, 믿을 수 있는 웨딩플래너를 피치플래너에서 찾아보세요." } />
      <meta key="og:image" property="og:image" content={ initialData.images?.length > 0 ? initialData.images[0] : undefined } />
      <meta key="og:url" property="og:url" content={ `http://peachplanner.com/planner/${initialData.id}/detail` } />
    </Head>
    <Summary plannerInfo={ plannerInfo }>
      { userType === 'USER' ? (
        <Interaction plannerInfo={ plannerInfo } postInteract={ plannerRefetch } />
      ) : (
        <></>
      ) }
    </Summary>
    <Detail plannerInfo={ plannerInfo } />
    <PlannerInfo plannerInfo={ plannerInfo } />
    { plannerInfo.company && <CompanyInfo companyInfo={ plannerInfo.company } /> }
    <PartnerInfo plannerId={ plannerId } />
    <ReviewList plannerId={ plannerId } />
  </Container>;
};

const Container = styled.div`
  width: 860px;
  margin: 0 auto;
`;
