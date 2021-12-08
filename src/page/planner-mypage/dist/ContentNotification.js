"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var style_1 = require("src/component/style/style");
var styled_components_1 = require("styled-components");
var ContentNotification = function (_a) {
    var content = _a.content, count = _a.count;
    return (React.createElement(Box, null,
        React.createElement(style_1.Content, { height: "24px", width: "auto", fontSize: "16px", color: "#495057", lineHeight: "normal", margin: "0px 0px 0px 16px" }, content),
        React.createElement(style_1.Title, { height: "24px", fontSize: "16px", lineHeight: "normal", color: "#d6336c", margin: "0px 16px 0px 0px" }, count)));
};
exports["default"] = ContentNotification;
var Box = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 270px;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n"], ["\n  width: 270px;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n"])));
var templateObject_1;
