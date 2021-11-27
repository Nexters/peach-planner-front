"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Region = exports.allRegions = void 0;
var styled_components_1 = require("styled-components");
var style_1 = require("../../component/style/style");
var ClickableButton_1 = require("./ClickableButton");
var LindAndTitle_1 = require("./LindAndTitle");
exports.allRegions = [
    { value: 'seoul', display: '서울' },
    { value: 'gyeonggi', display: '경기' },
    { value: 'incheon', display: '인천' },
    { value: 'pusan', display: '부산' },
    { value: 'gangwon', display: '강원' },
    { value: 'jeolla', display: '전라' },
    { value: 'gyengsang', display: '경상' },
    { value: 'daegu', display: '대구' },
    { value: 'chungchung', display: '충청' },
    { value: 'daejeon', display: '대전' },
    { value: 'jeju', display: '제주' }
];
var PlannerArea = function (_a) {
    var plannerRegions = _a.plannerRegions, regions = _a.regions, handleRegions = _a.handleRegions;
    return (React.createElement(style_1.FlexDiv, { width: "632px", margin: "0 0 42px 0", direction: "column", justify: "flex-start", align: "start" },
        React.createElement(LindAndTitle_1["default"], { title: "\uB2F4\uB2F9 \uC9C0\uC5ED", content: "\uC6E8\uB529\uD50C\uB798\uB108\uAC00 \uB2F4\uB2F9\uD558\uB294 \uC9C0\uC5ED\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694." }),
        React.createElement(exports.Region, { direction: "row", justify: "flex-start", align: "start", margin: "0px", width: "500px" }, plannerRegions
            ? exports.allRegions.map(function (value, index) {
                var isExistRegion = plannerRegions.includes(value.display);
                return (React.createElement(ClickableButton_1["default"], { items: regions, handleItems: handleRegions, content: value, isAlreadyClicked: isExistRegion, key: index }));
            })
            : exports.allRegions.map(function (value, index) {
                return (React.createElement(ClickableButton_1["default"], { items: regions, handleItems: handleRegions, content: value, isAlreadyClicked: false, key: index }));
            }))));
};
exports["default"] = PlannerArea;
exports.Region = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: ", ";\n  height: ", ";\n  width: ", ";\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n  margin: ", ";\n  flex-wrap: wrap;\n"], ["\n  min-height: ", ";\n  height: ", ";\n  width: ", ";\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n  margin: ", ";\n  flex-wrap: wrap;\n"])), function (props) { return props.minHeight; }, function (props) { return props.height; }, function (props) { return props.width || '100%'; }, function (props) { return props.justify || 'center'; }, function (props) { return props.align || 'center'; }, function (props) { return props.direction || 'row'; }, function (props) { return props.margin; });
var templateObject_1;
