import { Content, FlexDiv, Title } from '../../component/style/style';
import SideText from './SideText';
import HorizontalLine from '../../component/HorizontalLine';
import OrganizationRegisterModal from './OrganizationRegisterModal';
import { useState } from 'react';
import SearchInput from './SearchInput';

const PlannerOrganization = () => {
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const openImageModal = () => setShowImageModal(true);
  const closeImageModal = () => {
    setShowImageModal(false);
  };

  return (
    <FlexDiv width="632px" margin="0 0 72px 0" direction="column" justify="flex-start" align="start">
      <HorizontalLine color="#868E96"></HorizontalLine>
      <FlexDiv width="632px" direction="row" justify="flex-start" align="center" margin="12px 0 0 0">
        <Title height={'27px'} width={'400px'} fontSize={'18px'} lineHeight={'27px'} margin={'0'}>
          소속업체 정보
        </Title>
      </FlexDiv>
      <Content
        height={'19px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'13px'}
        lineHeight={'19px'}
        margin={'4px 0 20px 0'}
      >
        소속 웨딩업체를 등록할 수 있어요.
      </Content>
      <Content
        height={'24px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'16px'}
        lineHeight={'24px'}
        margin={'20px 0 8px 0'}
      >
        웨딩업체 이름
      </Content>
      <SearchInput height="41px" width="421px" placeholder="웨딩 업체 이름을 입력해주세요."></SearchInput>
      <FlexDiv margin="8px 0 0 0" direction="row" justify="flex-start" align="start">
        <SideText text="업체가 등록되어 있지 않으신가요?" colorText="업체 등록하기" onClick={openImageModal}></SideText>
        <OrganizationRegisterModal showImageModal={showImageModal} closeImageModal={closeImageModal} />
      </FlexDiv>
    </FlexDiv>
  );
};

export default PlannerOrganization;
