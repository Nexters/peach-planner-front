import Image from 'next/image';
import logo from 'public/assets/svg/ic_logo.svg';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <Img src={logo} />
        <BottomContainer>
          <Item>
            <TermsPolicy href="/termsOfUse" target="_blank">
              이용약관
            </TermsPolicy>
            {'  '}|{' '}
            <TermsPolicy href="/privacyPolicy" target="_blank">
              개인정보처리방침
            </TermsPolicy>
            {'  '}|{' '}
            <TermsPolicy href="http://pf.kakao.com/_xhxerib/chat" target="_blank">
              제휴 및 상담하기
            </TermsPolicy>
          </Item>
          <Item>COPYRIGHT© Peachplanner ALL RIGHT RESERVED</Item>
        </BottomContainer>
      </InnerContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  padding: 35px 10%;
  top: 100vh;
  border-top: 1px solid;
  border-top-color: #f1f3f5;
`;

const InnerContainer = styled.div`
  width: 1100px;
  /* display: flex; */
`;

const BottomContainer = styled.div`
  margin-top: 37px;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  color: #343a40;
  font-size: 14px;
  color: #868e96;
`;

interface ImageProps {
  src: string;
}

const Img = styled(Image).attrs((props: ImageProps) => ({ src: props.src }))`
  height: 24.55px;
  width: 140.58px;
  margin: 0;
  border-radius: 10px;
`;

const TermsPolicy = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #868e96;
`;
