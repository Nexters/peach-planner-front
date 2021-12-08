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
var axios_1 = require("axios");
var react_1 = require("react");
var react_router_1 = require("react-router");
var PButton_1 = require("src/component/PButton");
var style_1 = require("src/component/style/style");
var CompanyInfo_1 = require("src/page/planner-detail/CompanyInfo");
var Detail_1 = require("src/page/planner-detail/Detail");
var PartnerInfo_1 = require("src/page/planner-detail/PartnerInfo");
var PlannerInfo_1 = require("src/page/planner-detail/PlannerInfo");
var ReviewList_1 = require("src/page/planner-detail/ReviewList");
var Summary_1 = require("src/page/planner-detail/Summary");
var styled_components_1 = require("styled-components");
var ic_arrow_left_line_svg_1 = require("src/assets/svg/ic_arrow-left-line.svg");
var PlannerProfile = function () {
    var _a = react_1.useState(null), plannerInfo = _a[0], setPlannerInfo = _a[1];
    var history = react_router_1.useHistory();
    // const { data: plannerInfo, error } = useQuery(['planner', plannerId], () => fetchPlanner(plannerId));
    var fetchPlanner = function () {
        axios_1["default"]
            .get("/inhouse/planners/me", {
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
    var handleProfileEdit = function () {
        history.push('/editProfile');
    };
    react_1.useEffect(function () {
        fetchPlanner();
    }, []);
    return plannerInfo ? (React.createElement(Container, null,
        React.createElement(Back, null,
            React.createElement(BackBody, { onClick: function () { return history.push('/plannerPage'); } },
                React.createElement(BackImage, { src: ic_arrow_left_line_svg_1["default"] }),
                React.createElement(style_1.Content, { height: "21px", width: "auto", fontSize: "14px", color: "#212529", lineHeight: "20px", margin: "0px 0px 0px 8px" }, "\uB0B4\uD398\uC774\uC9C0\uB85C \uC774\uB3D9"))),
        React.createElement(Summary_1["default"], { plannerInfo: plannerInfo },
            React.createElement(PButton_1["default"], { onClick: handleProfileEdit, color: "pink" }, "\uD504\uB85C\uD544 \uC218\uC815\uD558\uAE30")),
        React.createElement(Detail_1["default"], { plannerInfo: plannerInfo }),
        React.createElement(PlannerInfo_1["default"], { plannerInfo: plannerInfo }),
        plannerInfo.company && React.createElement(CompanyInfo_1["default"], { companyInfo: plannerInfo.company }),
        React.createElement(PartnerInfo_1["default"], { plannerId: plannerInfo.id.toString() }),
        React.createElement(ReviewList_1["default"], { plannerId: plannerInfo.id.toString() }))) : (React.createElement(React.Fragment, null));
};
exports["default"] = PlannerProfile;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 860px;\n  margin: 0 auto;\n"], ["\n  width: 860px;\n  margin: 0 auto;\n"])));
var Back = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  width: 860px;\n  height: 40px;\n  margin: 10px 20px;\n"], ["\n  display: flex;\n  width: 860px;\n  height: 40px;\n  margin: 10px 20px;\n"])));
var BackBody = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"])));
var BackImage = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 24px;\n  width: 24px;\n"], ["\n  height: 24px;\n  width: 24px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
