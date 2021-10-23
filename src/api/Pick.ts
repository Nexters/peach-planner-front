import axios from 'axios';

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  }
};

export interface PickRequest {
  targetCategoryType: 'PLANNER' | 'COMPANY';
  targetId: number;
  toBePick: boolean;
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

export const GetPick = async () => {
  const { data } = await axios.get(`pick`, config);
  return data;
};
