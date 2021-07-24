import styled from 'styled-components';
import SearchResult from './SearchResult';
import SearchSideBar from './SearchSideBar';

const Search = () => {
  return (
    <Container>
      <InnerContainer>
        <SearchSideBar />
        <SearchResult />
      </InnerContainer>
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
