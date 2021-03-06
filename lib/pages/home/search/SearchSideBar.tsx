import Accordion from 'lib/pages/components/Accordion';
import { FlexDiv, Title } from 'lib/pages/components/style/style';
import SearchCheckBox from './SearchCheckBox';
import SearchSideBarRegion from './SearchSideBarRegion';

const regions = ['전체', '서울', '경기', '인천', '부산', '강원', '전라', '경상', '대구', '충청', '대전', '제주'];
const checkBox = [
  {
    name: '동행',
    enumValue: 'Accompany'
  },
  {
    name: '비동행',
    enumValue: 'NotAccompany'
  },
  {
    name: '방문상담',
    enumValue: 'DoorCounseling'
  },
  {
    name: '메시지상담',
    enumValue: 'MessageCounseling'
  }
];
interface supportType {
  name: '동행' | '비동행' | '방문상담' | '메시지상담';
  enumValue: 'Accompany' | 'NotAccompany' | 'DoorCounseling' | 'MessageCounseling';
}

interface Props {
  location: string;
  changeLocation: (data: string) => void;
  support: string[];
  changeSupport: (data: string[]) => void;
}

const SearchSideBar = ({ location, changeLocation, support, changeSupport }: Props) => {
  return (
    <FlexDiv justify="flex-start" height="auto" width="200px" margin={'0 40px 0 0'} direction="column">
      <FlexDiv justify="center" align="start" width="200px" height="56px" margin={'0'} direction="column">
        <Title height={'24px'} width={'auto'} fontSize={'16px'} lineHeight={'24px'} margin={'16px 0 16px 0'}>
          웨딩플래너 찾기
        </Title>
      </FlexDiv>
      <Accordion title="지역" margin="">
        {regions.map((value, index) => {
          return (
            <SearchSideBarRegion
              key={index}
              name={value}
              location={location}
              changeLocation={changeLocation}
            />
          );
        })}
      </Accordion>
      <Accordion title="기타" margin="16px">
        {checkBox.map((value, index) => {
          return (
            <SearchCheckBox
              key={index}
              name={value.name}
              enumValue={value.enumValue}
              support={support}
              changeSupport={changeSupport}
            />
          );
        })}
      </Accordion>
    </FlexDiv>
  );
};

export default SearchSideBar;
