import logo from '../assets/svg/ic_logo.svg';
import { ImageBox } from './CommonStyle/style';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <ImageBox height={'24.55px'} width={'140.58px'} margin={'0'} src={logo} />
      <BottomContainer>
        <Item>이용약관 | 개인정보처리방침</Item>
        <Item>COPYRIGHT© Peachplanner ALL RIGHT RESERVED</Item>
      </BottomContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
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
`;
