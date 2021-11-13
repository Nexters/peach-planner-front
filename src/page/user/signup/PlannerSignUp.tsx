import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PButton from 'src/component/PButton';
import HorizontalLine from 'src/component/HorizontalLine';
import { FlexDiv, Content, Title } from 'src/component/style/style';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { User } from 'src/interface';

const emailRegExp = /^[0-9a-z]([-_\.]?[0-9a-z])*@[0-9a-z]([-_\.]?[0-9a-z])*\.[a-z]/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
// const phoneRegExp = /^\d{3}-\d{3,4}-\d{4}$/;

// const autoHypenPhone = (num: string) => {
//   num = num.replace(/[^0-9]/g, '');
//   let tmp = '';
//   if (num.length < 4) {
//     return num;
//   } else if (num.length < 7) {
//     tmp += num.substr(0, 3);
//     tmp += '-';
//     tmp += num.substr(3);
//     return tmp;
//   } else if (num.length < 11) {
//     tmp += num.substr(0, 3);
//     tmp += '-';
//     tmp += num.substr(3, 3);
//     tmp += '-';
//     tmp += num.substr(6);
//     return tmp;
//   } else {
//     tmp += num.substr(0, 3);
//     tmp += '-';
//     tmp += num.substr(3, 4);
//     tmp += '-';
//     tmp += num.substr(7);
//     return tmp;
//   }
//   return num;
// };

const PlannerSignUp = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [name, setName] = useState('');
  const [checkAll, setCheckAll] = useState(false);
  // const [phone, setPhone] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  useEffect(() => {
    if (checkAll) {
      setAgreeTerms(true);
      setAgreePrivacy(true);
    } else {
      if (agreeTerms && agreePrivacy) {
        setAgreeTerms(false);
        setAgreePrivacy(false);
      }
    }
  }, [checkAll]);

  useEffect(() => {
    if (!agreeTerms || !agreePrivacy) {
      setCheckAll(false);
    } else {
      setCheckAll(true);
    }
  }, [agreeTerms, agreePrivacy]);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckAll(!checkAll);
  };

  const handleCheckTerms = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeTerms(!agreeTerms);
  };

  const handleCheckPrivacy = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreePrivacy(!agreePrivacy);
  };

  // const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPhone(autoHypenPhone(e.target.value));
  // };

  const handleSignUp = () => {
    if (!email) {
      alert('이메일을 입력해주세요.');
    } else if (email.match(emailRegExp) === null) {
      setIsValidEmail(false);
    } else if (!password) {
      alert('비밀번호를 입력해주세요.');
      setIsValidEmail(true);
    } else if (!passwordConfirm) {
      alert('비밀번호를 한번 더 입력해주세요.');
      setIsValidEmail(true);
    } else if (password !== passwordConfirm) {
      setIsValidPassword(false);
      setIsValidEmail(true);
    } else if (!name) {
      alert('이름을 입력해주세요.');
      setIsValidPassword(true);
      setIsValidEmail(true);
    } else if (!agreeTerms) {
      alert('이용약관에 동의해주세요.');
      setIsValidPassword(true);
      setIsValidEmail(true);
    } else if (!agreePrivacy) {
      alert('개인정보 처리방침에 동의해주세요.');
      setIsValidPassword(true);
      setIsValidEmail(true);
    } else {
      signup({
        name,
        userName: email,
        email,
        password,
        type: 'PLANNER',
        // tel: phone,
        nickName: name
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
    history.push('/registerProfile');
    window.location.reload();
    alert('회원가입 및 로그인이 완료되었습니다.');
    // const expireTime = Date.parse(res.data.expireDateTime);
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
    <FlexDiv direction="column" height={'700px'} justify={'flex-start'}>
      <Title color={'#212529'} height={'24px'} fontSize={'18px'} lineHeight={'27px'} margin={'40px 0 24px'}>
        웨딩플래너 가입하기
      </Title>

      <FlexDiv justify="flex-start" align="flex-start" direction="column" width="undefined">
        <Label>이메일</Label>
        <Input value={email} placeholder="이메일을 입력해 주세요." type="text" id="inputEmail" onChange={handleEmail} />
        {!isValidEmail && (
          <Content color="#E03131" fontSize="12px" height="18px" width="undefined" lineHeight="18px">
            이메일 형식이 유효하지 않습니다.
          </Content>
        )}

        <Label>비밀번호</Label>
        <Input
          value={password}
          placeholder="비밀번호를 입력해 주세요."
          type="password"
          id="inputPassword"
          onChange={handlePassword}
        />
        {!isValidPassword && (
          <Content color="#E03131" fontSize="12px" height="18px" width="162px" lineHeight="18px">
            비밀번호가 일치하지 않습니다.
          </Content>
        )}

        <Label>비밀번호 확인</Label>
        <Input
          value={passwordConfirm}
          placeholder="비밀번호를 한번 더 입력해 주세요."
          type="password"
          id="inputPassword"
          onChange={handlePasswordConfirm}
        />
        {!isValidPassword && (
          <Content color="#E03131" fontSize="12px" height="18px" width="162px" lineHeight="18px">
            비밀번호가 일치하지 않습니다.
          </Content>
        )}

        <Label>이름</Label>
        <Input value={name} placeholder="이름을 입력해 주세요." type="text" id="inputName" onChange={handleName} />

        {/* <Label>휴대폰인증</Label>
        <Input
          value={phone}
          placeholder="휴대폰 번호를 입력해주세요."
          type="text"
          id="inputPhone"
          onChange={handlePhone}
        /> */}

        <HorizontalLine top="20px" bottom="16px" />
        <Span>피치플래너 서비스 이용악관에 동의해주세요.</Span>

        <FlexDiv margin="15px 0 0 0" justify="flex-start">
          <label>
            <CheckBoxContainer>
              <HiddenCheckBox type="checkbox" id="checkAll" checked={checkAll} onChange={handleCheckAll} />
              <StyledCheckBox checked={checkAll} big>
                <Icon viewBox="0 0 24 24">
                  <polyline points="19 7, 10 17, 5 12" strokeLinecap="round" strokeLinejoin="round" />
                </Icon>
              </StyledCheckBox>
            </CheckBoxContainer>
            <Label bold>전체동의</Label>
          </label>
        </FlexDiv>

        <HorizontalLine top="21px" bottom="10px" />

        <FlexDiv margin="0" justify="flex-start">
          <label>
            <CheckBoxContainer>
              <HiddenCheckBox type="checkbox" id="agreeTerms" checked={agreeTerms} onChange={handleCheckTerms} />
              <StyledCheckBox checked={agreeTerms}>
                <Icon viewBox="0 0 24 24">
                  <polyline points="19 7, 10 17, 5 12" strokeLinecap="round" strokeLinejoin="round" />
                </Icon>
              </StyledCheckBox>
            </CheckBoxContainer>
            <Label chk>
              [필수] 피치플래너 이용약관 동의{' '}
              <Underline href="/termsOfUse" target="_blank">
                보기
              </Underline>
            </Label>
          </label>
        </FlexDiv>

        <FlexDiv margin="15px 0 43px 0" justify="flex-start">
          <label>
            <CheckBoxContainer>
              <HiddenCheckBox type="checkbox" id="agreePrivacy" checked={agreePrivacy} onChange={handleCheckPrivacy} />
              <StyledCheckBox checked={agreePrivacy}>
                <Icon viewBox="0 0 24 24">
                  <polyline points="19 7, 10 17, 5 12" strokeLinecap="round" strokeLinejoin="round" />
                </Icon>
              </StyledCheckBox>
            </CheckBoxContainer>
            <Label chk>
              [필수] 개인정보 처리방침 동의{' '}
              <Underline href="/privacyPolicy" target="_blank">
                보기
              </Underline>
            </Label>
          </label>
        </FlexDiv>

        {/* <Styled onClick={() => setAgreeTerms(!agreeTerms)}>
          <input type="checkbox" checked={agreeTerms} />
          <label></label>
        </Styled> */}

        <PButton color="pink" width="100%" height="40px" fontSize="12px" padding="0" onClick={handleSignUp}>
          가입 완료하기
        </PButton>
      </FlexDiv>
    </FlexDiv>
  );
};

export default PlannerSignUp;

const Span = styled.span`
  height: 20px;
  width: auto;
  color: #212529;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 20px;
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

const Underline = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: #495057;
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

const CheckBoxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckBox = styled.input<{ checked?: boolean }>`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  width: 0;
  height: 0;
  margin: 0px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const Icon = styled.svg`
  fill: none;
  stroke: #ffffff;
  stroke-width: 2px;
  stroke-linejoin: round;
`;

const StyledCheckBox = styled.div<{ checked?: boolean; big?: boolean }>`
  display: inline-block;
  width: ${(props) => (props.big ? '24px' : '18px')};
  height: ${(props) => (props.big ? '24px' : '18px')};
  box-sizing: border-box;
  background: ${(props) => (props.checked ? '#E64980' : 'transparent')};
  border: ${(props) => (props.checked ? '1px solid #E64980' : '1px solid #CED4DA')};
  border-radius: 3px;
  transition: all 150ms;
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;
