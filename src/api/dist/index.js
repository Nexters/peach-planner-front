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
};
