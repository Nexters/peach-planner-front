"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Content = exports.Title = exports.FlexDiv = void 0;
var styled_components_1 = require("styled-components");
exports.FlexDiv = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: ", ";\n  height: ", ";\n  width: ", ";\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n  margin: ", ";\n"], ["\n  min-height: ", ";\n  height: ", ";\n  width: ", ";\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n  margin: ", ";\n"])), function (props) { return props.minHeight; }, function (props) { return props.height; }, function (props) { return props.width || '100%'; }, function (props) { return props.justify || 'center'; }, function (props) { return props.align || 'center'; }, function (props) { return props.direction || 'row'; }, function (props) { return props.margin; });
exports.Title = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n  color: ", ";\n  font-size: ", ";\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: ", ";\n  margin: ", ";\n  padding: ", ";\n"], ["\n  height: ", ";\n  width: ", ";\n  color: ", ";\n  font-size: ", ";\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: ", ";\n  margin: ", ";\n  padding: ", ";\n"])), function (props) { return props.height; }, function (props) { return props.width; }, function (props) { return (props.color ? props.color : '#000000'); }, function (props) { return props.fontSize; }, function (props) { return props.lineHeight; }, function (props) { return props.margin; }, function (props) { return props.padding; });
exports.Content = styled_components_1["default"].span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  margin: ", ";\n  -webkit-user-select: none;\n  cursor: ", ";\n"], ["\n  height: ", ";\n  width: ", ";\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  margin: ", ";\n  -webkit-user-select: none;\n  cursor: ", ";\n"])), function (props) { return props.height; }, function (props) { return props.width; }, function (props) { return props.color; }, function (props) { return props.fontSize; }, function (props) { return props.lineHeight; }, function (props) { return props.margin; }, function (props) { return (props.onClick ? 'pointer' : null); });
var templateObject_1, templateObject_2, templateObject_3;
