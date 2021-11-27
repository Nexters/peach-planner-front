import { Content, FlexDiv, Title } from '../../component/style/style';
import SideText from './SideText';
import HorizontalLine from '../../component/HorizontalLine';
import CompanyRegisterModal from './CompanyRegisterModal';
import { useEffect, useRef, useState } from 'react';
import SearchInput from './SearchInput';
import { Company, fetchCompanies } from 'src/api/Company';
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
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const openImageModal = () => setShowImageModal(true);
  const closeImageModal = () => {
    
    setShowImageModal(false);
  };

  return (
    <FlexDiv width="632px" margin="0 0 72px 0" direction="column" justify="flex-start" align="start">
      <HorizontalLine color="#868E96"></HorizontalLine>
      <FlexDiv width="632px" direction="row" justify="flex-start" align="center" margin="12px 0 0 0">
        <Title height={'27px'} width={'400px'} fontSize={'18px'} lineHeight={'27px'} margin={'0'}>
          소속업체 정보
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
        소속 웨딩업체를 등록할 수 있어요.
      </Content>
      <Content
        height={'24px'}
        width={'auto'}
        color={'#495057'}
        fontSize={'16px'}
        lineHeight={'24px'}
        margin={'20px 0 8px 0'}
      >
        웨딩업체 이름
      </Content>
      <SearchContainer ref={wrapperRef}>
        <SearchInput
          height="41px"
          width="421px"
          placeholder="웨딩 업체 이름을 입력해주세요."
          handleInput={handleCompanyName}
          onFocus={onFocus}
          value={companyName}
          defaultValue={defaultCompanyName}
        ></SearchInput>
        {focused ? (
          <Container ref={wrapperRef}>
            <CompanyContainer>
              <CompanyInnerContainer>
                {data ? (
                  data.companies.map((company) => {
                    return (
                      <CompanyItem
                        key={company.id}
                        id={company.id}
                        tel={company.tel}
                        location={company.location}
                        certificated={company.certificated}
                        profilePath={company.profilePath}
                        name={company.name}
                        images={company.images}
                        summary={company.summary}
                        handleInput={handleCompanyItem}
                        handleCompanyName={handleCompanyName}
                        handleClick={onBlur}
                      ></CompanyItem>
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
      <FlexDiv margin="8px 0 0 0" direction="row" justify="flex-start" align="start">
        <SideText text="업체가 등록되어 있지 않으신가요?" colorText="업체 등록하기" onClick={openImageModal}></SideText>
        <CompanyRegisterModal showImageModal={showImageModal} closeImageModal={closeImageModal} />
      </FlexDiv>
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
`;

const CompanyInnerContainer = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;

const SearchContainer = styled.div``;
