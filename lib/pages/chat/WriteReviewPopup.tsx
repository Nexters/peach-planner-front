import React, { useState, FC } from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import Close from 'public/assets/svg/ic_close_b.svg';
import { fetchPlanner } from 'lib/api/Planner';
import { useQuery, useMutation } from 'react-query';
import { Content } from 'lib/pages/components/style/style';
import ImageUpload from 'lib/pages/components/ImageUpload';
import { upload } from 'lib/api/Image';
import { postReview, CreateReviewReq } from 'lib/api/Review';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface WriteReviewModalProps {
  showReviewModal: boolean;
  closeReviewModal(): void;
  plannerId: string;
}

export const WriteReviewPopup: FC<WriteReviewModalProps> = ({ showReviewModal, closeReviewModal, plannerId }) => {
  const router = useRouter();
  const { data: plannerInfo } = useQuery(['planner', plannerId], () => fetchPlanner(plannerId));
  const [reviewMessage, setReviewMessage] = React.useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const writeReview = useMutation(
    async (req: CreateReviewReq) => {
      return await postReview(req);
    },
    {
      onSuccess: async (data) => {
        console.log('writeReview success', { data });
        closeReviewModal();
        router.push(`/planner/${plannerId}/detail/#planner-review`);
      },
      onError: async (error: any) => {
        alert("이미 작성하신 리뷰가 존재해요.");
        closeReviewModal();
        console.log('writeReview err', { error });
      }
    },
  );
  const registerReview = async () => {
    const s3ImageUrl = imageFile ? await upload(imageFile) : null;

    writeReview.mutate({
      comment: reviewMessage,
      plannerId: parseInt(plannerId),
      imageUrl: s3ImageUrl,
    });
  };

  return (
    <StyledPopup open={showReviewModal} closeOnDocumentClick onClose={closeReviewModal}>
      <PopupTitleContainer>
        <PopupTitle>리뷰쓰기</PopupTitle>
        <CloseButton onClick={closeReviewModal}>
          <Image src={Close} layout='fixed' />
        </CloseButton>
      </PopupTitleContainer>
      <SizedBox height={"16px"} />
      <PopupSubtitle>{plannerInfo?.name}</PopupSubtitle>
      <Divider />
      <SizedBox height={"15px"} />
      <WriteReviewTitle>플래너님의 리뷰를 남겨주세요</WriteReviewTitle>
      <SizedBox height={"6px"} />
      <WriteReviewArea
        placeholder='최소 10자 이상 입력해 주세요.'
        onChange={(e) => setReviewMessage(e.target.value)}
        value={reviewMessage} />
      <SizedBox height={"20px"} />
      <div>
        <Content
          height={'21px'}
          width={'auto'}
          color={'#495057'}
          fontSize={'14px'}
          lineHeight={'21px'}
          margin={'0'}
        >사진 첨부하기</Content>
      </div>
      <div>
        <ImageUpload 
          id={"review-image-upload"}
          previewImage={previewImage}
          setPreviewImage={setPreviewImage}
          setImageFile={setImageFile}
        />
      </div>
      <SizedBox height={"40px"} />
      <CTAButton onClick={registerReview}>
        <CTA color="#FFFFFF">등록하기</CTA>
      </CTAButton>
    </StyledPopup>
  );
};

const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgb(0, 0, 0, 0.8);
  }

  &-content {
    background-color: white;
    width: 45%;
    border-radius: 2px;
    padding: 40px;
  }
`;

const PopupTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PopupTitle = styled.div`
  font-family: 'SpoqaHanSans';
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;

const PopupSubtitle = styled.div`
  font-family: 'SpoqaHanSans';
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
`;

const Divider = styled.div`
  width: 80%;
  height: 1px;
  flex-grow: 0;
  margin: 6px 252px 8px 0;
  background-color: #ced4da;
`;

const WriteReviewTitle = styled.div`
  flex-grow: 0;
  font-family: 'AppleSDGothicNeo';
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
`;

const WriteReviewArea = styled.textarea`
  display: flex;
  resize: none;  
  width: 100%;
  height: 120px;
  border-radius: 3px;
  border: solid 1px #ced4da;

  padding: 10px;
  ::placeholder {
    font-family: 'SpoqaHanSans';
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #adb5bd;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  outline: none;
  font-size: 18px;
  display: flex;
  line-height: 33px;
  background-color: transparent;
  border: none;

  svg {
    margin-right: 4px;
    color: black;
  }
`;

interface SizedBoxProps {
  width?: string;
  height?: string;
}

const SizedBox = styled.div<SizedBoxProps>`
  width: ${(props: SizedBoxProps) => (props.width)};
  height: ${(props: SizedBoxProps) => (props.height)};
  display: inline-block;
`;

const CTAButton = styled.button`
  width: 100%;
  margin: 0 8px 0 0;
  padding: 6px 16px 8px;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  background-color: #e64980;

  font-weight: 700;
  font-style: normal;
  font-size: medium;
  transition-duration: 0.4s;
  :hover {
    background-color: #FF79B0;
  }
`;

interface CTAProps {
  color: string;
}

const CTA = styled.p<CTAProps>`
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;  
  color: ${(props: CTAProps) => props.color};
`;
