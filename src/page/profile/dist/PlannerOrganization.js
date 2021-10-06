"use strict";
exports.__esModule = true;
var style_1 = require("../../component/style/style");
var SideText_1 = require("./SideText");
var HorizontalLine_1 = require("../../component/HorizontalLine");
var OrganizationRegisterModal_1 = require("./OrganizationRegisterModal");
var react_1 = require("react");
var SearchInput_1 = require("./SearchInput");
var PlannerOrganization = function (_a) {
    var handleOrgName = _a.handleOrgName;
    var _b = react_1.useState(false), showImageModal = _b[0], setShowImageModal = _b[1];
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
        React.createElement(SearchInput_1["default"], { height: "41px", width: "421px", placeholder: "\uC6E8\uB529 \uC5C5\uCCB4 \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", handleInput: handleOrgName }),
        React.createElement(style_1.FlexDiv, { margin: "8px 0 0 0", direction: "row", justify: "flex-start", align: "start" },
            React.createElement(SideText_1["default"], { text: "\uC5C5\uCCB4\uAC00 \uB4F1\uB85D\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC73C\uC2E0\uAC00\uC694?", colorText: "\uC5C5\uCCB4 \uB4F1\uB85D\uD558\uAE30", onClick: openImageModal }),
            React.createElement(OrganizationRegisterModal_1["default"], { showImageModal: showImageModal, closeImageModal: closeImageModal }))));
};
exports["default"] = PlannerOrganization;
