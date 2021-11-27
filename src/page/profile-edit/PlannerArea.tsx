import { useState } from 'react';
import { Item } from '.';
import { FlexDiv } from '../../component/style/style';
import ClickableButton from './ClickableButton';
import LineAndTitle from './LindAndTitle';

interface Props {
  regions: Item[];
  handleRegions: (regions: Item[]) => void;
}
const regionFirsts: Item[] = [
  { value: 'seoul', display: '서울' },
  { value: 'gyeonggi', display: '경기' },
  { value: 'incheon', display: '인천' },
  { value: 'pusan', display: '부산' },
  { value: 'gangwon', display: '강원' },
  { value: 'jeolla', display: '전라' }
];
const regionSeconds: Item[] = [
  { value: '', display: '경상' },
  { value: '', display: '대구' },
  { value: '', display: '충청' },
  { value: '', display: '대전' },
  { value: '', display: '제주' }
];

const PlannerArea = ({ regions, handleRegions }: Props) => {
  return (
    <FlexDiv width="632px" margin="0 0 72px 0" direction="column" justify="flex-start" align="start">
      <LineAndTitle title="담당 지역" content="웨딩플래너가 담당하는 지역을 선택해 주세요."></LineAndTitle>
      <FlexDiv direction="row" justify="flex-start" align="start" margin="0px">
        {regionFirsts.map((value, index) => {
          return (
            <ClickableButton items={regions} handleItems={handleRegions} content={value} key={index}></ClickableButton>
          );
        })}
      </FlexDiv>
      <FlexDiv direction="row" justify="flex-start" align="start" margin="0px">
        {regionSeconds.map((value, index) => {
          return (
            <ClickableButton items={regions} handleItems={handleRegions} content={value} key={index}></ClickableButton>
          );
        })}
      </FlexDiv>
    </FlexDiv>
  );
};

export default PlannerArea;
