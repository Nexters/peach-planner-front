import { FlexDiv, Title } from '../../../component/style/style';
import PlannerCard from '../../../component/PlannerCard';
import { useQuery } from 'react-query';
import { fetchPlanners, fetchPopularPlanners, PagedPlanner } from '../../../api/Planner';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { useState } from 'react';

interface Props {
  location: string;
  support: string[];
}

const SearchResult = ({ location, support }: Props) => {
  const hookLocation = useLocation();
  const sortingParam = new URLSearchParams(hookLocation.search).get('sort');
  const supportInfos = support.join();
  const getPlanners = sortingParam === 'popular' ? fetchPopularPlanners : fetchPlanners;
  const [sort, setSort] = useState('');
  const { data: planners } = useQuery(
    ['planners', { location, supportInfos, isNew: sortingParam === 'new', sort }],
    getPlanners
  );

  console.log(planners);
  console.log(sort);

  return (
    <FlexDiv justify="flex-start" align="start" width="880px" margin={'0'} direction="column">
      <FlexDiv align="start" height="56px" margin={'0'} direction="column">
        <Title height={'24px'} width={'auto'} fontSize={'16px'} lineHeight={'24px'} margin={'0'}>
          {sortingParam ? (sortingParam === 'new' ? '신규 플래너' : '인기 플래너') : '전체'}
        </Title>
      </FlexDiv>
      <select name="select" id="select" onChange={(e) => setSort(e.target.value)}>
        <option value="createdDate,DESC">최신순</option>
        <option value="pick,DESC">인기순</option>
        <option value="review,DESC">리뷰순</option>
      </select>
      <SearchResultList>
        {planners ? (
          planners.content.map((planner) => {
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
                isPicked={false}
              ></PlannerCard>
            );
          })
        ) : (
          <>loading...</>
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
