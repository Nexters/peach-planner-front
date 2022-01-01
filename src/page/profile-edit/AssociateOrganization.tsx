import { Dispatch, SetStateAction, useState } from 'react';
import { Content, FlexDiv } from '../../component/style/style';
import LineAndTitle from './LindAndTitle';
import PButton from '../../component/PButton';
import styled from 'styled-components';
import HorizontalLine from 'src/component/HorizontalLine';
import ImageUpload from './ImageUpload';
import Organization from './Organization';
import { SupportStore } from '.';
import { upload } from 'src/api/Image';

interface Props {
  id: string;
  name: string;
  margin: string;
  stores: SupportStore[];
  setStores: Dispatch<SetStateAction<SupportStore[]>>;
}

const AssociateOrganization = ({ id, name, margin, stores, setStores }: Props) => {
  const [organizationName, setOrganizationName] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const registerOrganization = async () => {
    if (stores.length >= 10) {
      alert("10개 이상으로는 등록하실 수 없어요!");
      return;
    }
    if (!organizationName ) {
      alert("업체 이름을 입력해주세요!");
      return;
    }
    if (!imageFile) {
      alert("업체 사진을 등록해주세요!");
      return;
    }

    const s3ImageUrl = await upload(imageFile);
    const store: SupportStore = {
      name: organizationName,
      previewImage: previewImage,
      imageUrl: s3ImageUrl
    };
    setStores(stores?.concat(store));
  };

  const handleChangeOrganizationName = (e: any) => {
    const value = e.target.value;
    setOrganizationName(value);
  };

  const changePreviewImage = (image: string) => {
    setPreviewImage(image);
  };

  const changeImageFile = (imageFile: any) => {
    setImageFile(imageFile);
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
      <Input value={organizationName} onChange={handleChangeOrganizationName}></Input>
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
      <ImageUpload
        id={id}
        previewImage={previewImage}
        setPreviewImage={changePreviewImage}
        setImageFile={changeImageFile}
      />
      <HorizontalLine color="#dee2e6"></HorizontalLine>
      <FlexDiv margin="15px 0 72px 0" direction="row" justify="space-between" align="start">
        <PButton color="black" fontSize="14px" height="45px" width="126px" onClick={registerOrganization}>
          업체 등록하기
        </PButton>
        <FlexDiv margin="8px 0 0 0" direction="row" justify="flex-end" align="start"></FlexDiv>
      </FlexDiv>
      <OrganizationLists>
        {stores?.map((organization, index) => {
            return <Organization key={index} name={organization.name} image={organization.previewImage} handleOrgClose={() => {
              setStores(stores.filter((e, i) => i !== index));
            }} />;
          }) ?? <></>}
      </OrganizationLists>
      <HorizontalLine color="#868E96"></HorizontalLine>
    </FlexDiv>
  );
};

export default AssociateOrganization;

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

const OrganizationLists = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
`;
