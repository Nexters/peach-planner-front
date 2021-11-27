"use strict";
exports.__esModule = true;
exports.checkPlannerAuth = exports.checkUserAuth = exports.checkAuth = void 0;
exports.checkAuth = function () {
    // 토큰 값이 있는지 확인
    var token = localStorage.getItem('accessToken');
    return Boolean(token);
};
exports.checkUserAuth = function () {
    // 로그인 & 일반 유저인지 체크
    var IS_USER = true;
    return exports.checkAuth() && IS_USER;
};
exports.checkPlannerAuth = function () {
    // 로그인 & 플래너인지 체크
    var IS_PLANNER = true;
    return exports.checkAuth() && IS_PLANNER;
};
