import React, { useState } from 'react';
import styled from 'styled-components';
import PButton from 'lib/pages/components/PButton';
import { FlexDiv, Content, Title } from 'lib/pages/components/style/style';
import { resetPw, validateToken } from 'lib/api/ResetPw';
import { useRouter } from 'next/router';

const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

export default () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({ password: '', passwordConfirm: '' });
  const { password, passwordConfirm } = inputs;
  const [isValidPassword, setIsValidPassword] = useState(true);
  const token = router.query.token as string;
  if (!token) {
    alert("유효하지 않은 접근입니다.");
    router.push('/');
  }

  validateToken(token)
    .then(result => {
      if (!result) {
        alert("토큰이 유효하지 않습니다.");
        router.push('/');
      }
    });


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!password) {
      alert('비밀번호를 입력해주세요.');
    } else if (!passwordConfirm) {
      alert('비밀번호를 한번 더 입력해주세요.');
    } else if (password !== passwordConfirm) {
      setIsValidPassword(false);
    } else {
      const resetResult = await resetPw({
        token: token,
        password: password,
      });
      if (resetResult) {
        alert("비밀번호가 변경되었습니다!");
        router.push('/login');
      }
    }
    return;
  };

  return (
    <FlexDiv direction="column" height={'700px'} justify={'flex-start'}>
      <Title color={'#212529'} height={'24px'} fontSize={'18px'} lineHeight={'27px'} margin={'40px 0 15px'}>
        비밀번호 재설정
      </Title>

      <form onSubmit={handleReset}>
        <FlexDiv justify="flex-start" align="flex-start" direction="column" width="undefined">
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

          <PButton color="pink" width="100%" height="40px" fontSize="12px" padding="0" margin={'36px 0 0 '}>
            재설정하기
          </PButton>
        </FlexDiv>
      </form>
    </FlexDiv>
  );
};

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
