import React, { FC } from 'react';
import UserInfoIcon from '../../component/UserInfoIcon';
import Container from './Container';
import styled from 'styled-components';
import PButton from '../../component/PButton';
import { Planner } from '../../api/Planner';
import { useHistory } from 'react-router';
import axios from 'axios';
import { useUserTypeState } from 'src/atoms/AuthStatus';
import { EmptyText } from './components/styles';

interface PlannerInfoProps {
  plannerInfo: Planner;
}

const PlannerInfo: FC<PlannerInfoProps> = ({ plannerInfo }) => {
  const history = useHistory();

  const [userType, _] = useUserTypeState();

  const PLANNER_NAME: string = plannerInfo.name;
  const DETAIL: string = plannerInfo.summary || `${PLANNER_NAME} 웨딩 플래너 입니다.`;
  const LIKES: number = plannerInfo.likes;
  const REVIEWs: number = plannerInfo.reviews;
  const DESCRIPTION: string[] = plannerInfo.description.split('\\n').filter(e => e !== '');

  const handleChat = async () => {
    const res = await axios.post(
      `/chat/rooms/${plannerInfo.id}`,
      {},
      { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
    );

    if (res.status == 200) {
      history.push({
        pathname: "/chats",
        state: res.data,
      });
    }
  };

  return (
    <Container title="플래너 소개">
      <UserInfoIcon
        imgSrc={plannerInfo.profileImage}
        title={PLANNER_NAME}
        detail={DETAIL}
        likeCount={LIKES}
        reviewCount={REVIEWs}
      />
      <Detail>
        {DESCRIPTION.map((desc, i) => (
          <div key={i}>{desc}</div>
        ))}
        {DESCRIPTION.length === 0 && <EmptyText>등록되어 있는 소개글이 없습니다.</EmptyText>}
      </Detail>
      {userType === 'USER' ? (
        <PButton width="108px" onClick={handleChat} otherBgColor="#f1f3f5" border="none">
          1:1 문의하기
        </PButton>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default PlannerInfo;

const Detail = styled.div`
  margin: 30px 0 23.5px 0;
  font-size: 16px;
  color: #495057;
`;
