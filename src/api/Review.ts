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
  const { data } = await axios.get<ReviewData[]>(`/reviews`, {
    params: {
      plannerId: plannerId,
    }
  });
  return data;
};