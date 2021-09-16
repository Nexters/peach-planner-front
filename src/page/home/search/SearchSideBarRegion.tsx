import { useState } from 'react';
import styled from 'styled-components';
import { Content, FlexDiv } from '../../../component/style/style';

interface Props {
  name: string;
  location: string;
  changeLocation: (data: string) => void;
}

const SearchSideBarRegion = ({ name, location, changeLocation }: Props) => {
  const handleClick = () => {
    if (name === '전체') {
      changeLocation('');
    } else {
      changeLocation(name);
    }
  };

  return (
    <FlexDiv justify="flex-start" align="start" direction="column" margin="0 0 3px 0" onClick={handleClick}>
      {name === location ? <SelectedRegion>{name}</SelectedRegion> : <Region>{name}</Region>}
    </FlexDiv>
  );
};

export default SearchSideBarRegion;

const SelectedRegion = styled.div`
  height: 18px;
  width: 23px;
  font-weight: bold;
  color: #000000;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
`;

const Region = styled.div`
  height: 18px;
  width: 23px;
  color: #000000;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
`;
