import { Content } from 'src/component/style/style';
import styled from 'styled-components';

interface Props {
  reviewState: string;
  reviewWriter: string;
  picture: string;
  reviewContent: string;
  reviewCreatedAt: string;
}

const Review = ({ reviewState, reviewWriter, picture, reviewContent, reviewCreatedAt }: Props) => {
  //   fetchMyReview();
  return (
    <Container>
      <ReviewStateBox>
        <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#495057">
          {reviewState}
        </Content>
      </ReviewStateBox>
      <WriterBox>
        <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#495057">
          {reviewWriter}
        </Content>
      </WriterBox>
      <PictureBox>
        <Image src={picture}></Image>
      </PictureBox>
      <ReviewContentBox>
        <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#495057">
          {reviewContent}
        </Content>
      </ReviewContentBox>
      <ReviewCreatedAtBox>
        <Content height="19px" width="auto" fontSize="13px" lineHeight="normal" color="#495057">
          {reviewCreatedAt}
        </Content>
      </ReviewCreatedAtBox>
    </Container>
  );
};

export default Review;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  border-bottom-color: #ced4da;
`;

const ReviewStateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 80px;
`;

const WriterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 80px;
`;

const PictureBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 95px;
`;

const ReviewContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 64px;
  width: 486px;
  margin-left: 10px;
`;

const ReviewCreatedAtBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 102px;
`;

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 48px;
  width: 48px;
  margin: 0;
`;
