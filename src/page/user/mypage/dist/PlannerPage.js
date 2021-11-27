"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var PlannerEstimate_1 = require("../../../component/PlannerEstimate");
var Estimate_1 = require("../../../component/Estimate");
var styled_components_1 = require("styled-components");
var sideMenuItem = [
    {
        name: '나의 견적서',
        value: 'estimate'
    },
    {
        name: '1:1 문의',
        value: 'question'
    },
    {
        name: '프로필 관리',
        value: 'profile'
    },
    {
        name: '계정 설정',
        value: 'setting'
    }
];
var PlannerPageSideBar = function () {
    var _a = react_1.useState(''), selectedItem = _a[0], setSelectedItem = _a[1];
    var handleSideMenuItem = function (item) {
        setSelectedItem(item);
    };
    return (react_1["default"].createElement(FlexDiv, { justify: "flex-start" },
        react_1["default"].createElement(FlexDiv, { justify: "flex-start", direction: "column", width: "500px" },
            react_1["default"].createElement(ProfileDiv, null,
                react_1["default"].createElement(ProfileImgBox, null),
                react_1["default"].createElement(FlexDiv, { height: "20px" },
                    react_1["default"].createElement(MyPageSpan, { color: "#212529" }, "\uC774\uC218\uC601"),
                    react_1["default"].createElement(MyPageSpan, { color: "#D6336C", size: "10px", margin: "0 0 0 5px" }, "\uAD00\uB9AC\uC790")),
                react_1["default"].createElement(MyPageSpan, { color: "#868E96", weight: "normal", size: "12px" }, "example@gmail.com")),
            react_1["default"].createElement(SideMenuDiv, null,
                react_1["default"].createElement(MyPageSpan, { color: "#000000", size: "16px" }, "\uB0B4 \uD398\uC774\uC9C0"),
                react_1["default"].createElement(Line, null),
                sideMenuItem.map(function (item) {
                    return react_1["default"].createElement(SideMenuItem, { onClick: function () { return handleSideMenuItem(item.value); } }, item.name);
                }))),
        react_1["default"].createElement(FlexDiv, { justify: "flex-start", direction: "column", width: "1000px" },
            selectedItem === '' && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(PlannerEstimate_1["default"], null),
                react_1["default"].createElement(Estimate_1["default"], null))),
            selectedItem === 'enterprise' && react_1["default"].createElement(PlannerEstimate_1["default"], null),
            selectedItem === 'estimate' && react_1["default"].createElement(Estimate_1["default"], null))));
};
exports["default"] = PlannerPageSideBar;
var FlexDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n  margin: ", ";\n  height: ", ";\n"], ["\n  width: ", ";\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n  margin: ", ";\n  height: ", ";\n"])), function (props) { return props.width || '100%'; }, function (props) { return props.justify || 'center'; }, function (props) { return props.align || 'center'; }, function (props) { return props.direction || 'row'; }, function (props) { return props.margin || '20px 0'; }, function (props) { return props.height || '100vh'; });
var ProfileImgBox = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 88px;\n  width: 88px;\n  background-color: #adb5bd;\n  border-radius: 100%;\n"], ["\n  height: 88px;\n  width: 88px;\n  background-color: #adb5bd;\n  border-radius: 100%;\n"])));
var ProfileDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"])));
var MyPageSpan = styled_components_1["default"].span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 20px;\n  color: ", ";\n  font-size: ", ";\n  letter-spacing: 0;\n  line-height: 20px;\n  font-weight: ", ";\n  cursor: ", ";\n  margin: ", ";\n"], ["\n  height: 20px;\n  color: ", ";\n  font-size: ", ";\n  letter-spacing: 0;\n  line-height: 20px;\n  font-weight: ", ";\n  cursor: ", ";\n  margin: ", ";\n"])), function (props) { return props.color || '#495057'; }, function (props) { return props.size || '14px'; }, function (props) { return props.weight || 'bold'; }, function (props) { return props.cursor || 'default'; }, function (props) { return props.margin || '0'; });
var SideMenuDiv = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  margin-top: 21px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  margin-top: 21px;\n"])));
var Line = styled_components_1["default"].hr(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 1px;\n  width: 200px;\n  background-color: #212529;\n  margin: 16px 0;\n"], ["\n  height: 1px;\n  width: 200px;\n  background-color: #212529;\n  margin: 16px 0;\n"])));
var SideMenuItem = styled_components_1["default"].li(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: 17px;\n  color: #212529;\n  font-size: 14px;\n  letter-spacing: 0;\n  line-height: 17px;\n  margin: 12px 0;\n  cursor: pointer;\n  list-style: none;\n"], ["\n  height: 17px;\n  color: #212529;\n  font-size: 14px;\n  letter-spacing: 0;\n  line-height: 17px;\n  margin: 12px 0;\n  cursor: pointer;\n  list-style: none;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
