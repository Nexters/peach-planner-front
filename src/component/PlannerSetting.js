import React, { useState, useEffect } from 'react';
import * as $ from './MyPageItemView.js';
import { getUser, getUserTest, EditUserInfo, DeleteUser } from 'src/api/User';
import { useQuery } from 'react-query';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as LeftArrow } from '../assets/svg/ic_arrow_left.svg';
import PlannerPageSideMenu from '../page/user/mypage/PlannerPageSideMenu';
import styled from 'styled-components';

const PlannerSetting = () => {
  // const { data: user } = useQuery(['getUser'], getUser);
  const [user, setUser] = useState(null);
  const [inputs, setInputs] = useState({
    originalPassword: '',
    password: '',
    passwordConfirm: ''
  });
  const { originalPassword, password, passwordConfirm } = inputs;

  const history = useHistory();
  const [changePw, setChangePw] = useState(false);

  useEffect(() => {
    setChangePw(false);
    getUserTest()
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, []);

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

  return (
    <Container>
      <InnerContainer>
        <PlannerPageSideMenu></PlannerPageSideMenu>
        {changePw ? (
          <$.FlexDiv direction="column">
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
          <$.FlexDiv direction="column" margin="0" justify="flex-start">
            <$.SettingBox padding="0">
              <$.SettingTitle>계정 설정</$.SettingTitle>

              <$.SettingLabel>이름</$.SettingLabel>
              <$.SettingInfoBox>
                <$.SettingInfo>{user?.name}</$.SettingInfo>
              </$.SettingInfoBox>

              <$.SettingLabel>이메일</$.SettingLabel>
              <$.SettingInfoBox>
                <$.SettingInfo>{user?.email}</$.SettingInfo>
              </$.SettingInfoBox>
            </$.SettingBox>

            <$.SettingBox>
              <$.SettingTitle>비밀번호</$.SettingTitle>
              <$.SettingInfo>피치플래너 로그인 시 사용하는 비밀번호를 변경할 수 있습니다.</$.SettingInfo>
              <$.SettingButton onClick={() => setChangePw(true)}>
                <$.SettingButtonText>비밀번호 변경</$.SettingButtonText>
              </$.SettingButton>
            </$.SettingBox>
          </$.FlexDiv>
        )}
      </InnerContainer>
    </Container>
  );
};

export default PlannerSetting;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;