"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var BoldTitle_1 = require("../../component/BoldTitle");
var HorizontalLine_1 = require("../../component/HorizontalLine");
var ic_heart_svg_1 = require("../../assets/svg/ic_heart.svg");
var ic_instagram_svg_1 = require("../../assets/svg/ic_instagram.svg");
var ic_blog_svg_1 = require("../../assets/svg/ic_blog.svg");
var ImageModal_1 = require("./ImageModal");
var img_photo_default_svg_1 = require("../../assets/svg/img_photo_default.svg");
var Summary = function (_a) {
    var plannerInfo = _a.plannerInfo, children = _a.children;
    var plannerName = plannerInfo.name, summary = plannerInfo.summary, externalLinks = plannerInfo.externalLinks, images = plannerInfo.images;
    var companyName = plannerInfo.company ? plannerInfo.company.name : '';
    var _b = react_1.useState(false), showImageModal = _b[0], setShowImageModal = _b[1];
    var openImageModal = function () { return setShowImageModal(true); };
    var closeImageModal = function () { return setShowImageModal(false); };
    return (React.createElement(Container, null,
        React.createElement(ImageContainer, null,
            React.createElement(ImageWrapper, null,
                images.slice(0, 2).map(function (image, i) { return (React.createElement(Image, { src: image, key: i })); }),
                images.length == 0 && React.createElement(Image, { src: img_photo_default_svg_1["default"] }),
                images.length <= 1 && React.createElement(Image, { src: img_photo_default_svg_1["default"] })),
            React.createElement(ImageWrapper, null,
                images.slice(2, 4).map(function (image, i) { return (React.createElement(Image, { src: image, key: i })); }),
                images.length <= 2 && React.createElement(Image, { src: img_photo_default_svg_1["default"] }),
                images.length <= 3 && React.createElement(Image, { src: img_photo_default_svg_1["default"] })),
            images.length != 0 && React.createElement(ShowImageButton, { onClick: openImageModal }, "\uC0AC\uC9C4 \uBAA8\uB450 \uBCF4\uAE30"),
            React.createElement(ImageModal_1["default"], { showImageModal: showImageModal, closeImageModal: closeImageModal, imageList: images })),
        React.createElement(InformationContainer, null,
            React.createElement(InnerContainer, null,
                React.createElement(NameContainer, null,
                    React.createElement(BoldTitle_1["default"], { size: 20 },
                        plannerName,
                        " \uD50C\uB798\uB108"),
                    React.createElement(HeartContainer, null,
                        React.createElement(ic_heart_svg_1.ReactComponent, null),
                        plannerInfo.likes)),
                React.createElement(CompanyName, null, companyName),
                React.createElement(HorizontalLine_1["default"], { height: "0.1px", color: "#dee2e6", top: "12px", bottom: "15px" }),
                React.createElement(BoldGray, null, "\uD50C\uB798\uB108 \uD55C\uC904\uC18C\uAC1C"),
                React.createElement(OneLine, null, summary),
                React.createElement(HorizontalLine_1["default"], { height: "0.1px", color: "#dee2e6", top: "36px", bottom: "11px" }),
                externalLinks != null && (React.createElement(React.Fragment, null,
                    React.createElement(BoldGray, null, "\uC18C\uC15C\uBBF8\uB514\uC5B4"),
                    React.createElement(SocialIcon, null,
                        React.createElement("a", { href: externalLinks.instagramLink, target: "_blank" },
                            React.createElement(ic_instagram_svg_1.ReactComponent, null)),
                        React.createElement("a", { href: externalLinks.blogLink, target: "_blank" },
                            React.createElement(ic_blog_svg_1.ReactComponent, null))))),
                children))));
};
exports["default"] = Summary;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  margin-bottom: 40px;\n"], ["\n  display: flex;\n  margin-bottom: 40px;\n"])));
var ImageContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  // background-color: #e9ecef;\n  flex: 1;\n  position: relative;\n"], ["\n  // background-color: #e9ecef;\n  flex: 1;\n  position: relative;\n"])));
var ImageWrapper = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  gap: 8px;\n  & + & {\n    margin-top: 8px;\n  }\n"], ["\n  display: flex;\n  gap: 8px;\n  & + & {\n    margin-top: 8px;\n  }\n"])));
var Image = styled_components_1["default"].img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 211px;\n  height: 211px;\n  border-radius: 10px;\n"], ["\n  width: 211px;\n  height: 211px;\n  border-radius: 10px;\n"])));
var ShowImageButton = styled_components_1["default"].button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  cursor: pointer;\n  border-radius: 3px;\n  width: 97px;\n  height: 31px;\n  padding: 0px;\n  font-size: 12px;\n  border: none;\n  background-color: white;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: 19.5px;\n"], ["\n  cursor: pointer;\n  border-radius: 3px;\n  width: 97px;\n  height: 31px;\n  padding: 0px;\n  font-size: 12px;\n  border: none;\n  background-color: white;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: 19.5px;\n"])));
var InformationContainer = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var InnerContainer = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: 32px;\n"], ["\n  padding: 32px;\n"])));
var NameContainer = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  margin-bottom: 6px;\n  justify-content: space-between;\n\n  div {\n    font-size: 14px;\n  }\n"], ["\n  display: flex;\n  margin-bottom: 6px;\n  justify-content: space-between;\n\n  div {\n    font-size: 14px;\n  }\n"])));
var HeartContainer = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n\n  svg {\n    margin-right: 5px;\n  }\n"], ["\n  display: flex;\n\n  svg {\n    margin-right: 5px;\n  }\n"])));
var CompanyName = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 16px;\n  font-weight: bold;\n"], ["\n  color: ", ";\n  font-size: 16px;\n  font-weight: bold;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.pink;
});
var BoldGray = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  margin-bottom: 10px;\n  font-size: 13px;\n  color: #868e96;\n"], ["\n  margin-bottom: 10px;\n  font-size: 13px;\n  color: #868e96;\n"])));
var SocialIcon = styled_components_1["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  margin-bottom: 20px;\n\n  a + a {\n    margin-left: 9px;\n  }\n"], ["\n  display: flex;\n  margin-bottom: 20px;\n\n  a + a {\n    margin-left: 9px;\n  }\n"])));
var OneLine = styled_components_1["default"].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-size: 14px;\n"], ["\n  font-size: 14px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
