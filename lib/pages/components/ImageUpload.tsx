import { Content } from 'lib/pages/components/style/style';
import styled from 'styled-components';
import AddPhoto from 'public/assets/svg/ic_addphoto.svg';
import Image from 'next/image';

interface ImageUploadProps {
  id: string;
  previewImage: string;
  setPreviewImage: (data: string) => void;
  setImageFile: (data: any) => void;
}

const ImageUpload = ({ id, previewImage, setPreviewImage, setImageFile }: ImageUploadProps) => {
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
    <>
      <Input id={`${id}-file`} type="file" onChange={handleFile}/>
      <Label htmlFor={`${id}-file`}>
        <div style={{
          margin: '6px 0px 6px 0',
          cursor: 'pointer',
        }} children={<Image src={previewImage ? previewImage : AddPhoto} width='93px' height='93px' />} />
      </Label>
      <Content height={'36px'} width={'auto'} color={'#868E96'} fontSize={'12px'} lineHeight={'18px'} margin={'0'}>
        권장 크기 : 00 x 00 <br></br> jpg,jpeg,gif,png,bmp 형식의 이미지만 등록됩니다.
      </Content>
    </>
  );
};

export default ImageUpload;

const Input = styled.input`
  display: none;
`;

const Label = styled.label``;