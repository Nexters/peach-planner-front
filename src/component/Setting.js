import React, { useState, useRef, useEffect } from 'react';
import * as $ from './MyPageItemView.js';
import { getUser, getUserMe, EditUserInfo, DeleteUser } from 'src/api/User';
import { useQuery } from 'react-query';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as LeftArrow } from '../assets/svg/ic_arrow_left.svg';

const UserSetting = () => {
  // const { data: user } = useQuery(['getUser'], getUser);
  const [user, setUser] = useState(null);
  const [focus, setFocus] = useState(false);
  const [inputs, setInputs] = useState({
    nickName: '',
    originalPassword: '',
    password: '',
    passwordConfirm: ''
  });
  const { nickName, originalPassword, password, passwordConfirm } = inputs;

  const inputRef = useRef('');
  const history = useHistory();
  const [changePw, setChangePw] = useState(false);

  useEffect(() => {
    setChangePw(false);
    getUserMe()
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, []);

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
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

  const onChangeInput = (e) => {
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
          console.log(data, 'dataaaaa');
        })
        .catch((err) => {
          console.log(err, 'err');
        });
    }
    return;
  };

  const handleDelete = () => {
    DeleteUser();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    history.push('/');
    window.location.reload();
    alert('회원탈퇴가 완료되었습니다.');
  };

  return (
    <>
      {changePw ? (
        <$.FlexDiv direction={'column'}>
          <$.SettingBox>
            <LeftArrow onClick={() => setChangePw(false)} style={{ cursor: 'pointer' }} />
            <$.SettingTitle>비밀번호 변경</$.SettingTitle>

            <$.SettingLabel>현재 비밀번호</$.SettingLabel>
            <$.SettingInfo>
              <$.Input name="originalPassword" onChange={onChangeInput} value={originalPassword} type="password" />
            </$.SettingInfo>

            <$.SettingLabel>새 비밀번호</$.SettingLabel>
            <$.SettingInfo>
              <$.Input name="password" onChange={onChangeInput} value={password} type="password" />
            </$.SettingInfo>

            <$.SettingLabel>새 비밀번호 확인</$.SettingLabel>
            <$.SettingInfo>
              <$.Input name="passwordConfirm" onChange={onChangeInput} value={passwordConfirm} type="password" />
            </$.SettingInfo>

            <$.SettingButton onClick={changePassword}>
              <$.SettingButtonText>변경하기</$.SettingButtonText>
            </$.SettingButton>
          </$.SettingBox>
        </$.FlexDiv>
      ) : (
        <$.FlexDiv direction="column">
          <$.SettingBox>
            <$.SettingTitle>회원정보</$.SettingTitle>

            <$.SettingLabel>이름</$.SettingLabel>
            <$.SettingInfoBox>
              <$.SettingInfo>{user?.name}</$.SettingInfo>
            </$.SettingInfoBox>

            <$.SettingLabel>닉네임</$.SettingLabel>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <$.SettingInfoBox focus={focus}>
                <$.SettingInfo>
                  {focus ? (
                    <$.Input name="nickname" onChange={onChangeInput} value={nickName} ref={inputRef} />
                  ) : (
                    <>{user?.nickName}</>
                  )}
                </$.SettingInfo>
              </$.SettingInfoBox>
              {focus ? (
                <>
                  <$.SettingButton onClick={editInfo} c="#e64980" w={78}>
                    <$.SettingButtonText>확인</$.SettingButtonText>
                  </$.SettingButton>
                  <$.SettingButton onClick={handleFocus} w={54}>
                    <$.SettingButtonText>취소</$.SettingButtonText>
                  </$.SettingButton>
                </>
              ) : (
                <$.SettingButton onClick={handleFocus} w={105}>
                  <$.SettingButtonText>수정하기</$.SettingButtonText>
                </$.SettingButton>
              )}
            </div>

            <$.SettingLabel>이메일</$.SettingLabel>
            <$.SettingInfoBox>
              <$.SettingInfo>{user?.email}</$.SettingInfo>
            </$.SettingInfoBox>
          </$.SettingBox>

          <$.SettingBox>
            <$.SettingTitle>프로필사진 변경</$.SettingTitle>
            <$.ImgBox></$.ImgBox>
            <div>
              <$.SettingButton>
                <$.SettingButtonText>사진 변경</$.SettingButtonText>
              </$.SettingButton>
              <$.SettingButton w={54}>
                <$.SettingButtonText>삭제</$.SettingButtonText>
              </$.SettingButton>
            </div>
          </$.SettingBox>
          <$.SettingBox>
            <$.SettingTitle>비밀번호</$.SettingTitle>
            <$.SettingInfo>피치플래너 로그인 시 사용하는 비밀번호를 변경할 수 있습니다.</$.SettingInfo>
            <$.SettingButton onClick={() => setChangePw(true)}>
              <$.SettingButtonText>비밀번호 변경</$.SettingButtonText>
            </$.SettingButton>
          </$.SettingBox>
          <$.SettingBox>
            <$.SettingButton onClick={handleDelete}>
              <$.SettingButtonText>회원 탈퇴</$.SettingButtonText>
            </$.SettingButton>
          </$.SettingBox>
        </$.FlexDiv>
      )}
    </>
  );
};

export default UserSetting;
