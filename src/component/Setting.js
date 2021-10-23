import React, { useState, useRef, useEffect } from 'react';
import * as $ from './MyPageItemView.js';
import { getUser, getUserTest, EditUserInfo } from 'src/api/User';
import { useQuery } from 'react-query';

const Setting = () => {
  // const { data: user } = useQuery(['getUser'], getUser);
  const [user, setUser] = useState(null);
  const [focus, setFocus] = useState(false);
  const [originalNick, setOriginalNick] = useState('');
  const [nickName, setNickName] = useState('');
  const inputRef = useRef('');

  useEffect(() => {
    getUserTest()
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

  const handleFocus = () => {
    setFocus(!focus);
  };

  const onChangeInput = (e) => {
    setNickName(e.target.value);
  };

  const editInfo = () => {
    if (nickName) {
      EditUserInfo({ nickName })
        .then((res) => {
          setFocus(false);
          setOriginalNick(res.nickName);
        })
        .catch((err) => {
          console.log(err, 'err');
        });
    } else {
      alert('닉네임을 입력해주세요.');
      return;
    }
  };

  return (
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
                <>{originalNick}</>
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
        <$.SettingButton>
          <$.SettingButtonText>비밀번호 변경</$.SettingButtonText>
        </$.SettingButton>
      </$.SettingBox>
    </$.FlexDiv>
  );
};

export default Setting;
