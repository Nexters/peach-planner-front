import { FlexDiv } from '../../../component/style/style';
import MainTop from './MainTop';
import NewPlanner from './NewPlanner';
import PopularPlanner from './PopularPlanner';
import RecommendPlanner from './RecommendPlanner';
import RecommendPost from './RecommendPost';

const Main = () => {
  return (
    <FlexDiv margin={'0'}>
      <FlexDiv margin={'0'} width="1100px" direction="column">
        <MainTop />
        <NewPlanner />
        <PopularPlanner />
        <RecommendPlanner />
        <RecommendPost />
      </FlexDiv>
    </FlexDiv>
  );
};

export default Main;
