import axios from 'axios';
import { QueryFunctionContext } from 'react-query';

export interface User {
  id?: number;
  name: string;
  userType?: string;
}

export const getUser = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<User>(`/users/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return data;
};

export const getUserTest = async () => {
  const { data } = await axios.get(`/users/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return data;
};

export interface EditInfo {
  email?: string;
  nickName?: string;
  originalPassword?: string;
  password?: string;
  tel?: string;
}

export const EditUserInfo = async (reqBody: EditInfo) => {
  const { data } = await axios.patch(`/users/me`, reqBody, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return data;
};
