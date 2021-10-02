import axios from 'axios';

export interface PickRequest {
  targetCategoryType: 'PLANNER';
  targetId: number;
}

export const pick = async (pickReq: PickRequest) => {
  await axios.post(`pick`, pickReq, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
};
