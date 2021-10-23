import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PButton from 'src/component/PButton';
import { FlexDiv, Content, Title } from 'src/component/style/style';
import { useHistory } from 'react-router-dom';

const FindEmail = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCheck = () => {
    setCheck(!check);
    return; //기연님 api 붙이기
  };

  return (
    <FlexDiv direction="column" height={'700px'} justify={'flex-start'}>
      <Title color={'#212529'} height={'24px'} fontSize={'18px'} lineHeight={'27px'} margin={'40px 0 15px'}>
        이메일 / 비밀번호 찾기
      </Title>
      <Span>회원가입 시 등록한 이메일 주소를 입력 후 가입여부를 확인해 주세요.</Span>

      {check ? (
        <FlexDiv justify="flex-start" align="center" direction="column" width={'312px'}>
          <Email>abc@example.com</Email>
          <Span>가입하신 이메일이 존재합니다.</Span>
          <PButton
            color="pink"
            width="100%"
            height="40px"
            fontSize="12px"
            padding="0"
            onClick={() => history.push('/login')}
            margin={'5px 0 10px '}
          >
            로그인하기
          </PButton>
          <PButton
            otherBgColor="#f1f3f5"
            width="100%"
            height="40px"
            fontSize="12px"
            padding="0"
            border="none"
            onClick={() => history.push('/resetPw')}
          >
            비밀번호 재설정하기
          </PButton>
        </FlexDiv>
      ) : (
        <form>
          <FlexDiv justify="flex-start" align="flex-start" direction="column" width="undefined">
            <Label>이메일</Label>
            <Input
              value={email}
              placeholder="이메일을 입력해 주세요."
              type="text"
              id="inputEmail"
              onChange={handleEmail}
            />

            <PButton
              color="pink"
              width="100%"
              height="40px"
              fontSize="12px"
              padding="0"
              onClick={handleCheck}
              margin={'36px 0 0 '}
            >
              가입여부 확인
            </PButton>
          </FlexDiv>
        </form>
      )}
    </FlexDiv>
  );
};

export default FindEmail;

const Span = styled.span`
  height: 21px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  margin-bottom: 40px;
`;

const Label = styled.label<{ bold?: boolean; chk?: boolean }>`
  flex: 1;
  font-size: 14px;
  font-weight: ${(props) => props.bold && 'bold'};
  color: ${(props) => (props.bold ? '#212529' : '#495057')};
  line-height: 20px;
  margin-bottom: 5.5px;
  margin-left: ${(props) => (props.chk ? '5px' : props.bold ? '10px' : '0')};
  &:not(:first-child) {
    margin-top: 4px;
  }
`;

const Input = styled.input.attrs((props) => ({
  type: props.type || 'text'
}))`
  box-sizing: border-box;
  height: 41px;
  width: 313px;
  border: 1px solid #ced4da;
  border-radius: 3px;
  color: #adb5bd;
  font-size: 13px;
  padding: 10.5px 11.5px;
`;

const Email = styled.strong`
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  margin-bottom: 10px;
`;
