import { Content, FlexDiv, Title } from 'lib/pages/components/style/style';
import HorizontalLine from 'lib/pages/components/HorizontalLine';
import CompanyRegisterModal from './CompanyRegisterModal';
import { useEffect, useRef, useState } from 'react';
import SearchInput from './components/SearchInput';
import { Company, fetchCompanies } from 'lib/api/Company';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import CompanyItem from './CompanyItem';

interface Props {
  defaultCompanyName: string;
  companyName: string;
  handleCompanyName: (e: any) => void;
  handleCompanyItem: (company: Company) => void;
}

function useOutsideAlerter(ref: any, setFocused: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setFocused(false);
        // alert('You clicked outside of me!');
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

const PlannerCompany = ({ defaultCompanyName, companyName, handleCompanyName, handleCompanyItem }: Props) => {
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setFocused);
  const { data } = useQuery(['companies', companyName], fetchCompanies, { enabled: focused });
  // const [showImageModal, setShowImageModal] = useState<boolean>(false);
  // const openImageModal = () => setShowImageModal(true);
  // const closeImageModal = () => {
  //   setShowImageModal(false);
  // };

  return (
    <FlexDiv width="632px" margin="0 0 72px 0" direction="column" justify="flex-start" align="start">
      <HorizontalLine color="#868E96"></HorizontalLine>
      <FlexDiv width="632px" direction="row" justify="flex-start" align="center" margin="12px 0 0 0">
        <Title height={'27px'} width={'400px'} fontSize={'18px'} lineHeight={'27px'} margin={'0'}>
          ???????????? ??????
        </Title>
      </FlexDiv>
      <Content
        height={'19px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'13px'}
        lineHeight={'19px'}
        margin={'4px 0 20px 0'}
      >
        ?????? ??????????????? ????????? ??? ?????????.
      </Content>
      <Content
        height={'24px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'16px'}
        lineHeight={'24px'}
        margin={'20px 0 8px 0'}
      >
        ???????????? ??????
      </Content>
      <SearchContainer ref={wrapperRef}>
        <SearchInput
          height="41px"
          width="421px"
          placeholder="?????? ?????? ????????? ??????????????????."
          handleInput={handleCompanyName}
          onFocus={() => setFocused(true)}
          value={companyName}
          defaultValue={defaultCompanyName}
        />
        {focused ? (
          <Container ref={wrapperRef}>
            <CompanyContainer>
              <CompanyInnerContainer>
                {data ? (
                  data.companies.map((company) => {
                    return (
                      <CompanyItem
                        key={company.id}
                        location={company.location}
                        profilePath={company.profilePath}
                        name={company.name}
                        images={company.images}
                        handleClick={() => {
                          handleCompanyItem({
                            id: company.id,
                            name: company.name,
                            tel: company.tel,
                            location: company.location,
                            profilePath: company.profilePath,
                            certificated: company.certificated,
                            summary: company.summary,
                            images: company.images
                          });
                          handleCompanyName(company.name);
                          setFocused(false);
                        }}
                      />
                    );
                  })
                ) : (
                  <></>
                )}
              </CompanyInnerContainer>
            </CompanyContainer>
          </Container>
        ) : (
          <></>
        )}
      </SearchContainer>
      {/* <FlexDiv margin="8px 0 0 0" direction="row" justify="flex-start" align="start">
        <SideText text="????????? ???????????? ?????? ????????????????" colorText="?????? ????????????" onClick={openImageModal}></SideText>
        <CompanyRegisterModal showImageModal={showImageModal} closeImageModal={closeImageModal} />
      </FlexDiv> */}
    </FlexDiv>
  );
};

export default PlannerCompany;

const Container = styled.div`
  display: flex;
`;

const CompanyContainer = styled.div`
  height: 252px;
  width: 420px;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 #adb5bd;
  position: absolute;
  overflow: auto;
  overflow-x: hidden;
  z-index: 1;
`;

const CompanyInnerContainer = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;

const SearchContainer = styled.div``;
