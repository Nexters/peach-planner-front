import React, { useEffect, useState } from 'react';
import * as $ from './LoginView';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <$.FlexDiv>
      <$.LoginPageBox>
        <$.FlexDiv>
          <$.LoginSpan color="#212529" size="18px">
            로그인
          </$.LoginSpan>
        </$.FlexDiv>
        <$.FlexDiv justify="flex-start" align="flex-start" direction="column" margin="10px 0">
          <$.LoginSpan weight="normal">이메일</$.LoginSpan>
          <$.Input placeholder="이메일을 입력해 주세요." type="email" id="inputEmail" />
          <$.LoginSpan color="#E03131" size="12px" weight="normal">
            이메일 형식이 유효하지 않습니다.
          </$.LoginSpan>
        </$.FlexDiv>
        <$.FlexDiv justify="flex-start" align="flex-start" direction="column" margin="10px 0">
          <$.LoginSpan weight="normal">비밀번호</$.LoginSpan>
          <$.Input placeholder="비밀번호를 입력해 주세요." type="password" id="inputPassword" />
          <$.LoginSpan color="#E03131" size="12px" weight="normal">
            비밀번호가 일치하지 않습니다.
          </$.LoginSpan>
        </$.FlexDiv>
        <$.LogInButton radius="6px" width="312px" height="40px">
          로그인
        </$.LogInButton>
        <$.FlexDiv margin="8px 0 40px 0" justify="flex-end">
          <$.LoginSpan weight="normal" cursor="pointer">
            이메일
          </$.LoginSpan>
          {' / '}
          <$.LoginSpan weight="normal" cursor="pointer">
            비밀번호 찾기
          </$.LoginSpan>
        </$.FlexDiv>
        <$.FlexDiv>
          <$.LoginSpan weight="normal">SNS 계정으로 로그인</$.LoginSpan>
        </$.FlexDiv>
        <$.FlexDiv justify="space-around">
          <$.LogInButton background="#02C73C"></$.LogInButton>
          <$.LogInButton background="#FFF000"></$.LogInButton>
          <$.LogInButton background="#3C5997"></$.LogInButton>
          <$.LogInButton background="transparent" box="border-box" border="1px solid #DEE2E6"></$.LogInButton>
        </$.FlexDiv>
        <$.LogInButton
          radius="6px"
          background="transparent"
          border="1px solid #E64980"
          color="#E64980"
          width="312px"
          height="40px"
        >
          <$.LoginSpan color="#E64980" weight="normal" cursor="pointer">
            계정이 없으신가요?{' '}
          </$.LoginSpan>
          <$.LoginSpan color="#E64980" cursor="pointer">
            회원가입 하기
          </$.LoginSpan>
        </$.LogInButton>
        <$.FlexDiv>
          <$.LoginSpan weight="normal">플래너이신가요?</$.LoginSpan>
          <$.LoginSpan color="#E64980" weight="normal" cursor="pointer">
            플래너 등록
          </$.LoginSpan>
        </$.FlexDiv>
      </$.LoginPageBox>
    </$.FlexDiv>
  );
};

export default Login;
