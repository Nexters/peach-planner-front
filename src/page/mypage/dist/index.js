"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var style_1 = require("src/component/style/style");
var styled_components_1 = require("styled-components");
var PlannerPageSideMenu_1 = require("../user/mypage/PlannerPageSideMenu");
var ContentBox_1 = require("./ContentBox");
var ContentNotification_1 = require("./ContentNotification");
var MyPage = function () {
    return (React.createElement(Container, null,
        React.createElement(InnerContainer, null,
            React.createElement(PlannerPageSideMenu_1["default"], null),
            React.createElement(ContentContainer, null,
                React.createElement(ContentBox_1["default"], { title: "1:1 \uBB38\uC758", viewName: "\uBA54\uC2DC\uC9C0" },
                    React.createElement(ContentNotification_1["default"], { content: "\uC9C4\uD589 \uC911", count: 2 }),
                    React.createElement(ContentNotification_1["default"], { content: "\uC644\uB8CC", count: 1 })),
                React.createElement(ContentBox_1["default"], { title: "\uACAC\uC801", viewName: "\uACAC\uC801\uC11C" },
                    React.createElement(ContentNotification_1["default"], { content: "\uC0C8\uB85C \uBC1B\uC740 \uACAC\uC801\uC11C", count: 2 }),
                    React.createElement(style_1.Content, { height: "18px", width: "auto", fontSize: "12px", color: "#adb5bd", lineHeight: "normal", margin: "0px 0px 0px 16px" }, "\uCD5C\uADFC \uC77C\uC8FC\uC77C \uAE30\uC900")),
                React.createElement(ContentBox_1["default"], { title: "\uB9AC\uBDF0", viewName: "\uB9AC\uBDF0" },
                    React.createElement(ContentNotification_1["default"], { content: "\uC0C8\uB85C \uBC1B\uC740 \uB9AC\uBDF0", count: 2 }),
                    React.createElement(style_1.Content, { height: "18px", width: "auto", fontSize: "12px", color: "#adb5bd", lineHeight: "normal", margin: "0px 0px 0px 16px" }, "\uCD5C\uADFC \uC77C\uC8FC\uC77C \uAE30\uC900"))))));
};
exports["default"] = MyPage;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var InnerContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 1100px;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  width: 1100px;\n  display: flex;\n  justify-content: space-between;\n"])));
var ContentContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  direction: row;\n"], ["\n  width: 100%;\n  display: flex;\n  direction: row;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
