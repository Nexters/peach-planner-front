import React, { FC } from 'react';
import UserInfoIcon from '../../component/UserInfoIcon';
import Container from './Container';
import styled from 'styled-components';
import PButton from '../../component/PButton';
import { Planner } from '../../api/Planner';

interface PlannerInfoProps {
  plannerInfo: Planner;
}

const PlannerInfo: FC<PlannerInfoProps> = ({ plannerInfo }) => {
  const PLANNER_NAME: string = plannerInfo.name;
  const DETAIL: string = plannerInfo.summary;
  const LIKES: number = plannerInfo.likes;
  const DESCRIPTION: string[] = plannerInfo.description.split('\\n');

  return (
    <Container title="플래너 소개">
      <UserInfoIcon imgSrc={plannerInfo.images[0]} title={PLANNER_NAME} detail={DETAIL} likeCount={LIKES} />
      <Detail>
        {DESCRIPTION.map((desc, i) => (
          <div key={i}>{desc}</div>
        ))}
      </Detail>
      <PButton width="108px">1:1 문의하기</PButton>
    </Container>
  );
};

export default PlannerInfo;

const Detail = styled.div`
  margin: 30px 0 23.5px 0;
  font-size: 16px;
  color: #495057;
`;
