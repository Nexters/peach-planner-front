import { FlexDiv } from '../../../component/style/style';
import ClickableButton from './ClickableButton';
import LineAndTitle from './LindAndTitle';

const offerFirsts = ['동행하는 플래너에요', '비동행하는 플래너에요', '모바일청첩장을 제공해요'];
const offerSeconds = ['모바일청첩장을 제공하지 않아요', '제휴웨딩홀이 있어요', '메시지 상담이 가능해요'];
const offerThirds = ['방문 상담이 가능해요'];

const PlannerOfferList = () => {
  return (
    <FlexDiv width="632px" margin="0 0 72px 0" direction="column" justify="flex-start" align="start">
      <LineAndTitle title="제공 항목" content="웨딩플래너가 제공하는 항목을 선택해 주세요."></LineAndTitle>
      <FlexDiv direction="row" justify="flex-start" align="start" margin="0px">
        {offerFirsts.map((value, index) => {
          return <ClickableButton content={value} key={index}></ClickableButton>;
        })}
      </FlexDiv>
      <FlexDiv direction="row" justify="flex-start" align="start" margin="0px">
        {offerSeconds.map((value, index) => {
          return <ClickableButton content={value} key={index}></ClickableButton>;
        })}
      </FlexDiv>
      <FlexDiv direction="row" justify="flex-start" align="start" margin="0px">
        {offerThirds.map((value, index) => {
          return <ClickableButton content={value} key={index}></ClickableButton>;
        })}
      </FlexDiv>
    </FlexDiv>
  );
};

export default PlannerOfferList;
