import React, { ChangeEvent, useState, version } from 'react';
import styled from 'styled-components';
import PButton from '../../component/PButton';
import EstimateBox from './EstimateBox';
import EstimateRow from './EstimateRow';
import { useRouteMatch, useHistory } from 'react-router';
import { useQuery } from 'react-query';
import { fetchPlanner } from '../../api/Planner';
import axios from 'axios';
import { getUser } from 'src/api/User';
interface routeProps {
  id: string;
}

const PlannerEstimate = () => {
  const history = useHistory();
  const { data: user } = useQuery(['getUser'], getUser);

  const { params } = useRouteMatch<routeProps>();
  const plannerId = params.id;

  const { data: plannerInfo } = useQuery(['planner', plannerId], () => fetchPlanner(plannerId));

  const [myInfo, setMyInfo] = useState({
    name: user?.name ?? '홍길동',
    phone1: '010',
    phone2: '0000',
    phone3: '0000',
    email: user?.email ?? 'example@gmail.com',
    date: new Date().toISOString().split('T')[0],
    description: '',
  });

  const [companyInfo, setCompanyInfo] = useState({
    name: 'A스튜디오',
    dress: 'A드레스',
    makeup: 'A메이크업',
    weddingHall: true,
    mobileInvitation: true
  });

  const handleMyInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMyInfo({ ...myInfo, [e.target.name]: e.target.value });
  };

  const handleCompanyInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompanyInfo({ ...companyInfo, [e.target.name]: e.target.value });
  };

  const handleChat = () => {
    axios
      .post(
        `/chat/rooms/${plannerId}`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
      )
      .then((res) => {
        if (res.status == 200) {
          history.push('/chats');
        }
      });
  };

  return (
    <Container>
      <Title>견적 요청하기</Title>
      <EstimateBox>
        <FlexContainer>
          <div>
            <PlannerName>{plannerInfo?.name ?? ''} 플래너</PlannerName>
            <CompanyName>{plannerInfo?.company?.name ?? ''}</CompanyName>
            <Description>견적 요청이 아닌 웨딩 계약서는 플래너에게 따로 요청해주세요.</Description>
          </div>
          <PButton width="107px" height="44px" onClick={handleChat}>
            1:1 문의하기
          </PButton>
        </FlexContainer>
      </EstimateBox>
      <EstimateBox title="나의 정보">
        <EstimateRow label="이름">
          <input type="text" value={myInfo.name} name="name" onChange={handleMyInfoChange} />
        </EstimateRow>
        <EstimateRow label="연락처">
          <input type="number" value={myInfo.phone1} name="phone1" onChange={handleMyInfoChange} />
          -
          <input type="number" value={myInfo.phone2} name="phone2" onChange={handleMyInfoChange} />
          -
          <input type="number" value={myInfo.phone3} name="phone3" onChange={handleMyInfoChange} />
        </EstimateRow>
        <EstimateRow label="이메일">{myInfo.email}</EstimateRow>
        <EstimateRow label="예식 예정일">
          <input type="date" value={myInfo.date} name="date" onChange={handleMyInfoChange} />
        </EstimateRow>
      </EstimateBox>
      <EstimateBox title="업체 선택">
        <EstimateRow label="스튜디오">
          <input type="text" value={companyInfo.name} name="name" onChange={handleCompanyInfoChange} />
        </EstimateRow>
        <EstimateRow label="드레스">
          <input type="text" value={companyInfo.dress} name="dress" onChange={handleCompanyInfoChange} />
        </EstimateRow>
        <EstimateRow label="메이크업">
          <input type="text" value={companyInfo.makeup} name="makeup" onChange={handleCompanyInfoChange} />
        </EstimateRow>
      </EstimateBox>
      <EstimateBox title="요청사항">
        <TextArea value={myInfo.description} placeholder="웨딩플래너에게 전달할 요청사항을 간단하게 작성해 주세요. " name="description" onChange={(e) => {
          setMyInfo({ ...myInfo, [e.target.name]: e.target.value });
        }} />
      </EstimateBox>
      {/* <EstimateBox title="첨부파일">첨부파일</EstimateBox> */}
      <EstimateBox>
        <PButton color="pink" onClick={() => {
          axios
            .post(
              `/estimate/upload`,
              {
                plannerId: plannerId,
                userName: myInfo.name,
                email: myInfo.email,
                phoneNum: `${myInfo.phone1}${myInfo.phone2}${myInfo.phone3}`,
                weddingDate: myInfo.date,
                studio: companyInfo.name,
                dress: companyInfo.dress,
                makeup: companyInfo.makeup,
                // TODO:: Add below input fields
                weddingHall: false,
                weddingCard: false,
                description: '웨딩플래너에게 전달할 요청사항을 간단하게 작성해 주세요. ',
                filePath: '',
              },
              { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
            )
            .then((res) => {
              if (res.status == 200) {
                history.push('/chats');
              }
            });
        }}>전적 요청하기</PButton>
        <SaveButton>임시저장</SaveButton>
      </EstimateBox>
      <Empty />
    </Container>
  );
};

export default PlannerEstimate;

const Container = styled.div`
  background-color: #e9ecef;
  padding: 0 290px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  padding-top: 20px;
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
  width: 100%;
  height: 250px;
  resize: none;
`;

const SaveButton = styled.div`
  color: #495057;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  margin-top: 16px;
`;

const Empty = styled.div`
  background-color: #e9ecef;
  height: 40px;
`;
