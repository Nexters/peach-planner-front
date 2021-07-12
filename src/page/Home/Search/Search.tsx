import { FlexDiv } from '../../../component/GlobalStyledComponent/style';
import Footer from '../../common/Footer';
import SearchResult from './SearchResult';
import SearchSideBar from './SearchSideBar';

const Search = () => {
  return (
    <FlexDiv margin={'0'} direction="column">
      <FlexDiv margin={'0'}>
        <SearchSideBar></SearchSideBar>
        <SearchResult></SearchResult>
      </FlexDiv>
      <Footer></Footer>
    </FlexDiv>
  );
};

export default Search;
