import styled from 'styled-components';
import { Box, Content, FlexDiv, ProfileImgBox, Title } from '../../../component/CommonStyle/style';

const userProps = {
  name: '홍길동',
  type: '플래너'
};

const UserProfile = () => {
  return (
    <FlexDiv justify="flex-start" margin="0 0 0 0">
      <Box height="340px" width="310px">
        <FlexDiv margin="0" direction="column">
          <ProfileImgBox height="124px" width="124px"></ProfileImgBox>
          <Title height={'27px'} width={'auto'} fontSize={'18px'} lineHeight={'27px'} margin={'24px 0 7px 0'}>
            {userProps.name}
          </Title>
          <TypeBox>
            <Content
              height={'19px'}
              width={'auto'}
              color={'#D6336C'}
              fontSize={'13px'}
              lineHeight={'19px'}
              margin={'2px 4px 2px 4px'}
            >
              {userProps.type}
            </Content>
          </TypeBox>
        </FlexDiv>
      </Box>
    </FlexDiv>
  );
};

export default UserProfile;

const TypeBox = styled.div`
  height: 22px;
  border-radius: 3px;
  background-color: #fff0f6;
  display: flex;
  justify-content: 'center';
  align-items: 'center';
`;
