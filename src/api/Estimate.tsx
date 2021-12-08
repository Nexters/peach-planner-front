import axios from 'axios';

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  }
};

interface Estimate {
  id: number;
  companyName: string;
  createDate: string;
  description: string;
  plannerName: string;
  userName: string;
}

export const fetchEstimateList = async () => {
  const { data } = await axios.get<Estimate[]>(`/estimate/list`, config);
  return data;
};
