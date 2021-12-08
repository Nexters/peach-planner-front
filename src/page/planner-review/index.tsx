import { Title } from 'src/component/style/style';
import styled from 'styled-components';
import PlannerPageSideMenu from '../user/mypage/PlannerPageSideMenu';
import Review from './Review';
import Test from 'src/assets/svg/ic_right_gray.svg';

const PlannerReview = () => {
  return (
    <Container>
      <InnerContainer>
        <PlannerPageSideMenu></PlannerPageSideMenu>
        <ContentContainer>
          <TitleBox>
            <Title height="27px" fontSize="18px" lineHeight="normal" color="#000000">
              나의 리뷰
            </Title>
          </TitleBox>
          <TableHeader>
            <ReviewState>
              <Title height="18px" fontSize="12px" lineHeight="normal" color="#212529">
                리뷰 구분
              </Title>
            </ReviewState>
            <Writer>
              <Title height="18px" fontSize="12px" lineHeight="normal" color="#212529">
                등록자
              </Title>
            </Writer>
            <Picture>
              <Title height="18px" fontSize="12px" lineHeight="normal" color="#212529">
                사진
              </Title>
            </Picture>
            <ReviewContent>
              <Title height="18px" fontSize="12px" lineHeight="normal" color="#212529">
                리뷰내용
              </Title>
            </ReviewContent>
            <ReviewCreatedAt>
              <Title height="18px" fontSize="12px" lineHeight="normal" color="#212529">
                리뷰등록일
              </Title>
            </ReviewCreatedAt>
          </TableHeader>
          <Review
            reviewState="상담완료"
            reviewWriter="조해리"
            reviewContent="너무 좋아요 어쩌고 저쩌고"
            picture={Test}
            reviewCreatedAt="2021.7.31. 12:30"
          ></Review>
          <Review
            reviewState="상담완료"
            reviewWriter="조해리"
            reviewContent="너무 좋아요 어쩌고 저쩌고"
            picture={Test}
            reviewCreatedAt="2021.7.31. 12:30"
          ></Review>
          <Review
            reviewState="상담완료"
            reviewWriter="조해리"
            reviewContent="너무 좋아요 어쩌고 저쩌고"
            picture={Test}
            reviewCreatedAt="2021.7.31. 12:30"
          ></Review>
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
};

export default PlannerReview;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  margin-left: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 860px;
  height: 56px;
`;

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 860px;
  height: 34px;
  margin-top: 1px;
  border-top: 1px solid;
  border-top-color: #ced4da;
  border-bottom: 1px solid;
  border-bottom-color: #ced4da;
`;

const ReviewState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 80px;
`;

const Writer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 80px;
`;

const Picture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 95px;
`;

const ReviewContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 34px;
  width: 486px;
  margin-left: 10px;
`;

const ReviewCreatedAt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 102px;
`;
