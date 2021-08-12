export const checkAuth = () => {
  // 토큰 값이 있는지 확인
  const token = localStorage.getItem('token');
  return Boolean(token);
};

export const checkUserAuth = () => {
  // 로그인 & 일반 유저인지 체크
  const IS_USER = true;
  return checkAuth() && IS_USER;
};

export const checkPlannerAuth = () => {
  // 로그인 & 플래너인지 체크
  const IS_PLANNER = true;
  return checkAuth() && IS_PLANNER;
};
