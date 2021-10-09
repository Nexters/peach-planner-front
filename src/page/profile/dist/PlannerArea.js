"use strict";
exports.__esModule = true;
var style_1 = require("../../component/style/style");
var ClickableButton_1 = require("./ClickableButton");
var LindAndTitle_1 = require("./LindAndTitle");
var regionFirsts = ['서울', '경기', '인천', '부산', '강원', '전라'];
var regionSeconds = ['경상', '대구', '충청', '대전', '제주'];
var PlannerArea = function (_a) {
    var regions = _a.regions, handleRegions = _a.handleRegions;
    return (React.createElement(style_1.FlexDiv, { width: "632px", margin: "0 0 72px 0", direction: "column", justify: "flex-start", align: "start" },
        React.createElement(LindAndTitle_1["default"], { title: "\uB2F4\uB2F9 \uC9C0\uC5ED", content: "\uC6E8\uB529\uD50C\uB798\uB108\uAC00 \uB2F4\uB2F9\uD558\uB294 \uC9C0\uC5ED\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694." }),
        React.createElement(style_1.FlexDiv, { direction: "row", justify: "flex-start", align: "start", margin: "0px" }, regionFirsts.map(function (value, index) {
            return (React.createElement(ClickableButton_1["default"], { items: regions, handleItems: handleRegions, content: value, key: index }));
        })),
        React.createElement(style_1.FlexDiv, { direction: "row", justify: "flex-start", align: "start", margin: "0px" }, regionSeconds.map(function (value, index) {
            return (React.createElement(ClickableButton_1["default"], { items: regions, handleItems: handleRegions, content: value, key: index }));
        }))));
};
exports["default"] = PlannerArea;
