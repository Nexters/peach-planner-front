import styled from 'styled-components';
import { Content, FlexDiv, Title } from '../../component/style/style';
import Certification from './Certification';

const UserCertification = () => {
  return (
    <FlexDiv margin="24px 0 0 0">
      <Box>
        <Title height={'27px'} width="288px" fontSize={'18px'} lineHeight={'27px'} margin={'24px 0 0 21px'}>
          인증
        </Title>
        <Content
          height={'16px'}
          width={'288px'}
          color={'#495057'}
          fontSize={'13px'}
          lineHeight={'24px'}
          margin={'7px 0 24px 21px'}
        >
          계정 설정에서 연락처와 이메일 인증이 가능합니다.
        </Content>
        <Certification name="연락처" isCertificated={true}></Certification>
        <Certification name="이메일" isCertificated={false}></Certification>
      </Box>
    </FlexDiv>
  );
};

export default UserCertification;

const Box = styled.div`
  box-sizing: border-box;
  height: 250px;
  width: 310px;
  border: 1px solid #ced4da;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: 'center';
  align-items: 'center';
`;
