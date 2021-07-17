import { FlexDiv, HorizontalLine, Title } from '../../../component/CommonStyle/style';

interface Props {
  menuName: string;
  margin: string;
}

const SearchMenu = ({ menuName, margin }: Props) => {
  return (
    <>
      <HorizontalLine margin={margin} height={'1px'} width={'200px'} backgroundColor={'#212529'}></HorizontalLine>
      <FlexDiv align="start" width="200px" height="32px" margin={'0'} direction="column">
        <Title height={'24px'} width={'106px'} fontSize={'16px'} lineHeight={'24px'} margin={'0'}>
          {menuName}
        </Title>
      </FlexDiv>
    </>
  );
};

export default SearchMenu;
