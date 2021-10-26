import { Item } from '.';
import { FlexDiv } from '../../component/style/style';
import ClickableButton from './ClickableButton';
import LineAndTitle from './LindAndTitle';

interface Props {
  offers: Item[];
  handleOffers: (offers: Item[]) => void;
}
const offerFirsts: Item[] = [
  { value: 'Accompany', display: '동행하는 플래너에요' },
  { value: 'NotAccompany', display: '비동행하는 플래너에요' },
  { value: 'MobileWeddingCard', display: '모바일청첩장을 제공해요' }
];
const offerSeconds: Item[] = [
  { value: 'NotMobileWeddingCard', display: '모바일청첩장을 제공하지 않아요' },
  { value: 'AffiliateWeddingHall', display: '제휴웨딩홀이 있어요' },
  { value: 'MessageCounseling', display: '메시지 상담이 가능해요' }
];
const offerThirds: Item[] = [{ value: 'DoorCounseling', display: '방문 상담이 가능해요' }];

const PlannerOfferList = ({ offers, handleOffers }: Props) => {
  return (
    <FlexDiv width="632px" margin="0 0 72px 0" direction="column" justify="flex-start" align="start">
      <LineAndTitle title="제공 항목" content="웨딩플래너가 제공하는 항목을 선택해 주세요."></LineAndTitle>
      <FlexDiv direction="row" justify="flex-start" align="start" margin="0px">
        {offerFirsts.map((value, index) => {
          return (
            <ClickableButton items={offers} handleItems={handleOffers} content={value} key={index}></ClickableButton>
          );
        })}
      </FlexDiv>
      <FlexDiv direction="row" justify="flex-start" align="start" margin="0px">
        {offerSeconds.map((value, index) => {
          return (
            <ClickableButton items={offers} handleItems={handleOffers} content={value} key={index}></ClickableButton>
          );
        })}
      </FlexDiv>
      <FlexDiv direction="row" justify="flex-start" align="start" margin="0px">
        {offerThirds.map((value, index) => {
          return (
            <ClickableButton items={offers} handleItems={handleOffers} content={value} key={index}></ClickableButton>
          );
        })}
      </FlexDiv>
    </FlexDiv>
  );
};

export default PlannerOfferList;
