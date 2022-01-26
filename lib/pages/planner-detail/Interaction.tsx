import PButton from 'lib/pages/components/PButton';
import { checkAuth } from 'lib/atoms/checkAuth';
import styled from 'styled-components';
import axios from 'axios';
import { Planner } from 'lib/api/Planner';
import { pick, PickRequest } from 'lib/api/Pick';
import FullHeart from 'public/assets/svg/ic_heart_fill.svg';
import EmptyHeart from 'public/assets/svg/ic_heart_black.svg';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface Props {
  plannerInfo: Planner;
  setPlannerInfo: React.Dispatch<React.SetStateAction<Planner | null>>;
}

const Interaction = ({ plannerInfo, setPlannerInfo }: Props) => {
  const router = useRouter();

  const handleEstimateClick = () => {
    const plannerId = plannerInfo.id;
    router.push(`/planner/${plannerId}/estimate`);
  };

  const pickPlanner = () => {
    handleNoneUser();
    const plannerId = plannerInfo.id;
    pick({ targetCategoryType: 'PLANNER', targetId: plannerId, toBePick: !plannerInfo.postLiked } as PickRequest);
    if (plannerInfo.postLiked) {
      setPlannerInfo({ ...plannerInfo, likes: plannerInfo.likes - 1, postLiked: !plannerInfo.postLiked });
    } else {
      setPlannerInfo({ ...plannerInfo, likes: plannerInfo.likes + 1, postLiked: !plannerInfo.postLiked });
    }
  };

  const handleNoneUser = () => {
    const auth = checkAuth();
    if (!auth) {
      router.push('/login');
      return;
    }
  };

  const handleChat = async () => {
    handleNoneUser();
    const res = await axios
      .post(
        `/chat/rooms/${plannerInfo.id}`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
      );

    if (res.status === 200) {
      router.push({
        pathname: "/chats",
        query: { state: res.data },
      });
    }
  };

  return (
    <Container>
      <PButton color="pink" onClick={handleEstimateClick}>
        견적 요청하기
      </PButton>
      <ButtonContainer>
        <PButton onClick={handleChat} otherBgColor="#f1f3f5" border="none">
          1:1 문의하기
        </PButton>
        <PButton onClick={pickPlanner} otherBgColor="#f1f3f5" border="none">
          <Vertical>
            <Image width={'16px'} height={'16px'} src={plannerInfo.postLiked ? FullHeart : EmptyHeart} />&nbsp; 찜하기
          </Vertical>
        </PButton>
      </ButtonContainer>
    </Container>
  );
};

export default Interaction;

const Container = styled.div``;

const ButtonContainer = styled.div`
  margin-top: 13.5px;
  display: flex;

  button + button {
    margin-left: 13px;
  }
`;

const Vertical = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;