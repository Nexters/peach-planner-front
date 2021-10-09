import axios from 'axios';
import { QueryFunctionContext } from 'react-query';

interface RecommendedPost {
  blogUrl: string;
  description: string;
  hastTag: string;
  imageUrl: string;
  title: string;
}

export const fetchRecommendedPost = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<RecommendedPost[]>('/recommendPost');
  return data;
};
