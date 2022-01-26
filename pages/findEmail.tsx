import React, { useState } from 'react';
import styled from 'styled-components';
import PButton from 'lib/pages/components/PButton';
import { FlexDiv, Content, Title } from 'lib/pages/components/style/style';
import { FindUserByEmail } from 'lib/api/User';
import { sendResetEmail } from 'lib/api/ResetPw';
import { useRouter } from 'next/router';
import { publicOnly } from 'lib/routes/withAuth';

export default publicOnly(() => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);
  const [exist, setExist] = useState(false);
  const [sent, setSent] = useState(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    FindUserByEmail(email)
      .then((res) => {
        if (res.exist) {
          setExist(true);
        } else {
          setExist(false);
        }
        setCheck(!check);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
    return;
  };

  return (
    <FlexDiv direction="column" height={'700px'} justify={'flex-start'}>
      {sent ? (
        <>
          <Title color={'#212529'} height={'27px'} fontSize={'18px'} lineHeight={'27px'} margin={'40px 0 15px'}>
            이메일 발송 완료
          </Title>
          <Span>
            비밀번호 재설정을 위한 Email 이 사용자의 계정으로 전송되었습니다.<br /><br />

            받으신 이메일을 확인하시고 안내에 따라 비밀번호를 재설정 하세요.<br />
            만약 메일을 받지 못하셨다면, 스팸 메일함을 확인해 주세요.
          </Span>
          <FlexDiv justify="flex-start" align="center" direction="column" width={'398px'}>

            <PButton
                  otherBgColor="#f1f3f5"
              width="100%"
              height="40px"
              fontSize="12px"
              padding="0"
              border="none"
              onClick={async () => {
                await sendResetEmail(email);
                alert("메일이 재발송되었습니다. 메일함을 확인해주세요.");
              }}
              margin={'5px 0 10px '}
            >
              인증메일 재발송
            </PButton>
          </FlexDiv>
        </>
      ) : (
        <>
          <Title color={'#212529'} height={'24px'} fontSize={'18px'} lineHeight={'27px'} margin={'40px 0 15px'}>
            이메일 / 비밀번호 찾기
          </Title>
          <Span>회원가입 시 등록한 이메일 주소를 입력 후 가입여부를 확인해 주세요.</Span>

          {check ? (
            <FlexDiv justify="flex-start" align="center" direction="column" width={'312px'}>
              <Email>{email}</Email>
              <Span>{exist ? '가입하신 이메일이 존재합니다.' : '가입하신 이메일이 존재하지 않습니다.'}</Span>
              <PButton
                color="pink"
                width="100%"
                height="40px"
                fontSize="12px"
                padding="0"
                onClick={() => router.push('/login')}
                margin={'5px 0 10px '}
              >
                로그인하기
              </PButton>
              {exist && (
                <PButton
                  otherBgColor="#f1f3f5"
                  width="100%"
                  height="40px"
                  fontSize="12px"
                  padding="0"
                  border="none"
                  onClick={async () => {
                    await sendResetEmail(email);
                    setSent(true);
                  }}
                >
                  비밀번호 재설정하기
                </PButton>
              )}
            </FlexDiv>
          ) : (
            <form onSubmit={handleCheck}>
              <FlexDiv justify="flex-start" align="flex-start" direction="column" width="undefined">
                <Label>이메일</Label>
                <Input
                  value={email}
                  placeholder="이메일을 입력해 주세요."
                  type="text"
                  id="inputEmail"
                  onChange={handleEmail}
                />

                <PButton color="pink" width="100%" height="40px" fontSize="12px" padding="0" margin={'36px 0 0 '}>
                  가입여부 확인
                </PButton>
              </FlexDiv>
            </form>
          )}
        </>
      )}
    </FlexDiv>
  );
});

const Span = styled.span`
  width: 498px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
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
