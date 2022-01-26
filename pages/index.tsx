import { FlexDiv } from 'lib/pages/components/style/style';
import MainTop from 'lib/pages/home/main/MainTop';
import NewPlanner from 'lib/pages/home/main/NewPlanner';
import RecommendedPlanner from 'lib/pages/home/main/RecommendPlanner';
import PopularPlanner from 'lib/pages/home/main/PopularPlanner';
import RecommendPost from 'lib/pages/home/main/RecommendPost';

export default function Home() {
  return <FlexDiv margin={ '0' }>
    <FlexDiv margin={ '0' } width="1100px" direction="column">
      <MainTop />
      <NewPlanner />
      <RecommendedPlanner />
      <PopularPlanner />
      <RecommendPost />
    </FlexDiv>
  </FlexDiv>
}