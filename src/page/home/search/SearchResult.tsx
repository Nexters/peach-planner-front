import { FlexDiv, Title } from '../../../component/style/style';
import PlannerCard from '../../../component/PlannerCard';
import { useQuery } from 'react-query';
import { fetchPlanners } from '../../../api/Planner';
import styled from 'styled-components';

interface Props {
  location: string;
  support: string[];
}

const SearchResult = ({ location, support }: Props) => {
  const { data: planners } = useQuery(['planners', {location, support}], fetchPlanners);

  return (
    <FlexDiv justify="flex-start" align="start" width="880px" margin={'0'} direction="column">
      <FlexDiv align="start" height="56px" margin={'0'} direction="column">
        <Title height={'24px'} width={'auto'} fontSize={'16px'} lineHeight={'24px'} margin={'0'}>
          전체
        </Title>
      </FlexDiv>
      <select name="select" id="select">
        <option value="최신순">최신순</option>
        <option value="인기순">인기순</option>
        <option value="리뷰순">리뷰순</option>
        <option value="커밍순">커밍순</option>
      </select>
      <SearchResultList>
        {planners ? (
          planners.map((planner) => {
            return (
              <PlannerCard
                key={planner.id}
                margin={'0 12px 32px 0'}
                size={'206px'}
                imagePath={planner.images[0]}
                heartCount={planner.likes}
                reviewCount={24}
                name={planner.name}
                organization={planner.company.name}
                region={planner.locations.join(',')}
                id={planner.id}
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
