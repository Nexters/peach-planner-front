import axios from 'axios';

export interface PickRequest {
  targetCategoryType: 'PLANNER' | 'COMPANY';
  targetId: number;
  toBePick: boolean;
}

interface PickList {
  pickLists: Pick[];
}

interface Pick {
  id: number;
  plannerId: number;
  imageUrlPath: string;
  name: string;
  subName: string;
}

export const pick = async (pickReq: PickRequest) => {
  await axios
    .post(`pick`, pickReq, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((data) => console.log(data));
};

export const fetchPicks = async () => {
  const { data } = await axios.get<PickList>(`pick`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return data;
};
