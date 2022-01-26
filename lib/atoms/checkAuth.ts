import { useRouter } from "next/router";
import { useEffect } from "react";

export const checkAuth = () => {
  // 토큰 값이 있는지 확인
  const token = localStorage.getItem('accessToken');
  return Boolean(token);
};

export const authOnly = () => {
  useEffect(() => {
    if (checkAuth()) {
      useRouter().push('/login');
    }
  }, []);
}

export const publicOnly = () => {
  useEffect(() => {
    if (!checkAuth()) {
      useRouter().push('/');
    }
  }, []);
}