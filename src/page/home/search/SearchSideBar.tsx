import { FlexDiv, Title } from '../../../component/style/style';
import SearchCheckBox from './SearchCheckBox';
import SearchMenu from './SearchMenu';
import SearchSideBarRegion from './SearchSideBarRegion';

const regions = ['전체', '서울', '경기', '인천', '부산', '강원', '전라', '경상', '대구', '충청', '대전', '제주'];
const checkBox = ['동행', '비동행', '방문상담', '메시지상담'];

const SearchSideBar = () => {
  return (
    <FlexDiv justify="flex-start" height="auto" width="200px" margin={'0 40px 0 0'} direction="column">
      <FlexDiv align="start" width="200px" height="56px" margin={'0'} direction="column">
        <Title height={'24px'} width={'auto'} fontSize={'16px'} lineHeight={'24px'} margin={'0'}>
          웨딩플래너 찾기
        </Title>
      </FlexDiv>
      <SearchMenu menuName="지역" margin="0"></SearchMenu>
      {regions.map((value, index) => {
        return <SearchSideBarRegion key={index} region={value}></SearchSideBarRegion>;
      })}
      <SearchMenu menuName="기타" margin="16px 0 0 0"></SearchMenu>
      {checkBox.map((value, index) => {
        return <SearchCheckBox key={index} name={value}></SearchCheckBox>;
      })}
    </FlexDiv>
  );
};

export default SearchSideBar;