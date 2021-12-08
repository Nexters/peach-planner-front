"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var style_1 = require("src/component/style/style");
var styled_components_1 = require("styled-components");
var Review = function (_a) {
    var reviewState = _a.reviewState, reviewWriter = _a.reviewWriter, picture = _a.picture, reviewContent = _a.reviewContent, reviewCreatedAt = _a.reviewCreatedAt;
    //   fetchMyReview();
    return (React.createElement(Container, null,
        React.createElement(ReviewStateBox, null,
            React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", lineHeight: "normal", color: "#495057" }, reviewState)),
        React.createElement(WriterBox, null,
            React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", lineHeight: "normal", color: "#495057" }, reviewWriter)),
        React.createElement(PictureBox, null,
            React.createElement(Image, { src: picture })),
        React.createElement(ReviewContentBox, null,
            React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", lineHeight: "normal", color: "#495057" }, reviewContent)),
        React.createElement(ReviewCreatedAtBox, null,
            React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", lineHeight: "normal", color: "#495057" }, reviewCreatedAt))));
};
exports["default"] = Review;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var ReviewStateBox = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 80px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 80px;\n"])));
var WriterBox = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 80px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 80px;\n"])));
var PictureBox = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 95px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 95px;\n"])));
var ReviewContentBox = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 64px;\n  width: 486px;\n  margin-left: 10px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 64px;\n  width: 486px;\n  margin-left: 10px;\n"])));
var ReviewCreatedAtBox = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 102px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 102px;\n"])));
var Image = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: 48px;\n  width: 48px;\n  margin: 0;\n"], ["\n  height: 48px;\n  width: 48px;\n  margin: 0;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
