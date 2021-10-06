"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TextArea = void 0;
var style_1 = require("../../component/style/style");
var LindAndTitle_1 = require("./LindAndTitle");
var styled_components_1 = require("styled-components");
var PlannerInputTitle_1 = require("./PlannerInputTitle");
var MyProfile = function (_a) {
    var handleDescription = _a.handleDescription;
    return (React.createElement(style_1.FlexDiv, { width: "632px", margin: "0 0 72px 0", direction: "column", justify: "flex-start", align: "start" },
        React.createElement(LindAndTitle_1["default"], { title: "\uB0B4 \uD504\uB85C\uD544" }),
        React.createElement(PlannerInputTitle_1["default"], { name: "\uD50C\uB798\uB108 \uD55C\uC904 \uC18C\uAC1C", margin: "20px 0 8px 0" }),
        React.createElement(Input, { name: "summary", onChange: handleDescription }),
        React.createElement(PlannerInputTitle_1["default"], { name: "\uD50C\uB798\uB108 \uC18C\uAC1C", margin: "24px 0 8px 0" }),
        React.createElement(exports.TextArea, { name: "description", onChange: handleDescription })));
};
exports["default"] = MyProfile;
var Input = styled_components_1["default"].input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 41px;\n  width: 633px;\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"], ["\n  box-sizing: border-box;\n  height: 41px;\n  width: 633px;\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"])));
exports.TextArea = styled_components_1["default"].textarea(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 266px;\n  width: 633px;\n  padding: 13px;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  resize: none;\n"], ["\n  box-sizing: border-box;\n  height: 266px;\n  width: 633px;\n  padding: 13px;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  resize: none;\n"])));
var templateObject_1, templateObject_2;
