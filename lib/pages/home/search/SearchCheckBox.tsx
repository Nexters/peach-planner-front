import { useState } from 'react';
import styled from 'styled-components';
import borders from 'public/assets/svg/ic_borders.svg';
import fill from 'public/assets/svg/ic_fill.svg';
import PButton from 'lib/pages/components/PButton';
import { Content, FlexDiv } from 'lib/pages/components/style/style';
import Image from 'next/image';

interface Props {
  name: string;
  enumValue: string;
  support: string[];
  changeSupport: (data: string[]) => void;
}

const SearchCheckBox = ({ name, enumValue, support, changeSupport }: Props) => {
  const [isChecking, setIsChecking] = useState(true);

  const handleClick = () => {
    setIsChecking(!isChecking);
    if (isChecking) {
      const supports = support.concat(enumValue);
      changeSupport(supports);
    } else {
      const supports = support.filter((value) => value !== enumValue);
      changeSupport(supports);
    }
  };

  return (
    <FlexDiv justify="flex-start" width="200px" height="24px" margin={'0'} direction="row">
      <PButton width="auto" padding="0px" border="0px" onClick={handleClick}>
        {isChecking ? <CheckBox src={borders} width='16px' height='16px' /> : <CheckBox src={fill} width='16px' height='16px'/>}
      </PButton>
      <Content height={'18px'} width={'auto'} color={'#000000'} fontSize={'12px'} lineHeight={'18px'}>
        {name}
      </Content>
    </FlexDiv>
  );
};

export default SearchCheckBox;

const CheckBox = styled(Image)`
  margin: 0 8px 0 0;
`;
