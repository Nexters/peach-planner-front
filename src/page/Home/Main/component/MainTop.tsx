import styled from 'styled-components';
import { Content, FlexDiv, Title } from '../../../../component/CommonStyle/style';
import background from '../../../../assets/img/main_background.png';

const MainTop = () => {
  return (
    <TopBox>
      <FlexDiv margin={'97px 0 0 73px'} justify="flex-start" align="start" direction="column">
        <Title height={'72px'} width={'auto'} fontSize={'24px'} lineHeight={'36px'} margin={'0 0 14px 0'}>
          나와 맞는 웨딩플래너, <br></br>피치플래너에서 찾아보세요
        </Title>
        <Content height={'44px'} width={'auto'} color={'#343A40'} fontSize={'14px'} lineHeight={'22px'}>
          한번뿐인 결혼식,믿을 수 있는 웨딩플래너를 찾기 힘드신가요? <br></br>피치플래너에서 검증된 웨딩플래너를
          찾아보세요.
        </Content>
      </FlexDiv>
    </TopBox>
  );
};

export default MainTop;

export const TopBox = styled.div`
  height: 320px;
  width: 1100px;
  border-radius: 10px;
  background-image: url(${background});
`;
