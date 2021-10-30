"use strict";
exports.__esModule = true;
exports.useUserTypeState = exports.usePeachTokenState = void 0;
var recoil_1 = require("recoil");
var peachTokenState = recoil_1.atom({
    key: 'peachTokenState',
    "default": localStorage.getItem('accessToken')
});
function usePeachTokenState() {
    return recoil_1.useRecoilState(peachTokenState);
}
exports.usePeachTokenState = usePeachTokenState;
var userTypeState = recoil_1.atom({
    key: 'userType',
    "default": 'USER'
});
function useUserTypeState() {
    return recoil_1.useRecoilState(userTypeState);
}
exports.useUserTypeState = useUserTypeState;
