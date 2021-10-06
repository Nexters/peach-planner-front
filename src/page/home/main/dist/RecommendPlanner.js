"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_query_1 = require("react-query");
var Planner_1 = require("src/api/Planner");
var styled_components_1 = require("styled-components");
var style_1 = require("../../../component/style/style");
var RecommendedPlanner = function () {
    var planners = react_query_1.useQuery(['recommendedPlanners'], Planner_1.fetchRecommendedPlanners).data;
    console.log(planners);
    return (React.createElement(style_1.FlexDiv, { margin: '54px 0 0 0', direction: "column" },
        React.createElement(style_1.FlexDiv, { height: '56px', justify: "between", margin: '0 0 40px 0' },
            React.createElement(Title, null, "\uCD94\uCC9C \uD50C\uB798\uB108")),
        React.createElement(style_1.FlexDiv, { margin: '0', justify: "flex-start", direction: "row" }, planners ? (planners.map(function (planner, index) {
            return (React.createElement(PlannerCard, { key: index },
                React.createElement(Image, { src: planner.imgUrl }),
                planner.fontColor === 'WHITE' ? (React.createElement(WhiteDescription, null, planner.description.split('\\n').map(function (line, index) {
                    return (React.createElement("span", null,
                        line,
                        React.createElement("br", null)));
                }))) : (React.createElement(Description, null, planner.description.split('\\n').map(function (line, index) {
                    return (React.createElement("span", null,
                        line,
                        React.createElement("br", null)));
                }))),
                planner.fontColor === 'WHITE' ? (React.createElement(WhitePlannerName, null,
                    planner.plannerName,
                    " \uD50C\uB798\uB108")) : (React.createElement(PlannerName, null,
                    planner.plannerName,
                    " \uD50C\uB798\uB108"))));
        })) : (React.createElement(React.Fragment, null)))));
};
exports["default"] = RecommendedPlanner;
var Image = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 198px;\n  width: 352px;\n  margin: 0 22px 0 0;\n  border-radius: 10px;\n  position: absolute;\n"], ["\n  height: 198px;\n  width: 352px;\n  margin: 0 22px 0 0;\n  border-radius: 10px;\n  position: absolute;\n"])));
var Title = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 29px;\n  width: auto;\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 29px;\n  margin: 0 0 14px 0;\n"], ["\n  height: 29px;\n  width: auto;\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 29px;\n  margin: 0 0 14px 0;\n"])));
var PlannerCard = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  disply: flex;\n  height: 198px;\n  width: 352px;\n  margin: 0 22px 0 0;\n  cursor: pointer;\n"], ["\n  disply: flex;\n  height: 198px;\n  width: 352px;\n  margin: 0 22px 0 0;\n  cursor: pointer;\n"])));
var Description = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 48px;\n  width: 167px;\n  color: #000000;\n  font-family: SpoqaHanSans;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 24px;\n  position: absolute;\n  white-space: pre-wrap;\n  margin-top: 30px;\n  margin-left: 20px;\n"], ["\n  height: 48px;\n  width: 167px;\n  color: #000000;\n  font-family: SpoqaHanSans;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 24px;\n  position: absolute;\n  white-space: pre-wrap;\n  margin-top: 30px;\n  margin-left: 20px;\n"])));
var WhiteDescription = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 48px;\n  width: 167px;\n  color: #ffffff;\n  font-family: SpoqaHanSans;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 24px;\n  position: absolute;\n  white-space: pre-wrap;\n  margin-top: 30px;\n  margin-left: 20px;\n"], ["\n  height: 48px;\n  width: 167px;\n  color: #ffffff;\n  font-family: SpoqaHanSans;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 24px;\n  position: absolute;\n  white-space: pre-wrap;\n  margin-top: 30px;\n  margin-left: 20px;\n"])));
var PlannerName = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 18px;\n  width: 240px;\n  color: #000000;\n  font-family: SpoqaHanSans;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0;\n  position: absolute;\n  line-height: 18px;\n  margin-left: 20px;\n  margin-top: 86px;\n"], ["\n  height: 18px;\n  width: 240px;\n  color: #000000;\n  font-family: SpoqaHanSans;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0;\n  position: absolute;\n  line-height: 18px;\n  margin-left: 20px;\n  margin-top: 86px;\n"])));
var WhitePlannerName = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: 18px;\n  width: 240px;\n  color: #ffffff;\n  font-family: SpoqaHanSans;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0;\n  position: absolute;\n  line-height: 18px;\n  margin-left: 20px;\n  margin-top: 86px;\n"], ["\n  height: 18px;\n  width: 240px;\n  color: #ffffff;\n  font-family: SpoqaHanSans;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0;\n  position: absolute;\n  line-height: 18px;\n  margin-left: 20px;\n  margin-top: 86px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
