import React, { useState, useRef, useEffect, ChangeEvent, HtmlHTMLAttributes } from 'react';
import { getUserMe, EditUserInfo, DeleteUser, User, editUserProfileImage } from 'lib/api/User';
import LeftArrow from 'public/assets/svg/ic_arrow-left-line.svg';
import styled, { css } from 'styled-components';
import UserPageSideMenu from 'lib/pages/user-mypage/UserPageSideMenu';
import DefaultProfileImage from 'public/assets/svg/ic_account_default.svg';
import { upload } from 'lib/api/Image';
import { Title } from 'lib/pages/components/style/style';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { authOnly } from 'lib/routes/withAuth';

export default authOnly(() => {
  const router = useRouter();

  // const { data: user } = useQuery(['getUser'], getUser);
  const [user, setUser] = useState<User | null>(null);
  const [focus, setFocus] = useState(false);
  const [inputs, setInputs] = useState({
    nickName: '',
    originalPassword: '',
    password: '',
    passwordConfirm: ''
  });
  const { nickName, originalPassword, password, passwordConfirm } = inputs;
  const [userImage, setUserImage] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [changePw, setChangePw] = useState(false);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [editedProfileImage, setEditedProfileImage] = useState('');

  useEffect(() => {
    setChangePw(false);
    getUserMe()
      .then((data) => {
        setInputs({ ...inputs, nickName: data.nickName, });
        setUser(data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, []);

  useEffect(() => {
    if (focus) {
      inputRef.current?.focus();
    }
  }, [focus]);

  useEffect(() => {
    setFocus(false);
  }, [user]);

  const handleFocus = () => {
    setFocus(!focus);
  };

  const editInfo = () => {
    if (nickName) {
      EditUserInfo({ nickName })
        .then((data) => {
          setUser(data);
        })
        .catch((err) => {
          console.log(err, 'err');
        });
    } else {
      alert('닉네임을 입력해주세요.');
      return;
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const changePassword = () => {
    if (!originalPassword) {
      alert('기존 비밀번호를 입력해주세요.');
    } else if (!password) {
      alert('새 비밀번호를 입력해주세요.');
    } else if (!passwordConfirm) {
      alert('새 비밀번호를 한번 더 입력해주세요.');
    } else if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      EditUserInfo({ originalPassword, password })
        .then((data) => {
          alert("비밀번호가 변경되었습니다.");
          setChangePw(false);
        })
        .catch((err) => {
          console.log(err, 'err');
        });
    }
    return;
  };

  const handleDelete = () => {
    if (window.confirm("정말 탈퇴하시겠어요?") != true) {
      return;
    }

    DeleteUser();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    router.push('/');
    window.location.reload();
    alert('회원탈퇴가 완료되었습니다.');
  };

  return (
    <Container>
      <InnerContainer>
        <UserPageSideMenu />
        <ContentContainer>

          {changePw ? (
            <FlexDiv direction={'column'}>

              <FlexDiv margin='0' justify='none' align='none' cursor='pointer' onClick={() => setChangePw(false)} >
                <Image src={LeftArrow} layout='fixed' />
                <Title width='100%' height='27px' fontFamily='SpoqaHanSans' fontSize='18px' lineHeight='27px' margin='0 0 15px 0' color='#000'>
                  계정 설정으로 돌아가기
                </Title>
              </FlexDiv>

              <SettingBox>
                <SettingTitle>비밀번호 변경</SettingTitle>

                <SettingLabel>현재 비밀번호</SettingLabel>
                <SettingInfoBox focus={true}>
                  <Input name="originalPassword" onChange={onChangeInput} value={originalPassword} type="password" />
                </SettingInfoBox>

                <SettingLabel>새 비밀번호</SettingLabel>
                <SettingInfoBox focus={true}>
                  <Input name="password" onChange={onChangeInput} value={password} type="password" />
                </SettingInfoBox>


                <SettingLabel>새 비밀번호 확인</SettingLabel>
                <SettingInfoBox focus={true}>
                  <Input name="passwordConfirm" onChange={onChangeInput} value={passwordConfirm} type="password" />
                </SettingInfoBox>
              </SettingBox>
              <SettingBox>
                <SettingButton onClick={changePassword}>
                  <SettingButtonText>변경하기</SettingButtonText>
                </SettingButton>
              </SettingBox>
            </FlexDiv>
          ) : (
            <FlexDiv direction="column">
              <Title width='100%' height='27px' fontFamily='SpoqaHanSans' fontSize='18px' lineHeight='normal' margin='0 0 15px 0' color='#000'>계정 설정</Title>
              <SettingBox>
                <SettingTitle>회원정보</SettingTitle>

                <SettingLabel>이름</SettingLabel>
                <SettingInfoBox>
                  <SettingInfo>{user?.name}</SettingInfo>
                </SettingInfoBox>

                <SettingLabel>닉네임</SettingLabel>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SettingInfoBox focus={focus}>
                    <SettingInfo>
                      {focus ? (
                        <Input name="nickName" onChange={onChangeInput} value={nickName} ref={inputRef} />
                      ) : (
                        <>{user?.nickName}</>
                      )}
                    </SettingInfo>
                  </SettingInfoBox>
                  {focus ? (
                    <>
                      <SettingButton onClick={editInfo} c="#e64980" w={78}>
                        <SettingButtonText>확인</SettingButtonText>
                      </SettingButton>
                      <SettingButton onClick={handleFocus} w={54}>
                        <SettingButtonText>취소</SettingButtonText>
                      </SettingButton>
                    </>
                  ) : (
                    <SettingButton onClick={handleFocus} w={105}>
                      <SettingButtonText>수정하기</SettingButtonText>
                    </SettingButton>
                  )}
                </div>

                <SettingLabel>이메일</SettingLabel>
                <SettingInfoBox>
                  <SettingInfo>{user?.email}</SettingInfo>
                </SettingInfoBox>
              </SettingBox>

              <SettingBox>
                <SettingTitle>프로필사진 변경</SettingTitle>
                <ImgBox src={editedProfileImage ? editedProfileImage : user?.profileImage ?? DefaultProfileImage} />
                <div>
                  <input ref={hiddenFileInput} type="file" style={{ display: "none" }} onChange={async (e: any) => {
                    const file = e.target.files[0];

                    if (file) {
                      const s3ImageUrl = await upload(file);
                      await editUserProfileImage({
                        profileImage: s3ImageUrl,
                      });
                      setEditedProfileImage(s3ImageUrl);
                    }
                  }} />
                  <SettingButton onClick={(e) => hiddenFileInput.current?.click()}>
                    <SettingButtonText>사진 변경</SettingButtonText>
                  </SettingButton>
                  {/* <SettingButton w={54}>
                    <SettingButtonText>삭제</SettingButtonText>
                  </SettingButton> */}
                </div>
              </SettingBox>
              {user?.loginType === 'BASIC' && (
              <SettingBox>
                <SettingTitle>비밀번호</SettingTitle>
                <SettingInfo>피치플래너 로그인 시 사용하는 비밀번호를 변경할 수 있습니다.</SettingInfo>
                <SettingButton onClick={() => setChangePw(true)}>
                  <SettingButtonText>비밀번호 변경</SettingButtonText>
                </SettingButton>
              </SettingBox>
              )
              }
              <SettingBox>
                <SettingButton onClick={handleDelete}>
                  <SettingButtonText>회원 탈퇴</SettingButtonText>
                </SettingButton>
              </SettingBox>
            </FlexDiv>
          )}
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const FlexDiv = styled.div<{
  justify?: string;
  align?: string;
  direction?: string;
  margin?: string;
  cursor?: string;
}>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  flex-direction: ${(props) => props.direction || 'row'};
  margin: ${(props) => props.margin || '20px 0'};
  cursor: ${(props) => props.cursor};
`;

const SettingTitle = styled.span<{ margin?: string }>`
  height: 24px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  margin: ${(props) => props.margin || '0px'};
`;

const SettingLabel = styled.label`
  height: 24px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  margin: 16px 0 8px;
`;

const SettingInfoBox = styled.div<{ focus?: boolean }>`
  width: 279px;
  height: 40px;
  padding: 0 12px;
  border-radius: 3px;
  border: ${(props) => props.focus && '1px solid #e64980'};
  background-color: ${(props) => (props.focus ? 'transparent' : '#ced4da')};
  display: flex;
  align-items: center;
  :nth-child(1) {
    margin-right: 10px;
  }
`;

const SettingInfo = styled.span`
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  :nth-child(2) {
    margin: 8px 0 19px;
  }
`;

const SettingButtonText = styled.span`
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #212529;
`;

const SettingButton = styled.button<{ w?: number | string, c?: string }>`
  width: ${(props) => (props.w ? props.w : '105')}px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: ${(props) => (props.c ? props.c : '#f1f3f5')};
  cursor: pointer;
  margin-right: 5px;
  ${(props) =>
    props.c &&
    css`
      ${SettingButtonText} {
        color: #ffffff;
      }
    `}
`;

const SettingBox = styled.div<{ padding?: string }>`
  padding: ${(props) => (props.padding ? props.padding : '8px 0 40px')};
  border-top: 1px solid #e9ecef;
  width: 100%;
  display: flex;
  flex-direction: column;
  :nth-child(1) {
    height: 336px;
  }
`;

const ImgBox = styled.img`
  width: 64px;
  height: 64px;
  margin: 10px 0 15px;
  border-radius: 100%;
`;

const Input = styled.input`
  width: 279px;
  height: 40px;
  background: transparent;
  border: none;
  outline: none;
`;

const SizedBox = styled.div<{ width?: string; height?: string; }>`
  width: ${(props) => (props.width)};
  height: ${(props) => (props.height)};
  display: inline-block;
`;