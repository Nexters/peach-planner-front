import { FlexDiv, Title } from '../../../component/CommonStyle/style';
import { ProfileProps } from '../Profile';

const ProfileHeader = ({ isUpdate }: ProfileProps) => {
  return (
    <FlexDiv height="56px" justify="flex-start" margin="0">
      <Title height={'33px'} width="auto" fontSize={'22px'} lineHeight={'33px'} margin={'0'}>
        {isUpdate ? '프로필 수정' : '프로필 등록'}
      </Title>
    </FlexDiv>
  );
};

export default ProfileHeader;
