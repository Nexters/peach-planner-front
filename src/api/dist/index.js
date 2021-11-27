"use strict";
exports.__esModule = true;
exports.setAxiosDefaults = void 0;
var axios_1 = require("axios");
exports.setAxiosDefaults = function () {
    axios_1["default"].defaults.baseURL = 'https://api.peachplanner.com/api';
    axios_1["default"].defaults.withCredentials = false;
    axios_1["default"].defaults.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json;charset=utf-8'
    };
    axios_1["default"].interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        var originalRequest = error.config;
        if (error.response.status === 500 && originalRequest.url === axios_1["default"].defaults.baseURL + 'token/refresh/') {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.href = '/login/';
            return Promise.reject(error);
        }
        if (error.response.data.status === 401) {
            var refreshToken = localStorage.getItem('refresh_token');
            return axios_1["default"]
                .post('/auth/token/refresh', { refreshToken: refreshToken })
                .then(function (response) {
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                return axios_1["default"](originalRequest);
            })["catch"](function (err) {
                console.log(err);
            });
        }
    });
};
