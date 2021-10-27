"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var logo_peachplanner_svg_1 = require("../assets/svg/logo_peachplanner.svg");
var PButton_1 = require("./PButton");
var AuthStatus_1 = require("src/atoms/AuthStatus");
var ic_account_default_svg_1 = require("../assets/svg/ic_account_default.svg");
var ic_arrow_down_svg_1 = require("../assets/svg/ic_arrow_down.svg");
var User_1 = require("src/api/User");
var react_query_1 = require("react-query");
var Header = function () {
    var history = react_router_dom_1.useHistory();
    var handleSignUp = function () { return history.push('/signUp'); };
    var peachTokenState = AuthStatus_1.usePeachTokenState()[0];
    var _a = react_1.useState(false), isClickedProfile = _a[0], setIsClickedProfile = _a[1];
    var _b = react_1.useState(false), isAlart = _b[0], setIsAlart = _b[1];
    var isLogin = peachTokenState ? true : false;
    var user = react_query_1.useQuery(['getUser'], User_1.getUser, { enabled: isLogin }).data;
    var logout = function () {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.reload();
    };
    var handleClickProfile = function () {
        setIsClickedProfile(!isClickedProfile);
    };
    var handleClickNoti = function () {
        setIsAlart(!isAlart);
    };
    var handleMyPage = function () {
        User_1.getUserTest()
            .then(function (res) {
            if (res.userType === 'USER') {
                history.push("/userPage");
            }
            else {
                history.push("/plannerPage");
            }
            setIsClickedProfile(false);
        })["catch"](function (err) {
            console.log(err, 'err');
            setIsClickedProfile(false);
        });
        return;
    };
    var right;
    if (isLogin) {
        right = (react_1["default"].createElement(InnerContainer, null,
            react_1["default"].createElement(ProfileContainer, null,
                react_1["default"].createElement(ProfileBox, { onClick: handleClickProfile },
                    react_1["default"].createElement(ProfileImage, { src: ic_account_default_svg_1["default"] }),
                    react_1["default"].createElement(DropdownImage, { src: ic_arrow_down_svg_1["default"] }))),
            isClickedProfile ? (react_1["default"].createElement(DropdownContainer, null,
                react_1["default"].createElement(MenuTop, null,
                    react_1["default"].createElement(Menu, null,
                        react_1["default"].createElement(DropdownMessage, null, "\uBA54\uC2DC\uC9C0"))),
                react_1["default"].createElement(MenuBody, null,
                    react_1["default"].createElement(Menu, null,
                        react_1["default"].createElement(MenuName, { onClick: handleMyPage }, "\uB0B4 \uD398\uC774\uC9C0")),
                    react_1["default"].createElement(Menu, null,
                        react_1["default"].createElement(MenuName, null, "\uD504\uB85C\uD544 \uAD00\uB9AC")),
                    react_1["default"].createElement(Menu, null,
                        react_1["default"].createElement(MenuName, null, "\uACC4\uC815 \uC124\uC815"))),
                react_1["default"].createElement(MenuBottom, null,
                    react_1["default"].createElement(Menu, null,
                        react_1["default"].createElement(MenuName, { onClick: logout }, "\uB85C\uADF8\uC544\uC6C3"))))) : (react_1["default"].createElement(react_1["default"].Fragment, null))));
    }
    else {
        right = (react_1["default"].createElement(InnerContainer, null,
            react_1["default"].createElement(RightLink, { to: "/plannerSignUp" }, "\uD50C\uB798\uB108 \uAC00\uC785"),
            react_1["default"].createElement(RightLink, { to: "/login" }, "\uB85C\uADF8\uC778"),
            react_1["default"].createElement(PButton_1["default"], { color: "pink", width: "114px", height: "33px", fontSize: "12px", padding: "0", onClick: handleSignUp }, "\uBB34\uB8CC \uD68C\uC6D0\uAC00\uC785")));
    }
    return (react_1["default"].createElement(Container, null,
        react_1["default"].createElement(InnerContainer, null,
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/" },
                react_1["default"].createElement(logo_peachplanner_svg_1.ReactComponent, null)),
            react_1["default"].createElement(LeftLink, { to: "/search" }, "\uC6E8\uB529\uD50C\uB798\uB108 \uCC3E\uAE30")),
        right));
};
exports["default"] = Header;
var Container = styled_components_1["default"].header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 1140px;\n  height: 70px;\n  margin: 0 auto;\n  padding: 20px 0 18px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  width: 1140px;\n  height: 70px;\n  margin: 0 auto;\n  padding: 20px 0 18px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var InnerContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var ProfileContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var StyledLink = styled_components_1["default"](react_router_dom_1.Link)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-decoration: none;\n  color: #495057;\n  font-size: 13px;\n  line-height: 19px;\n"], ["\n  text-decoration: none;\n  color: #495057;\n  font-size: 13px;\n  line-height: 19px;\n"])));
var LeftLink = styled_components_1["default"](StyledLink)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-left: 35px;\n"], ["\n  margin-left: 35px;\n"])));
var RightLink = styled_components_1["default"](StyledLink)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-right: 32px;\n"], ["\n  margin-right: 32px;\n"])));
var DropdownContainer = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  margin: 10px 0 0 0;\n  height: auto;\n  width: 234px;\n  border-radius: 6px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 #adb5bd;\n  z-index: 1;\n"], ["\n  position: absolute;\n  margin: 10px 0 0 0;\n  height: auto;\n  width: 234px;\n  border-radius: 6px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 #adb5bd;\n  z-index: 1;\n"])));
var ProfileBox = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  box-sizing: border-box;\n  border-radius: 30px;\n  height: 41px;\n  width: 91px;\n  border: 1px solid #dee2e6;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n"], ["\n  box-sizing: border-box;\n  border-radius: 30px;\n  height: 41px;\n  width: 91px;\n  border: 1px solid #dee2e6;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n"])));
var ProfileImage = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  height: 32px;\n  width: 32px;\n  margin: 0 0 0 7px;\n"], ["\n  height: 32px;\n  width: 32px;\n  margin: 0 0 0 7px;\n"])));
var DropdownImage = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  height: 24px;\n  width: 24px;\n  margin: 0 10px 0 0;\n"], ["\n  height: 24px;\n  width: 24px;\n  margin: 0 10px 0 0;\n"])));
var NotiImage = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  height: 24px;\n  width: 24px;\n  margin: 0 10px 0 0;\n"], ["\n  height: 24px;\n  width: 24px;\n  margin: 0 10px 0 0;\n"])));
var MenuTop = styled_components_1["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  margin-top: 16px;\n  margin-bottom: 8px;\n  border-bottom: solid 1px #ced4da;\n"], ["\n  margin-top: 16px;\n  margin-bottom: 8px;\n  border-bottom: solid 1px #ced4da;\n"])));
var Menu = styled_components_1["default"].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  height: 40px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"], ["\n  height: 40px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"])));
var DropdownMessage = styled_components_1["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  height: 19px;\n  width: auto;\n  color: #000000;\n  font-size: 13px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 19px;\n  margin-left: 16px;\n"], ["\n  height: 19px;\n  width: auto;\n  color: #000000;\n  font-size: 13px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 19px;\n  margin-left: 16px;\n"])));
var MenuName = styled_components_1["default"].div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  height: 16px;\n  width: auto;\n  color: #000000;\n  font-size: 13px;\n  letter-spacing: 0;\n  line-height: 16px;\n  margin-left: 16px;\n"], ["\n  height: 16px;\n  width: auto;\n  color: #000000;\n  font-size: 13px;\n  letter-spacing: 0;\n  line-height: 16px;\n  margin-left: 16px;\n"])));
var MenuBody = styled_components_1["default"].div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  margin-top: 8px;\n  margin-bottom: 8px;\n  border-bottom: solid 1px #ced4da;\n"], ["\n  margin-top: 8px;\n  margin-bottom: 8px;\n  border-bottom: solid 1px #ced4da;\n"])));
var MenuBottom = styled_components_1["default"].div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  margin-bottom: 16px;\n"], ["\n  margin-bottom: 16px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
