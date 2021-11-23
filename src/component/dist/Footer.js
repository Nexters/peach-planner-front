"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var ic_logo_svg_1 = require("../assets/svg/ic_logo.svg");
var styled_components_1 = require("styled-components");
var Footer = function () {
    return (React.createElement(Container, null,
        React.createElement(InnerContainer, null,
            React.createElement(Image, { src: ic_logo_svg_1["default"] }),
            React.createElement(BottomContainer, null,
                React.createElement(Item, null,
                    React.createElement(TermsPolicy, { href: "/termsOfUse", target: "_blank" }, "\uC774\uC6A9\uC57D\uAD00"),
                    '  ',
                    "|",
                    ' ',
                    React.createElement(TermsPolicy, { href: "/privacyPolicy", target: "_blank" }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68")),
                React.createElement(Item, null, "COPYRIGHT\u00A9 Peachplanner ALL RIGHT RESERVED")))));
};
exports["default"] = Footer;
var Container = styled_components_1["default"].footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n  padding: 35px 10%;\n  border-top: 1px solid;\n  border-top-color: #f1f3f5;\n"], ["\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n  padding: 35px 10%;\n  border-top: 1px solid;\n  border-top-color: #f1f3f5;\n"])));
var InnerContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 1100px;\n  /* display: flex; */\n"], ["\n  width: 1100px;\n  /* display: flex; */\n"])));
var BottomContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 37px;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  margin-top: 37px;\n  display: flex;\n  justify-content: space-between;\n"])));
var Item = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: #343a40;\n  font-size: 14px;\n  color: #868e96;\n"], ["\n  color: #343a40;\n  font-size: 14px;\n  color: #868e96;\n"])));
var Image = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 24.55px;\n  width: 140.58px;\n  margin: 0;\n  border-radius: 10px;\n"], ["\n  height: 24.55px;\n  width: 140.58px;\n  margin: 0;\n  border-radius: 10px;\n"])));
var TermsPolicy = styled_components_1["default"].a(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  text-decoration: none;\n  cursor: pointer;\n  color: #868e96;\n"], ["\n  text-decoration: none;\n  cursor: pointer;\n  color: #868e96;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
