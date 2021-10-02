import { FlexDiv } from '../../../component/style/style';
import MainTop from './MainTop';
import NewPlanner from './NewPlanner';
import RecommendedPlanner from './RecommendPlanner';
import PopularPlanner from './PopularPlanner';
import RecommendPost from './RecommendPost';

const Main = () => {
  return (
    <FlexDiv margin={'0'}>
      <FlexDiv margin={'0'} width="1100px" direction="column">
        <MainTop />
        <NewPlanner />
        <RecommendedPlanner />
        <PopularPlanner />
        <RecommendPost />
      </FlexDiv>
    </FlexDiv>
  );
};

export default Main;
