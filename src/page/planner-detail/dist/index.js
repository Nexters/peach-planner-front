"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var CompanyInfo_1 = require("./CompanyInfo");
var Detail_1 = require("./Detail");
var PartnerInfo_1 = require("./PartnerInfo");
var PlannerInfo_1 = require("./PlannerInfo");
var ReviewList_1 = require("./ReviewList");
var Summary_1 = require("./Summary");
var react_router_1 = require("react-router");
var axios_1 = require("axios");
var Interaction_1 = require("./Interaction");
var AuthStatus_1 = require("src/atoms/AuthStatus");
var PlannerDetail = function () {
    var _a = react_1.useState(null), plannerInfo = _a[0], setPlannerInfo = _a[1];
    var _b = AuthStatus_1.useUserTypeState(), userType = _b[0], _ = _b[1];
    var history = react_router_1.useHistory();
    var params = react_router_1.useRouteMatch().params;
    var plannerId = params.id;
    // const { data: plannerInfo, error } = useQuery(['planner', plannerId], () => fetchPlanner(plannerId));
    var fetchPlanner = function () {
        axios_1["default"]
            .get("/planners/" + plannerId, {
            headers: {
                Authorization: localStorage.getItem('accessToken') ? "Bearer " + localStorage.getItem('accessToken') : ""
            }
        })
            .then(function (response) {
            setPlannerInfo(__assign({}, response.data));
        })["catch"](function (err) {
            history.push('/');
        });
    };
    react_1.useEffect(function () {
        fetchPlanner();
    }, []);
    return plannerInfo ? (react_1["default"].createElement(Container, null,
        react_1["default"].createElement(Summary_1["default"], { plannerInfo: plannerInfo }, userType === 'USER' ? (react_1["default"].createElement(Interaction_1["default"], { plannerInfo: plannerInfo, setPlannerInfo: setPlannerInfo })) : (react_1["default"].createElement(react_1["default"].Fragment, null))),
        react_1["default"].createElement(Detail_1["default"], { plannerInfo: plannerInfo }),
        react_1["default"].createElement(PlannerInfo_1["default"], { plannerInfo: plannerInfo }),
        plannerInfo.company && react_1["default"].createElement(CompanyInfo_1["default"], { companyInfo: plannerInfo.company }),
        react_1["default"].createElement(PartnerInfo_1["default"], { plannerId: plannerId }),
        react_1["default"].createElement(ReviewList_1["default"], { plannerId: plannerId }))) : (react_1["default"].createElement(react_1["default"].Fragment, null));
};
exports["default"] = PlannerDetail;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 860px;\n  margin: 0 auto;\n"], ["\n  width: 860px;\n  margin: 0 auto;\n"])));
var templateObject_1;
