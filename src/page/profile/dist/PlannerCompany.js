"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var style_1 = require("../../component/style/style");
var SideText_1 = require("./SideText");
var HorizontalLine_1 = require("../../component/HorizontalLine");
var OrganizationRegisterModal_1 = require("./OrganizationRegisterModal");
var react_1 = require("react");
var SearchInput_1 = require("./SearchInput");
var Company_1 = require("src/api/Company");
var react_query_1 = require("react-query");
var styled_components_1 = require("styled-components");
var CompanyItem_1 = require("./CompanyItem");
var PlannerCompany = function (_a) {
    var companyName = _a.companyName, handleCompanyName = _a.handleCompanyName, handleCompanyItem = _a.handleCompanyItem;
    var _b = react_1.useState(false), focused = _b[0], setFocused = _b[1];
    var data = react_query_1.useQuery(['companies', companyName], Company_1.fetchCompanies, { enabled: focused }).data;
    var onFocus = function () { return setFocused(true); };
    var onBlur = function () { return setFocused(false); };
    var _c = react_1.useState(false), showImageModal = _c[0], setShowImageModal = _c[1];
    var openImageModal = function () { return setShowImageModal(true); };
    var closeImageModal = function () {
        setShowImageModal(false);
    };
    return (React.createElement(style_1.FlexDiv, { width: "632px", margin: "0 0 72px 0", direction: "column", justify: "flex-start", align: "start" },
        React.createElement(HorizontalLine_1["default"], { color: "#868E96" }),
        React.createElement(style_1.FlexDiv, { width: "632px", direction: "row", justify: "flex-start", align: "center", margin: "12px 0 0 0" },
            React.createElement(style_1.Title, { height: '27px', width: '400px', fontSize: '18px', lineHeight: '27px', margin: '0' }, "\uC18C\uC18D\uC5C5\uCCB4 \uC815\uBCF4")),
        React.createElement(style_1.Content, { height: '19px', width: 'auto', color: '#495057', fontSize: '13px', lineHeight: '19px', margin: '4px 0 20px 0' }, "\uC18C\uC18D \uC6E8\uB529\uC5C5\uCCB4\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC5B4\uC694."),
        React.createElement(style_1.Content, { height: '24px', width: 'auto', color: '#495057', fontSize: '16px', lineHeight: '24px', margin: '20px 0 8px 0' }, "\uC6E8\uB529\uC5C5\uCCB4 \uC774\uB984"),
        React.createElement(SearchInput_1["default"], { height: "41px", width: "421px", placeholder: "\uC6E8\uB529 \uC5C5\uCCB4 \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", handleInput: handleCompanyName, onFocus: onFocus, value: companyName }),
        focused ? (React.createElement(Container, null,
            React.createElement(CompanyContainer, null,
                React.createElement(CompanyInnerContainer, null, data ? (data.companies.map(function (company) {
                    return (React.createElement(CompanyItem_1["default"], { key: company.id, id: company.id, tel: company.tel, location: company.location, certificated: company.certificated, profilePath: company.profilePath, name: company.name, images: company.images, summary: company.summary, handleInput: handleCompanyItem, handleCompanyName: handleCompanyName, handleClick: onBlur }));
                })) : (React.createElement(React.Fragment, null)))))) : (React.createElement(React.Fragment, null)),
        React.createElement(style_1.FlexDiv, { margin: "8px 0 0 0", direction: "row", justify: "flex-start", align: "start" },
            React.createElement(SideText_1["default"], { text: "\uC5C5\uCCB4\uAC00 \uB4F1\uB85D\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC73C\uC2E0\uAC00\uC694?", colorText: "\uC5C5\uCCB4 \uB4F1\uB85D\uD558\uAE30", onClick: openImageModal }),
            React.createElement(OrganizationRegisterModal_1["default"], { showImageModal: showImageModal, closeImageModal: closeImageModal }))));
};
exports["default"] = PlannerCompany;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var CompanyContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 252px;\n  width: 420px;\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 #adb5bd;\n  position: absolute;\n  overflow: auto;\n  overflow-x: hidden;\n"], ["\n  height: 252px;\n  width: 420px;\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 #adb5bd;\n  position: absolute;\n  overflow: auto;\n  overflow-x: hidden;\n"])));
var CompanyInnerContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 10px;\n  margin-left: 10px;\n"], ["\n  margin-top: 10px;\n  margin-left: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
