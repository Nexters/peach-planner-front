import { Content, FlexDiv, HorizontalLine, ImageBox, Title } from '../../../component/CommonStyle/style';
import { Input } from '../../../component/Form/InputForm';
import SideText from './SideText';
import SearchIconSvg from '../../../assets/svg/ic_search.svg';
import styled from 'styled-components';

const PlannerOrganization = () => {
  return (
    <FlexDiv width="632px" margin="0 0 72px 0" direction="column" justify="flex-start" align="start">
      <HorizontalLine height="1px" width="632px" backgroundColor="#868E96" margin="0"></HorizontalLine>
      <FlexDiv width="632px" direction="row" justify="flex-start" align="center" margin="12px 0 0 0">
        <Title height={'27px'} width={'400px'} fontSize={'18px'} lineHeight={'27px'} margin={'0'}>
          소속업체 정보
        </Title>
        <SideText text="업체가 등록되어 있지 않으신가요?" colorText="더 알아보기"></SideText>
      </FlexDiv>
      <Content
        height={'19px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'13px'}
        lineHeight={'19px'}
        margin={'4px 0 20px 0'}
      >
        소속 웨딩업체를 등록할 수 있어요.
      </Content>
      <Content
        height={'24px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'16px'}
        lineHeight={'24px'}
        margin={'20px 0 8px 0'}
      >
        웨딩업체 이름
      </Content>
      <SearchBox>
        <Input height="41px" width="421px"></Input>
        <SearchIcon src={SearchIconSvg} height="20px" width="20px" margin="0px" />
      </SearchBox>
      <FlexDiv margin="8px 0 0 0" direction="row" justify="flex-start" align="start">
        <SideText text="사업자 인증을 진행하지 않은 업체입니다." colorText="사업자 인증하기"></SideText>
      </FlexDiv>
    </FlexDiv>
  );
};

export default PlannerOrganization;

const SearchBox = styled.div``;

const SearchIcon = styled(ImageBox)`
  margin-left: -35px;
`;