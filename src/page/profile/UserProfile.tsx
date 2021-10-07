import styled from 'styled-components';
import { Content, FlexDiv, Title } from '../../component/style/style';
import PButton from '../../component/PButton';
import AccountDefault from '../../assets/svg/ic_logo.svg';
import { useState } from 'react';

const userProps = {
  name: '홍길동',
  type: '플래너'
};

const UserProfile = () => {
  const [previewImage, setPreviewImage] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleFile = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);
      setImageFromFile(file);
    }
  };

  const setImageFromFile = (file: any) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const image = reader.result;
      if (image) {
        setPreviewImage(image.toString());
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <FlexDiv justify="flex-start" margin="0 0 0 0">
      <Box>
        <FlexDiv margin="0" direction="column">
          <ProfileImageBox>
            <ProfileImage src={previewImage ? previewImage : AccountDefault}></ProfileImage>
            <Input id="profile-image-file" type="file" onChange={handleFile}></Input>
            <Label htmlFor="profile-image-file">
              <EditIcon></EditIcon>
            </Label>
          </ProfileImageBox>
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
          <FlexDiv margin="18px 0 0 0" direction="column">
            <PButton fontSize="14px" height="41px" width="98px">
              계정 설정
            </PButton>
          </FlexDiv>
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

const EditIcon = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  box-sizing: border-box;
  height: 41px;
  width: 41px;
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
