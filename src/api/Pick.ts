import axios from 'axios';

export interface PickReq {
  targetCategoryType: 'PLANNER';
  targetId: number;
}

export const pick = async (pickReq: PickReq) => {
  await axios.post(`pick`, pickReq, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
};
