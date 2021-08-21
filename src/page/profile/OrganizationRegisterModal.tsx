import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { Content, FlexDiv, Title } from '../../component/style/style';
import Close from '../../assets/svg/ic_close_b.svg';
import PButton from '../../component/PButton';
import SearchInput from './SearchInput';
import HorizontalLine from 'src/component/HorizontalLine';
import ImageUpload from './ImageUpload';
import { useState } from 'react';

interface ImageModalProps {
  showImageModal: boolean;
  closeImageModal(): void;
}

const OrganizationRegisterModal = ({ showImageModal, closeImageModal }: ImageModalProps) => {
  const [organizationName, setOrganizationName] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleChangeOrganizationName = (e: any) => {
    const value = e.target.value;
    setOrganizationName(value);
  };

  const changePreviewImage = (image: string) => {
    setPreviewImage(image);
  };

  const changeImageFile = (imageFile: any) => {
    setImageFile(imageFile);
  };

  return (
    <StyledPopup open={showImageModal} closeOnDocumentClick onClose={closeImageModal}>
      <FlexDiv margin="0" justify="space-between" direction="column">
        <FlexDiv margin="0 0 16px 0" justify="space-between">
          <Title height={'36px'} width={'auto'} fontSize={'24px'} lineHeight={'36px'}>
            업체 등록하기
          </Title>
          <CloseButton src={Close} onClick={closeImageModal}></CloseButton>
        </FlexDiv>
        <FlexDiv margin="0 0 15px 0" align="flex-start" direction="column">
          <Title
            height={'20px'}
            width={'auto'}
            fontSize={'14px'}
            color="#495057"
            lineHeight={'36px'}
            margin="0 0 7px 0"
          >
            업체 정보
          </Title>
          <HorizontalLine color="#CED4DA"></HorizontalLine>
        </FlexDiv>
        <FlexDiv margin="0" justify="space-between">
          <FlexDiv margin="0 31px 0 0" justify="flex-start" align="start" direction="column">
            <Content
              height={'20px'}
              width={'auto'}
              color={'#495057'}
              fontSize={'14px'}
              lineHeight={'20px'}
              margin={'0 0 6px 0'}
            >
              업체 이름
            </Content>
            <Input height="41px" width="341px" placeholder="업체 이름을 입력해주세요."></Input>
            <Content
              height={'20px'}
              width={'auto'}
              color={'#495057'}
              fontSize={'14px'}
              lineHeight={'20px'}
              margin={'16px 0 6px 0'}
            >
              대표 전화번호
            </Content>
            <FlexDiv margin="0 0 0 0" justify="flex-start" direction="row">
              <Input height="41px" width="51px" placeholder="010"></Input>
              <Content
                height={'16px'}
                width={'auto'}
                color={'#ADB5BD'}
                fontSize={'13px'}
                lineHeight={'16px'}
                margin={'0px 6px 0 6px'}
              >
                -
              </Content>
              <Input height="41px" width="60px" placeholder="1234"></Input>
              <Content
                height={'16px'}
                width={'auto'}
                color={'#ADB5BD'}
                fontSize={'13px'}
                lineHeight={'16px'}
                margin={'0px 6px 0 6px'}
              >
                -
              </Content>
              <Input height="41px" width="60px" placeholder="1234"></Input>
            </FlexDiv>
            <Content
              height={'20px'}
              width={'auto'}
              color={'#495057'}
              fontSize={'14px'}
              lineHeight={'20px'}
              margin={'16px 0 6px 0'}
            >
              위치
            </Content>
            <SearchInput height="41px" width="341px" placeholder="위치를 입력해주세요."></SearchInput>
            <Content
              height={'20px'}
              width={'auto'}
              color={'#495057'}
              fontSize={'14px'}
              lineHeight={'20px'}
              margin={'16px 0 6px 0'}
            >
              업체 소개
            </Content>
            <TextArea placeholder="업체 소개를 입력해주세요."></TextArea>
          </FlexDiv>
          <FlexDiv margin="0" height="400px" justify="flex-start" align="start" direction="column">
            <Content
              height={'20px'}
              width={'auto'}
              color={'#495057'}
              fontSize={'14px'}
              lineHeight={'20px'}
              margin={'0'}
            >
              대표사진 등록
            </Content>
            <ImageUpload id="modal" previewImage={previewImage} setImageFile={changeImageFile} setPreviewImage={changePreviewImage}></ImageUpload>
          </FlexDiv>
        </FlexDiv>
        <FlexDiv margin="16px 0 0 0" justify="flex-start" align="start">
          <PButton color="pink" fontSize="14px" height="40px" width="341px" fontWeight="bold">
            등록하기
          </PButton>
        </FlexDiv>
      </FlexDiv>
    </StyledPopup>
  );
};

export default OrganizationRegisterModal;

const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgb(0, 0, 0, 0.8);
  }

  &-content {
    background-color: white;
    width: 40%;
    height: 65%;
    border-radius: 10px;
    padding: 40px 60px 40px 60px;
  }
`;

interface ImageProps {
  src: string;
}

const CloseButton = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  cursor: pointer;
  height: 24px;
  width: 24px;
`;

interface InputProps {
  height: string;
  width: string;
  placeholder?: string;
}

const Input = styled.input<InputProps>`
  box-sizing: border-box;
  height: ${(props: InputProps) => props.height};
  width: ${(props: InputProps) => props.width};
  border: 1px solid #ced4da;
  padding: 13px;
  border-radius: 3px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ADB5BD;
    font-size: 13px;
  }
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  height: 121px;
  width: 341px;
  padding: 13px;
  border: 1px solid #ced4da;
  border-radius: 3px;
  resize: none;
`;
