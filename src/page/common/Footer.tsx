import { FlexDiv, Content, FooterDiv, Image } from '../Home/Main/MainView';
import logo from '../../image/logo.svg';

const Footer = () => {
  return (
    <FooterDiv>
      <FlexDiv margin={'36px 170px 0 170px'} align="start" direction="column">
        <Image height={'24.55px'} width={'140.58px'} margin={'0'} src={logo}></Image>
        <FlexDiv margin={'37px 0 0 0'} justify="space-between" align="start" direction="row">
          <FlexDiv margin={'0'} justify="start" align="start" direction="row">
            <Content height={'22px'} width={'52px'} color={'#343A40'} fontSize={'14px'} lineHeight={'22px'}>
              이용약관
            </Content>
            <Content height={'22px'} width={'102px'} color={'#343A40'} fontSize={'14px'} lineHeight={'22px'}>
              개인정보처리방침
            </Content>
          </FlexDiv>
          <FlexDiv margin={'0'} justify="start" align="start" direction="row">
            <Content height={'22px'} width={'278px'} color={'#495057'} fontSize={'5px'} lineHeight={'22px'}>
              COPYRIGHT© Peachplanner ALL RIGHT RESERVED
            </Content>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </FooterDiv>
  );
};

export default Footer;
