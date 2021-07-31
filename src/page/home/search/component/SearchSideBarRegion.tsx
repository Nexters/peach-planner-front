import { Content, FlexDiv } from '../../../../component/style/style';

interface Props {
  region: string;
}

const SearchSideBarRegion = ({ region }: Props) => {
  return (
    <FlexDiv justify="flex-start" align="start" direction="column" margin="0 0 3px 0">
      <Content height={'18px'} width={'23px'} color={'#000000'} fontSize={'12px'} lineHeight={'18px'}>
        {region}
      </Content>
    </FlexDiv>
  );
};

export default SearchSideBarRegion;
