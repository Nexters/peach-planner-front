"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var UserInfoIcon_1 = require("../../component/UserInfoIcon");
var Container_1 = require("./Container");
var styled_components_1 = require("styled-components");
var PButton_1 = require("../../component/PButton");
var react_router_1 = require("react-router");
var axios_1 = require("axios");
var PlannerInfo = function (_a) {
    var plannerInfo = _a.plannerInfo;
    var history = react_router_1.useHistory();
    var PLANNER_NAME = plannerInfo.name;
    var DETAIL = plannerInfo.summary;
    var LIKES = plannerInfo.likes;
    var DESCRIPTION = plannerInfo.description.split('\\n');
    var handleChat = function () {
        axios_1["default"]
            .post("/chat/rooms/" + plannerInfo.id, {}, { headers: { Authorization: "Bearer " + localStorage.getItem('accessToken') } })
            .then(function (res) {
            if (res.status == 200) {
                history.push('/chats');
            }
        });
    };
    return (react_1["default"].createElement(Container_1["default"], { title: "\uD50C\uB798\uB108 \uC18C\uAC1C" },
        react_1["default"].createElement(UserInfoIcon_1["default"], { imgSrc: plannerInfo.images[0], title: PLANNER_NAME, detail: DETAIL, likeCount: LIKES }),
        react_1["default"].createElement(Detail, null, DESCRIPTION.map(function (desc, i) { return (react_1["default"].createElement("div", { key: i }, desc)); })),
        react_1["default"].createElement(PButton_1["default"], { width: "108px", onClick: handleChat, otherBgColor: "#f1f3f5", border: "none" }, "1:1 \uBB38\uC758\uD558\uAE30")));
};
exports["default"] = PlannerInfo;
var Detail = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 30px 0 23.5px 0;\n  font-size: 16px;\n  color: #495057;\n"], ["\n  margin: 30px 0 23.5px 0;\n  font-size: 16px;\n  color: #495057;\n"])));
var templateObject_1;
