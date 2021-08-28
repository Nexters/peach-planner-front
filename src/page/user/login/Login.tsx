import React, { useEffect, useState } from 'react';
import { FlexDiv } from '../../../component/style/style';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const emailRegExp = /^[0-9a-z]([-_\.]?[0-9a-z])*@[0-9a-z]([-_\.]?[0-9a-z])*\.[a-z]/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

const Login = () => {
  const history = useHistory();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const { email, password } = inputs;

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === '' || email.match(emailRegExp) === null) {
      console.log(email);
      console.log(email.match(emailRegExp));
      setIsValidEmail(false);
      return;
    } else {
      setIsValidEmail(true);
    }
    if (!password) {
      setIsValidPassword(false);
      return;
    }
    login({
      userName: email,
      password,
      loginType: 'BASIC'
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  interface User {
    userName: string;
    password: string;
    loginType: 'BASIC';
  }

  const login = async (data: User) => {
    try {
      const res = await axios.post('http://api.peachplanner.com/api/auth/login', data);
      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      history.push('/');
      alert('로그인되었습니다.');
      // axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
      const expireTime = Date.parse(res.data.expireDateTime);
      setTimeout(refreshToken, expireTime - 60000);
      return;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    const access = localStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${access}`
      }
    };
    try {
      const res = await axios.post('http://api.peachplanner.com/api/auth/token/refresh', { refreshToken }, config);
      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };

  return (
    <FlexDiv>
      <LoginPageBox>
        <FlexDiv>
          <Span color="#212529" size="18px">
            로그인
          </Span>
        </FlexDiv>

        <Form onSubmit={handleForm}>
          <FlexDiv justify="flex-start" align="flex-start" direction="column" margin="10px 0">
            <Span weight="normal">이메일</Span>
            <Input
              placeholder="이메일을 입력해 주세요."
              type="text"
              id="inputEmail"
              onChange={handleInput}
              value={email}
              name="email"
            />
            {!isValidEmail && (
              <Span color="#E03131" size="12px" weight="normal">
                이메일 형식이 유효하지 않습니다.
              </Span>
            )}
          </FlexDiv>
          <FlexDiv justify="flex-start" align="flex-start" direction="column" margin="10px 0">
            <Span weight="normal">비밀번호</Span>
            <Input
              placeholder="비밀번호를 입력해 주세요."
              type="password"
              id="inputPassword"
              onChange={handleInput}
              value={password}
              name="password"
            />
            {!isValidPassword && (
              <Span color="#E03131" size="12px" weight="normal">
                비밀번호가 일치하지 않습니다.
              </Span>
            )}
          </FlexDiv>
          <LogInButton radius="6px" width="312px" height="40px" type="submit">
            로그인
          </LogInButton>
        </Form>

        <FlexDiv margin="8px 0 40px 0" justify="flex-end">
          <Span weight="normal" cursor="pointer">
            이메일
          </Span>
          {' / '}
          <Span weight="normal" cursor="pointer">
            비밀번호 찾기
          </Span>
        </FlexDiv>

        <FlexDiv>
          <Span weight="normal">SNS 계정으로 로그인</Span>
        </FlexDiv>
        <FlexDiv justify="space-around">
          <LogInButton background="#02C73C"></LogInButton>
          <LogInButton background="#FFF000"></LogInButton>
          <LogInButton background="#3C5997"></LogInButton>
          <LogInButton background="transparent" box="border-box" border="1px solid #DEE2E6"></LogInButton>
        </FlexDiv>

        <LogInButton
          radius="6px"
          background="transparent"
          border="1px solid #E64980"
          color="#E64980"
          width="312px"
          height="40px"
          onClick={() => history.push('/signUp')}
        >
          <Span color="#E64980" weight="normal" cursor="pointer">
            계정이 없으신가요?{' '}
          </Span>
          <Span color="#E64980" cursor="pointer">
            회원가입 하기
          </Span>
        </LogInButton>

        <FlexDiv>
          <Span weight="normal">플래너이신가요?</Span>
          <Span
            color="#E64980"
            weight="normal"
            cursor="pointer"
            onClick={() => {
              '/plannerSignUp';
            }}
          >
            플래너 등록
          </Span>
        </FlexDiv>
      </LoginPageBox>
    </FlexDiv>
  );
};

export default Login;

interface Props {
  margin?: string;
  color?: string;
  cursor?: string;
  size?: string;
  weight?: string;
  height?: string;
  width?: string;
  radius?: string;
  background?: string;
  box?: string;
  border?: string;
}
const LoginPageBox = styled.div``;
const Form = styled.form``;

const Span = styled.span<Props>`
  height: 20px;
  width: auto;
  color: ${(props: Props) => props.color || '#495057'};
  font-family: SpoqaHanSans;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
  margin: ${(props: Props) => props.margin || '0'};
  cursor: ${(props: Props) => props.cursor || 'default'};
  font-size: ${(props) => props.size || '14px'};
  font-weight: ${(props) => props.weight || 'bold'};
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
  font-family: SpoqaHanSans;
  font-size: 13px;
`;

const LogInButton = styled.button<Props>`
  height: ${(props: Props) => props.height || '48px'};
  width: ${(props: Props) => props.width || '48px'};
  border-radius: ${(props: Props) => props.radius || '100%'};
  background-color: ${(props: Props) => props.background || '#e64980'};
  outline: none;
  border: ${(props: Props) => props.border || 'none'}; // 1px solid #e64980;
  color: ${(props: Props) => props.color || '#ffffff'}; //#e64980
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
  box-sizing: ${(props: Props) => props.box || 'border-box'};
  cursor: pointer;
`;