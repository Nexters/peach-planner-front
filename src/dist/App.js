"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var main_1 = require("./page/home/main");
var planner_detail_1 = require("./page/planner-detail");
var PlannerEstimate_1 = require("./page/planner-estimate/PlannerEstimate");
var UserPage_1 = require("./page/user/mypage/UserPage");
var PlannerPage_1 = require("./page/user/mypage/PlannerPage");
var globalStyle_1 = require("./styles/globalStyle");
var theme_1 = require("./styles/theme");
var styled_components_1 = require("styled-components");
var search_1 = require("./page/home/search");
var Header_1 = require("./component/Header");
var Footer_1 = require("./component/Footer");
var profile_1 = require("./page/profile");
var Login_1 = require("./page/user/login/Login");
var PlannerSignUp_1 = require("./page/user/signup/PlannerSignUp");
var UserSignUp_1 = require("./page/user/signup/UserSignUp");
var Chat_1 = require("./page/chat/Chat");
var react_device_detect_1 = require("react-device-detect");
var mobile_1 = require("./page/mobile");
var recoil_1 = require("recoil");
var Kakao_1 = require("./page/user/OAuth/Kakao");
var api_1 = require("./api");
var react_query_1 = require("react-query");
var CompanyDetail_1 = require("./page/company-detail/CompanyDetail");
var ScrollToTop_1 = require("./component/ScrollToTop");
var queryClient = new react_query_1.QueryClient();
var App = function () {
    api_1.setAxiosDefaults();
    if (!react_device_detect_1.isBrowser) {
        return (React.createElement(styled_components_1.ThemeProvider, { theme: theme_1["default"] },
            React.createElement(globalStyle_1["default"], null),
            React.createElement(mobile_1["default"], null)));
    }
    else {
        return (React.createElement(recoil_1.RecoilRoot, null,
            React.createElement(react_query_1.QueryClientProvider, { client: queryClient },
                React.createElement(styled_components_1.ThemeProvider, { theme: theme_1["default"] },
                    React.createElement(globalStyle_1["default"], null),
                    React.createElement(react_router_dom_1.BrowserRouter, { basename: process.env.PUBLIC_URL },
                        React.createElement(react_router_dom_1.HashRouter, null,
                            React.createElement(Header_1["default"], null),
                            React.createElement(react_router_dom_1.Switch, null,
                                React.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                                    React.createElement(main_1["default"], null)),
                                React.createElement(react_router_dom_1.Route, { path: "/search" },
                                    React.createElement(ScrollToTop_1["default"], null),
                                    React.createElement(search_1["default"], null)),
                                React.createElement(react_router_dom_1.Route, { path: "/planner/:id" },
                                    React.createElement(planner_detail_1["default"], null)),
                                React.createElement(react_router_dom_1.Route, { path: "/company/:id" },
                                    React.createElement(CompanyDetail_1["default"], null)),
                                React.createElement(react_router_dom_1.Route, { path: "/login" },
                                    React.createElement(Login_1["default"], null)),
                                React.createElement(react_router_dom_1.Route, { path: "/estimate/:id" },
                                    React.createElement(PlannerEstimate_1["default"], null)),
                                React.createElement(react_router_dom_1.Route, { path: "/userPage" },
                                    React.createElement(UserPage_1["default"], null)),
                                React.createElement(react_router_dom_1.Route, { path: "/plannerPage" },
                                    React.createElement(PlannerPage_1["default"], null)),
                                React.createElement(react_router_dom_1.Route, { path: "/editProfile" },
                                    React.createElement(ScrollToTop_1["default"], null),
                                    React.createElement(profile_1["default"], { isUpdate: false })),
                                React.createElement(react_router_dom_1.Route, { path: "/chats" },
                                    React.createElement(Chat_1["default"], null)),
                                React.createElement(react_router_dom_1.Route, { path: "/plannerSignUp" },
                                    React.createElement(PlannerSignUp_1["default"], null)),
                                React.createElement(react_router_dom_1.Route, { path: "/signUp" },
                                    React.createElement(UserSignUp_1["default"], null)),
                                React.createElement(react_router_dom_1.Route, { path: "/api/auth/login/kakao" },
                                    React.createElement(Kakao_1["default"], null))),
                            React.createElement(Footer_1["default"], null)))))));
    }
};
exports["default"] = App;
