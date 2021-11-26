"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var style_1 = require("../../component/style/style");
var SnsSite = function (_a) {
    var title = _a.title, url = _a.url, margin = _a.margin, inputName = _a.inputName, defaultValue = _a.defaultValue, handleSns = _a.handleSns;
    return (React.createElement(style_1.FlexDiv, { margin: margin, align: "start", direction: "column" },
        React.createElement(style_1.Content, { height: '24px', width: 'auto', color: '#495057', fontSize: '16px', lineHeight: '24px', margin: '0 0 8px 0' }, title),
        React.createElement(style_1.FlexDiv, { margin: "0", justify: "flex-start" },
            React.createElement(style_1.Content, { height: '24px', width: 'auto', color: '#000000', fontSize: '16px', lineHeight: '24px', margin: '0 8px 0 0' }, url),
            React.createElement(Input, { name: inputName, defaultValue: defaultValue, onChange: handleSns }))));
};
exports["default"] = SnsSite;
var Input = styled_components_1["default"].input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 41px;\n  width: 184px;\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"], ["\n  box-sizing: border-box;\n  height: 41px;\n  width: 184px;\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"])));
var templateObject_1;
