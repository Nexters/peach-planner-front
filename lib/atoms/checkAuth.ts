export const checkAuth = () => {
  // 토큰 값이 있는지 확인
  const token = localStorage.getItem('accessToken');
  return Boolean(token);
};