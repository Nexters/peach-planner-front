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
    const { data } = await axios.get<Company>(`/companies/${companyId}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxMCIsImlhdCI6MTYzMDA3NDU0NywiZXhwIjoxNjMwMTYwOTQ3fQ.rOPTlxxMEPXw0nFzbxH0KJGocvRYh22aIVt9_iUQvNmJPI0G25r9ToUyPLgn847U`
      }
    });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
