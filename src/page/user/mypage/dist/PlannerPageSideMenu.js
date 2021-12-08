"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var ic_account_default_svg_1 = require("src/assets/svg/ic_account_default.svg");
var style_1 = require("src/component/style/style");
var UserType_1 = require("src/component/UserType");
var react_router_1 = require("react-router");
var User_1 = require("src/api/User");
var react_query_1 = require("react-query");
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
var PlannerPageSideMenu = function () {
    var history = react_router_1.useHistory();
    var user = react_query_1.useQuery(['getUser'], User_1.getUser).data;
    var _a = react_1.useState(''), selectedItem = _a[0], setSelectedItem = _a[1];
    var handleSideMenuItem = function (item) {
        setSelectedItem(item);
        if (item === 'profile') {
            history.push('/plannerProfile');
        }
        else if (item === 'setting') {
            history.push('/plannerSetting');
        }
    };
    return (React.createElement(FlexDiv, { justify: "flex-start", width: "200px" },
        React.createElement(FlexDiv, { justify: "flex-start", direction: "column" },
            React.createElement(ProfileDiv, null,
                React.createElement(ProfileImgBox, { src: ic_account_default_svg_1["default"] }),
                React.createElement(FlexDiv, { height: "20px", margin: "8px 0px 8px 0px" },
                    React.createElement(style_1.Title, { fontSize: "14px", height: "21px", color: "#212529", lineHeight: "20px", margin: "0px 4px 0px 0px" }, user === null || user === void 0 ? void 0 : user.name),
                    React.createElement(UserType_1["default"], { type: user === null || user === void 0 ? void 0 : user.userType, textHeight: "15px", typeHeight: "16px", fontSize: "10px", lineHeight: "13px" })),
                React.createElement(style_1.Content, { color: "#868E96", width: "auto", height: "18px", lineHeight: "10px", fontSize: "12px" }, user === null || user === void 0 ? void 0 : user.email)),
            React.createElement(SideMenuDiv, null,
                React.createElement(TitleBox, { onClick: function () { return history.push('/plannerPage'); } },
                    React.createElement(style_1.Title, { height: "16px", fontSize: "16px", lineHeight: "10px" }, "\uB0B4 \uD398\uC774\uC9C0")),
                React.createElement(Line, null),
                sideMenuItem.map(function (item) {
                    return (React.createElement(SideMenuItemContainer, null,
                        React.createElement(style_1.Content, { height: "17px", width: "auto", color: "#212529", fontSize: "14px", lineHeight: "17px", onClick: function () { return handleSideMenuItem(item.value); } }, item.name)));
                })))));
};
exports["default"] = PlannerPageSideMenu;
var FlexDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n  margin: ", ";\n  height: ", ";\n"], ["\n  width: ", ";\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n  margin: ", ";\n  height: ", ";\n"])), function (props) { return props.width || '100%'; }, function (props) { return props.justify || 'center'; }, function (props) { return props.align || 'center'; }, function (props) { return props.direction || 'row'; }, function (props) { return props.margin || '20px 0'; }, function (props) { return props.height || '100vh'; });
var ProfileImgBox = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 88px;\n  width: 88px;\n  border-radius: 100%;\n"], ["\n  height: 88px;\n  width: 88px;\n  border-radius: 100%;\n"])));
var ProfileDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"])));
var SideMenuDiv = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  margin-top: 21px;\n  width: 200px;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  margin-top: 21px;\n  width: 200px;\n"])));
var SideMenuItemContainer = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  height: 32px;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  height: 32px;\n  align-items: center;\n  justify-content: center;\n"])));
var Line = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: 16px;\n  margin-bottom: 8px;\n  height: 1px;\n  width: 200px;\n  border-bottom: 1px solid;\n  border-bottom-color: #212529;\n"], ["\n  margin-top: 16px;\n  margin-bottom: 8px;\n  height: 1px;\n  width: 200px;\n  border-bottom: 1px solid;\n  border-bottom-color: #212529;\n"])));
var TitleBox = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 63px;\n  height: 24px;\n  cursor: pointer;\n"], ["\n  width: 63px;\n  height: 24px;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
