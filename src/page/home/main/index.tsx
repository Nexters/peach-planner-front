import styled from 'styled-components';
import { FlexDiv } from '../../../component/style/style';
import Footer from '../../../component/Footer';
import MainTop from './MainTop';
import NewPlanner from './NewPlanner';
import PopularPlanner from './PopularPlanner';
import RecommendPlanner from './RecommendPlanner';
import RecommendPost from './RecommendPost';

const Main = () => {
  return (
    <FlexDiv margin={'0'}>
      <FlexDiv margin={'0'} width="1100px" direction="column">
        <MainTop></MainTop>
        <NewPlanner></NewPlanner>
        <PopularPlanner></PopularPlanner>
        <RecommendPlanner></RecommendPlanner>
        <RecommendPost></RecommendPost>
      </FlexDiv>
    </FlexDiv>
  );
};

export default Main;
