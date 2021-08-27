import axios from 'axios';
import { QueryFunctionContext } from 'react-query';

export interface Planner {
  id: number;
  images: string[];
  name: string;
  externalLinks: {
    blogLink: string;
    instagramLink: string;
  };
  likes: number;
  locations: string[];
  description: string;
  company: Company;
  partners: {
    additionalProp1: AdditionalProp;
    additionalProp2: AdditionalProp;
    additionalProp3: AdditionalProp;
  };
  summary: string;
}

export interface Company {
  id: number;
  certificated: boolean;
  location: string;
  name: string;
  profilePath: string;
  tel: string;
}

interface AdditionalProp {
  id: number;
  locations: string;
  name: string;
  primaryImage: string;
}

export const fetchPlanners = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<Planner[]>('/planners');
  return data;
};

export const fetchPlanner = async (plannerId: string) => {
  try {
    const { data } = await axios.get<Planner>(`/planners/${plannerId}`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};