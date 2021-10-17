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
exports.DivisionBox = void 0;
var styled_components_1 = require("styled-components");
var react_slick_1 = require("react-slick");
var style_1 = require("../../../component/style/style");
var PlannerCard_1 = require("../../../component/PlannerCard");
var ic_arrow_left_svg_1 = require("../../../assets/svg/ic_arrow_left.svg");
var ic_arrow_right_svg_1 = require("../../../assets/svg/ic_arrow_right.svg");
var react_1 = require("react");
var react_query_1 = require("react-query");
var Planner_1 = require("../../../api/Planner");
var react_router_dom_1 = require("react-router-dom");
var NewPlanner = function () {
    var planners = react_query_1.useQuery(['newPlanners', { isNew: true }], Planner_1.fetchPlanners).data;
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
    return (React.createElement(style_1.FlexDiv, { margin: '40px 0 0 0', direction: "column" },
        React.createElement(style_1.FlexDiv, { height: '56px', justify: "space-between", margin: '0 0 8px 0' },
            React.createElement(Title, null, "\uC2E0\uADDC \uD50C\uB798\uB108"),
            React.createElement(style_1.FlexDiv, { justify: "flex-end" },
                React.createElement(More, null,
                    React.createElement(StyledLink, { to: "/search?sort=new" }, "\uB354 \uBCF4\uAE30")),
                React.createElement(ArrowButton, { src: ic_arrow_left_svg_1["default"], onClick: slider === null || slider === void 0 ? void 0 : slider.slickPrev, margin: "0 8px 0 0" }),
                React.createElement(ArrowButton, { src: ic_arrow_right_svg_1["default"], onClick: slider === null || slider === void 0 ? void 0 : slider.slickNext, margin: "0" }))),
        React.createElement(style_1.FlexDiv, { justify: "flex-start", align: "start", direction: "row", margin: "0", width: "1100px", style: { overflow: 'hidden' } },
            React.createElement(Slider, __assign({}, slickSettings, { ref: function (ref) { return setSlider(ref); } }), planners ? (planners.content.map(function (planner) {
                var _a;
                return (React.createElement(PlannerCard_1["default"], { key: planner.id, margin: '0 28px 0 0', size: '254px', imagePath: planner.images[0], heartCount: planner.likes, reviewCount: planner.reviews, name: planner.name, organization: (_a = planner.company) === null || _a === void 0 ? void 0 : _a.name, region: planner.locations.join(','), id: planner.id, isPicked: false, blogLink: planner.externalLinks.blogLink, instagramLink: planner.externalLinks.instagramLink, facebookLink: planner.externalLinks.facebookLink }));
            })) : (React.createElement(React.Fragment, null))))));
};
exports["default"] = NewPlanner;
var StyledLink = styled_components_1["default"](react_router_dom_1.Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  color: #495057;\n  font-size: 13px;\n  line-height: 19px;\n"], ["\n  text-decoration: none;\n  color: #495057;\n  font-size: 13px;\n  line-height: 19px;\n"])));
var Slider = styled_components_1["default"](react_slick_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .slick-initialized slick-slider {\n    overflow: hidden;\n    flex: 1;\n    max-width: 1100px !important;\n  }\n\n  .slick-track {\n    display: flex;\n    width: 1100px;\n    overflow: hidden;\n  }\n  .slick-list {\n    display: flex;\n    width: 100%;\n    overflow: hidden;\n  }\n"], ["\n  .slick-initialized slick-slider {\n    overflow: hidden;\n    flex: 1;\n    max-width: 1100px !important;\n  }\n\n  .slick-track {\n    display: flex;\n    width: 1100px;\n    overflow: hidden;\n  }\n  .slick-list {\n    display: flex;\n    width: 100%;\n    overflow: hidden;\n  }\n"])));
exports.DivisionBox = styled_components_1["default"].span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 56px;\n  width: 1100px;\n  margin-bottom: ", ";\n  display: flex;\n  justify-content: between;\n  align-items: center;\n"], ["\n  height: 56px;\n  width: 1100px;\n  margin-bottom: ", ";\n  display: flex;\n  justify-content: between;\n  align-items: center;\n"])), function (props) { return props.marginBottom; });
var Title = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 200px;\n  letter-spacing: 0;\n  color: #000000;\n  display: flex;\n  font-size: 20px;\n  font-weight: bold;\n"], ["\n  width: 200px;\n  letter-spacing: 0;\n  color: #000000;\n  display: flex;\n  font-size: 20px;\n  font-weight: bold;\n"])));
var ArrowButton = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: ", ";\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n"], ["\n  margin: ", ";\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n"])), function (props) { return props.margin; });
var More = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 19px;\n  font-size: 13px;\n  line-height: 19px;\n  margin: 0 16px 0 0;\n  border-bottom: 1px solid;\n  cursor: pointer;\n"], ["\n  height: 19px;\n  font-size: 13px;\n  line-height: 19px;\n  margin: 0 16px 0 0;\n  border-bottom: 1px solid;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
