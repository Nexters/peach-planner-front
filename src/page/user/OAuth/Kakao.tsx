import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { REDIRECT_URI, AUTHORIZATION } from './OAuth';

const Kakao = () => {
  let history = useHistory();
  const kakaoLogin = (code: string | null, url: string) => {
    const config = {
      headers: {
        Authorization: AUTHORIZATION
      }
    };

    axios
      .post<any>(`/auth/login/kakao`, { authorizationCode: code, redirectUrl: url }, config)
      .then((res) => {
        const ACCESS_TOKEN = res.data.accessToken;
        localStorage.setItem('accessToken', ACCESS_TOKEN);
        history.replace('/');
        window.location.reload();
        alert('로그인이 완료되었습니다.');
      })
      .catch((err) => {
        alert('로그인에 실패하였습니다.');
        history.replace('/login');
      });
  };

  const authorizationCode = new URL(window.location.href).searchParams.get('code');
  const redirectUrl = REDIRECT_URI;

  useEffect(() => {
    kakaoLogin(authorizationCode, redirectUrl);
  }, []);

  return <></>;
};

export default Kakao;
