import { useState } from 'react';
import { Content, FlexDiv } from '../../../component/style/style';
import LineAndTitle from '../LindAndTitle';
import PButton from '../../../component/PButton';
import styled from 'styled-components';
import HorizontalLine from 'src/component/HorizontalLine';
import ImageUpload from '../ImageUpload';
import Organization from '../Organization';
import { SupportStore } from '../';
import { upload } from 'src/api/Image';

interface Props {
  id: string;
  name: string;
  margin: string;
  handleStores: (store: SupportStore) => void;
}

interface OrganizationInformation {
  name: string;
  previewImage: string;
  imageFile: any;
}

export const PortfolioCollect = ({ id, name, margin, handleStores }: Props) => {
  const [organizationName, setOrganizationName] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [organizations, setOrganizations] = useState<OrganizationInformation[]>([]);

  const registerOrganization = async () => {
    if (!organizationName || organizations.length >= 10) return;

    const organization = {
      name: organizationName,
      previewImage: previewImage,
      imageFile: imageFile
    };
    const s3ImageUrl = await upload(imageFile);
    const store: SupportStore = {
      name: organizationName,
      previewImage: previewImage,
      imageUrl: s3ImageUrl
    };
    setOrganizations(organizations?.concat(organization));
    handleStores(store);
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
      <Content
        height={'19px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'13px'}
        lineHeight={'24px'}
        margin={'0 0 12px 0'} 
      >내 포트폴리오로 사용할 사진을 업로드해 주세요. (고객 웨딩 사진 등)</Content>
      <ImageUpload
        id={id}
        previewImage={previewImage}
        setPreviewImage={changePreviewImage}
        setImageFile={changeImageFile}
      ></ImageUpload>
      <HorizontalLine color="#dee2e6"></HorizontalLine>
      <FlexDiv margin="15px 0 72px 0" direction="row" justify="space-between" align="start">
        <PButton color="black" fontSize="14px" height="45px" width="126px" onClick={registerOrganization}>
          사진 등록하기
        </PButton>
        <FlexDiv margin="8px 0 0 0" direction="row" justify="flex-end" align="start"></FlexDiv>
      </FlexDiv>
      <ImageLists>
        {organizations ? (
          organizations.map((organization, index) => {
            return <Organization key={index} name={organization.name} image={organization.previewImage} handleOrgClose={() => {}}></Organization>;
          })
        ) : (
          <></>
        )}
      </ImageLists>
    </FlexDiv>
  );
};

const ImageLists = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
`;
