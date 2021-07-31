import styled from 'styled-components';
import { FlexDiv, Title } from '../../../../component/style/style';

interface Props {
  menuName: string;
  margin: string;
}

const SearchMenu = ({ menuName }: Props) => {
  return (
    <>
      <FlexDiv align="start" width="200px" height="32px" margin={'0'} direction="column">
        <Title height={'24px'} width={'106px'} fontSize={'16px'} lineHeight={'24px'} margin={'0'}>
          {menuName}
        </Title>
      </FlexDiv>
    </>
  );
};

export default SearchMenu;

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 258px;
  width: 458px;
  margin: 0 28px 0 0;
  border-radius: 10px;
`;