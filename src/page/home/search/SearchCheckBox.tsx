import { useState } from 'react';
import styled from 'styled-components';
import borders from '../../../assets/svg/ic_borders.svg';
import fill from '../../../assets/svg/ic_fill.svg';
import PButton from '../../../component/PButton';
import { Content, FlexDiv } from '../../../component/style/style';

interface Props {
  name: string;
}

const SearchCheckBox = ({ name }: Props) => {
  const [isChecking, setIsChecking] = useState(true);

  const handleClick = () => {
    setIsChecking(!isChecking);
  };

  return (
    <FlexDiv justify="flex-start" width="200px" height="24px" margin={'0'} direction="row">
      <PButton width="auto" padding="0px" border="0px" onClick={handleClick}>
        {isChecking ? <CheckBox src={borders}></CheckBox> : <CheckBox src={fill}></CheckBox>}
      </PButton>
      <Content height={'18px'} width={'auto'} color={'#000000'} fontSize={'12px'} lineHeight={'18px'}>
        {name}
      </Content>
    </FlexDiv>
  );
};

export default SearchCheckBox;

interface ImageProps {
  src: string;
}

const CheckBox = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 16px;
  width: 16px;
  margin: 0 8px 0 0;
`;
