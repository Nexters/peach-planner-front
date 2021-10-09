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
