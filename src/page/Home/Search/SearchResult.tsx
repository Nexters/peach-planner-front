import { FlexDiv, HorizontalLine, Title } from '../../../component/CommonStyle/style';
import PlannerCard from '../../../component/PlannerCard/PlannerCard';
import dummy1 from '../../../images/img_wedding_1.png';
import dummy2 from '../../../images/img_wedding_2.png';
import dummy3 from '../../../images/img_wedding_3.png';
import dummy4 from '../../../images/img_wedding_4.png';

const SearchResult = () => {
  return (
    <FlexDiv justify="flex-start" align="start" width="860px" margin={'0'} direction="column">
      <FlexDiv align="start" height="56px" width="860px" margin={'0'} direction="column">
        <Title height={'24px'} width={'30px'} fontSize={'16px'} lineHeight={'24px'} margin={'0'}>
          전체
        </Title>
      </FlexDiv>
      <select name="select" id="select">
        <option value="최신순">최신순</option>
        <option value="인기순">인기순</option>
        <option value="리뷰순">리뷰순</option>
        <option value="커밍순">커밍순</option>
      </select>
      {[...Array(4)].map((value, index) => {
        return (
          <FlexDiv key={index} justify="flex-start" align="start" direction="row" margin="16px 0 32px 0">
            <PlannerCard
              margin={'0 12px 0 0'}
              width={'206px'}
              imageHeight={'206px'}
              subTextHeight={'127px'}
              imagePath={dummy1}
              heartCount={12}
              reviewCount={24}
              name={'송영주'}
              organization={'아이니웨딩'}
              region={'서울,경기'}
            ></PlannerCard>
            <PlannerCard
              margin={'0 12px 0 0'}
              width={'206px'}
              imageHeight={'206px'}
              subTextHeight={'127px'}
              imagePath={dummy2}
              heartCount={12}
              reviewCount={24}
              name={'이윤정'}
              organization={'베리굿웨딩'}
              region={'서울,경기'}
            ></PlannerCard>
            <PlannerCard
              margin={'0 12px 0 0'}
              width={'206px'}
              imageHeight={'206px'}
              subTextHeight={'127px'}
              imagePath={dummy3}
              heartCount={12}
              reviewCount={24}
              name={'정화진'}
              organization={'베리굿웨딩'}
              region={'서울,경기'}
            ></PlannerCard>
            <PlannerCard
              margin={'0 12px 0 0'}
              width={'206px'}
              imageHeight={'206px'}
              subTextHeight={'127px'}
              imagePath={dummy4}
              heartCount={12}
              reviewCount={24}
              name={'성시란'}
              organization={'르웨딩플랜'}
              region={'서울,경기'}
            ></PlannerCard>
          </FlexDiv>
        );
      })}
    </FlexDiv>
  );
};

export default SearchResult;
