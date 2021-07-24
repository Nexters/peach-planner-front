import styled from 'styled-components';
import { FlexDiv } from '../../../component/CommonStyle/style';
import Footer from '../../../component/Footer';
import SearchResult from './SearchResult';
import SearchSideBar from './SearchSideBar';

const Search = () => {
  return (
    <Container>
      <InnerContainer>
        <SearchSideBar></SearchSideBar>
        <SearchResult></SearchResult>
      </InnerContainer>
      <FlexDiv margin="0">
        <Footer></Footer>
      </FlexDiv>
    </Container>
  );
};

export default Search;

const Container = styled.div``;

const InnerContainer = styled.div`
  display: flex;
  width: 1140px;
  margin: 0 auto;
`;
