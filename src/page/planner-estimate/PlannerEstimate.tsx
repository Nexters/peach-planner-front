import React, { ChangeEvent, useState, version } from 'react';
import styled from 'styled-components';
import PButton from '../../component/PButton';
import EstimateBox from './EstimateBox';
import EstimateRow from './EstimateRow';
import { useRouteMatch } from 'react-router';
import { useMutation } from 'react-query';
import { estimateRequest } from '../../api/Estimate';

interface routeProps {
  id: string;
}

const PlannerEstimate = () => {
  const { params } = useRouteMatch<routeProps>();

  const [requestInfo, setRequestInfo] = useState({
    plannerId: params.id,
    userName: '홍길동',
    email: 'example@gmail.com',
    phoneNum: '010-1234-5678',
    weddingDate: '',
    studio: '',
    dress: '',
    makeup: '',
    weddingHall: 'true',
    weddingCard: 'true',
    description: '',
    filePath: ''
  });

  const handleRequestInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRequestInfo({ ...requestInfo, [e.target.name]: e.target.value });
  };

  const handleRequestInfoChange2 = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setRequestInfo({ ...requestInfo, [e.target.name]: e.target.value });
  };

  const handleRequestInfoChange3 = (e: ChangeEvent<HTMLSelectElement>) => {
    setRequestInfo({ ...requestInfo, [e.target.name]: e.target.value });
  };

  const request = () => {
    const parsedRequestInfo = {
      ...requestInfo,
      weddingHall: requestInfo.weddingHall == 'true',
      weddingCard: requestInfo.weddingCard == 'true'
    };

    const data = estimateRequest(parsedRequestInfo);
    console.log(data);
  };

  return (
    <Container>
      <Title>견적 요청하기</Title>
      <EstimateBox>
        <FlexContainer>
          <div>
            <PlannerName>이윤경 플래너</PlannerName>
            <CompanyName>아이니웨딩</CompanyName>
            <Description>견적 요청이 아닌 웨딩 계약서는 플래너에게 따로 요청해주세요.</Description>
          </div>
          <PButton width="107px" height="44px">
            1:1 문의하기
          </PButton>
        </FlexContainer>
      </EstimateBox>
      <EstimateBox title="나의 정보">
        <EstimateRow label="이름">
          <Text>{requestInfo.userName}</Text>
        </EstimateRow>
        <EstimateRow label="연락처">
          <Text>{requestInfo.phoneNum}</Text>
        </EstimateRow>
        <EstimateRow label="이메일">
          <Text>{requestInfo.email}</Text>
        </EstimateRow>
        <EstimateRow label="예식 예정일">
          <Input type="text" value={requestInfo.weddingDate} name="weddingDate" onChange={handleRequestInfoChange} />
        </EstimateRow>
      </EstimateBox>
      <EstimateBox title="업체 선택">
        <EstimateRow label="스튜디오">
          <Input type="text" value={requestInfo.studio} name="studio" onChange={handleRequestInfoChange} />
        </EstimateRow>
        <EstimateRow label="드레스">
          <Input type="text" value={requestInfo.dress} name="dress" onChange={handleRequestInfoChange} />
        </EstimateRow>
        <EstimateRow label="메이크업">
          <Input type="text" value={requestInfo.makeup} name="makeup" onChange={handleRequestInfoChange} />
        </EstimateRow>
        <EstimateRow label="웨딩홀">
          <Select value={requestInfo.weddingHall} onChange={handleRequestInfoChange3} name="weddingHall">
            <option value="true">예약한 웨딩홀이 있어요.</option>
            <option value="false">예약한 웨딩홀이 없어요.</option>
          </Select>
        </EstimateRow>
        <EstimateRow label="모바일첩정장">
          <Select value={requestInfo.weddingCard} onChange={handleRequestInfoChange3} name="weddingCard">
            <option value="true">모바일 청첩장이 필요해요.</option>
            <option value="false">모바일 청첩장이 필요없어요.</option>
          </Select>
        </EstimateRow>
      </EstimateBox>
      <EstimateBox title="요청사항">
        <TextArea
          placeholder="웨딩플래너에게 전달할 요청사항을 간단하게 작성해 주세요. "
          value={requestInfo.description}
          name="description"
          onChange={handleRequestInfoChange2}
        />
      </EstimateBox>
      <EstimateBox title="첨부파일">첨부파일</EstimateBox>
      <EstimateBox>
        <PButton color="pink" onClick={request}>
          견적 요청하기
        </PButton>
        {/* <SaveButton>임시저장</SaveButton> */}
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
  // padding: 8px;
  outline: none;
  border: #ced4da solid 1px;
  border-radius: 3px;
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

const Text = styled.div`
  padding: 8.5px;
`;

const Input = styled.input`
  outline: none;
  width: 400px;
  border: #ced4da solid 1px;
  border-radius: 3px;
  padding: 8.5px;
`;

const Select = styled.select`
  width: 417px;
  border: #ced4da solid 1px;
  border-radius: 3px;
  padding: 8.5px;
  outline: none;
`;
