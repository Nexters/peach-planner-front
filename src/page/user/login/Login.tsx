import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FlexDiv, Title, Content } from 'src/component/style/style';
import { usePeachTokenState, useUserTypeState } from 'src/atoms/AuthStatus';
import { KAKAO_AUTH_URL } from '../OAuth/OAuth';
import { User } from 'src/interface';
import logo from '../../../assets/img/ic_share_kakao.png';
import { useMutation } from 'react-query';
import { getUser } from 'src/api/User';

const emailRegExp = /^[0-9a-z]([-_\.]?[0-9a-z])*@[0-9a-z]([-_\.]?[0-9a-z])*\.[a-z]/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

const Login = () => {
  const history = useHistory();
  const [, setPeachTokenState] = usePeachTokenState();
  const [, setUserTypeState] = useUserTypeState();
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
    })
    .then((res) => {
      const accessToken = res.data.accessToken;
      const refreshToken = res.data.refreshToken;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    setPeachTokenState(accessToken);
      getUserAfterLogin();
    })
    .catch((error) => {
      if (error?.response?.data?.message) {
        const errorMessage = error?.response?.data?.message;
        alert(errorMessage);
        return;
      } 
      alert('아이디나 비밀번호를 확인해주세요');
      return;
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const login = async (data: User) => {
    const res = await axios.post('/auth/login', data);
    return res;
  };

  const getUserAfterLogin =() => {
    getUser()
    .then((res) => {
      setUserTypeState(res.userType ? res.userType : 'USER');
      history.push('/');
      alert('로그인되었습니다.');
    })
  }

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    const accessToken = localStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    };
    const res = await axios.post('/auth/token/refresh', { refreshToken }, config);
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('refreshToken', res.data.refreshToken);
    setPeachTokenState(accessToken);
  };

  return (
    <FlexDiv direction={'column'} height={'700px'} justify={'flex-start'}>
      <Title color={'#212529'} height={'24px'} fontSize={'18px'} lineHeight={'27px'} margin={'40px 0 24px'}>
        로그인{' '}
      </Title>

      <form onSubmit={handleForm}>
        <FlexDiv justify="flex-start" align="flex-start" direction="column" width="undefined">
          <Label>이메일</Label>
          <Input
            name="email"
            value={email}
            placeholder="이메일을 입력해 주세요."
            type="text"
            id="inputEmail"
            onChange={handleInput}
          />
          {!isValidEmail && (
            <Content color="#E03131" fontSize="12px" height="18px" width="undefined" lineHeight="18px">
              이메일 형식이 유효하지 않습니다.
            </Content>
          )}

          <Label>비밀번호</Label>
          <Input
            name="password"
            value={password}
            placeholder="비밀번호를 입력해 주세요."
            type="password"
            id="inputPassword"
            onChange={handleInput}
          />
          {!isValidPassword && (
            <Content color="#E03131" fontSize="12px" height="18px" width="162px" lineHeight="18px">
              비밀번호가 일치하지 않습니다.
            </Content>
          )}

          <LogInButton radius="3px" width="312px" height="40px" type="submit" margin="16px 0 0 0">
            로그인
          </LogInButton>
        </FlexDiv>
      </form>

      <FlexDiv margin="8px 0 20px 0" justify="flex-end" width={'313px'}>
        <div
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => history.push('/findEmail')}
        >
          <Span weight="normal" cursor="pointer">
            이메일
          </Span>
          <div style={{ width: '4px', height: '4px', margin: '0 5px', backgroundColor: '#ced4da' }}></div>
          <Span weight="normal" cursor="pointer">
            비밀번호 찾기
          </Span>
        </div>
      </FlexDiv>

      <FlexDiv margin="0">
        <Span weight="normal">또는</Span>
      </FlexDiv>
      <a href={KAKAO_AUTH_URL} style={{ textDecoration: 'none' }}>
        <LogInButton radius="3px" background="#FFF000" border="none" width="312px" height="40px" margin="13px 0 10px">
          <Image src={logo} />
          <Span color="#000" cursor="pointer">
            카카오로 로그인
          </Span>
        </LogInButton>
      </a>

      <LogInButton
        radius="3px"
        background="#f1f3f5"
        border="none"
        width="312px"
        height="40px"
        margin="0 0 17.5px"
        onClick={() => history.push('/signUp')}
      >
        <Span color="#000" weight="normal" cursor="pointer">
          계정이 없으신가요?{' '}
        </Span>
        <Span color="#000" cursor="pointer">
          회원가입 하기
        </Span>
      </LogInButton>

      <FlexDiv>
        <Span weight="normal" margin="0 5px 0 0">
          플래너이신가요?
        </Span>
        <Span
          color="#E64980"
          cursor="pointer"
          onClick={() => {
            history.push('/plannerSignUp');
          }}
        >
          플래너 가입
        </Span>
      </FlexDiv>
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

const Span = styled.span<Props>`
  height: 20px;
  width: auto;
  color: ${(props: Props) => props.color || '#495057'};
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
  font-size: 13px;
  padding: 10.5px 11.5px;
`;

const LogInButton = styled.button<Props>`
  height: ${(props: Props) => props.height || '48px'};
  width: ${(props: Props) => props.width || '48px'};
  border-radius: ${(props: Props) => props.radius || '100%'};
  background-color: ${(props: Props) => props.background || '#e64980'};
  outline: none;
  border: ${(props: Props) => props.border || 'none'}; // 1px solid #e64980;
  color: ${(props: Props) => props.color || '#ffffff'}; //#e64980
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
  box-sizing: ${(props: Props) => props.box || 'border-box'};
  cursor: pointer;
  margin: ${(props: Props) => props.margin || '0'};
  :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: #f8d756;
    }
  }
  :nth-child(5) {
    :hover {
      background-color: #c2255c;
    }
  }
  :nth-child(6) {
    :hover {
      background-color: #ced4da;
    }
  }
`;

const Label = styled.label`
  flex: 1;
  font-size: 14px;
  color: #495057;
  line-height: 20px;
  margin-bottom: 5.5px;
  &:not(:first-child) {
    margin-top: 4px;
  }
`;

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  width: 20px;
  height: 20px;
  margin-right: 6.7px;
`;
