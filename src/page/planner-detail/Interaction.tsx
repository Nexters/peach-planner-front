import PButton from 'src/component/PButton';
import { checkAuth } from 'src/routes/checkAuth';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Planner } from 'src/api/Planner';
import { pick, PickRequest } from 'src/api/Pick';
import FullHeart from 'src/assets/svg/ic_heart_fill.svg';
import EmptyHeart from 'src/assets/svg/ic_heart_black.svg';

interface Props {
  plannerInfo: Planner;
  setPlannerInfo: React.Dispatch<React.SetStateAction<Planner | null>>;
}

const Interaction = ({ plannerInfo, setPlannerInfo }: Props) => {
  const history = useHistory();

  const handleEstimateClick = () => {
    const plannerId = plannerInfo.id;
    history.push(`/planner/${plannerId}/estimate`);
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
      history.push('/login');
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
      history.push({
        pathname: "/chats",
        state: res.data,
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
            <Icon src={plannerInfo.postLiked ? FullHeart : EmptyHeart} />&nbsp; 찜하기
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

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;