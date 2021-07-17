import { useState } from 'react';
import { Content, FlexDiv, ImageBox } from '../../../component/CommonStyle/style';
import borders from '../../../assets/svg/ic_borders.svg';
import fill from '../../../assets/svg/ic_fill.svg';
import styled from 'styled-components';
import PButton from '../../../component/PButton';

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
        {isChecking ? (
          <ImageBox src={borders} height={'16px'} width={'16px'} margin={'0 8px 0 0'} radius="0"></ImageBox>
        ) : (
          <ImageBox src={fill} height={'16px'} width={'16px'} margin={'0 8px 0 0'} radius="0"></ImageBox>
        )}
      </PButton>
      <Content height={'18px'} width={'auto'} color={'#000000'} fontSize={'12px'} lineHeight={'18px'}>
        {name}
      </Content>
    </FlexDiv>
  );
};

export default SearchCheckBox;
