import { useState } from 'react';
import { Content, FlexDiv } from '../../component/style/style';
import LineAndTitle from './LindAndTitle';
import AddPhoto from '../../assets/svg/ic_addphoto.svg';
import PButton from '../../component/PButton';
import SideText from './SideText';
import OrganizationRegisterModal from './OrganizationRegisterModal';
import styled from 'styled-components';

interface Props {
  name: string;
  margin: string;
}

const AssociateOrganization = ({ name, margin }: Props) => {
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const openImageModal = () => setShowImageModal(true);
  const closeImageModal = () => {
    setShowImageModal(false);
    
  };

  return (
    <FlexDiv width="632px" margin={margin} direction="column" justify="flex-start" align="start">
      <LineAndTitle title={`제휴 ${name} 업체`} content="제휴업체를 등록할 수 있어요."></LineAndTitle>
      <Content
        height={'24px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'16px'}
        lineHeight={'24px'}
        margin={'20px 0 8px 0'}
      >
        {`${name} 업체 이름`}
      </Content>
      <Input></Input>
      <Content
        height={'24px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'16px'}
        lineHeight={'24px'}
        margin={'13px 0 12px 0'}
      >
        {`${name} 업체 사진`}
      </Content>
      <Image src={AddPhoto}></Image>
      <Content
        height={'36px'}
        width={'auto'}
        color={'#868E96'}
        fontSize={'12px'}
        lineHeight={'18px'}
        margin={'13px 0 12px 0'}
      >
        권장 크기 : 00 x 00 <br></br> jpg,jpeg,gif,png,bmp 형식의 정지 이미지만 등록됩니다.
      </Content>
      <HorizontalLine color="#dee2e6"></HorizontalLine>
      <FlexDiv margin="15px 0 72px 0" direction="row" justify="space-between" align="start">
        <PButton color="black" fontSize="14px" height="45px" width="126px" onClick={openImageModal}>
          업체 등록하기
        </PButton>
        <OrganizationRegisterModal showImageModal={showImageModal} closeImageModal={closeImageModal} />
        <FlexDiv margin="8px 0 0 0" direction="row" justify="flex-end" align="start">
          <SideText text="소속업체의 제휴업체를 불러올 수 있어요." colorText="제휴업체 불러오기"></SideText>
        </FlexDiv>
      </FlexDiv>
      <HorizontalLine></HorizontalLine>
    </FlexDiv>
  );
};

export default AssociateOrganization;

const HorizontalLine = styled.hr`
  height: 1px;
  width: 632px;
  background-color: #ced4da;
`;

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 93px;
  width: 93px;
  margin: 0px 0px 16px 0;
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 41px;
  width: 421px;
  border: 1px solid #ced4da;
  padding: 13px;
  border-radius: 3px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ADB5BD;
    font-size: 13px;
  }
`;
