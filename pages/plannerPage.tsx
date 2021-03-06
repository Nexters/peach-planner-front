import { useQuery } from 'react-query';
import { fetchPlannerMyStats } from 'lib/api/Planner';
import { Content } from 'lib/pages/components/style/style';
import styled from 'styled-components';
import PlannerPageSideMenu from 'lib/pages/planner-mypage/PlannerPageSideMenu';
import ContentBox from 'lib/pages/planner-mypage/ContentBox';
import ContentNotification from 'lib/pages/planner-mypage/ContentNotification';
import { useRouter } from 'next/router';
import { authOnly } from 'lib/routes/withAuth';

export default authOnly(() => {
  const router = useRouter();
  const { data: myStats } = useQuery('planner/myStats', fetchPlannerMyStats);

  return (
    <Container>
      <InnerContainer>
        <PlannerPageSideMenu />
        <ContentContainer>
          <ContentBox title="1:1 문의" viewName="메시지" handleClick={() => router.push('/chats')}>
            <ContentNotification content="진행 중" count={myStats?.chats.open ?? 0} />
            <ContentNotification content="완료" count={myStats?.chats.closed ?? 0} />
          </ContentBox>
          <ContentBox title="견적" viewName="견적서" handleClick={() => router.push('/plannerMyEstimate')}>
            <ContentNotification content="새로 받은 견적서" count={myStats?.estimations.new ?? 0}/>
            <Content
              height="18px"
              width="auto"
              fontSize="12px"
              color="#adb5bd"
              lineHeight="normal"
              margin="0px 0px 0px 16px"
            >
              최근 일주일 기준
            </Content>
          </ContentBox>
          <ContentBox title="리뷰" viewName="리뷰" handleClick={() => router.push('/plannerReview')}>
            <ContentNotification content="새로 받은 리뷰" count={myStats?.reviews.new ?? 0} />
            <Content
              height="18px"
              width="auto"
              fontSize="12px"
              color="#adb5bd"
              lineHeight="normal"
              margin="0px 0px 0px 16px"
            >
              최근 일주일 기준
            </Content>
          </ContentBox>
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  direction: row;
`;
