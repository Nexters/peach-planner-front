import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CompanyInfo from './CompanyInfo';
import Detail from './Detail';
import { PartnerInfo } from './PartnerInfo';
import PlannerInfo from './PlannerInfo';
import ReviewList from './ReviewList';
import Summary from './Summary';
import { useHistory, useRouteMatch } from 'react-router';
import { useQuery } from 'react-query';
import { Planner } from '../../api/Planner';
import axios from 'axios';
import Interaction from './Interaction';
import { useUserTypeState } from 'src/atoms/AuthStatus';
import { Helmet } from "react-helmet";
import backgroundImage from "../../assets/img/img_background.png";

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

  return plannerInfo ? (
    <Container>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>피치플래너</title>
        <meta name="description" content="한번뿐인 결혼식, 믿을 수 있는 웨딩플래너를 피치플래너에서 찾아보세요."/>
        <meta name="robots" content="ALL"/>
        <meta name="robots" content="웨딩플래너,웨딩업체,결혼준비,결혼,웨딩플래너업체" />
        <meta name="author" content="피치플래너"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={`웨딩플래너 - ${plannerInfo.name} 플래너`}/>
        <meta property="og:description" content={plannerInfo.description || "한번뿐인 결혼식, 믿을 수 있는 웨딩플래너를 피치플래너에서 찾아보세요."}/>
        <meta property="og:image" content={plannerInfo.images.length > 0 ? plannerInfo.images[0] : backgroundImage}/>
        <meta property="og:url" content="http://peachplanner.com/"/>
        <meta charSet="utf-8" />
      </Helmet>
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
