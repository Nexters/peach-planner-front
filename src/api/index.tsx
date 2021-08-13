import axios from 'axios';

export const setAxiosDefaults = () => {
  axios.defaults.baseURL = 'https://api.peachplanner.com/api';
  axios.defaults.withCredentials = false;
  axios.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json;charset=utf-8'
  };
};
