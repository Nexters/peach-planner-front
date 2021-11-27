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
var PButton_1 = require("src/component/PButton");
var checkAuth_1 = require("src/routes/checkAuth");
var styled_components_1 = require("styled-components");
var react_router_1 = require("react-router");
var axios_1 = require("axios");
var Pick_1 = require("src/api/Pick");
var SummaryButton = function (_a) {
    var plannerInfo = _a.plannerInfo, setPlannerInfo = _a.setPlannerInfo;
    var history = react_router_1.useHistory();
    var handleEstimateClick = function () {
        var plannerId = plannerInfo.id;
        history.push("/estimate/" + plannerId);
    };
    var pickPlanner = function () {
        handleNoneUser();
        var plannerId = plannerInfo.id;
        Pick_1.pick({ targetCategoryType: 'PLANNER', targetId: plannerId, toBePick: !plannerInfo.postLiked });
        if (plannerInfo.postLiked) {
            setPlannerInfo(__assign(__assign({}, plannerInfo), { likes: plannerInfo.likes - 1, postLiked: !plannerInfo.postLiked }));
        }
        else {
            setPlannerInfo(__assign(__assign({}, plannerInfo), { likes: plannerInfo.likes + 1, postLiked: !plannerInfo.postLiked }));
        }
    };
    var handleNoneUser = function () {
        var auth = checkAuth_1.checkAuth();
        if (!auth) {
            history.push('/login');
            return;
        }
    };
    var handleChat = function () {
        handleNoneUser();
        axios_1["default"]
            .post("/chat/rooms/" + plannerInfo.id, {}, { headers: { Authorization: "Bearer " + localStorage.getItem('accessToken') } })
            .then(function (res) {
            if (res.status === 200) {
                history.push('/chats');
            }
        });
    };
    return (React.createElement(Container, null,
        React.createElement(PButton_1["default"], { color: "pink", onClick: handleEstimateClick }, "\uACAC\uC801 \uC694\uCCAD\uD558\uAE30"),
        React.createElement(ButtonContainer, null,
            React.createElement(PButton_1["default"], { onClick: handleChat, otherBgColor: "#f1f3f5", border: "none" }, "1:1 \uBB38\uC758\uD558\uAE30"),
            React.createElement(PButton_1["default"], { onClick: pickPlanner, otherBgColor: "#f1f3f5", border: "none" },
                React.createElement(Vertical, null,
                    React.createElement("img", { src: plannerInfo.postLiked ? FullHeart : EmptyHeart })),
                ' ',
                React.createElement(Vertical, null, "\uCC1C\uD558\uAE30")))));
};
exports["default"] = SummaryButton;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var ButtonContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 13.5px;\n  display: flex;\n\n  button + button {\n    margin-left: 13px;\n  }\n"], ["\n  margin-top: 13.5px;\n  display: flex;\n\n  button + button {\n    margin-left: 13px;\n  }\n"])));
var Vertical = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  vertical-align: middle;\n  display: inline-block;\n"], ["\n  vertical-align: middle;\n  display: inline-block;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
