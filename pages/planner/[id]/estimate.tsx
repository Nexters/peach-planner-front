import { ChangeEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
import PButton from 'lib/pages/components/PButton';
import EstimateBox from 'lib/pages/planner-estimate/EstimateBox';
import EstimateRow from 'lib/pages/planner-estimate/EstimateRow';
import { useQuery } from 'react-query';
import { fetchPlanner } from 'lib/api/Planner';
import axios from 'axios';
import { getUserMe } from 'lib/api/User';
import { FiSearch } from 'react-icons/fi';
import { FiPaperclip } from 'react-icons/fi'
import { useRouter } from 'next/router';
import { authOnly } from 'lib/atoms/checkAuth';

interface routeProps {
  id: string;
}

export default () => {
  const router = useRouter();
  authOnly();


  const { data: user } = useQuery(['getUser'], getUserMe);

  const plannerId = router.query.id as string;

  const { data: plannerInfo } = useQuery(['planner', plannerId], () => fetchPlanner(plannerId));

  const [myInfo, setMyInfo] = useState({
    name: user?.name ?? '',
    phone: user?.tel ?? '',
    email: user?.email ?? '',
    date: new Date().toISOString().split('T')[0],
    description: '',
  });

  const [companyInfo, setCompanyInfo] = useState({
    name: '',
    dress: '',
    makeup: '',
    weddingHall: true,
    mobileInvitation: true
  });

  const handleMyInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMyInfo({ ...myInfo, [e.target.name]: e.target.value });
  };

  const handleCompanyInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompanyInfo({ ...companyInfo, [e.target.name]: e.target.value });
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
        query: { state: res.data },
      });
    }
  };

  return (
    <Section>
      <Container>
      <Title>견적 요청하기</Title>
      <EstimateBox>
        <FlexContainer>
          <div style={{display:'flex'}}>
          <div style={{width:'140px', height:'140px', marginRight:'24px'}}>
            <img src={plannerInfo?.profileImage} width={'100%'} height={'100%'} style={{borderRadius:'10px'}}/>
          </div>
          <div style={{marginTop:'8px'}}>
            <PlannerName>{plannerInfo?.name ?? ''} 플래너</PlannerName>
            <CompanyName>{plannerInfo?.company?.name ?? ''}</CompanyName>
            <Description>견적 요청이 아닌 웨딩 계약서는 플래너에게 따로 요청해주세요.</Description>
          </div>
          </div>
          <PButton width="107px" height="44px" margin='8px 0 0' onClick={handleChat}
          otherBgColor='#f1f3f5' border='#f1f3f5'>
            <ButtonText>
            1:1 문의하기
            </ButtonText>
          </PButton>
        </FlexContainer>
      </EstimateBox>
      <EstimateBox title="나의 정보">
        <EstimateRow label="이름">
          <InputBox width={230}>
          <Input placeholder='이름을 입력해주세요.' value={myInfo.name} name="name" onChange={handleMyInfoChange} />
          </InputBox>
        </EstimateRow>
        <EstimateRow label="연락처">
        <InputBox width={230}>
          <Input type="number" placeholder='연락처를 입력해주세요.' width={230} value={myInfo.phone} name="phone" onChange={handleMyInfoChange} />
          </InputBox>
        </EstimateRow>
        <EstimateRow label="이메일">{myInfo.email}</EstimateRow>
        <EstimateRow label="예식 예정일">
        <InputBox width={230}>
          <Input type="date" value={myInfo.date} name="date" onChange={handleMyInfoChange} />
          </InputBox>
        </EstimateRow>
      </EstimateBox>
      <EstimateBox title="업체 선택">
        <EstimateRow label="스튜디오">
          <InputBox>
          <Input type="text" placeholder='원하시는 스튜디오 업체를 검색해 주세요.' value={companyInfo.name} name="name" onChange={handleCompanyInfoChange} />
          <FiSearch color='#adb5bd'/>
          </InputBox>
        </EstimateRow>
        <EstimateRow label="드레스">
          <InputBox>
          <Input type="text" placeholder='원하시는 드레스업체를 검색해 주세요.' value={companyInfo.dress} name="dress" onChange={handleCompanyInfoChange} />
          <FiSearch color='#adb5bd'/>
          </InputBox>
        </EstimateRow>
        <EstimateRow label="메이크업">
          <InputBox>
            <Input type="text" placeholder='원하시는 메이크업 업체를 검색해 주세요.' value={companyInfo.makeup} name="makeup" onChange={handleCompanyInfoChange} />
            <FiSearch color='#adb5bd'/>
          </InputBox>
        </EstimateRow>
      </EstimateBox>
      <EstimateBox title="요청사항">
        <TextArea value={myInfo.description} placeholder="웨딩플래너에게 전달할 요청사항을 간단하게 작성해 주세요. " name="description" onChange={(e) => {
          setMyInfo({ ...myInfo, [e.target.name]: e.target.value });
        }} />
      </EstimateBox>
      <EstimateBox title="첨부파일">
        <Description>웨딩플래너가 참고할 사진 등이 있으시다면 업로드해 주세요.</Description>
        <FileBox>
          <label htmlFor='uploadFile'>
            <FiPaperclip color='#495057'/>
            <span>파일올리기</span>
          </label>
        <input type='file' name='uploadFile' id='uploadFile'
        accept="image/jpg, image/png, image/jpeg"
        // onChange={(e) => console.log(e?.target?.files[0])}
        />
        </FileBox>
      </EstimateBox>
      <EstimateBox>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>        
        <PButton color="pink" width='430px' height='44px' onClick={async () => {
          const res = await axios.post(
            `/estimate/upload`,
            {
              plannerId: plannerId,
              userName: myInfo.name,
              email: myInfo.email,
              phoneNum: myInfo.phone,
              weddingDate: myInfo.date,
              studio: companyInfo.name,
              dress: companyInfo.dress,
              makeup: companyInfo.makeup,
              // TODO:: Add below Input fields
              weddingHall: false,
              weddingCard: false,
              description: '웨딩플래너에게 전달할 요청사항을 간단하게 작성해 주세요. ',
              filePath: [],
            },
            { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
          );
          if (res.status == 200) {
            router.push({
              pathname: "/chats",
              query: { state: res.data.chatRoom },
            });
          }
        }}>견적 요청하기</PButton>
        <SaveButton>임시저장</SaveButton>
        </div>
      </EstimateBox>
      </Container>
    </Section>
  );
};

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

const InputBox = styled.div<{width?:number}>`
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

