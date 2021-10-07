import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import PButton from 'src/component/PButton';
import { FlexDiv, Content, Title } from 'src/component/style/style';
import { User } from 'src/interface';

const emailRegExp = /^[0-9a-z]([-_\.]?[0-9a-z])*@[0-9a-z]([-_\.]?[0-9a-z])*\.[a-z]/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

const UserSignUp = () => {
  const history = useHistory();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    nickName: ''
  });
  const { email, password, passwordConfirm, name, nickName } = inputs;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert('이메일을 입력해주세요.');
    } else if (email.match(emailRegExp) === null) {
      alert('올바른 형식의 이메일을 입력해주세요.');
    } else if (!password) {
      alert('비밀번호를 입력해주세요.');
    } else if (!passwordConfirm) {
      alert('비밀번호를 한번 더 입력해주세요.');
    } else if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
    } else if (!name) {
      alert('이름을 입력해주세요.');
    } else if (!nickName) {
      alert('닉네임을 입력해주세요.');
    } else {
      signup({
        name,
        nickName,
        userName: email,
        password,
        type: 'USER'
      });
    }
  };

  const signup = async (data: User) => {
    const res = await axios.post('/auth/signup', data);
    login({
      userName: email,
      password,
      loginType: 'BASIC'
    });
  };

  const login = async (data: User) => {
    const res = await axios.post('/auth/login', data);
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('refreshToken', res.data.refreshToken);
    history.push('/');
    window.location.reload();
    alert('회원가입 및 로그인이 완료되었습니다.');
    // axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
    const expireTime = Date.parse(res.data.expireDateTime);
    // setTimeout(refreshToken, expireTime - 60000);
  };

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    const access = localStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${access}`
      }
    };
    const res = await axios.post('/auth/token/refresh', { refreshToken }, config);
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('refreshToken', res.data.refreshToken);
  };

  return (
    <FlexDiv direction={'column'} height={'700px'} justify={'flex-start'}>
      <Title color={'#212529'} height={'24px'} fontSize={'18px'} lineHeight={'27px'} margin={'40px 0 24px'}>
        회원가입{' '}
      </Title>

      <form onSubmit={handleSignUp}>
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

          <Label>비밀번호 확인</Label>
          <Input
            name="passwordConfirm"
            value={passwordConfirm}
            placeholder="비밀번호를 한번 더 입력해 주세요."
            type="password"
            id="inputPassword"
            onChange={handleInput}
          />
          {!isValidPassword && (
            <Content color="#E03131" fontSize="12px" height="18px" width="162px" lineHeight="18px">
              비밀번호가 일치하지 않습니다.
            </Content>
          )}

          <Label>이름</Label>
          <Input
            name="name"
            value={name}
            placeholder="이름을 입력해 주세요."
            type="text"
            id="inputName"
            onChange={handleInput}
          />

          <Label>닉네임</Label>
          <Input
            name="nickName"
            value={nickName}
            placeholder="닉네임을 입력해 주세요."
            type="text"
            id="inputName"
            onChange={handleInput}
          />

          <PButton color="pink" width="100%" height="33px" fontSize="12px" padding="0" margin={'15px 0 0'}>
            가입하기
          </PButton>
          <Span margin="16px auto">또는</Span>

          {/* <PButton color="#212529" width="313px" height="40px" fontSize="13px" padding="0" margin={'0'}>
            네이버 가입하기
          </PButton> */}
          <PButton color="#212529" width="313px" height="40px" fontSize="13px" padding="0" margin={'15px 0'}>
            카카오 가입하기
          </PButton>
          {/* <PButton color="#212529" width="313px" height="40px" fontSize="13px" padding="0" margin={'0'}>
            페이스북 가입하기
          </PButton>
          <PButton color="#212529" width="313px" height="40px" fontSize="13px" padding="0" margin={'15px 0'}>
            구글 가입하기
          </PButton> */}

          <FlexDiv>
            <Span margin="0 5px 0 0">플래너이신가요? </Span>
            <Span color="#E64980" cursor="pointer" onClick={() => history.push('/plannerSignUp')}>
              플래너 가입
            </Span>
          </FlexDiv>
        </FlexDiv>
      </form>
    </FlexDiv>
  );
};

export default UserSignUp;

interface SpanProps {
  margin?: string;
  color?: string;
  cursor?: string;
}

const Span = styled.span<SpanProps>`
  height: 19px;
  width: auto;
  color: ${(props: SpanProps) => props.color || '#868e96'};
  font-family: SpoqaHanSans;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
  margin: ${(props: SpanProps) => props.margin || '0'};
  cursor: ${(props: SpanProps) => props.cursor || 'default'};
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
  padding: 10.5px 11.5px;
`;
