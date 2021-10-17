import axios from 'axios';

let isTokenRefreshing = false;
let refreshSubscribers: any[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.map((callback: any) => callback(accessToken));
};

const addRefreshSubscriber = (callback: any) => {
  refreshSubscribers.push(callback);
};

export const setAxiosDefaults = () => {
  axios.defaults.baseURL = 'https://api.peachplanner.com/api';
  axios.defaults.withCredentials = false;
  axios.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json;charset=utf-8'
  };
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const {
        config,
        response: { status }
      } = error;
      const originalRequest = config;
      if (status === 401) {
        if (!isTokenRefreshing) {
          isTokenRefreshing = true;
          const refreshToken = localStorage.getItem('refreshToken');
          const { data } = await axios.post('/auth/token/refresh', {
            refreshToken: refreshToken
          });
          const { accessToken: newAccessToken, refreshToken: newRefreshToken } = data;
          localStorage.setItem('accessToken', newAccessToken);
          localStorage.setItem('refreshToken', newRefreshToken);
          isTokenRefreshing = false;
          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          onTokenRefreshed(newAccessToken);
        }

        const retryOriginalRequest = new Promise((resolve) => {
          addRefreshSubscriber((accessToken: string) => {
            originalRequest.headers.Authorization = 'Bearer ' + accessToken;
            resolve(axios(originalRequest));
          });
        });
        return retryOriginalRequest;
      }
      return Promise.reject(error);
    }
  );
};
