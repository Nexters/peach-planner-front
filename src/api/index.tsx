import axios from 'axios';

export const setAxiosDefaults = () => {
  axios.defaults.baseURL = 'https://api.peachplanner.com/api';
  axios.defaults.withCredentials = false;
  axios.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json;charset=utf-8'
  };

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log('test');
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
            console.log('test');
          });
      }
    }
  );
};
