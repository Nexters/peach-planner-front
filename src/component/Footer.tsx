import logo from '../assets/svg/ic_logo.svg';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Image src={logo} />
      <BottomContainer>
        <Item>
          <TermsPolicy href="/termsOfUse" target="_blank">
            이용약관
          </TermsPolicy>
          {'  '}|{' '}
          <TermsPolicy href="/privacyPolicy" target="_blank">
            개인정보처리방침
          </TermsPolicy>
        </Item>
        <Item>COPYRIGHT© Peachplanner ALL RIGHT RESERVED</Item>
      </BottomContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  margin-top: 100px;
  padding: 35px 10%;
  border-top: 1px solid;
  border-top-color: #868e96;
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

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
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
