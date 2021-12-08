"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var style_1 = require("src/component/style/style");
var styled_components_1 = require("styled-components");
var PlannerPageSideMenu_1 = require("../user/mypage/PlannerPageSideMenu");
var Review_1 = require("./Review");
var ic_right_gray_svg_1 = require("src/assets/svg/ic_right_gray.svg");
var PlannerReview = function () {
    return (React.createElement(Container, null,
        React.createElement(InnerContainer, null,
            React.createElement(PlannerPageSideMenu_1["default"], null),
            React.createElement(ContentContainer, null,
                React.createElement(TitleBox, null,
                    React.createElement(style_1.Title, { height: "27px", fontSize: "18px", lineHeight: "normal", color: "#000000" }, "\uB098\uC758 \uB9AC\uBDF0")),
                React.createElement(TableHeader, null,
                    React.createElement(ReviewState, null,
                        React.createElement(style_1.Title, { height: "18px", fontSize: "12px", lineHeight: "normal", color: "#212529" }, "\uB9AC\uBDF0 \uAD6C\uBD84")),
                    React.createElement(Writer, null,
                        React.createElement(style_1.Title, { height: "18px", fontSize: "12px", lineHeight: "normal", color: "#212529" }, "\uB4F1\uB85D\uC790")),
                    React.createElement(Picture, null,
                        React.createElement(style_1.Title, { height: "18px", fontSize: "12px", lineHeight: "normal", color: "#212529" }, "\uC0AC\uC9C4")),
                    React.createElement(ReviewContent, null,
                        React.createElement(style_1.Title, { height: "18px", fontSize: "12px", lineHeight: "normal", color: "#212529" }, "\uB9AC\uBDF0\uB0B4\uC6A9")),
                    React.createElement(ReviewCreatedAt, null,
                        React.createElement(style_1.Title, { height: "18px", fontSize: "12px", lineHeight: "normal", color: "#212529" }, "\uB9AC\uBDF0\uB4F1\uB85D\uC77C"))),
                React.createElement(Review_1["default"], { reviewState: "\uC0C1\uB2F4\uC644\uB8CC", reviewWriter: "\uC870\uD574\uB9AC", reviewContent: "\uB108\uBB34 \uC88B\uC544\uC694 \uC5B4\uCA4C\uACE0 \uC800\uCA4C\uACE0", picture: ic_right_gray_svg_1["default"], reviewCreatedAt: "2021.7.31. 12:30" }),
                React.createElement(Review_1["default"], { reviewState: "\uC0C1\uB2F4\uC644\uB8CC", reviewWriter: "\uC870\uD574\uB9AC", reviewContent: "\uB108\uBB34 \uC88B\uC544\uC694 \uC5B4\uCA4C\uACE0 \uC800\uCA4C\uACE0", picture: ic_right_gray_svg_1["default"], reviewCreatedAt: "2021.7.31. 12:30" }),
                React.createElement(Review_1["default"], { reviewState: "\uC0C1\uB2F4\uC644\uB8CC", reviewWriter: "\uC870\uD574\uB9AC", reviewContent: "\uB108\uBB34 \uC88B\uC544\uC694 \uC5B4\uCA4C\uACE0 \uC800\uCA4C\uACE0", picture: ic_right_gray_svg_1["default"], reviewCreatedAt: "2021.7.31. 12:30" })))));
};
exports["default"] = PlannerReview;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var InnerContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 1100px;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  width: 1100px;\n  display: flex;\n  justify-content: space-between;\n"])));
var ContentContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-left: 40px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"], ["\n  margin-left: 40px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var TitleBox = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 860px;\n  height: 56px;\n"], ["\n  display: flex;\n  align-items: center;\n  width: 860px;\n  height: 56px;\n"])));
var TableHeader = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  width: 860px;\n  height: 34px;\n  margin-top: 1px;\n  border-top: 1px solid;\n  border-top-color: #ced4da;\n  border-bottom: 1px solid;\n  border-bottom-color: #ced4da;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  width: 860px;\n  height: 34px;\n  margin-top: 1px;\n  border-top: 1px solid;\n  border-top-color: #ced4da;\n  border-bottom: 1px solid;\n  border-bottom-color: #ced4da;\n"])));
var ReviewState = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  width: 80px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  width: 80px;\n"])));
var Writer = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  width: 80px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  width: 80px;\n"])));
var Picture = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  width: 95px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  width: 95px;\n"])));
var ReviewContent = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 34px;\n  width: 486px;\n  margin-left: 10px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 34px;\n  width: 486px;\n  margin-left: 10px;\n"])));
var ReviewCreatedAt = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  width: 102px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  width: 102px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
