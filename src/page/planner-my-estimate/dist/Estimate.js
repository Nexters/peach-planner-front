"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var style_1 = require("src/component/style/style");
var styled_components_1 = require("styled-components");
var Estimate = function (_a) {
    var requestDay = _a.requestDay, customerName = _a.customerName, requestContent = _a.requestContent;
    return (React.createElement(Container, null,
        React.createElement(RequestDayBox, null,
            React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", lineHeight: "normal", color: "#495057" }, requestDay)),
        React.createElement(CustomerNameBox, null,
            React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", lineHeight: "normal", color: "#495057" }, customerName)),
        React.createElement(RequestContentBox, null,
            React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", lineHeight: "normal", color: "#495057" }, requestContent))));
};
exports["default"] = Estimate;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid;\n  border-bottom-color: #ced4da;\n"], ["\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid;\n  border-bottom-color: #ced4da;\n"])));
var RequestDayBox = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 102px;\n  height: 64px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 102px;\n  height: 64px;\n"])));
var CustomerNameBox = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 140px;\n  height: 64px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 140px;\n  height: 64px;\n"])));
var RequestContentBox = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 609px;\n  height: 64px;\n  margin-left: 10px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 609px;\n  height: 64px;\n  margin-left: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
