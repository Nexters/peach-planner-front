"use strict";
exports.__esModule = true;
exports.useSelectedSortingState = void 0;
var recoil_1 = require("recoil");
var selectedSortingState = recoil_1.atom({
    key: 'sorting',
    "default": 'createdDate'
});
function useSelectedSortingState() {
    return recoil_1.useRecoilState(selectedSortingState);
}
exports.useSelectedSortingState = useSelectedSortingState;
