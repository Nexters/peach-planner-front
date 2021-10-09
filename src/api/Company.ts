import axios from 'axios';

export interface Company {
  id: number;
  name: string;
  tel: string;
  location: string;
  certificated: null | boolean;
  profilePath: string;
  images: string[];
  summary: string | null;
}

export const fetchCompany = async (companyId: string) => {
  const { data } = await axios.get<Company>(`/companies/${companyId}`);
  return data;
};
