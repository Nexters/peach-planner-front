import axios from 'axios';

export const setAxiosDefaults = () => {
  axios.defaults.baseURL = 'https://peach-planner-server-beta.eba-yfcpeief.ap-northeast-2.elasticbeanstalk.com/api';
  axios.defaults.withCredentials = false;
  axios.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json;charset=utf-8'
  };
};
