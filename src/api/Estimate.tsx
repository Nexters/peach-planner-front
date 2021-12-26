import axios from 'axios';

export interface Estimate {
  id: number;
  companyName: string;
  createDate: string;
  description: string;
  plannerName: string;
  userName: string;
}

export const fetchEstimateList = async () => {
  const { data } = await axios.get<Estimate[]>(`/estimate/list`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return data;
};
