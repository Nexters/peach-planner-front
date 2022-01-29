import axios from 'axios';

export interface ReviewData {
  user: any;
  comment: string;
  writeDate: string;
  imageUrl?: string;
}

export const fetchReview = async (plannerId: string) => {
  const { data } = await axios.get<ReviewData[]>(`/reviews`, {
    params: {
      plannerId: plannerId,
    }
  });
  return data;
};

export const fetchReviewDetail = async (reviewId: string) => {
  const { data } = await axios.get<ReviewData>(`/reviews/${reviewId}`);
  return data;
}


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