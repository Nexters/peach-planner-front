import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Company } from 'lib/api/Company';
import DefaultBigImage from 'public/assets/svg/img_defult_wedding.svg';
import ImageModal from 'lib/pages/components/ImageModal';
import axios from 'axios';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { MdHomeFilled } from 'react-icons/md';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';
import Head from 'next/head';


export const getServerSideProps: GetServerSideProps = async (context) => {
  const companyId = context.params?.id as string;
  const companyInfo = await axios.get(`/companies/${companyId}`);
  return companyInfo ? { props: { initialData: companyInfo.data } } : { props: {}};
}

export default ({ initialData }: { initialData: Company }) => {
  const router = useRouter();
  const companyId = router.query.id as string;
  const { data: companyInfo } = useQuery(['company', companyId], async () => {
    return (await axios.get<Company>(`/companies/${companyId}`)).data;
  }, { initialData });

  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const openImageModal = () => setShowImageModal(true);
  const closeImageModal = () => setShowImageModal(false);

  const copy = (text: string) => {
    if (!text) {
      return;
    }
    navigator.clipboard.writeText(text);
  };

  if (!companyInfo) {
    return <></>
  }

  return <OuterContainer>
    <Head>
      <title>피치플래너 - { initialData.name }</title>
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={ `피치플래너 - ${initialData.name}` } />
      <meta key="og:image" property="og:image" content={ initialData.images?.length > 0 ? initialData.images[0] : undefined } />
      <meta key="og:url" property="og:url" content={ `http://peachplanner.com/company/${initialData.id}` } />
    </Head>
    <ImageOuterContainer>
      <ImageContainer>
        { companyInfo.images.length == 0 ? <img src={ DefaultBigImage } /> : <BigImage src={ companyInfo.images[0] } /> }
      </ImageContainer>
      { companyInfo.images.length != 0 && <ShowImageButton onClick={ openImageModal }>사진 모두 보기</ShowImageButton> }
      <ImageModal showImageModal={ showImageModal } closeImageModal={ closeImageModal } imageList={ companyInfo.images } />
    </ImageOuterContainer>
    <TopContainer>
      <Title>{ companyInfo.name }</Title>
      <Information>
        <InformationElement>
          <Vertical>
            <div style={ {
              margin: "3px 5px 2px 0",
              padding: "2.4px 2.4px 2.4px 2.4px",
            } }>
              <FaPhoneAlt size={ 16 } />
            </div>
          </Vertical>{ ' ' }
          <Vertical>{ companyInfo.tel }</Vertical>
          <CopyLocation onClick={ () => copy(companyInfo?.tel) }>복사</CopyLocation>
        </InformationElement>
        <InformationElement>
          <Vertical>
            <div style={ {
              margin: "3px 5px 2px 0",
              padding: "2.4px 2.4px 2.4px 2.4px",
            } }>
              <FaMapMarkerAlt size={ 16 } />
            </div>
          </Vertical>{ ' ' }
          <Vertical>{ companyInfo.location }</Vertical>
          <CopyLocation onClick={ () => copy(companyInfo?.location) }>복사</CopyLocation>
        </InformationElement>
        <InformationElement>
          <Vertical>
            <div style={ {
              margin: "3px 5px 2px 0",
              padding: "2.4px 2.4px 2.4px 2.4px",
            } }>
              <MdHomeFilled size={ 16 } />
            </div>
          </Vertical>{ ' ' }
          <Vertical>{ companyInfo.homepage && <a href={ companyInfo.homepage } style={ { color: '#868e96' } }>{ companyInfo.homepage }</a> }</Vertical>
        </InformationElement>
        <InformationElement>
          <Vertical>
            <div style={ {
              margin: "3px 5px 2px 0",
              padding: "2.4px 2.4px 2.4px 2.4px",
            } }>
              <FaClock size={ 16 } />
            </div>
          </Vertical>{ ' ' }
          <Vertical>{ companyInfo.bizHour }</Vertical>
        </InformationElement>
      </Information>
    </TopContainer>
  </OuterContainer>;
};

const OuterContainer = styled.div`
  width: 860px;
  display: flex;
  margin: 0 auto auto auto;
`;

const ImageOuterContainer = styled.div`
  position: relative;
  margin: 0 40px auto auto;
`;

const TopContainer = styled.div`
  flex: 1;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Information = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: #495057;
`;

const InformationElement = styled.div`
  margin-bottom: 11px;
`;

const CopyLocation = styled.span`
  cursor: pointer;
  vertical-align: middle;
  display: inline-block;
  margin-left: 5px;
`;

const Vertical = styled.div`
  vertical-align: middle;
  display: inline-block;
  color: #868e96;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ShowImageButton = styled.button`
  cursor: pointer;
  border-radius: 3px;
  width: 97px;
  height: 31px;
  padding: 0px;
  font-size: 12px;
  border: none;
  background-color: white;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 19.5px;
`;

const BigImage = styled.img`
  object-fit: cover;
  border-radius: 10px;
  width: 240px;
  height: 240px;
`;