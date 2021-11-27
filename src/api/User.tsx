import axios from 'axios';
import { QueryFunctionContext } from 'react-query';

export interface User {
  id?: number;
  name: string;
  userType?: 'USER' | 'PLANNER';
  email: string;
}

export const getUser = async () => {
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

export interface FindInfo {
  name?: string;
  tel?: string;
  userName?: string;
}

export const FindUser = async (reqBody: FindInfo) => {
  const { data } = await axios.patch(`/users/me`, reqBody);
  return data;
};

export const FindEmail = async (email: string) => {
  const { data } = await axios.post(`/auth/find/email?email=${email}`);
  return data;
};

interface newPwInfo {
  originalPassword: string;
  updatePassword: string;
}

export const ResetPw = async (userId: string, reqBody: newPwInfo) => {
  const { data } = await axios.patch(`/auth/users/${userId}/pw`, reqBody);
  return data;
};

export const DeleteUser = async () => {
  await axios.delete(`/auth/resign`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
};
