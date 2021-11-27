import styled from 'styled-components';
import { Item } from '.';
import { FlexDiv } from '../../component/style/style';
import ClickableButton from './ClickableButton';
import LineAndTitle from './LindAndTitle';

interface Props {
  plannerOffers?: string[];
  offers: Item[];
  handleOffers: (offers: Item[]) => void;
}
export const allOffers: Item[] = [
  { value: 'Accompany', display: '동행하는 플래너에요' },
  { value: 'NotAccompany', display: '비동행하는 플래너에요' },
  { value: 'MobileWeddingCard', display: '모바일청첩장을 제공해요' },
  { value: 'NotMobileWeddingCard', display: '모바일청첩장을 제공하지 않아요' },
  { value: 'AffiliateWeddingHall', display: '제휴웨딩홀이 있어요' },
  { value: 'MessageCounseling', display: '메시지 상담이 가능해요' },
  { value: 'DoorCounseling', display: '방문 상담이 가능해요' }
];

const PlannerOfferList = ({ plannerOffers, offers, handleOffers }: Props) => {
  return (
    <FlexDiv width="632px" margin="0 0 42px 0" direction="column" justify="flex-start" align="start">
      <LineAndTitle title="제공 항목" content="웨딩플래너가 제공하는 항목을 선택해 주세요."></LineAndTitle>
      <Offer direction="row" justify="flex-start" align="start" margin="0px" width="600px">
        {plannerOffers
          ? allOffers.map((value, index) => {
              const isExistOffer = plannerOffers.includes(value.display);

              return (
                <ClickableButton
                  items={offers}
                  handleItems={handleOffers}
                  content={value}
                  key={index}
                  isAlreadyClicked={isExistOffer}
                ></ClickableButton>
              );
            })
          : allOffers.map((value, index) => {
              return (
                <ClickableButton
                  items={offers}
                  handleItems={handleOffers}
                  content={value}
                  key={index}
                  isAlreadyClicked={false}
                ></ClickableButton>
              );
            })}
      </Offer>
    </FlexDiv>
  );
};

export default PlannerOfferList;

export interface DivProps {
  minHeight?: string;
  height?: string;
  width?: string;
  margin?: string;
  direction?: string;
  justify?: string;
  align?: string;
}

export const Offer = styled.div<DivProps>`
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
