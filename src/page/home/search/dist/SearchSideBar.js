"use strict";
exports.__esModule = true;
var Accordion_1 = require("src/component/Accordion");
var style_1 = require("../../../component/style/style");
var SearchCheckBox_1 = require("./SearchCheckBox");
var SearchSideBarRegion_1 = require("./SearchSideBarRegion");
var regions = ['전체', '서울', '경기', '인천', '부산', '강원', '전라', '경상', '대구', '충청', '대전', '제주'];
var checkBox = [
    {
        name: '동행',
        enumValue: 'Accompany'
    },
    {
        name: '비동행',
        enumValue: 'NotAccompany'
    },
    {
        name: '방문상담',
        enumValue: 'DoorCounseling'
    },
    {
        name: '메시지상담',
        enumValue: 'MessageCounseling'
    }
];
var SearchSideBar = function (_a) {
    var location = _a.location, changeLocation = _a.changeLocation, support = _a.support, changeSupport = _a.changeSupport;
    return (React.createElement(style_1.FlexDiv, { justify: "flex-start", height: "auto", width: "200px", margin: '0 40px 0 0', direction: "column" },
        React.createElement(style_1.FlexDiv, { justify: "center", align: "start", width: "200px", height: "56px", margin: '0', direction: "column" },
            React.createElement(style_1.Title, { height: '24px', width: 'auto', fontSize: '16px', lineHeight: '24px', margin: '16px 0 16px 0' }, "\uC6E8\uB529\uD50C\uB798\uB108 \uCC3E\uAE30")),
        React.createElement(Accordion_1["default"], { title: "\uC9C0\uC5ED", margin: "" }, regions.map(function (value, index) {
            return (React.createElement(SearchSideBarRegion_1["default"], { key: index, name: value, location: location, changeLocation: changeLocation }));
        })),
        React.createElement(Accordion_1["default"], { title: "\uAE30\uD0C0", margin: "16px" }, checkBox.map(function (value, index) {
            return (React.createElement(SearchCheckBox_1["default"], { key: index, name: value.name, enumValue: value.enumValue, support: support, changeSupport: changeSupport }));
        }))));
};
exports["default"] = SearchSideBar;
