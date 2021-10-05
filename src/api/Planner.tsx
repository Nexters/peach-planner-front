import axios from 'axios';
import { QueryFunctionContext } from 'react-query';

export interface PagedPlanner {
  content: Planner[];
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface Planner {
  id: number;
  images: string[];
  name: string;
  externalLinks: {
    blogLink: string;
    instagramLink: string;
  };
  likes: number;
  reviews: number;
  locations: string[];
  description: string;
  company: Company;
  partners: {
    additionalProp1: AdditionalProp;
    additionalProp2: AdditionalProp;
    additionalProp3: AdditionalProp;
  };
  summary: string;
  supportInfos: string[];
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
export interface PartnerInfo {
  id: number;
  location: string;
  name: string;
  owner: 'PLANNER';
  pick: boolean;
  primaryImage: string;
  tel: string;
  type: 'STUDIO' | 'MAKEUP';
}

export interface Partners {
  MAKEUP: PartnerInfo[];
  STUDIO: PartnerInfo[];
}

export interface RecommnededPlanners {
  description: string;
  imgUrl: string;
  plannerName: string;
}

export const fetchPlanners = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<PagedPlanner>('/planners', { params });
  return data;
};

export const fetchPopularPlanners = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<PagedPlanner>('/planners/popular');
  return data;
};

export const fetchRecommendedPlanners = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<RecommnededPlanners[]>('/planners/recommended');
  return data;
};

export const fetchPlanner = async (plannerId: string) => {
  const { data } = await axios.get<Planner>(`/planners/${plannerId}`);
  return data;
};

export const fetchPlannerPartners = async (plannerId: string) => {
  const { data } = await axios.get<Partners>(`/planners/${plannerId}/partners`);
  return data;
};
