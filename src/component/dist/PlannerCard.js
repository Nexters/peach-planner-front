"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var ic_heart_svg_1 = require("../assets/svg/ic_heart.svg");
var ic_review_svg_1 = require("../assets/svg/ic_review.svg");
var ic_blog_svg_1 = require("../assets/svg/ic_blog.svg");
var ic_instagram_svg_1 = require("../assets/svg/ic_instagram.svg");
var ic_heart_line_svg_1 = require("../assets/svg/ic_heart_line.svg");
var style_1 = require("./style/style");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var react_query_1 = require("react-query");
var AuthStatus_1 = require("src/atoms/AuthStatus");
var Pick_1 = require("src/api/Pick");
var img_photo_default_svg_1 = require("../assets/svg/img_photo_default.svg");
var PlannerCard = function (props) {
    var _a = react_query_1.useMutation(Pick_1.pick, {
        onSuccess: function (data) { }
    }), mutate = _a.mutate, isLoading = _a.isLoading;
    var tokenState = AuthStatus_1.usePeachTokenState();
    var history = react_router_dom_1.useHistory();
    var handlePlannerClick = function () {
        var plannerId = props.id;
        history.push("/planner/" + plannerId);
    };
    var handlePickClick = function () {
        var plannerId = props.id;
        var request = {
            targetId: plannerId,
            targetCategoryType: 'PLANNER',
            toBePick: true
        };
        mutate(request);
    };
    var splitRegion = function (origin) {
        var regions = origin.split(',');
        return regions.length > 3 ? regions[0] + ", " + regions[1] + ", " + regions[2] + ", ..." : origin;
    };
    return (React.createElement(style_1.FlexDiv, { width: props.size, direction: "column", margin: props.margin },
        React.createElement(PlannerImageContainer, null,
            React.createElement(PlannerImage, { src: props.imagePath ? props.imagePath : img_photo_default_svg_1["default"], height: props.size, onClick: handlePlannerClick }),
            tokenState[0] ? (React.createElement(PickBox, { onClick: handlePickClick },
                React.createElement(EmptyPickIcon, { src: ic_heart_line_svg_1["default"] }))) : (React.createElement(React.Fragment, null))),
        React.createElement(style_1.FlexDiv, { justify: "flex-start", align: "start", width: props.size, margin: '0', direction: "column" },
            React.createElement(style_1.FlexDiv, { justify: "flex-start", margin: '13px 0 0 0' },
                React.createElement(HeartIcon, { src: ic_heart_svg_1["default"] }),
                React.createElement(Count, null, props.heartCount),
                React.createElement(ReviewIcon, { src: ic_review_svg_1["default"] }),
                React.createElement(Count, null, props.reviewCount)),
            React.createElement(style_1.FlexDiv, { justify: "flex-start", margin: '5px 0 0 0' },
                React.createElement(Title, { onClick: handlePlannerClick }, props.name)),
            React.createElement(style_1.FlexDiv, { justify: "flex-start", margin: '8px 0 0 0' },
                React.createElement(DetailTitle, null, "\uC18C\uC18D"),
                React.createElement(DetailContent, null, props.organization)),
            React.createElement(style_1.FlexDiv, { justify: "flex-start", margin: '8px 0 0 0' },
                React.createElement(DetailTitle, null, "\uC9C0\uC5ED"),
                React.createElement(DetailContent, null, splitRegion(props.region)))),
        React.createElement(style_1.FlexDiv, { justify: "flex-start", margin: '12px 0 0 0' },
            React.createElement(SnsIcon, { src: ic_instagram_svg_1["default"] }),
            React.createElement(SnsIcon, { src: ic_blog_svg_1["default"] }))));
};
exports["default"] = PlannerCard;
var PlannerImageContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n"])));
var PlannerImage = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: ", "};\n  width: 100%;\n  border-radius: 10px;\n  cursor: pointer; \n  position: relative;\n"], ["\n  height: ", "};\n  width: 100%;\n  border-radius: 10px;\n  cursor: pointer; \n  position: relative;\n"])), function (props) { return props.height; });
var PickBox = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 32px;\n  width: 32px;\n  opacity: 0.3;\n  border-radius: 3px;\n  background-color: #212529;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  margin-top: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n"], ["\n  height: 32px;\n  width: 32px;\n  opacity: 0.3;\n  border-radius: 3px;\n  background-color: #212529;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  margin-top: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n"])));
var EmptyPickIcon = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 26px;\n  width: 26px;\n"], ["\n  height: 26px;\n  width: 26px;\n"])));
var HeartIcon = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 13.29px;\n  width: 14.43px;\n  margin: 0 4px 0 0;\n"], ["\n  height: 13.29px;\n  width: 14.43px;\n  margin: 0 4px 0 0;\n"])));
var ReviewIcon = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 16px;\n  width: 16px;\n  margin: 0 4px 0 16px;\n"], ["\n  height: 16px;\n  width: 16px;\n  margin: 0 4px 0 16px;\n"])));
var SnsIcon = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: 20px;\n  width: 20px;\n  margin: 0 8px 0 0;\n"], ["\n  height: 20px;\n  width: 20px;\n  margin: 0 8px 0 0;\n"])));
var Title = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  height: 24px;\n  width: auto;\n  color: #000000;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 24px;\n  cursor: pointer;\n"], ["\n  height: 24px;\n  width: auto;\n  color: #000000;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 24px;\n  cursor: pointer;\n"])));
var Count = styled_components_1["default"].span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  height: 18px;\n  width: auto;\n  color: #868e96;\n  font-size: 12px;\n  line-height: 18px;\n"], ["\n  height: 18px;\n  width: auto;\n  color: #868e96;\n  font-size: 12px;\n  line-height: 18px;\n"])));
var DetailTitle = styled_components_1["default"].span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  height: 20px;\n  width: 56px;\n  color: #868e96;\n  font-size: 14px;\n  line-height: 20px;\n"], ["\n  height: 20px;\n  width: 56px;\n  color: #868e96;\n  font-size: 14px;\n  line-height: 20px;\n"])));
var DetailContent = styled_components_1["default"].span(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  height: 20px;\n  width: auto;\n  color: #000000;\n  font-size: 14px;\n  line-height: 20px;\n"], ["\n  height: 20px;\n  width: auto;\n  color: #000000;\n  font-size: 14px;\n  line-height: 20px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
