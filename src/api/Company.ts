import axios from 'axios';
import { QueryFunctionContext } from 'react-query';

export interface Companies {
  companies: Company[];
}

export interface Company {
  id: number;
  name: string;
  tel: string;
  location: string;
  certificated: null | boolean;
  profilePath: string;
  images: string[];
  summary: string | null;
  homepage?: string;
  bizHour?: string;
}

export const fetchCompany = async (companyId: string) => {
  const { data } = await axios.get<Company>(`/companies/${companyId}`);
  return data;
};

export const fetchCompanies = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey;
  const { data } = await axios.get<Companies>('/companies', {
    params: {
      searchName: params
    }
  });
  return data;
};

export interface CompanyRequest {
  images: string[];
  location: string;
  name: string;
  profilePath: string;
  tel: string;
  summary: string;
}

export const registerCompany = async (request: CompanyRequest) => {
  const { data } = await axios.post(`companies`, request, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return data;
};
