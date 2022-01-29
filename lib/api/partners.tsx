import axios from 'axios';
import { QueryFunctionContext } from 'react-query';
import { PartnerInfo } from './Planner';

export interface Partners {
  partners: PartnerInfo[];
}


export const fetchPartnerCompanies = async ({ queryKey }: QueryFunctionContext) => {
    const [_key, searchName, type] = queryKey;
    console.log(searchName);
    const { data } = await axios.get<Partners>('/partners', {
      params: {
        searchName: searchName,
        type: type,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return data;
};
