import React, { useEffect } from 'react';
import axios from 'axios';
import { REDIRECT_URI, AUTHORIZATION } from 'lib/pages/oauth/OAuth';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();

  const authorizationCode = router.query.code as string;
  const redirectUrl = REDIRECT_URI;

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
        router.replace('/').then(() => {
          window.location.reload();
        });
        alert('로그인이 완료되었습니다.');
      })
      .catch((err) => {
        alert('로그인에 실패하였습니다.');
        router.replace('/login');
      });
  };

  useEffect(() => {
    kakaoLogin(authorizationCode, redirectUrl);
  }, []);

  return <></>;
};
