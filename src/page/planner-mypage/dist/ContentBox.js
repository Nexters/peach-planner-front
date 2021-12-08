"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var style_1 = require("src/component/style/style");
var styled_components_1 = require("styled-components");
var ic_right_gray_svg_1 = require("src/assets/svg/ic_right_gray.svg");
var ContentBox = function (_a) {
    var title = _a.title, viewName = _a.viewName, handleClick = _a.handleClick, children = _a.children;
    return (React.createElement(Box, null,
        React.createElement(TitleBox, null,
            React.createElement(style_1.Title, { height: "25px", fontSize: "17px", lineHeight: "normal", color: "#495057", margin: "0px 0px 0px 16px" }, title)),
        React.createElement(Line, null),
        React.createElement(Body, null,
            React.createElement(ChildBody, null, children),
            React.createElement(MoveButtonBox, { onClick: handleClick },
                React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", color: "#495057", lineHeight: "normal", margin: "0px 0px 0px 16px" },
                    "\uC804\uCCB4 ",
                    viewName,
                    " \uBCF4\uAE30"),
                React.createElement(ArrowButton, { src: ic_right_gray_svg_1["default"] })))));
};
exports["default"] = ContentBox;
var Box = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 270px;\n  height: 240px;\n  margin: 40px 0px 232px 40px;\n  padding: 5px 0 23px;\n  border-radius: 6px;\n  box-shadow: 0 2px 4px 0 #adb5bd;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"], ["\n  width: 270px;\n  height: 240px;\n  margin: 40px 0px 232px 40px;\n  padding: 5px 0 23px;\n  border-radius: 6px;\n  box-shadow: 0 2px 4px 0 #adb5bd;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"])));
var TitleBox = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 270px;\n  height: 48px;\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n"], ["\n  width: 270px;\n  height: 48px;\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n"])));
var Line = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 248px;\n  height: 1px;\n  background-color: #dee2e6;\n  margin-top: 5px;\n  margin-bottom: 10px;\n"], ["\n  width: 248px;\n  height: 1px;\n  background-color: #dee2e6;\n  margin-top: 5px;\n  margin-bottom: 10px;\n"])));
var Body = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var ChildBody = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 270px;\n  height: 108px;\n"], ["\n  width: 270px;\n  height: 108px;\n"])));
var MoveButtonBox = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 270px;\n  height: 40px;\n  margin: 28px 0 0;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"], ["\n  width: 270px;\n  height: 40px;\n  margin: 28px 0 0;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"])));
var ArrowButton = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: 24px;\n  width: 24px;\n"], ["\n  height: 24px;\n  width: 24px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
