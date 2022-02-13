import React, { FC } from 'react';
import UserInfoIcon from 'lib/pages/components/UserInfoIcon';
import Container from './Container';
import styled from 'styled-components';
import PButton from 'lib/pages/components/PButton';
import { Planner } from 'lib/api/Planner';
import axios from 'axios';
import { useUserTypeState } from 'lib/atoms/AuthStatus';
import { EmptyText } from 'lib/pages/components/EmptyText';
import { useRouter } from 'next/router';

interface PlannerInfoProps {
  plannerInfo: Planner;
}

const PlannerInfo: FC<PlannerInfoProps> = ({ plannerInfo }) => {
  const router = useRouter();

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
      router.push({
        pathname: "/chats",
        query: { roomId: res.data?.id },
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
  line-height: 160%;
`;
