"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var style_1 = require("../../component/style/style");
var LindAndTitle_1 = require("./LindAndTitle");
var SnsSite_1 = require("./SnsSite");
var SnsSetting = function (_a) {
    var instagram = _a.instagram, facebook = _a.facebook, blog = _a.blog, handleSns = _a.handleSns;
    return (React.createElement(style_1.FlexDiv, { width: "632px", margin: "0 0 72px 0", direction: "column", justify: "flex-start", align: "start" },
        React.createElement(LindAndTitle_1["default"], { title: "SNS \uC124\uC815", content: "\uC5F0\uACB0\uB41C SNS\uB294 \uC6E8\uB529\uD50C\uB798\uB108 \uD398\uC774\uC9C0\uC5D0 \uB178\uCD9C\uB429\uB2C8\uB2E4." }),
        React.createElement(style_1.Content, { height: '24px', width: 'auto', color: '#495057', fontSize: '16px', lineHeight: '24px', margin: '0px 0 8px 0' }, "\uC6F9 \uC0AC\uC774\uD2B8"),
        React.createElement(Input, { name: "webUrl", onChange: handleSns }),
        React.createElement(SnsSite_1["default"], { title: "\uC778\uC2A4\uD0C0\uADF8\uB7A8", url: "https://www.instagram.com/", margin: "16px 0 0 0", inputName: "instagramUrl", handleSns: handleSns, defaultValue: instagram }),
        React.createElement(SnsSite_1["default"], { title: "\uD398\uC774\uC2A4\uBD81", url: "http://facebook.com/", margin: "24px 0 0 0", inputName: "facebookUrl", handleSns: handleSns, defaultValue: facebook }),
        React.createElement(SnsSite_1["default"], { title: "\uBE14\uB85C\uADF8", url: "https://blog.naver.com/", margin: "24px 0 0 0", inputName: "blogUrl", handleSns: handleSns, defaultValue: blog })));
};
exports["default"] = SnsSetting;
var Input = styled_components_1["default"].input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 41px;\n  width: 421px;\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"], ["\n  box-sizing: border-box;\n  height: 41px;\n  width: 421px;\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"])));
var templateObject_1;
