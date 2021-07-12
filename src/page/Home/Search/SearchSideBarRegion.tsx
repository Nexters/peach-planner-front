import { Content, FlexDiv } from '../../../component/GlobalStyledComponent/style';

const SearchSideBarRegion = () => {
  return (
    <FlexDiv justify="flex-start" align="start" direction="column" margin="0">
      <Content height={'18px'} width={'23px'} color={'#000000'} fontSize={'12px'} lineHeight={'18px'}>
        전체
      </Content>
    </FlexDiv>
  );
};

export default SearchSideBarRegion;
