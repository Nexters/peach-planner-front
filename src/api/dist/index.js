"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.setAxiosDefaults = void 0;
var axios_1 = require("axios");
var isTokenRefreshing = false;
var refreshSubscribers = [];
var onTokenRefreshed = function (accessToken) {
    refreshSubscribers.map(function (callback) { return callback(accessToken); });
};
var addRefreshSubscriber = function (callback) {
    refreshSubscribers.push(callback);
};
exports.setAxiosDefaults = function () {
    axios_1["default"].defaults.baseURL = 'https://api.peachplanner.com/api';
    axios_1["default"].defaults.withCredentials = false;
    axios_1["default"].defaults.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json;charset=utf-8'
    };
    axios_1["default"].interceptors.response.use(function (response) {
        return response;
    }, function (error) { return __awaiter(void 0, void 0, void 0, function () {
        var config, status, originalRequest, accessToken, refreshToken, config_1, data, newAccessToken, newRefreshToken, retryOriginalRequest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    config = error.config, status = error.response.status;
                    originalRequest = config;
                    if (!(status === 401)) return [3 /*break*/, 3];
                    if (!!isTokenRefreshing) return [3 /*break*/, 2];
                    isTokenRefreshing = true;
                    accessToken = localStorage.getItem('accessToken');
                    refreshToken = localStorage.getItem('refreshToken');
                    config_1 = {
                        headers: {
                            Authorization: "Bearer " + accessToken
                        }
                    };
                    return [4 /*yield*/, axios_1["default"].post('/auth/token/refresh', {
                            refreshToken: refreshToken
                        }, config_1)];
                case 1:
                    data = (_a.sent()).data;
                    newAccessToken = data.accessToken, newRefreshToken = data.refreshToken;
                    localStorage.setItem('accessToken', newAccessToken);
                    localStorage.setItem('refreshToken', newRefreshToken);
                    isTokenRefreshing = false;
                    axios_1["default"].defaults.headers.common.Authorization = "Bearer " + newAccessToken;
                    onTokenRefreshed(newAccessToken);
                    _a.label = 2;
                case 2:
                    retryOriginalRequest = new Promise(function (resolve) {
                        addRefreshSubscriber(function (accessToken) {
                            originalRequest.headers.Authorization = 'Bearer ' + accessToken;
                            resolve(axios_1["default"](originalRequest));
                        });
                    });
                    return [2 /*return*/, retryOriginalRequest];
                case 3: return [2 /*return*/, Promise.reject(error)];
            }
        });
    }); });
};
