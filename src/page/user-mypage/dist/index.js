"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_query_1 = require("react-query");
var react_slick_1 = require("react-slick");
var Pick_1 = require("src/api/Pick");
var PlannerMiniCard_1 = require("src/component/PlannerMiniCard");
var style_1 = require("src/component/style/style");
var styled_components_1 = require("styled-components");
var UserPageSideMenu_1 = require("../user/mypage/UserPageSideMenu");
var ic_arrow_left_svg_1 = require("src/assets/svg/ic_arrow_left.svg");
var ic_arrow_right_svg_1 = require("src/assets/svg/ic_arrow_right.svg");
var Estimate_1 = require("src/api/Estimate");
var Estimate_2 = require("./Estimate");
var UserMyPage = function () {
    var picks = react_query_1.useQuery(['picks'], Pick_1.fetchPicks).data;
    var estimates = react_query_1.useQuery(['estimate'], Estimate_1.fetchEstimateList).data;
    var _a = react_1.useState(), slider = _a[0], setSlider = _a[1];
    var _b = react_1.useState({
        draggable: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        variableWidth: true,
        arrows: false
    }), slickSettings = _b[0], setSlickSettings = _b[1];
    return (React.createElement(Container, null,
        React.createElement(InnerContainer, null,
            React.createElement(UserPageSideMenu_1["default"], null),
            React.createElement(ContentContainer, null,
                React.createElement(PickTitleBox, null,
                    React.createElement(style_1.Title, { height: "27px", fontSize: "18px", width: "100px", lineHeight: "normal", color: "#000000" }, "\uCC1C \uBAA9\uB85D"),
                    React.createElement(style_1.FlexDiv, { justify: "flex-end" },
                        React.createElement(ArrowButton, { src: ic_arrow_left_svg_1["default"], onClick: slider === null || slider === void 0 ? void 0 : slider.slickPrev, margin: "0 8px 0 0" }),
                        React.createElement(ArrowButton, { src: ic_arrow_right_svg_1["default"], onClick: slider === null || slider === void 0 ? void 0 : slider.slickNext, margin: "0" }))),
                React.createElement(PickListBox, { style: { overflow: 'hidden' } },
                    React.createElement(Slider, __assign({}, slickSettings, { ref: function (ref) { return setSlider(ref); } }), picks ? (picks === null || picks === void 0 ? void 0 : picks.pickLists.map(function (pick) {
                        return (React.createElement(PlannerMiniCard_1["default"], { key: pick.id, id: pick.id, size: "130px", image: pick.imageUrlPath, plannerName: pick.name, companyName: pick.subName, margin: '0 16px 0 0' }));
                    })) : (React.createElement(React.Fragment, null)))),
                React.createElement(MyEstimateTitle, null,
                    React.createElement(style_1.Title, { height: "27px", fontSize: "18px", width: "auto", lineHeight: "normal", color: "#000000" }, "\uB098\uC758 \uACAC\uC801\uC11C")),
                React.createElement(TableHeader, null,
                    React.createElement(EstimateCreatedAt, null,
                        React.createElement(style_1.Title, { height: "18px", fontSize: "12px", width: "auto", lineHeight: "normal", color: "#212529" }, "\uC694\uCCAD\uC77C")),
                    React.createElement(EstimateContent, null,
                        React.createElement(style_1.Title, { height: "18px", fontSize: "12px", width: "auto", lineHeight: "normal", color: "#212529" }, "\uC694\uCCAD \uB0B4\uC5ED")),
                    React.createElement(EstimateNumber, null,
                        React.createElement(style_1.Title, { height: "18px", fontSize: "12px", width: "auto", lineHeight: "normal", color: "#212529" }, "No")),
                    React.createElement(Company, null,
                        React.createElement(style_1.Title, { height: "18px", fontSize: "12px", width: "auto", lineHeight: "normal", color: "#212529" }, "\uC5C5\uCCB4")),
                    React.createElement(EstimateState, null,
                        React.createElement(style_1.Title, { height: "18px", fontSize: "12px", width: "auto", lineHeight: "normal", color: "#212529" }, "\uC0C1\uD0DC"))),
                estimates ? (estimates.map(function (estimate) {
                    return (React.createElement(Estimate_2["default"], { createdAt: estimate.createDate, content: estimate.description, estimateNumber: estimate.id, companyName: estimate.companyName, estimateState: estimate.companyName }));
                })) : (React.createElement(React.Fragment, null))))));
};
exports["default"] = UserMyPage;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var InnerContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 1100px;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  width: 1100px;\n  display: flex;\n  justify-content: space-between;\n"])));
var ContentContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-left: 40px;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-left: 40px;\n"])));
var PickTitleBox = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 860px;\n  height: 56px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 860px;\n  height: 56px;\n"])));
var PickListBox = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 860px;\n  height: 219px;\n  border-top: 1px solid;\n  border-top-color: #ced4da;\n"], ["\n  display: flex;\n  align-items: center;\n  width: 860px;\n  height: 219px;\n  border-top: 1px solid;\n  border-top-color: #ced4da;\n"])));
var Slider = styled_components_1["default"](react_slick_1["default"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  .slick-initialized slick-slider {\n    overflow: hidden;\n    flex: 1;\n    max-width: 1100px !important;\n  }\n\n  .slick-track {\n    display: flex;\n    width: 1100px;\n    overflow: hidden;\n  }\n  .slick-list {\n    display: flex;\n    width: 100%;\n    overflow: hidden;\n  }\n"], ["\n  .slick-initialized slick-slider {\n    overflow: hidden;\n    flex: 1;\n    max-width: 1100px !important;\n  }\n\n  .slick-track {\n    display: flex;\n    width: 1100px;\n    overflow: hidden;\n  }\n  .slick-list {\n    display: flex;\n    width: 100%;\n    overflow: hidden;\n  }\n"])));
var ArrowButton = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: ", ";\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n"], ["\n  margin: ", ";\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n"])), function (props) { return props.margin; });
var MyEstimateTitle = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 860px;\n  height: 56px;\n"], ["\n  display: flex;\n  align-items: center;\n  width: 860px;\n  height: 56px;\n"])));
var TableHeader = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  width: 860px;\n  height: 34px;\n  margin-top: 1px;\n  border-top: 1px solid;\n  border-top-color: #ced4da;\n  border-bottom: 1px solid;\n  border-bottom-color: #ced4da;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  width: 860px;\n  height: 34px;\n  margin-top: 1px;\n  border-top: 1px solid;\n  border-top-color: #ced4da;\n  border-bottom: 1px solid;\n  border-bottom-color: #ced4da;\n"])));
var EstimateCreatedAt = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 102px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 102px;\n"])));
var EstimateContent = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 436px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 436px;\n"])));
var EstimateNumber = styled_components_1["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 102px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 102px;\n"])));
var Company = styled_components_1["default"].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 147px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 147px;\n"])));
var EstimateState = styled_components_1["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 73px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 73px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
