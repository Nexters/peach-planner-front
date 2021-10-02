import axios from 'axios';

export interface ReviewData {
  planner_id: number;
  userName: string;
  comment: string;
}

export const fetchReview = async (plannerId: string) => {
  const { data } = await axios.get<ReviewData[]>(`/review/list/${plannerId}`);
  return data;
};
