import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PButton from 'lib/pages/components/PButton';
import { FlexDiv, Content, Title } from 'lib/pages/components/style/style';
import { KAKAO_AUTH_URL } from 'lib/pages/oauth/OAuth';
import HorizontalLine from 'lib/pages/components/HorizontalLine';
import logo from 'public/assets/img/ic_share_kakao.png';
import { FindUserByEmail, User } from 'lib/api/User';
import { useRouter } from 'next/router';
import { UserLogin, UserSignup } from 'lib/interface/user';
import { checkAuth } from 'lib/atoms/checkAuth';
import { publicOnly } from 'lib/routes/withAuth';

const emailRegExp = /^[0-9a-z]([-_\.]?[0-9a-z])*@[0-9a-z]([-_\.]?[0-9a-z])*\.[a-z]/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;


export default publicOnly(() => {
  const router = useRouter();
  useEffect(() => {
    // Are you an authorized user or not?
    if (localStorage.getItem('accessToken')) {
      router.replace("/");
    }
  }, []);

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isExistEmail, setIsExistEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    nickName: ''
  });
  const { email, password, passwordConfirm, name, nickName } = inputs;
  const [checkAll, setCheckAll] = useState(false);
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

  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckAll(!checkAll);
  };

  const handleCheckTerms = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeTerms(!agreeTerms);
  };

  const handleCheckPrivacy = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreePrivacy(!agreePrivacy);
  };

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
      alert('???????????? ??????????????????.');
    } else if (email.match(emailRegExp) === null) {
      alert('????????? ????????? ???????????? ??????????????????.');
    } else if (!password) {
      alert('??????????????? ??????????????????.');
    } else if (!passwordConfirm) {
      alert('??????????????? ?????? ??? ??????????????????.');
    } else if (password !== passwordConfirm) {
      alert('??????????????? ???????????? ????????????.');
    } else if (!name) {
      alert('????????? ??????????????????.');
    } else if (!nickName) {
      alert('???????????? ??????????????????.');
    } else if (!agreeTerms) {
      alert('??????????????? ??????????????????.');
      setIsValidPassword(true);
      setIsValidEmail(true);
    } else if (!agreePrivacy) {
      alert('???????????? ??????????????? ??????????????????.');
      setIsValidPassword(true);
      setIsValidEmail(true);
    } else {
      FindUserByEmail(email)
        .then((res) => {
          if (res.exist) {
            setIsExistEmail(true);
          } else {
            setIsExistEmail(false);
            signup({
              name,
              nickName,
              userName: email,
              password,
              type: 'USER'
            });
          }
        })
        .catch((err) => {
          alert('???????????? ??? ?????? ??????????????????.');
        });
    }
  };

  const signup = async (data: UserSignup) => {
    const res = await axios.post('/auth/signup', data);
    login({
      userName: email,
      password,
      loginType: 'BASIC'
    });
  };

  const login = async (data: UserLogin) => {
    const res = await axios.post('/auth/login', data);
    localStorage.setItem('accessToken', res?.data?.accessToken);
    localStorage.setItem('refreshToken', res?.data?.refreshToken);
    await router.push('/');
    window.location.reload();
    alert('???????????? ??? ???????????? ?????????????????????.');
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
    <FlexDiv direction={'column'} justify={'flex-start'}>
      <Title color={'#212529'} height={'24px'} fontSize={'18px'} lineHeight={'27px'} margin={'40px 0 24px'}>
        ????????????
      </Title>

      <FlexDiv justify="flex-start" align="flex-start" direction="column" width="undefined">
        <form onSubmit={handleSignUp}>
          <FlexDiv justify="flex-start" align="flex-start" direction="column" width="undefined">
            <Label>?????????</Label>
            <Input
              name="email"
              value={email}
              placeholder="???????????? ????????? ?????????."
              type="text"
              id="inputEmail"
              onChange={handleInput}
            />
            {!isValidEmail && (
              <Content color="#E03131" fontSize="12px" height="18px" width="undefined" lineHeight="18px">
                ????????? ????????? ???????????? ????????????.
              </Content>
            )}
            {isExistEmail && (
              <Content color="#E03131" fontSize="12px" height="18px" width="undefined" lineHeight="18px">
                ?????? ?????????????????? ??????????????????.
              </Content>
            )}

            <Label>????????????</Label>
            <Input
              name="password"
              value={password}
              placeholder="??????????????? ????????? ?????????."
              type="password"
              id="inputPassword"
              onChange={handleInput}
            />
            {!isValidPassword && (
              <Content color="#E03131" fontSize="12px" height="18px" width="162px" lineHeight="18px">
                ??????????????? ???????????? ????????????.
              </Content>
            )}

            <Label>???????????? ??????</Label>
            <Input
              name="passwordConfirm"
              value={passwordConfirm}
              placeholder="??????????????? ?????? ??? ????????? ?????????."
              type="password"
              id="inputPassword"
              onChange={handleInput}
            />
            {!isValidPassword && (
              <Content color="#E03131" fontSize="12px" height="18px" width="162px" lineHeight="18px">
                ??????????????? ???????????? ????????????.
              </Content>
            )}

            <Label>??????</Label>
            <Input
              name="name"
              value={name}
              placeholder="????????? ????????? ?????????."
              type="text"
              id="inputName"
              onChange={handleInput}
            />

            <Label>?????????</Label>
            <Input
              name="nickName"
              value={nickName}
              placeholder="???????????? ????????? ?????????."
              type="text"
              id="inputName"
              onChange={handleInput}
            />

            <HorizontalLine top="20px" bottom="16px" />
            <Span>??????????????? ????????? ??????????????? ??????????????????.</Span>

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
                <Label bold>????????????</Label>
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
                  [??????] ??????????????? ???????????? ??????{' '}
                  <Underline href="/termsOfUse" target="_blank">
                    ??????
                  </Underline>
                </Label>
              </label>
            </FlexDiv>

            <FlexDiv margin="15px 0 0" justify="flex-start">
              <label>
                <CheckBoxContainer>
                  <HiddenCheckBox
                    type="checkbox"
                    id="agreePrivacy"
                    checked={agreePrivacy}
                    onChange={handleCheckPrivacy}
                  />
                  <StyledCheckBox checked={agreePrivacy}>
                    <Icon viewBox="0 0 24 24">
                      <polyline points="19 7, 10 17, 5 12" strokeLinecap="round" strokeLinejoin="round" />
                    </Icon>
                  </StyledCheckBox>
                </CheckBoxContainer>
                <Label chk>
                  [??????] ???????????? ???????????? ??????{' '}
                  <Underline href="/privacyPolicy" target="_blank">
                    ??????
                  </Underline>
                </Label>
              </label>
            </FlexDiv>

            <PButton color="pink" width="100%" height="40px" fontSize="12px" padding="0" margin={'20px 0 0'}>
              ????????????
            </PButton>
          </FlexDiv>
        </form>
        <Span margin="10px auto 13px">??????</Span>

        <a href={KAKAO_AUTH_URL} style={{ textDecoration: 'none' }}>
          <KakaoButton>
            <Image src={logo.src} />
            <Span color="#000" cursor="pointer">
              ???????????? ????????????
            </Span>
          </KakaoButton>
        </a>
      </FlexDiv>
    </FlexDiv>
  );
});

interface SpanProps {
  margin?: string;
  color?: string;
  cursor?: string;
}

const Span = styled.span<SpanProps>`
  height: 19px;
  width: auto;
  color: ${(props: SpanProps) => props.color || '#868e96'};
  font-size: 13px;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
  margin: ${(props: SpanProps) => props.margin || '0'};
  cursor: ${(props: SpanProps) => props.cursor || 'default'};
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

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  width: 20px;
  height: 20px;
  margin-right: 6.7px;
  cursor: pointer;
`;

const KakaoButton = styled.button`
  width: 312px;
  height: 40px;
  border-radius: 3px;
  background-color: #fce750;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
`;

const Underline = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: #495057;
`;
