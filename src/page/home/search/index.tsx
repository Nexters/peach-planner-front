import { useState } from 'react';
import styled from 'styled-components';
import SearchResult from './SearchResult';
import SearchSideBar from './SearchSideBar';

const Search = () => {
  const [location, setLocation] = useState('');
  const [support, setSupport] = useState<string[]>([]);

  const changeLocation = (location: string) => {
    setLocation(location);
  };

  const changeSupport = (support: string[]) => {
    setSupport(support);
  };

  return (
    <Container>
      <InnerContainer>
        <SearchSideBar
          location={location}
          changeLocation={changeLocation}
          support={support}
          changeSupport={changeSupport}
        />
        <SearchResult location={location} support={support} />
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
