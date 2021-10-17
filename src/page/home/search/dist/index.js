"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var SearchResult_1 = require("./SearchResult");
var SearchSideBar_1 = require("./SearchSideBar");
var Search = function () {
    var _a = react_1.useState(''), location = _a[0], setLocation = _a[1];
    var _b = react_1.useState([]), support = _b[0], setSupport = _b[1];
    var changeLocation = function (location) {
        setLocation(location);
    };
    var changeSupport = function (support) {
        setSupport(support);
    };
    return (React.createElement(Container, null,
        React.createElement(InnerContainer, null,
            React.createElement(SearchSideBar_1["default"], { location: location, changeLocation: changeLocation, support: support, changeSupport: changeSupport }),
            React.createElement(SearchResult_1["default"], { location: location, support: support }))));
};
exports["default"] = Search;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var InnerContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  width: 1140px;\n  margin: 0 auto;\n"], ["\n  display: flex;\n  width: 1140px;\n  margin: 0 auto;\n"])));
var templateObject_1, templateObject_2;
