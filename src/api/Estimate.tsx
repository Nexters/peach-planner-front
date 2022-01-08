import axios from 'axios';
import { QueryFunctionContext } from 'react-query';
import { Planner } from './Planner';

export interface Estimate {
  id: number;
  companyName: string;
  createDate: string;
  description: string;
  plannerName: string;
  userName: string;
}

export interface EstimateDetail {
  description: string;
  dress: string;
  email: string;
  filePath: string[];
  makeup: string;
  phoneNum: string;
  planner: Planner;
  studio: string;
  userName: string;
  weddingCard: boolean;
  weddingDate: string;
  weddingHall: boolean;
}

export const fetchEstimateList = async () => {
  const { data } = await axios.get<Estimate[]>(`/estimate/list`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return data;
};

export const fetchEstimate = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, id] = queryKey;

  const { data } = await axios.get<EstimateDetail>(`/estimate/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return data;
};
