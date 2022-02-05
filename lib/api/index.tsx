import axios from 'axios';
import { useEffect } from 'react';

export const setAxiosDefaults = () => {
  axios.defaults.baseURL = `https://${process.env.NEXT_PUBLIC_API_URL}/api`;
  axios.defaults.withCredentials = false;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Accept'] = 'application/json;charset=utf-8';

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (!error.response || !error.response.status) {
        return Promise.reject(error);
      }

      const originalRequest = error.config;
      if (error.response.status === 400 && originalRequest.url === '/auth/token/refresh') {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login/';
        return Promise.reject(error);
      }

      if (error.response.data.status === 401) {
        const refreshToken = localStorage.getItem('refresh_token');
        return axios
          .post('/auth/token/refresh', { refreshToken: refreshToken })
          .then((response) => {
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            return axios(originalRequest);
          })
          .catch((err) => {
            console.log('test');
            console.log(err);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.href = '/login/';
          });
      }
    }
  );
};
