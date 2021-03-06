import axios from 'axios';
import { QueryFunctionContext } from 'react-query';
import { Company } from './Company';
import { Estimate } from './Estimate';
import { ReviewData } from './Review';

export interface Paged<T> {
  content: T[];
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface Planner {
  id: number;
  images: string[];
  name: string;
  externalLinks: {
    websiteLink?: string;
    blogLink?: string;
    instagramLink?: string;
    facebookLink?: string;
  };
  likes: number;
  reviews: number;
  locations: string[];
  description: string;
  company: Company;
  partners: {
    DRESS?: Partner[];
    STUDIO?: Partner[];
    MAKEUP?: Partner[];
  };
  summary: string;
  supportInfos: string[];
  postLiked: boolean;
  profileImage: string;
}

export interface PlannerMyStats {
  chats: PlannerMyChatStats;
  estimations: PlannerMyEstimationStats;
  reviews: PlannerMyReviewStats;
}

interface PlannerMyChatStats {
  open: number;
  closed: number;
} 
interface PlannerMyEstimationStats {
  new: number;
}
interface PlannerMyReviewStats {
  new: number;
}

interface Partner {
  id: number;
  locations: string;
  name: string;
  primaryImage: string;
}
export interface PartnerInfo {
  id: number;
  location: string;
  name: string;
  pick: boolean;
  profilePath: string;
  tel: string;
  type: 'STUDIO' | 'DRESS' | 'MAKEUP';
  images: string[];
  description: string;
  bizHour: string;
  homepage: string;
}

export interface Partners {
  MAKEUP: PartnerInfo[];
  DRESS: PartnerInfo[];
  STUDIO: PartnerInfo[];
}

export interface RecommnededPlanners {
  plannerId: number;
  description: string;
  imgUrl: string;
  plannerName: string;
  fontColor: string;
}

export const fetchPlanners = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<Paged<Planner>>('/planners', {
    params,
    headers: {
      Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``
    }
  });
  return data;
};

export const fetchPopularPlanners = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<Paged<Planner>>('/planners/popular', {
    headers: {
      Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``
    }
  });
  return data;
};

export const fetchRecommendedPlanners = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<RecommnededPlanners[]>('/planners/recommended');
  return data;
};

export const fetchPlanner = async (plannerId: string) => {
  const { data } = await axios.get<Planner>(`/planners/${plannerId}`, {
    headers: {
      Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``
    }
  });
  return data;
};

export const fetchPlannerPartners = async (plannerId: string) => {
  const { data } = await axios.get<Partners>(`/planners/${plannerId}/partners`);
  return data;
};

export const fetchPlannerMe = async () => {
  const { data } = await axios.get<Planner>(`/inhouse/planners/me`, {
    headers: {
      Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``
    }
  });
  return data;
};

export const fetchPlannerMyStats = async () => {
  const { data } = await axios.get<PlannerMyStats>(`/inhouse/planners/my/stats`, {
    headers: {
      Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``
    }
  });
  return data;
}

export const fetchPlannerMyEstimations = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<Paged<Estimate>>(`/inhouse/planners/my/estimations`, {
    headers: {
      Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``
    }
  });
  return data;
}

export const fetchPlannerMyReviews = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<Paged<ReviewData>>(`/inhouse/planners/my/reviews`, {
    headers: {
      Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``
    }
  });
  return data;
}


export interface AffiliatedCompany {
  id?: number;
  companyName: string;
  description: string;
  location: string;
  primaryImageUrl: string;
  tel: string;
  type: string;
}

export interface PlannerRequest {
  portfolioImages?: string[];
  affiliatedCompanyInfo: {
    affiliatedCompanyId: number;
  };
  affiliatedDressCompanyList: number[];
  affiliatedMakeupCompanyList: number[];
  affiliatedStudioCompanyList: number[];
  areaInfo: {
    locationList: string[];
  };
  myProfile: {
    description: string;
    summary: string;
  };
  snsInfo: {
    blogLink: string;
    facebookLink: string;
    instagramLink: string;
    websiteLink: string;
  };
  supportInfo: {
    supportInfoList: string[];
  };
}

export const updateProfile = async (plannerRequest: PlannerRequest) => {
  const { data } = await axios.post(`/inhouse/planners/me`, plannerRequest, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return data;
};
