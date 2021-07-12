import { FlexDiv, HorizontalLine, Title } from '../../../component/GlobalStyledComponent/style';
import SearchSideBarRegion from './SearchSideBarRegion';

const SearchSideBar = () => {
  return (
    <FlexDiv justify="flex-start" height="auto" width="200px" margin={'0 40px 0 0'} direction="column">
      <FlexDiv align="start" width="200px" height="56px" margin={'0'} direction="column">
        <Title height={'24px'} width={'106px'} fontSize={'16px'} lineHeight={'24px'} margin={'0'}>
          웨딩플래너 찾기
        </Title>
      </FlexDiv>
      <HorizontalLine margin="0" height={'1px'} width={'200px'} backgroundColor={'#212529'}></HorizontalLine>
      <FlexDiv align="start" width="200px" height="32px" margin={'0'} direction="column">
        <Title height={'24px'} width={'106px'} fontSize={'16px'} lineHeight={'24px'} margin={'0'}>
          지역
        </Title>
      </FlexDiv>
      <SearchSideBarRegion></SearchSideBarRegion>
    </FlexDiv>
  );
};

export default SearchSideBar;
