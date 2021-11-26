"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var style_1 = require("../../component/style/style");
var PButton_1 = require("../../component/PButton");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var ProfileHeader = function (_a) {
    var isUpdate = _a.isUpdate;
    var history = react_router_dom_1.useHistory();
    return (React.createElement(style_1.FlexDiv, { height: "56px", justify: "flex-start", margin: "0 0 30px 0" },
        React.createElement(style_1.Title, { height: '33px', width: "430px", fontSize: '22px', lineHeight: '33px', margin: '16px 0 0 0' }, isUpdate ? '프로필 수정' : '프로필 등록'),
        React.createElement(style_1.FlexDiv, { height: "56px", justify: "flex-end", margin: "0 26px 0 0" }, isUpdate ? (React.createElement(PButton_1["default"], { fontSize: "14px", height: "41px", width: "126px", onClick: function () { return history.push('/plannerProfile'); } }, "\uD504\uB85C\uD544 \uB3CC\uC544\uAC00\uAE30")) : (React.createElement(BackButton, null,
            React.createElement(StyledLink, { to: "/" }, "\uB2E4\uC74C\uC5D0 \uD560\uAC8C\uC694"))))));
};
exports["default"] = ProfileHeader;
var StyledLink = styled_components_1["default"](react_router_dom_1.Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  color: #495057;\n  font-size: 13px;\n  line-height: 19px;\n"], ["\n  text-decoration: none;\n  color: #495057;\n  font-size: 13px;\n  line-height: 19px;\n"])));
var BackButton = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 20px;\n  width: 81px;\n  color: #000000;\n  font-size: 14px;\n  letter-spacing: 0;\n  line-height: 20px;\n  text-align: center;\n  text-decoration: underline;\n  cursor: pointer;\n"], ["\n  height: 20px;\n  width: 81px;\n  color: #000000;\n  font-size: 14px;\n  letter-spacing: 0;\n  line-height: 20px;\n  text-align: center;\n  text-decoration: underline;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2;
