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
    facebookLink: string;
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
  postLiked: boolean;
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
  fontColor: string;
}

export const fetchPlanners = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<PagedPlanner>('/planners', { 
    params, 
    headers: {
      Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``,
    } 
  });
  return data;
};

export const fetchPopularPlanners = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<PagedPlanner>('/planners/popular', {
    headers: {
      Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``,
    },
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
      Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ``,
    }
  });
  return data;
};

export const fetchPlannerPartners = async (plannerId: string) => {
  const { data } = await axios.get<Partners>(`/planners/${plannerId}/partners`);
  return data;
};

export interface AffiliatedCompany {
  companyName: string;
  description: string;
  location: string;
  primaryImageUrl: string;
  tel: string;
  type: string;
}

export interface PlannerRequest {
  affiliatedCompanyInfoDTO: {
    affiliatedCompanyId: number;
  };
  affiliatedDressCompanyList: AffiliatedCompany[];
  affiliatedMakeupCompanyList: AffiliatedCompany[];
  affiliatedStudioCompanyList: AffiliatedCompany[];
  areaInfoDTO: {
    locationList: string[];
  };
  myProfileDTO: {
    description: string;
    summary: string;
  };
  snsInfoDTO: {
    externalLinks: {
      blogLink: string;
      facebookLink: string;
      instagramLink: string;
    };
    webSiteUrl: string;
  };
  supportInfoDTO: {
    supportInfoList: string[];
  };
}

export const updateProfile = async (plannerRequest: PlannerRequest) => {
  const { data } = await axios.post(`planners`, plannerRequest, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return data;
};
