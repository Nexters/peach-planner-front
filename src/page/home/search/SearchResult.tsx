import { FlexDiv, Title } from '../../../component/style/style';
import PlannerCard from '../../../component/PlannerCard';
import { useMutation, useQuery } from 'react-query';
import { fetchPlanners, fetchPopularPlanners } from '../../../api/Planner';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router';
import { useState } from 'react';
import { useSelectedSortingState } from 'src/atoms/SelectStatus';
import { pick } from 'src/api/Pick';
import { queryClient } from 'src/App';

interface Props {
  location: string;
  support: string[];
}

const SearchResult = ({ location, support }: Props) => {
  const history = useHistory();
  const hookLocation = useLocation();
  const sortingParam = new URLSearchParams(hookLocation.search).get('sort');
  const supportInfos = support.join();
  const getPlanners = sortingParam === 'popular' ? fetchPopularPlanners : fetchPlanners;
  const [sort, setSort] = useState('');
  const [selectedSortingState, setSelectedSortingState] = useSelectedSortingState();
  const { data: planners } = useQuery(
    ['searchPlanners', { location, supportInfos, isNew: sortingParam === 'new', sort }],
    getPlanners
  );

  const { mutate, isLoading } = useMutation(pick, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['searchPlanners']);
    },
    onError: (error: any) => {
      if (error.response.status === 401) {
        history.push('/login');
      }
    }
  });

  const handleChange = (e: any) => {
    const value = e.target.value;
    setSort(value);
    setSelectedSortingState(value);
  };

  return (
    <FlexDiv justify="flex-start" align="start" width="880px" margin={'0'} direction="column">
      <FlexDiv align="start" height="56px" margin={'0'} direction="column">
        <Title height={'24px'} width={'auto'} fontSize={'16px'} lineHeight={'24px'} margin={'0'}>
          {sortingParam ? (sortingParam === 'new' ? '신규 플래너' : '인기 플래너') : '전체'}
        </Title>
      </FlexDiv>
      <select name="select" id="select" onChange={handleChange} value={selectedSortingState}>
        <option value="createdDate,DESC">최신순</option>
        <option value="pick,DESC">인기순</option>
        <option value="review,DESC">리뷰순</option>
      </select>
      <SearchResultList>
        {planners ? (
          planners.content.map((planner, index) => {
            return (
              <PlannerCard
                key={planner.id}
                margin={'0 12px 32px 0'}
                size={'206px'}
                imagePath={planner.images[0]}
                heartCount={planner.likes}
                reviewCount={planner.reviews}
                name={planner.name}
                organization={planner.company?.name}
                region={planner.locations.join(',')}
                id={planner.id}
                blogLink={planner.externalLinks.blogLink}
                instagramLink={planner.externalLinks.instagramLink}
                facebookLink={planner.externalLinks.facebookLink}
                postLiked={planner.postLiked}
                mutate={mutate}
              ></PlannerCard>
            );
          })
        ) : (
          <></>
        )}
      </SearchResultList>
    </FlexDiv>
  );
};

export default SearchResult;

const SearchResultList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 16px 0 32px 0;
  flex-wrap: wrap;
`;
