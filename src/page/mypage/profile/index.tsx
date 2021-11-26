import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Planner } from 'src/api/Planner';
import PButton from 'src/component/PButton';
import { Content } from 'src/component/style/style';
import CompanyInfo from 'src/page/planner-detail/CompanyInfo';
import Detail from 'src/page/planner-detail/Detail';
import PartnerInfo from 'src/page/planner-detail/PartnerInfo';
import PlannerInfo from 'src/page/planner-detail/PlannerInfo';
import ReviewList from 'src/page/planner-detail/ReviewList';
import Summary from 'src/page/planner-detail/Summary';
import styled from 'styled-components';
import LeftArrow from 'src/assets/svg/ic_left_gray.svg';

interface routeProps {
  id: string;
}

const PlannerProfile = () => {
  const [plannerInfo, setPlannerInfo] = useState<Planner | null>(null);
  const history = useHistory();

  // const { data: plannerInfo, error } = useQuery(['planner', plannerId], () => fetchPlanner(plannerId));

  const fetchPlanner = () => {
    axios
      .get(`/inhouse/planners/me`, {
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

  const handleProfileEdit = () => {
    history.push('/editProfile');
  };

  useEffect(() => {
    fetchPlanner();
  }, []);

  return plannerInfo ? (
    <Container>
      <Back>
        <BackBody onClick={() => history.push('/plannerPage')}>
          <BackImage src={LeftArrow}></BackImage>
          <Content height="21px" width="auto" fontSize="14px" color="#212529" lineHeight="normal">
            내페이지로 이동
          </Content>
        </BackBody>
      </Back>
      <Summary plannerInfo={plannerInfo}>
        <PButton onClick={handleProfileEdit} color="pink">
          프로필 수정하기
        </PButton>
      </Summary>
      <Detail plannerInfo={plannerInfo} />
      <PlannerInfo plannerInfo={plannerInfo} />
      {plannerInfo.company && <CompanyInfo companyInfo={plannerInfo.company} />}
      <PartnerInfo plannerId={plannerInfo.id.toString()} />
      <ReviewList plannerId={plannerInfo.id.toString()} />
    </Container>
  ) : (
    <></>
  );
};

export default PlannerProfile;

const Container = styled.div`
  width: 860px;
  margin: 0 auto;
`;

const Back = styled.div`
  display: flex;
  width: 860px;
  height: 40px;
  margin: 10px 20px;
`;

const BackBody = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

interface ImageProps {
  src: string;
}

const BackImage = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 24px;
  width: 24px;
`;
