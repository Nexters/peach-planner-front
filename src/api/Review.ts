import axios from 'axios';

export interface ReviewData {
  comment: string;
  userName: string;
  writeDate: string;
  imageUrl?: null;
}

export const fetchReview = async (plannerId: string) => {
  const { data } = await axios.get<ReviewData[]>(`/reviews`, {
    params: {
      plannerId: plannerId,
    }
  });
  return data;
};

interface CreateReviewReq {
  comment: string,
  plannerId: number,
  imageUrl?: string,
}

export const postReview = async (req: CreateReviewReq) => {
  const { data } = await axios.post(`/reviews`, req, {
    headers: {
      Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``
    }
  });

  return data;
}