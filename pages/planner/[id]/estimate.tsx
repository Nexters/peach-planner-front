import { ChangeEvent, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PButton from 'lib/pages/components/PButton';
import EstimateBox from 'lib/pages/planner-estimate/EstimateBox';
import EstimateRow from 'lib/pages/planner-estimate/EstimateRow';
import { useQuery, useMutation } from 'react-query';
import { fetchPlanner, PartnerInfo } from 'lib/api/Planner';
import axios from 'axios';
import { getUserMe } from 'lib/api/User';
import { FiPaperclip, FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { authOnly } from 'lib/routes/withAuth';
import { requestEstimate, RequestEstimateBodyParams } from 'lib/api/Estimate';
import { MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IoCloseOutline } from 'react-icons/io5';
import { upload } from 'lib/api/Image';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input/input';
import AssociateOrganization from 'lib/pages/profile-edit/AssociateOrganization';
import { SupportStore } from 'lib/pages/profile-edit/interface/support-store';

interface File {
  fileName: string;
  filePath: string;
}

export default authOnly(() => {
  const [files, setFiles] = useState<File[]>([]);
  const router = useRouter();
  const { data: user, isSuccess: isUserSuccess } = useQuery(['getUser'], getUserMe);
  const plannerId = router.query.id as string;
  const { data: plannerInfo, isSuccess: isPlannerInfoSuccess } = useQuery(['planner', plannerId], () => fetchPlanner(plannerId));
  const postRequestEstimate = useMutation(
    async (params: RequestEstimateBodyParams) => {
      return await requestEstimate(params);
    },
    {
      onSuccess: async (data) => {
        console.log('postRequestEstimate success', data);
        router.push({
          pathname: "/chats",
          query: { roomId: data?.chatRoom?.id },
        });
      },
      onError: async (error: any) => {
        alert("이미 작성하신 견적서가 존재해요.");
        console.log('postRequestEstimate err', { error });
      }
    },
  );

  useEffect(() => {
    console.log({ user })
    setMyInfo({
      ...myInfo,
      name: user?.name,
      phone: user?.tel,
    })
  }, [user, isUserSuccess]);

  useEffect(() => {
    console.log({ plannerInfo })
  }, [plannerInfo]);

  const [myInfo, setMyInfo] = useState({
    name: user?.name,
    phone: user?.tel,
    date: new Date().toISOString().split('T')[0],
    description: '',
  });

  const [companyInfo, setCompanyInfo] = useState({
    weddingHall: 'false',
    weddingCard: 'false',
  });

  const [studios, setStudios] = useState<SupportStore[]>([]);
  const [dresses, setDresses] = useState<SupportStore[]>([]);
  const [makeUps, setMakeUps] = useState<SupportStore[]>([]);

  const handleMyInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMyInfo({ ...myInfo, [e.target.name]: e.target.value });
  };

  const handleWeddingHallChange = (e: SelectChangeEvent) => {
    setCompanyInfo({ ...companyInfo, weddingHall: e.target.value });
  };

  const handleweddingCardChange = (e: SelectChangeEvent) => {
    setCompanyInfo({ ...companyInfo, weddingCard: e.target.value });
  };

  const handleChat = async () => {
    const res = await axios.post(
      `/chat/rooms/${plannerId}`,
      {},
      { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
    );

    if (res.status === 200) {
      router.push({
        pathname: "/chats",
        query: { roomId: res.data?.id },
      });
    }
  };

  const handlePostEstimate = async () => {
    if (!studios || !dresses || !makeUps || !myInfo.description) {
      alert('업체 선택과 요청사항은 필수값입니다.');
      return;
    }
    postRequestEstimate.mutate(
      {
        plannerId: Number(plannerId),
        userName: myInfo.name ?? '',
        email: user?.email ?? '',
        phoneNum: myInfo.phone ?? '',
        weddingDate: myInfo.date,
        studioIds: studios.map(e => e.id),
        dressIds: dresses.map(e => e.id),
        makeupIds: makeUps.map(e => e.id),
        weddingHall: companyInfo.weddingHall === 'true' ? true : false,
        weddingCard: companyInfo.weddingCard === 'true' ? true : false,
        description: myInfo.description,
        filePath: files.map(e => e.filePath),
      }
    );
  };

  const handleFile = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const s3ImageUrl: string = await upload(file);
      setFiles([...files, {
        fileName: file.name,
        filePath: s3ImageUrl,
      }]);
    }
  };

  return (
    <Section>
      {
        isUserSuccess && isPlannerInfoSuccess && (
          <Container>
            <Title>견적 요청하기</Title>
            <EstimateBox>
              <FlexContainer>
                <div style={ { display: 'flex' } }>
                  <div style={ { width: '140px', height: '140px', marginRight: '24px' } }>
                    <img src={ plannerInfo?.profileImage } width={ '100%' } height={ '100%' } style={ { borderRadius: '10px' } } />
                  </div>
                  <div style={ { marginTop: '8px' } }>
                    <PlannerName>{ plannerInfo?.name ?? '' } 플래너</PlannerName>
                    <CompanyName>{ plannerInfo?.company?.name ?? '' }</CompanyName>
                    <Description>견적 요청이 아닌 웨딩 계약서는 플래너에게 따로 요청해주세요.</Description>
                  </div>
                </div>
                <PButton width="107px" height="44px" margin='8px 0 0' onClick={ handleChat }
                  otherBgColor='#f1f3f5' border='#f1f3f5'>
                  <ButtonText>
                    1:1 문의하기
                  </ButtonText>
                </PButton>
              </FlexContainer>
            </EstimateBox>
            <EstimateBox title="나의 정보">
              <EstimateRow label="이름">
                <InputBox width={ 230 }>
                  <Input placeholder='이름을 입력해주세요.' value={ myInfo.name } name="name" onChange={ handleMyInfoChange } />
                </InputBox>
              </EstimateRow>
              <EstimateRow label="연락처">
                <InputBox width={ 230 }>
                  <PhoneInput
                    country='KR'
                    placeholder='연락처를 입력해주세요.'
                    value={ myInfo.phone }
                    onChange={ (value) => {
                      setMyInfo({ ...myInfo, phone: value?.toString() ?? '' });
                    } }
                    inputComponent={ Input }
                  />
                </InputBox>
              </EstimateRow>
              <EstimateRow label="이메일">{ user?.email }</EstimateRow>
              <EstimateRow label="예식 예정일">
                <InputBox width={ 230 }>
                  <Input type="date" value={ myInfo.date } name="date" onChange={ handleMyInfoChange } />
                </InputBox>
              </EstimateRow>
            </EstimateBox>
            <EstimateBox title="업체 선택">

              <EstimateRow label="스튜디오">
                <AssociateOrganization
                  id="studio"
                  name="스튜디오"
                  type="STUDIO"
                  margin="0"
                  stores={studios}
                  setStores={setStudios}
                  estimate
                />
              </EstimateRow>

              <EstimateRow label="드레스">
                <AssociateOrganization
                  id="dress"
                  name="드레스"
                  type="DRESS"
                  margin="0"
                  stores={dresses}
                  setStores={setDresses}
                  estimate
                />
              </EstimateRow>

              <EstimateRow label="메이크업">
                <AssociateOrganization
                  id="makeup"
                  name="메이크업"
                  type="MAKEUP"
                  margin="0"
                  stores={makeUps}
                  setStores={setMakeUps}
                  estimate
                />
              </EstimateRow>

              <EstimateRow label="웨딩홀">
                <FormControl sx={ { minWidth: 400, minHeight: 40, height: '40px' } }>
                  <Select
                    value={ companyInfo.weddingHall }
                    onChange={ handleWeddingHallChange }
                    displayEmpty
                    inputProps={ { "aria-label": "Without label" } }
                    sx={ {
                      'fieldSet': {
                        borderColor: '#ced4da !important',
                        borderWidth: '0.5px !important',
                      },
                      '&.MuiInputBase-root': {
                        height: '40px',
                        color: '#212529',
                        fontSize: '14px'
                      },
                      '&.Mui-focused': {
                        '.MuiOutlinedInput-notchedOutline': {
                          borderColor: '#ced4da !important',
                          borderWidth: '0.5px !important',
                        }
                      },
                      '&.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ced4da !important',
                        borderWidth: '0.5px !important',
                      },

                    } }
                  >
                    <MenuItem value={ 'false' } sx={ {
                      color: '#212529',
                      fontSize: '14px',
                      '&.MuiMenuItem-root': {
                        '&.Mui-selected': {
                          background: '#ffdeeb'
                        }
                      }
                    } }>예약한 웨딩홀이 없어요.</MenuItem>
                    <MenuItem value={ 'true' } sx={ {
                      color: '#212529',
                      fontSize: '14px',
                      '&.MuiMenuItem-root': {
                        '&.Mui-selected': {
                          background: '#ffdeeb'
                        }
                      }
                    } }>예약한 웨딩홀이 있어요.</MenuItem>
                  </Select>
                </FormControl>
              </EstimateRow>
              <EstimateRow label="모바일청첩장">
                <FormControl sx={ { minWidth: 400, minHeight: 40, height: '40px' } }>
                  <Select
                    value={ companyInfo.weddingCard }
                    onChange={ handleweddingCardChange }
                    displayEmpty
                    inputProps={ { "aria-label": "Without label" } }
                    sx={ {
                      'fieldSet': {
                        borderColor: '#ced4da !important',
                        borderWidth: '0.5px !important',
                      },
                      '&.MuiInputBase-root': {
                        height: '40px',
                        color: '#212529',
                        fontSize: '14px'
                      },
                      '&.Mui-focused': {
                        '.MuiOutlinedInput-notchedOutline': {
                          borderColor: '#ced4da !important',
                          borderWidth: '0.5px !important',
                        }
                      },
                      '&.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ced4da !important',
                        borderWidth: '0.5px !important',
                      },

                    } }
                  >
                    <MenuItem value={ 'false' } sx={ {
                      color: '#212529',
                      fontSize: '14px',
                      '&.MuiMenuItem-root': {
                        '&.Mui-selected': {
                          background: '#ffdeeb'
                        }
                      }
                    } }>모바일청첩장이 필요하지 않아요.</MenuItem>
                    <MenuItem value={ 'true' } sx={ {
                      color: '#212529',
                      fontSize: '14px',
                      '&.MuiMenuItem-root': {
                        '&.Mui-selected': {
                          background: '#ffdeeb'
                        }
                      }
                    } }>모바일청첩장이 필요해요.</MenuItem>
                  </Select>
                </FormControl>
              </EstimateRow>
            </EstimateBox>
            <EstimateBox title="요청사항">
              <TextArea value={ myInfo.description } placeholder="웨딩플래너에게 전달할 요청사항을 간단하게 작성해 주세요. " name="description" onChange={ (e) => {
                setMyInfo({ ...myInfo, [e.target.name]: e.target.value });
              } } />
            </EstimateBox>
            <EstimateBox title="첨부파일">
              <Description>웨딩플래너가 참고할 사진 등이 있으시다면 업로드해 주세요.</Description>
              <div style={ { marginTop: '21px', marginBottom: '19px' } }>
                { files?.length > 0 ? (
                  <SearchResultBox>
                    { files.map((file, index) => {
                      return (
                        <div key={ file.fileName } style={ { marginTop: '5px', width: '400px', display: 'flex', justifyContent: 'space-between' } }>
                          <a target={ '_blank' } href={ file.filePath }>
                            <span style={ { color: '#212529', fontSize: '14px' } } >{ file.fileName }</span>
                          </a>
                          <IoCloseOutline color='#495057' style={ { cursor: 'pointer' } } onClick={ () => {
                            setFiles(files.filter((e, i) => i !== index));
                          } } />
                        </div>
                      )
                    }) }
                  </SearchResultBox>
                ) : <></> }
              </div>
              <FileBox>
                <label htmlFor='uploadFile'>
                  <FiPaperclip color='#495057' />
                  <span>파일올리기</span>
                </label>
                <input type='file' name='uploadFile' id='uploadFile'
                  accept="image/jpg, image/png, image/jpeg"
                  onChange={ handleFile }
                />
              </FileBox>
            </EstimateBox>
            <EstimateBox>
              <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
                <PButton color="pink" width='430px' height='44px' onClick={ handlePostEstimate }>견적 요청하기</PButton>
                {/* TODO:: <SaveButton>임시저장</SaveButton> */ }
              </div>
            </EstimateBox>
          </Container>
        )
      }
    </Section>
  );
});

const Section = styled.div`
  background-color: #f8f9fa;
  `;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  margin: 0 auto;
  width:860px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 40px 0 20px;
  width: 100%;
`;

const PlannerName = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 4px;
`;

const CompanyName = styled.div`
  font-size: 16px;
  margin-bottom: 12px;
`;

const Description = styled.div`
  font-size: 13px;
  color: #868e96;
`;

const TextArea = styled.textarea`
  width:780px;
  height: 250px;
  resize: none;
  border: 1px solid #ced4da;
  padding:16px;
  ::placeholder {
    color: #adb5bd;
  }
 outline-color: #ffdeeb;
`;

const SaveButton = styled.button`
  color: #868e96;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  margin-top: 16px;
  width :430px;
  height: 44px;
  border:none;
  outline:none;
  background: transparent;
`;

const ButtonText = styled.span`
font-size: 12px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #343a40;
`;

const InputBox = styled.div<{ width?: number }>`
box-sizing: border-box;
width: ${props => props.width || 400}px;
height: 40px;
border: 1px solid #ced4da;
border-radius: 3px;
padding: 9px 8px;
display:flex;
justify-content:space-between;
align-items: center;
`;

const Input = styled.input.attrs((props) => ({
  type: props.type || 'text'
}))`
  width:90%;
  border:none;
  outline:none;
  ::placeholder {
    color: #adb5bd;
  }
`;

const FileBox = styled.div`
margin-top: 16px;
label {
  line-height: normal;
  cursor: pointer;
  width: 108px;
  height: 40px;
  border-radius: 3px;
  background-color: #f1f3f5;
  color: #495057;
  font-size: 13px;
  font-weight: bold;
  padding: 10px 14px;
  span {
    margin-left: 6px;
  }
}
input[type="file"] {
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
}`;

const SearchResultBox = styled.div`
max-height:150px; 
overflow:auto;
flex:5;
::-webkit-scrollbar {
  display:none;
}`;
