"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var CompanyItem = function (_a) {
    var id = _a.id, profilePath = _a.profilePath, name = _a.name, tel = _a.tel, certificated = _a.certificated, images = _a.images, summary = _a.summary, location = _a.location, handleInput = _a.handleInput, handleCompanyName = _a.handleCompanyName, handleClick = _a.handleClick;
    var onClick = function () {
        var company = {
            id: id,
            name: name,
            tel: tel,
            location: location,
            profilePath: profilePath,
            certificated: certificated,
            summary: summary,
            images: images
        };
        handleInput(company);
        handleCompanyName(name);
        handleClick();
    };
    return (React.createElement(Container, { onClick: onClick },
        React.createElement(CompanyIcon, { src: profilePath }),
        React.createElement(CompanyDescription, null,
            React.createElement(CompanyTitle, null, name),
            React.createElement(CompanyAddress, null, location))));
};
exports["default"] = CompanyItem;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  margin-bottom: 8px;\n  height: 40px;\n  width: 400px;\n  cursor: pointer;\n"], ["\n  display: flex;\n  margin-bottom: 8px;\n  height: 40px;\n  width: 400px;\n  cursor: pointer;\n"])));
var CompanyDescription = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var CompanyIcon = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 40px;\n  width: 40px;\n  margin-right: 8px;\n"], ["\n  height: 40px;\n  width: 40px;\n  margin-right: 8px;\n"])));
var CompanyTitle = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 20px;\n  width: auto;\n  color: #212529;\n  font-family: SpoqaHanSans;\n  font-size: 14px;\n  letter-spacing: 0;\n  line-height: 20px;\n"], ["\n  height: 20px;\n  width: auto;\n  color: #212529;\n  font-family: SpoqaHanSans;\n  font-size: 14px;\n  letter-spacing: 0;\n  line-height: 20px;\n"])));
var CompanyAddress = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 18px;\n  width: auto;\n  color: #868e96;\n  font-family: SpoqaHanSans;\n  font-size: 12px;\n  letter-spacing: 0;\n  line-height: 18px;\n"], ["\n  height: 18px;\n  width: auto;\n  color: #868e96;\n  font-family: SpoqaHanSans;\n  font-size: 12px;\n  letter-spacing: 0;\n  line-height: 18px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
