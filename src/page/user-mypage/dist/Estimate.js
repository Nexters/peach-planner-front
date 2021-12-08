"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var style_1 = require("src/component/style/style");
var styled_components_1 = require("styled-components");
var MyEstimate = function (_a) {
    var createdAt = _a.createdAt, content = _a.content, estimateNumber = _a.estimateNumber, companyName = _a.companyName, estimateState = _a.estimateState;
    return (React.createElement(Container, null,
        React.createElement(EstimateCreatedAtBox, null,
            React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", lineHeight: "normal", color: "#495057" }, createdAt)),
        React.createElement(EstimateContentBox, null,
            React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", lineHeight: "normal", color: "#495057" }, content)),
        React.createElement(EstimateNumberBox, null,
            React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", lineHeight: "normal", color: "#495057" }, estimateNumber)),
        React.createElement(CompanyBox, null,
            React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", lineHeight: "normal", color: "#495057" }, companyName)),
        React.createElement(EstimateStateBox, null,
            React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", lineHeight: "normal", color: "#495057" }, estimateState))));
};
exports["default"] = MyEstimate;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid;\n  border-bottom-color: #ced4da;\n"], ["\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid;\n  border-bottom-color: #ced4da;\n"])));
var EstimateCreatedAtBox = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 102px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 102px;\n"])));
var EstimateContentBox = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 64px;\n  width: 436px;\n  margin-left: 42px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 64px;\n  width: 436px;\n  margin-left: 42px;\n"])));
var EstimateNumberBox = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 102px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 102px;\n"])));
var CompanyBox = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 147px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 147px;\n"])));
var EstimateStateBox = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 73px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 73px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
