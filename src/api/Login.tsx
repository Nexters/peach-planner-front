import axios from 'axios';

export interface UserRequest {
  name?: string;
  nickName?: string;
  userName: string;
  password: string;
  type?: 'USER';
  loginType?: 'BASIC';
}

export const fetchToken = async (request: UserRequest) => {
  const { data } = await axios.post<any>(`/auth/login`, request);
  return data;
};

export const fetchSignUp = async (request: UserRequest) => {
  const { data } = await axios.post<any>(`/auth/signup`, request);
  return data;
};

export const fetchRefreshToken = async (refreshToken: any, config: any) => {
  const { data } = await axios.post<any>(`/auth/token/refresh`, { refreshToken }, config);
  return data;
};
