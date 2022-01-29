import axios from 'axios';
import { QueryFunctionContext } from 'react-query';

export interface User {
  id?: number;
  name: string;
  userType?: 'USER' | 'PLANNER';
  email: string;
  profileImage: string;
  tel: string;
  nickName: string;
}

export const getUserMe = async () => {
  const { data } = await axios.get<User>(`/users/me`, {
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
  const { data } = await axios.put(`/users/me`, reqBody, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return data;
};

export interface EditUserProfileImageReq {
  profileImage: string;
}

export const editUserProfileImage = async (req: EditUserProfileImageReq) => {
  const { data } = await axios.put(`/users/my/image`, req, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return data;
}

export interface FindInfo {
  name?: string;
  tel?: string;
  userName?: string;
}

export const FindUserByEmail = async (email: string) => {
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
