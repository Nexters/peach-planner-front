import axios from 'axios';

export interface ReviewData {
  planner_id: number;
  userName: string;
  comment: string;
}

export interface MyReview {
  comment: string;
  userName: string;
  writeDate: string;
}

export const fetchReview = async (plannerId: string) => {
  const { data } = await axios.get<ReviewData[]>(`/review/list/${plannerId}`);
  return data;
};

export const fetchMyReview = async () => {
  const { data } = await axios.get<MyReview[]>(`/review/list/review`, {
    headers: {
      Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``
    }
  });
  return data;
};
