import { FlexDiv, Title } from '../../../component/CommonStyle/style';
import PButton from '../../../component/PButton';
import { ProfileProps } from '../Profile';

const ProfileHeader = ({ isUpdate }: ProfileProps) => {
  return (
    <FlexDiv height="56px" justify="flex-start" margin="0 0 30px 0">
      <Title height={'33px'} width="430px" fontSize={'22px'} lineHeight={'33px'} margin={'16px 0 0 0'}>
        {isUpdate ? '프로필 수정' : '프로필 등록'}
      </Title>
      <FlexDiv height="56px" justify="flex-end" margin="0 26px 0 0">
        {isUpdate ? (
          <PButton fontSize="14px" height="41px" width="126px">
            프로필 돌아가기
          </PButton>
        ) : (
          <></>
        )}
      </FlexDiv>
    </FlexDiv>
  );
};

export default ProfileHeader;
