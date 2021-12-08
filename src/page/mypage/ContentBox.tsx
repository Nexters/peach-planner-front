import { Content, Title } from 'src/component/style/style';
import styled from 'styled-components';
import { FC } from 'react';
import ArrowRight from 'src/assets/svg/ic_right_gray.svg';

interface Props {
  title: string;
  viewName: string;
  handleClick: () => void;
}

const ContentBox: FC<Props> = ({ title, viewName, handleClick, children }) => {

  return (
    <Box>
      <TitleBox>
        <Title height="25px" fontSize="17px" lineHeight="normal" color="#495057" margin="0px 0px 0px 16px">
          {title}
        </Title>
      </TitleBox>
      <Line></Line>
      <Body>
        <ChildBody>{children}</ChildBody>
        <MoveButtonBox onClick={handleClick}>
          <Content
            height="19px"
            width="auto"
            fontSize="13px"
            color="#495057"
            lineHeight="normal"
            margin="0px 0px 0px 16px"
          >
            전체 {viewName} 보기
          </Content>
          <ArrowButton src={ArrowRight}></ArrowButton>
        </MoveButtonBox>
      </Body>
    </Box>
  );
};

export default ContentBox;

const Box = styled.div`
  width: 270px;
  height: 240px;
  margin: 40px 0px 232px 40px;
  padding: 5px 0 23px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 #adb5bd;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 270px;
  height: 48px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Line = styled.div`
  width: 248px;
  height: 1px;
  background-color: #dee2e6;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChildBody = styled.div`
  width: 270px;
  height: 108px;
`;

const MoveButtonBox = styled.div`
  width: 270px;
  height: 40px;
  margin: 28px 0 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

interface ImageProps {
  src: string;
}

const ArrowButton = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 24px;
  width: 24px;
`;
