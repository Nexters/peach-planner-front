"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var style_1 = require("src/component/style/style");
var styled_components_1 = require("styled-components");
var PlannerPageSideMenu_1 = require("../user/mypage/PlannerPageSideMenu");
var Estimate_1 = require("./Estimate");
var PlannerMyEstimate = function () {
    return (React.createElement(Container, null,
        React.createElement(InnerContainer, null,
            React.createElement(PlannerPageSideMenu_1["default"], null),
            React.createElement(ContentContainer, null,
                React.createElement(TitleBox, null,
                    React.createElement(style_1.Title, { height: "27px", fontSize: "18px", lineHeight: "normal", color: "#000000" }, "\uB098\uC758 \uACAC\uC801\uC11C")),
                React.createElement(TableHeader, null,
                    React.createElement(RequestDay, null,
                        React.createElement(style_1.Title, { height: "18px", fontSize: "12px", lineHeight: "normal", color: "#212529" }, "\uC694\uCCAD\uC77C")),
                    React.createElement(CustomerName, null,
                        React.createElement(style_1.Title, { height: "18px", fontSize: "12px", lineHeight: "normal", color: "#212529" }, "\uC694\uCCAD\uC77C")),
                    React.createElement(RequestContent, null,
                        React.createElement(style_1.Title, { height: "18px", fontSize: "12px", lineHeight: "normal", color: "#212529" }, "\uC694\uCCAD \uC0AC\uD56D"))),
                React.createElement(Estimate_1["default"], { requestDay: "2021.06.24", customerName: "\uC870\uD574\uB9AC", requestContent: "A\uC2A4\uD29C\uB514\uC624\uC77C \uB54C\uC640 B\uC2A4\uD29C\uB514\uC624\uC77C \uB54C \uAC00\uACA9\uC774 \uAD81\uAE08\uD574\uC694." }),
                React.createElement(Estimate_1["default"], { requestDay: "2021.06.24", customerName: "\uC870\uD574\uB9AC", requestContent: "A\uC2A4\uD29C\uB514\uC624\uC77C \uB54C\uC640 B\uC2A4\uD29C\uB514\uC624\uC77C \uB54C \uAC00\uACA9\uC774 \uAD81\uAE08\uD574\uC694." }),
                React.createElement(Estimate_1["default"], { requestDay: "2021.06.24", customerName: "\uC870\uD574\uB9AC", requestContent: "A\uC2A4\uD29C\uB514\uC624\uC77C \uB54C\uC640 B\uC2A4\uD29C\uB514\uC624\uC77C \uB54C \uAC00\uACA9\uC774 \uAD81\uAE08\uD574\uC694." })))));
};
exports["default"] = PlannerMyEstimate;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var InnerContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 1100px;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  width: 1100px;\n  display: flex;\n  justify-content: space-between;\n"])));
var ContentContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-left: 40px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"], ["\n  margin-left: 40px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var TitleBox = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 860px;\n  height: 56px;\n"], ["\n  display: flex;\n  align-items: center;\n  width: 860px;\n  height: 56px;\n"])));
var TableHeader = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  width: 860px;\n  height: 34px;\n  margin-top: 1px;\n  border-top: 1px solid;\n  border-top-color: #ced4da;\n  border-bottom: 1px solid;\n  border-bottom-color: #ced4da;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  width: 860px;\n  height: 34px;\n  margin-top: 1px;\n  border-top: 1px solid;\n  border-top-color: #ced4da;\n  border-bottom: 1px solid;\n  border-bottom-color: #ced4da;\n"])));
var RequestDay = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 102px;\n  height: 34px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 102px;\n  height: 34px;\n"])));
var CustomerName = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 140px;\n  height: 34px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 140px;\n  height: 34px;\n"])));
var RequestContent = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 609px;\n  height: 34px;\n  margin-left: 10px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 609px;\n  height: 34px;\n  margin-left: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
