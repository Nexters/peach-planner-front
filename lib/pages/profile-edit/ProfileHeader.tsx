import { FlexDiv, Title } from 'lib/pages/components/style/style';
import PButton from 'lib/pages/components/PButton';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface ProfileProps {
  isUpdate: boolean;
}

const ProfileHeader = ({ isUpdate }: ProfileProps) => {
  const history = useRouter();
  return (
    <FlexDiv height="56px" justify="flex-start" margin="0 0 30px 0">
      <Title height={'33px'} width="430px" fontSize={'22px'} lineHeight={'33px'} margin={'16px 0 0 0'}>
        {isUpdate ? '프로필 수정' : '프로필 등록'}
      </Title>
      <FlexDiv height="56px" justify="flex-end" margin="0 26px 0 0">
        {isUpdate ? (
          <PButton fontSize="14px" height="41px" width="126px" onClick={() => history.push('/plannerProfile')}>
            프로필 돌아가기
          </PButton>
        ) : (
          <BackButton>
            <Link href="/" passHref prefetch><StyledLink>다음에 할게요</StyledLink></Link>
          </BackButton>
        )}
      </FlexDiv>
    </FlexDiv>
  );
};

export default ProfileHeader;

const StyledLink = styled.a`
  text-decoration: none;
  color: #495057;
  font-size: 13px;
  line-height: 19px;
`;

const BackButton = styled.div`
  height: 20px;
  width: 81px;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;
