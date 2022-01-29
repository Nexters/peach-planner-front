import styled from 'styled-components';
import { FlexDiv } from 'lib/pages/components/style/style';
import ClickableButton from './ClickableButton';
import LineAndTitle from './LindAndTitle';
import { Item } from './interface/item';

interface Props {
  plannerRegions?: string[];
  regions: Item[];
  handleRegions: (regions: Item[]) => void;
}
export const allRegions: Item[] = [
  { value: 'seoul', display: '서울' },
  { value: 'gyeonggi', display: '경기' },
  { value: 'incheon', display: '인천' },
  { value: 'pusan', display: '부산' },
  { value: 'gangwon', display: '강원' },
  { value: 'jeolla', display: '전라' },
  { value: 'gyengsang', display: '경상' },
  { value: 'daegu', display: '대구' },
  { value: 'chungchung', display: '충청' },
  { value: 'daejeon', display: '대전' },
  { value: 'jeju', display: '제주' }
];

const PlannerArea = ({ plannerRegions, regions, handleRegions }: Props) => {
  return (
    <FlexDiv width="632px" margin="0 0 42px 0" direction="column" justify="flex-start" align="start">
      <LineAndTitle title="담당 지역" content="웨딩플래너가 담당하는 지역을 선택해 주세요."></LineAndTitle>
      <Region direction="row" justify="flex-start" align="start" margin="0px" width="500px">
        {plannerRegions
          ? allRegions.map((value, index) => {
              const isExistRegion = plannerRegions.includes(value.display);

              return (
                <ClickableButton
                  items={regions}
                  handleItems={handleRegions}
                  content={value}
                  isAlreadyClicked={isExistRegion}
                  key={index}
                ></ClickableButton>
              );
            })
          : allRegions.map((value, index) => {
              return (
                <ClickableButton
                  items={regions}
                  handleItems={handleRegions}
                  content={value}
                  isAlreadyClicked={false}
                  key={index}
                ></ClickableButton>
              );
            })}
      </Region>
    </FlexDiv>
  );
};

export default PlannerArea;

export interface DivProps {
  minHeight?: string;
  height?: string;
  width?: string;
  margin?: string;
  direction?: string;
  justify?: string;
  align?: string;
}

export const Region = styled.div<DivProps>`
  min-height: ${(props: DivProps) => props.minHeight};
  height: ${(props: DivProps) => props.height};
  width: ${(props: DivProps) => props.width || '100%'};
  display: flex;
  justify-content: ${(props: DivProps) => props.justify || 'center'};
  align-items: ${(props: DivProps) => props.align || 'center'};
  flex-direction: ${(props: DivProps) => props.direction || 'row'};
  margin: ${(props: DivProps) => props.margin};
  flex-wrap: wrap;
`;
