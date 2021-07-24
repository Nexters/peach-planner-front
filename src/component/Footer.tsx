import styled from 'styled-components';
import logo from '../assets/svg/ic_logo.svg';
import { Content, FlexDiv, ImageBox } from './CommonStyle/style';

const Footer = () => {
  return (
    <FooterDiv>
      <FlexDiv margin={'36px 170px 0 170px'} align="start" direction="column">
        <ImageBox height={'24.55px'} width={'140.58px'} margin={'0'} src={logo}></ImageBox>
        <FlexDiv margin={'37px 0 0 0'} justify="space-between" align="start" direction="row">
          <FlexDiv margin={'0'} justify="start" align="start" direction="row">
            <Content
              height={'22px'}
              width={'auto'}
              color={'#343A40'}
              fontSize={'14px'}
              lineHeight={'22px'}
              margin="0 6px 0 0"
            >
              이용약관
            </Content>
            <Content height={'22px'} width={'auto'} color={'#343A40'} fontSize={'14px'} lineHeight={'22px'}>
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

export const FooterDiv = styled.div`
  height: 154px;
  width: 1440px;
  border-top: 1px solid;
  border-top-color: #868e96;
`;
