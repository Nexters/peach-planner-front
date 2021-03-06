import { Dispatch, SetStateAction, useState, useEffect, useRef } from 'react';
import { Content, FlexDiv } from 'lib/pages/components/style/style';
import LineAndTitle from './LindAndTitle';
import styled from 'styled-components';
import HorizontalLine from 'lib/pages/components/HorizontalLine';
import Organization from './Organization';
import SearchInput from './components/SearchInput';
import { useQuery } from 'react-query';
import { fetchPartnerCompanies } from 'lib/api/partners';
import CompanyItem from './CompanyItem';
import { PartnerInfo } from 'lib/api/Planner';
import { SupportStore } from 'lib/pages/profile-edit/interface/support-store';
import { IoCloseOutline } from 'react-icons/io5';

interface Props {
  id: string;
  name: string;
  type: 'STUDIO' | 'DRESS' | 'MAKEUP';
  margin: string;
  stores: SupportStore[];
  setStores: Dispatch<SetStateAction<SupportStore[]>>;
  estimate?: boolean;
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

const AssociateOrganization = ({ id, name, type, margin, stores, setStores,estimate }: Props) => {
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setFocused);
  const [partnerName, setPartnerName] = useState('');
  const { data: partners } = useQuery([`partners/${partnerName},${type}`, partnerName, type], fetchPartnerCompanies, { enabled: focused });

  const handleChangeOrganizationName = (e: any) => {
    let value = typeof e !== 'string' ? e.target.value : e;
    setPartnerName(value);
  };

  return (
    <FlexDiv width="632px" margin={margin} direction="column" justify="flex-start" align="start">
      {!estimate && (
        <>
        <LineAndTitle title={`?????? ${name} ??????`} content="??????????????? ????????? ??? ?????????."></LineAndTitle>
        <Content
          height={'24px'}
          width={'auto'}
          color={'#495057'}
          fontSize={'16px'}
          lineHeight={'24px'}
          margin={'20px 0 8px 0'}
        >
          {`${name} ?????? ??????`}
        </Content>
        </>
      )}
      <SearchContainer ref={wrapperRef}>
        <SearchInput
          height="41px"
          width="421px"
          placeholder={estimate ? `???????????? ${name} ????????? ????????? ?????????.` : `?????? ${name} ?????? ????????? ??????????????????.`}
          handleInput={handleChangeOrganizationName}
          onFocus={() => setFocused(true)}
          value={partnerName}
          defaultValue={''}
        />
        {focused ? (
          <Container ref={wrapperRef}>
            <CompanyContainer>
              <CompanyInnerContainer>
                {partners ? (
                  partners.partners.map((partner: PartnerInfo) => {
                    return (
                      <CompanyItem
                        key={partner.id}
                        location={partner.location}
                        profilePath={partner.profilePath}
                        name={partner.name}
                        images={partner.images}
                        handleClick={() => {
                          setFocused(false);
                          setPartnerName('');
                          if (stores?.filter(e => e.id === partner.id)?.length != 0) {
                            return;
                          }

                          setStores(stores?.concat({
                            id: partner.id,
                            name: partner.name,
                            previewImage: partner.profilePath,
                          }));
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
      {
        estimate ? (
          <div style={{display:'flex', width:'400px', marginBottom:'5px'}}>
            <SearchResultBox>
              {stores.map((store) => {
                return (
                  <div key={ store.id } style={ { marginTop: '5px', width: '400px', display: 'flex', justifyContent: 'space-between' } }>
                    <span style={ { cursor: 'pointer', color: '#212529', fontSize: '14px' } }>{ store.name }</span>
                    <IoCloseOutline color='#495057' onClick={() => {
                      setStores(stores.filter((e, i) => e.id !== store.id));
                    }}/>
                  </div>
                )
              })}
            </SearchResultBox>
          </div>
        ) : (
          <>
            <HorizontalLine color="#dee2e6"/>
            <OrganizationLists>
              {stores?.map((organization, index) => {
                  return <Organization key={index} name={organization.name} image={organization.previewImage} handleOrgClose={() => {
                    setStores(stores.filter((e, i) => i !== index));
                  }} />;
                }) ?? <></>}
            </OrganizationLists>
            <HorizontalLine color="#868E96"/>
          </>
        )
      }
    </FlexDiv>
  );
};

export default AssociateOrganization;

const OrganizationLists = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
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

const Container = styled.div`
  display: flex;
`;

const SearchResultBox = styled.div`
max-height:150px; 
overflow:auto;
flex:5;
::-webkit-scrollbar {
  display:none;
}`;