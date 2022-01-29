import styled from 'styled-components';
import { Content, FlexDiv, Title } from 'lib/pages/components/style/style';
import PButton from 'lib/pages/components/PButton';
import AccountDefault from 'public/assets/svg/ic_account_default.svg';
import EditImage from 'public/assets/svg/ic_changephoto.svg';
import { useState } from 'react';
import UserType from 'lib/pages/components/UserType';
import { upload } from 'lib/api/Image';
import { editUserProfileImage } from 'lib/api/User';
import Image from 'next/image';

interface Props {
  name: string | undefined;
  type: 'USER' | 'PLANNER' | undefined;
  profileImage?: string;
}

const UserProfile = ({ name, type, profileImage }: Props) => {
  const [previewImage, setPreviewImage] = useState('');

  const handleFile = async (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const s3ImageUrl = await upload(file);
      await editUserProfileImage({
        profileImage: s3ImageUrl,
      });
      setPreviewImage(s3ImageUrl);
    }
  };

  return (
    <FlexDiv justify="flex-start" margin="0 0 0 0">
      <Box>
        <FlexDiv margin="0" direction="column">
          <ProfileImageBox>
            <ProfileImage src={previewImage ? previewImage : profileImage ? profileImage : AccountDefault} />
            <Input id="profile-image-file" type="file" onChange={handleFile}></Input>
            <Label htmlFor="profile-image-file">
              <EditIcon children={<Image width='41px' height={'41px'} src={EditImage}/>}/>
            </Label>
          </ProfileImageBox>
          <Title height={'27px'} width={'auto'} fontSize={'18px'} lineHeight={'27px'} margin={'24px 0 7px 0'}>
            {name ? name : ''}
          </Title>
          <UserType type={type} textHeight="19px" typeHeight="22px" fontSize="13px" lineHeight="19px"></UserType>
          <FlexDiv margin="18px 0 0 0" direction="column">
            <a href={type == 'PLANNER' ? "/plannerSetting" : '/userSetting'}>
              <PButton fontSize="14px" height="41px" width="98px">
                계정 설정
              </PButton>
            </a>
          </FlexDiv>
        </FlexDiv>
      </Box>
    </FlexDiv>
  );
};

export default UserProfile;

const Box = styled.div`
  box-sizing: border-box;
  height: 340px;
  width: 310px;
  border: 1px solid #ced4da;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: 'center';
  align-items: 'center';
`;

const ProfileImageBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

interface ImageProps {
  src: string;
}

const ProfileImage = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 124px;
  width: 124px;
  margin: 0;
  border-radius: 100%;
  position: relative;
`;

const EditIcon = styled.div`
  box-sizing: border-box;
  border: 1px solid #ffffff;
  background-color: #f1f3f5;
  border-radius: 100%;
  position: absolute;
  cursor: pointer;
`;

const Label = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Input = styled.input`
  display: none;
`;
