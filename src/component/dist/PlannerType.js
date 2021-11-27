"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var style_1 = require("./style/style");
var PlannerType = function (_a) {
    var type = _a.type, textHeight = _a.textHeight, typeHeight = _a.typeHeight;
    return (React.createElement(TypeBox, { height: typeHeight },
        React.createElement(style_1.Content, { height: textHeight, width: 'auto', color: '#D6336C', fontSize: '13px', lineHeight: '19px', margin: '2px 4px 2px 4px' }, type === 'USER' ? '유저' : '플래너')));
};
exports["default"] = PlannerType;
var TypeBox = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", ";\n  border-radius: 3px;\n  background-color: #fff0f6;\n  display: flex;\n  justify-content: 'center';\n  align-items: 'center';\n"], ["\n  height: ", ";\n  border-radius: 3px;\n  background-color: #fff0f6;\n  display: flex;\n  justify-content: 'center';\n  align-items: 'center';\n"])), function (props) { return props.height; });
var templateObject_1;
