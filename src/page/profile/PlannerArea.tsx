import { useState } from 'react';
import { FlexDiv } from '../../component/style/style';
import ClickableButton from './ClickableButton';
import LineAndTitle from './LindAndTitle';

interface Props {
  regions: string[];
  handleRegions: (regions: string[]) => void;
}
const regionFirsts = ['서울', '경기', '인천', '부산', '강원', '전라'];
const regionSeconds = ['경상', '대구', '충청', '대전', '제주'];

const PlannerArea = ({ regions, handleRegions }: Props) => {
  return (
    <FlexDiv width="632px" margin="0 0 72px 0" direction="column" justify="flex-start" align="start">
      <LineAndTitle title="담당 지역" content="웨딩플래너가 담당하는 지역을 선택해 주세요."></LineAndTitle>
      <FlexDiv direction="row" justify="flex-start" align="start" margin="0px">
        {regionFirsts.map((value, index) => {
          return (
            <ClickableButton
              items={regions}
              handleItems={handleRegions}
              content={value}
              key={index}
            ></ClickableButton>
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
