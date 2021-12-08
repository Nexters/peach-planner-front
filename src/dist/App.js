"use strict";
exports.__esModule = true;
exports.queryClient = void 0;
var react_router_dom_1 = require("react-router-dom");
var main_1 = require("./page/home/main");
var planner_detail_1 = require("./page/planner-detail");
var PlannerEstimate_1 = require("./page/planner-estimate/PlannerEstimate");
var globalStyle_1 = require("./styles/globalStyle");
var theme_1 = require("./styles/theme");
var styled_components_1 = require("styled-components");
var search_1 = require("./page/home/search");
var Header_1 = require("./component/Header");
var Footer_1 = require("./component/Footer");
var profile_edit_1 = require("./page/profile-edit");
var Login_1 = require("./page/user/login/Login");
var PlannerSignUp_1 = require("./page/user/signup/PlannerSignUp");
var UserSignUp_1 = require("./page/user/signup/UserSignUp");
var Chat_1 = require("./page/chat/Chat");
var react_device_detect_1 = require("react-device-detect");
var mobile_1 = require("./page/mobile");
var recoil_1 = require("recoil");
var Kakao_1 = require("./page/user/OAuth/Kakao");
var FindEmail_1 = require("./page/user/findUser/FindEmail");
var ResetPw_1 = require("./page/user/findUser/ResetPw");
var api_1 = require("./api");
var react_query_1 = require("react-query");
var routes_1 = require("./routes");
var CompanyDetail_1 = require("./page/company-detail/CompanyDetail");
var ScrollToTop_1 = require("./component/ScrollToTop");
var TermsOfUse_1 = require("./page/signup-detail/TermsOfUse");
var PrivacyPolicy_1 = require("./page/signup-detail/PrivacyPolicy");
var planner_mypage_1 = require("./page/planner-mypage");
var profile_1 = require("./page/planner-mypage/profile");
var PlannerSetting_1 = require("./component/PlannerSetting");
var planner_review_1 = require("./page/planner-review");
var planner_my_estimate_1 = require("./page/planner-my-estimate");
var user_mypage_1 = require("./page/user-mypage");
exports.queryClient = new react_query_1.QueryClient();
var App = function () {
    api_1.setAxiosDefaults();
    if (!react_device_detect_1.isBrowser) {
        return (React.createElement(styled_components_1.ThemeProvider, { theme: theme_1["default"] },
            React.createElement(globalStyle_1["default"], null),
            React.createElement(mobile_1["default"], null)));
    }
    else {
        return (React.createElement(recoil_1.RecoilRoot, null,
            React.createElement(react_query_1.QueryClientProvider, { client: exports.queryClient },
                React.createElement(styled_components_1.ThemeProvider, { theme: theme_1["default"] },
                    React.createElement(globalStyle_1["default"], null),
                    React.createElement(react_router_dom_1.BrowserRouter, null,
                        React.createElement(Header_1["default"], null),
                        React.createElement(react_router_dom_1.Switch, null,
                            React.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                                React.createElement(ScrollToTop_1["default"], null),
                                React.createElement(main_1["default"], null)),
                            React.createElement(react_router_dom_1.Route, { path: "/search" },
                                React.createElement(ScrollToTop_1["default"], null),
                                React.createElement(search_1["default"], null)),
                            React.createElement(react_router_dom_1.Route, { path: "/planner/:id" },
                                React.createElement(planner_detail_1["default"], null)),
                            React.createElement(react_router_dom_1.Route, { path: "/company/:id" },
                                React.createElement(CompanyDetail_1["default"], null)),
                            React.createElement(routes_1.PublicOnlyRoute, { path: "/login" },
                                React.createElement(Login_1["default"], null)),
                            React.createElement(routes_1.UserPrivateRoute, { path: "/estimate/:id" },
                                React.createElement(PlannerEstimate_1["default"], null)),
                            React.createElement(routes_1.UserPrivateRoute, { path: "/userPage" },
                                React.createElement(user_mypage_1["default"], null)),
                            React.createElement(routes_1.PlannerPrivateRoute, { path: "/plannerPage" },
                                React.createElement(planner_mypage_1["default"], null)),
                            React.createElement(routes_1.PlannerPrivateRoute, { path: "/plannerProfile" },
                                React.createElement(profile_1["default"], null)),
                            React.createElement(routes_1.PlannerPrivateRoute, { path: "/plannerSetting" },
                                React.createElement(PlannerSetting_1["default"], null)),
                            React.createElement(routes_1.PlannerPrivateRoute, { path: "/registerProfile" },
                                React.createElement(profile_edit_1["default"], { isUpdate: false })),
                            React.createElement(routes_1.PlannerPrivateRoute, { path: "/editProfile" },
                                React.createElement(profile_edit_1["default"], { isUpdate: true })),
                            React.createElement(routes_1.PlannerPrivateRoute, { path: "/plannerReview" },
                                React.createElement(planner_review_1["default"], null)),
                            React.createElement(routes_1.PlannerPrivateRoute, { path: "/plannerMyEstimate" },
                                React.createElement(planner_my_estimate_1["default"], null)),
                            React.createElement(routes_1.UserPrivateRoute, { path: "/chats" },
                                React.createElement(Chat_1["default"], null)),
                            React.createElement(routes_1.PublicOnlyRoute, { path: "/plannerSignUp" },
                                React.createElement(PlannerSignUp_1["default"], null)),
                            React.createElement(routes_1.PublicOnlyRoute, { path: "/signUp" },
                                React.createElement(UserSignUp_1["default"], null)),
                            React.createElement(react_router_dom_1.Route, { path: "/termsOfUse" },
                                React.createElement(TermsOfUse_1.TermsOfUse, null)),
                            React.createElement(react_router_dom_1.Route, { path: "/privacyPolicy" },
                                React.createElement(PrivacyPolicy_1.PrivacyPolicy, null)),
                            React.createElement(react_router_dom_1.Route, { path: "/api/auth/login/kakao" },
                                React.createElement(Kakao_1["default"], null)),
                            React.createElement(react_router_dom_1.Route, { path: "/findEmail" },
                                React.createElement(FindEmail_1["default"], null)),
                            React.createElement(react_router_dom_1.Route, { path: "/resetPw" },
                                React.createElement(ResetPw_1["default"], null)),
                            React.createElement(react_router_dom_1.Route, null,
                                React.createElement(react_router_dom_1.Redirect, { to: "/" }))),
                        React.createElement(Footer_1["default"], null))))));
    }
};
exports["default"] = App;
