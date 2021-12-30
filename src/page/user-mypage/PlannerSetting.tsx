import React, { useState, useEffect, ChangeEvent } from 'react';
import { getUserMe, EditUserInfo, DeleteUser, User } from 'src/api/User';
import { useQuery } from 'react-query';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as LeftArrow } from '../../assets/svg/ic_arrow_left.svg';
import PlannerPageSideMenu from '../user/mypage/PlannerPageSideMenu';
import styled from 'styled-components';

const PlannerSetting = () => {
  const [user, setUser] = useState<User | null>(null);
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
    getUserMe()
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, []);

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
          <FlexDiv direction="column" margin="0 40px" justify="flex-start">
            <SettingBox>
              <AlignCenterBox>
                <LeftArrow onClick={() => setChangePw(false)} style={{ cursor: 'pointer' }} />
                <SettingTitle margin="0 5px">비밀번호 변경</SettingTitle>
              </AlignCenterBox>

              <SettingLabel>현재 비밀번호</SettingLabel>
              <SettingInfo>
                <Input name="originalPassword" onChange={onChangeInput} value={originalPassword} type="password" />
              </SettingInfo>

              <AlignCenterBox>
                <ColumnBox>
                  <SettingLabel>새 비밀번호</SettingLabel>
                  <SettingInfo>
                    <Input name="password" onChange={onChangeInput} value={password} type="password" />
                  </SettingInfo>
                </ColumnBox>

                <ColumnBox margin="0 20px">
                  <SettingLabel>새 비밀번호 확인</SettingLabel>
                  <SettingInfo>
                    <Input name="passwordConfirm" onChange={onChangeInput} value={passwordConfirm} type="password" />
                  </SettingInfo>
                </ColumnBox>
              </AlignCenterBox>

              <SettingButton onClick={changePassword}>
                <SettingButtonText>변경하기</SettingButtonText>
              </SettingButton>
            </SettingBox>
          </FlexDiv>
        ) : (
          <FlexDiv direction="column" margin="0 40px" justify="flex-start">
            <Title>계정 설정</Title>
            <SettingBox>
              <SettingTitle>회원 정보</SettingTitle>

              <SettingLabel>이름</SettingLabel>
              <SettingInfoBox>
                <SettingInfo>{user?.name}</SettingInfo>
              </SettingInfoBox>

              <SettingLabel>이메일</SettingLabel>
              <SettingInfoBox>
                <SettingInfo>{user?.email}</SettingInfo>
              </SettingInfoBox>
            </SettingBox>

            <SettingBox>
              <SettingTitle>비밀번호</SettingTitle>
              <SettingInfo>피치플래너 로그인 시 사용하는 비밀번호를 변경할 수 있습니다.</SettingInfo>
              <SettingButton onClick={() => setChangePw(true)}>
                <SettingButtonText>비밀번호 변경</SettingButtonText>
              </SettingButton>
            </SettingBox>
          </FlexDiv>
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

const Title = styled.span`
  display: inline-block;
  width: 100%;
  height: 27px;
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  margin-bottom: 15px;
`;

const AlignCenterBox = styled.div`
  display: flex;
  align-items: center;
`;

const ColumnBox = styled.div<{ margin?: string }>`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin || '0px'};
`;


const FlexDiv = styled.div<{
  justify?: string;
  align?: string;
  direction?: string;
  margin?: string;
}>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  flex-direction: ${(props) => props.direction || 'row'};
  margin: ${(props) => props.margin || '20px 0'};
`;


const Line = styled.hr`
  height: 1px;
  width: 200px;
  background-color: #212529;
  margin: 16px 0;
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
    props.c && `
      ${SettingButtonText} {
        color: #0f0e0e;
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
  :nth-child(2) {
    height: 201px;
  }
`;

const ImgBox = styled.div`
  width: 64px;
  height: 64px;
  background-color: #dee2e6;
  margin: 10px 0 15px;
  border-radius: 100%;
`;

const Input = styled.input.attrs((props) => ({
  type: props.type
}))`
  width: 279px;
  height: 40px;
  background: transparent;
  border: 1px solid #ced4da;
  outline: none;
`;
