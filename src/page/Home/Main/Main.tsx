import styled from 'styled-components';
import { FlexDiv } from '../../../component/CommonStyle/style';
import Footer from '../../../component/Footer';
import MainTop from './component/MainTop';
import NewPlanner from './component/NewPlanner';
import PopularPlanner from './component/PopularPlanner';
import RecommendPlanner from './component/RecommendPlanner';
import RecommendPost from './component/RecommendPost';

const Main = () => {
  return (
    <FlexDiv margin={'0'}>
      <FlexDiv margin={'0'} width="1100px" direction="column">
        <MainTop></MainTop>
        <NewPlanner></NewPlanner>
        <PopularPlanner></PopularPlanner>
        <RecommendPlanner></RecommendPlanner>
        <RecommendPost></RecommendPost>
        <Footer></Footer>
      </FlexDiv>
    </FlexDiv>
  );
};

export default Main;
