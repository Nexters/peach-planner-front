"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_router_1 = require("react-router");
var styled_components_1 = require("styled-components");
var style_1 = require("./style/style");
var PlannerMiniCard = function (_a) {
    var id = _a.id, size = _a.size, image = _a.image, plannerName = _a.plannerName, companyName = _a.companyName, margin = _a.margin;
    var history = react_router_1.useHistory();
    var handleClick = function () {
        history.push("/planner/" + id);
    };
    return (React.createElement(Container, { margin: margin, onClick: handleClick },
        React.createElement(PlannerImage, { src: image, size: size }),
        React.createElement(style_1.Content, { height: "19px", width: "auto", fontSize: "13px", lineHeight: "normal", color: "#212529", margin: "8px 0px 0px 0px" }, plannerName),
        React.createElement(style_1.Content, { height: "18px", width: "auto", fontSize: "12px", lineHeight: "normal", color: "#212529" }, companyName)));
};
exports["default"] = PlannerMiniCard;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin: ", ";\n  cursor: pointer;\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin: ", ";\n  cursor: pointer;\n"])), function (props) { return ((props === null || props === void 0 ? void 0 : props.margin) ? props.margin : '0px'); });
var PlannerImage = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: ", "};\n  width: ", "};\n  border-radius: 10px;\n"], ["\n  height: ", "};\n  width: ", "};\n  border-radius: 10px;\n"])), function (props) { return props.size; }, function (props) { return props.size; });
var templateObject_1, templateObject_2;
