import { useHistory } from 'react-router';
import styled from 'styled-components';
import LeftArrow from 'src/assets/svg/ic_arrow-left-line.svg';
import { Title } from 'src/component/style/style';

interface Props {
  isUser: boolean;
}

const Header = ({ isUser }: Props) => {
  const history = useHistory();

  const handleClick = () => {
    let path: string;
    if (isUser) {
      path = '/userPage';
    } else {
      path = '/plannerMyEstimate';
    }

    history.push(path);
  };

  return (
    <Container>
      <Back>
        <BackBody onClick={handleClick}>
          <BackImage src={LeftArrow}></BackImage>
          <Title height="27px" width="auto" fontSize="18px" color="#000" lineHeight="27px" margin="0px 0px 0px 8px">
            리뷰 목록으로 이동
          </Title>
        </BackBody>
      </Back>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 860px;
  height: 83px;
  border-bottom: 1px solid;
  border-bottom-color: #e9ecef;
`;

const Back = styled.div`
  display: flex;
  width: 860px;
  height: 40px;
  margin: 14px 0px 0px 0px;
`;

const BackBody = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

interface ImageProps {
  src: string;
}

const BackImage = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 24px;
  width: 24px;
`;
