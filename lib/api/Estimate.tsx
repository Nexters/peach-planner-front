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
  status: string;
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

export interface RequestEstimateBodyParams {
  plannerId: number;
  userName: string;
  email: string;
  phoneNum: string;
  weddingDate: string;
  studio: string;
  dress: string;
  makeup: string;
  weddingHall: boolean;
  weddingCard: boolean;
  description: string;
  filePath: string[];
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

export const requestEstimate = async (requestEstimateBody: RequestEstimateBodyParams) => {
  try {
    const {data} = await axios.post('/estimate/upload', requestEstimateBody, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  })
  } catch (err){
    console.log({err});
  }
}
