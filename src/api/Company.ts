import axios from 'axios';

export interface Company {
  id: number;
  name: string;
  tel: string;
  location: string;
  certificated: null | boolean;
  profilePath: string;
}

export const fetchCompany = async (companyId: string) => {
  try {
    const { data } = await axios.get<Company>(`/companies/${companyId}`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
