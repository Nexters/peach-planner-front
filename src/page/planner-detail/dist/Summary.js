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
var PButton_1 = require("../../component/PButton");
var ic_heart_svg_1 = require("../../assets/svg/ic_heart.svg");
var ic_instagram_svg_1 = require("../../assets/svg/ic_instagram.svg");
var ic_blog_svg_1 = require("../../assets/svg/ic_blog.svg");
var ImageModal_1 = require("./ImageModal");
var img_photo_default_svg_1 = require("../../assets/svg/img_photo_default.svg");
var Pick_1 = require("src/api/Pick");
var react_router_1 = require("react-router");
var axios_1 = require("axios");
var ic_heart_black_svg_1 = require("../../assets/svg/ic_heart_black.svg");
var ic_heart_svg_2 = require("../../assets/svg/ic_heart.svg");
var Summary = function (_a) {
    var plannerInfo = _a.plannerInfo;
    var history = react_router_1.useHistory();
    var PLANNER_NAME = plannerInfo.name;
    var COMPANY_NAME = plannerInfo.company ? plannerInfo.company.name : '';
    var ONE_LINE_SUMMARY = plannerInfo.summary;
    var EXTERNAL_LINKS = plannerInfo.externalLinks;
    var IMAGES = plannerInfo.images;
    var _b = react_1.useState(false), showImageModal = _b[0], setShowImageModal = _b[1];
    var _c = react_1.useState(false), selected = _c[0], setSelected = _c[1];
    var _d = react_1.useState(plannerInfo.likes), heartCount = _d[0], setHeartCount = _d[1];
    var openImageModal = function () { return setShowImageModal(true); };
    var closeImageModal = function () { return setShowImageModal(false); };
    var handleEstimateClick = function () {
        var plannerId = plannerInfo.id;
        history.push("/estimate/" + plannerId);
    };
    var pickPlanner = function () {
        var plannerId = plannerInfo.id;
        Pick_1.pick({ targetCategoryType: 'PLANNER', targetId: plannerId, toBePick: !selected });
        if (selected) {
            setHeartCount(function (heart) { return heart - 1; });
        }
        else {
            setHeartCount(function (heart) { return heart + 1; });
        }
        setSelected(function (selected) { return !selected; });
    };
    var handleChat = function () {
        axios_1["default"]
            .post("/chat/rooms/" + plannerInfo.id, {}, { headers: { Authorization: "Bearer " + localStorage.getItem('accessToken') } })
            .then(function (res) {
            if (res.status == 200) {
                history.push('/chats');
            }
        });
    };
    return (react_1["default"].createElement(Container, null,
        react_1["default"].createElement(ImageContainer, null,
            react_1["default"].createElement(ImageWrapper, null,
                IMAGES.slice(0, 2).map(function (image, i) { return (react_1["default"].createElement(Image, { src: image, key: i })); }),
                IMAGES.length == 0 && react_1["default"].createElement(Image, { src: img_photo_default_svg_1["default"] }),
                IMAGES.length <= 1 && react_1["default"].createElement(Image, { src: img_photo_default_svg_1["default"] })),
            react_1["default"].createElement(ImageWrapper, null,
                IMAGES.slice(2, 4).map(function (image, i) { return (react_1["default"].createElement(Image, { src: image, key: i })); }),
                IMAGES.length <= 2 && react_1["default"].createElement(Image, { src: img_photo_default_svg_1["default"] }),
                IMAGES.length <= 3 && react_1["default"].createElement(Image, { src: img_photo_default_svg_1["default"] })),
            IMAGES.length != 0 && react_1["default"].createElement(ShowImageButton, { onClick: openImageModal }, "\uC0AC\uC9C4 \uBAA8\uB450 \uBCF4\uAE30"),
            react_1["default"].createElement(ImageModal_1["default"], { showImageModal: showImageModal, closeImageModal: closeImageModal, imageList: IMAGES })),
        react_1["default"].createElement(InformationContainer, null,
            react_1["default"].createElement(InnerContainer, null,
                react_1["default"].createElement(NameContainer, null,
                    react_1["default"].createElement(BoldTitle_1["default"], { size: 20 },
                        PLANNER_NAME,
                        " \uD50C\uB798\uB108"),
                    react_1["default"].createElement(HeartContainer, null,
                        react_1["default"].createElement(ic_heart_svg_1.ReactComponent, null),
                        heartCount)),
                react_1["default"].createElement(CompanyName, null, COMPANY_NAME),
                react_1["default"].createElement(HorizontalLine_1["default"], { height: "0.1px", color: "#dee2e6", top: "12px", bottom: "15px" }),
                react_1["default"].createElement(BoldGray, null, "\uD50C\uB798\uB108 \uD55C\uC904\uC18C\uAC1C"),
                react_1["default"].createElement(OneLine, null, ONE_LINE_SUMMARY),
                react_1["default"].createElement(HorizontalLine_1["default"], { height: "0.1px", color: "#dee2e6", top: "36px", bottom: "11px" }),
                EXTERNAL_LINKS != null && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(BoldGray, null, "\uC18C\uC15C\uBBF8\uB514\uC5B4"),
                    react_1["default"].createElement(SocialIcon, null,
                        react_1["default"].createElement("a", { href: EXTERNAL_LINKS.instagramLink, target: "_blank" },
                            react_1["default"].createElement(ic_instagram_svg_1.ReactComponent, null)),
                        react_1["default"].createElement("a", { href: EXTERNAL_LINKS.blogLink, target: "_blank" },
                            react_1["default"].createElement(ic_blog_svg_1.ReactComponent, null))))),
                react_1["default"].createElement(PButton_1["default"], { color: "pink", onClick: handleEstimateClick }, "\uACAC\uC801 \uC694\uCCAD\uD558\uAE30"),
                react_1["default"].createElement(ButtonContainer, null,
                    react_1["default"].createElement(PButton_1["default"], { onClick: handleChat, otherBgColor: "#f1f3f5", border: "none" }, "1:1 \uBB38\uC758\uD558\uAE30"),
                    react_1["default"].createElement(PButton_1["default"], { onClick: pickPlanner, otherBgColor: "#f1f3f5", border: "none" },
                        react_1["default"].createElement(Vertical, null,
                            react_1["default"].createElement("img", { src: selected ? ic_heart_svg_2["default"] : ic_heart_black_svg_1["default"] })),
                        ' ',
                        react_1["default"].createElement(Vertical, null, "\uCC1C\uD558\uAE30")))))));
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
var ButtonContainer = styled_components_1["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  margin-top: 13.5px;\n  display: flex;\n\n  button + button {\n    margin-left: 13px;\n  }\n"], ["\n  margin-top: 13.5px;\n  display: flex;\n\n  button + button {\n    margin-left: 13px;\n  }\n"])));
var Vertical = styled_components_1["default"].div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  vertical-align: middle;\n  display: inline-block;\n"], ["\n  vertical-align: middle;\n  display: inline-block;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
