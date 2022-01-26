import axios from 'axios';
import { useEffect, useState } from 'react';
import { Planner } from 'lib/api/Planner';
import PButton from 'lib/pages/components/PButton';
import { Content } from 'lib/pages/components/style/style';
import CompanyInfo from 'lib/pages/planner-detail/CompanyInfo';
import Detail from 'lib/pages/planner-detail/Detail';
import { PartnerInfo } from 'lib/pages/planner-detail/PartnerInfo';
import PlannerInfo from 'lib/pages/planner-detail/PlannerInfo';
import ReviewList from 'lib/pages/planner-detail/ReviewList';
import Summary from 'lib/pages/planner-detail/Summary';
import styled from 'styled-components';
import LeftArrow from 'public/assets/svg/ic_arrow-left-line.svg';
import { useRouter } from 'next/router';

export default () => {
  const [plannerInfo, setPlannerInfo] = useState<Planner | null>(null);
  const history = useRouter();

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
          <Content
            height="21px"
            width="auto"
            fontSize="14px"
            color="#212529"
            lineHeight="20px"
            margin="0px 0px 0px 8px"
          >
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
