"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var UserPageSideMenu_1 = require("../user/mypage/UserPageSideMenu");
var UserMyPage = function () {
    return (React.createElement(Container, null,
        React.createElement(InnerContainer, null,
            React.createElement(UserPageSideMenu_1["default"], null),
            React.createElement(ContentContainer, null))));
};
exports["default"] = UserMyPage;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var InnerContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 1100px;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  width: 1100px;\n  display: flex;\n  justify-content: space-between;\n"])));
var ContentContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  direction: row;\n"], ["\n  width: 100%;\n  display: flex;\n  direction: row;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
