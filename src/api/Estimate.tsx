import axios from 'axios';

export interface Estimate {
  plannerId: string | number;
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
  filePath: string;
}

export const estimateRequest = async (estimateReq: Estimate) => {
  try {
    const { data } = await axios.post(`/estimate/estimate`, estimateReq, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
