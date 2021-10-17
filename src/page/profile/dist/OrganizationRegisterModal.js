"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TextArea = void 0;
var styled_components_1 = require("styled-components");
var reactjs_popup_1 = require("reactjs-popup");
var style_1 = require("../../component/style/style");
var ic_close_b_svg_1 = require("../../assets/svg/ic_close_b.svg");
var PButton_1 = require("../../component/PButton");
var SearchInput_1 = require("./SearchInput");
var HorizontalLine_1 = require("src/component/HorizontalLine");
var ImageUpload_1 = require("./ImageUpload");
var react_1 = require("react");
var react_query_1 = require("react-query");
var Company_1 = require("src/api/Company");
var OrganizationRegisterModal = function (_a) {
    var showImageModal = _a.showImageModal, closeImageModal = _a.closeImageModal;
    var _b = react_query_1.useMutation(Company_1.registerCompany, {
        onSuccess: function (data) { }
    }), mutate = _b.mutate, isLoading = _b.isLoading;
    var _c = react_1.useState(''), organizationName = _c[0], setOrganizationName = _c[1];
    var _d = react_1.useState(''), locaiton = _d[0], setLocation = _d[1];
    var _e = react_1.useState(''), description = _e[0], setDescription = _e[1];
    var _f = react_1.useState(''), phoneFirst = _f[0], setPhoneFirst = _f[1];
    var _g = react_1.useState(''), phoneMiddle = _g[0], setPhoneMiddle = _g[1];
    var _h = react_1.useState(''), phoneLast = _h[0], setPhoneLast = _h[1];
    var _j = react_1.useState(''), previewImage = _j[0], setPreviewImage = _j[1];
    var _k = react_1.useState(null), imageFile = _k[0], setImageFile = _k[1];
    var handleRegisterCompany = function () { };
    var handleChangeOrganizationName = function (e) {
        var value = e.target.value;
        setOrganizationName(value);
    };
    var handleLocation = function (e) {
        var value = e.target.value;
        setLocation(value);
    };
    var handleDescription = function (e) {
        var value = e.target.value;
        console.log(value);
        setDescription(value);
    };
    var handleFirst = function (e) {
        var value = e.target.value;
        setPhoneFirst(value);
    };
    var handleMiddle = function (e) {
        var value = e.target.value;
        setPhoneMiddle(value);
    };
    var handleLast = function (e) {
        var value = e.target.value;
        setPhoneLast(value);
    };
    var changePreviewImage = function (image) {
        setPreviewImage(image);
    };
    var changeImageFile = function (imageFile) {
        setImageFile(imageFile);
    };
    return (React.createElement(StyledPopup, { open: showImageModal, closeOnDocumentClick: true, onClose: closeImageModal },
        React.createElement(style_1.FlexDiv, { margin: "0", justify: "space-between", direction: "column" },
            React.createElement(style_1.FlexDiv, { margin: "0 0 16px 0", justify: "space-between" },
                React.createElement(style_1.Title, { height: '36px', width: 'auto', fontSize: '24px', lineHeight: '36px' }, "\uC5C5\uCCB4 \uB4F1\uB85D\uD558\uAE30"),
                React.createElement(CloseButton, { src: ic_close_b_svg_1["default"], onClick: closeImageModal })),
            React.createElement(style_1.FlexDiv, { margin: "0 0 15px 0", align: "flex-start", direction: "column" },
                React.createElement(style_1.Title, { height: '20px', width: 'auto', fontSize: '14px', color: "#495057", lineHeight: '36px', margin: "0 0 7px 0" }, "\uC5C5\uCCB4 \uC815\uBCF4"),
                React.createElement(HorizontalLine_1["default"], { color: "#CED4DA" })),
            React.createElement(style_1.FlexDiv, { margin: "0", justify: "space-between" },
                React.createElement(style_1.FlexDiv, { margin: "0 31px 0 0", justify: "flex-start", align: "start", direction: "column" },
                    React.createElement(style_1.Content, { height: '20px', width: 'auto', color: '#495057', fontSize: '14px', lineHeight: '20px', margin: '0 0 6px 0' }, "\uC5C5\uCCB4 \uC774\uB984"),
                    React.createElement(Input, { height: "41px", width: "341px", placeholder: "\uC5C5\uCCB4 \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", onChange: handleChangeOrganizationName }),
                    React.createElement(style_1.Content, { height: '20px', width: 'auto', color: '#495057', fontSize: '14px', lineHeight: '20px', margin: '16px 0 6px 0' }, "\uB300\uD45C \uC804\uD654\uBC88\uD638"),
                    React.createElement(style_1.FlexDiv, { margin: "0 0 0 0", justify: "flex-start", direction: "row" },
                        React.createElement(Input, { height: "41px", width: "51px", placeholder: "010", onChange: handleFirst }),
                        React.createElement(style_1.Content, { height: '16px', width: 'auto', color: '#ADB5BD', fontSize: '13px', lineHeight: '16px', margin: '0px 6px 0 6px' }, "-"),
                        React.createElement(Input, { height: "41px", width: "60px", placeholder: "1234", onChange: handleMiddle }),
                        React.createElement(style_1.Content, { height: '16px', width: 'auto', color: '#ADB5BD', fontSize: '13px', lineHeight: '16px', margin: '0px 6px 0 6px' }, "-"),
                        React.createElement(Input, { height: "41px", width: "60px", placeholder: "1234", onChange: handleLast })),
                    React.createElement(style_1.Content, { height: '20px', width: 'auto', color: '#495057', fontSize: '14px', lineHeight: '20px', margin: '16px 0 6px 0' }, "\uC704\uCE58"),
                    React.createElement(SearchInput_1["default"], { height: "41px", width: "341px", placeholder: "\uC704\uCE58\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.", handleInput: handleLocation }),
                    React.createElement(style_1.Content, { height: '20px', width: 'auto', color: '#495057', fontSize: '14px', lineHeight: '20px', margin: '16px 0 6px 0' }, "\uC5C5\uCCB4 \uC18C\uAC1C"),
                    React.createElement(exports.TextArea, { placeholder: "\uC5C5\uCCB4 \uC18C\uAC1C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.", onChange: handleDescription })),
                React.createElement(style_1.FlexDiv, { margin: "0", height: "400px", justify: "flex-start", align: "start", direction: "column" },
                    React.createElement(style_1.Content, { height: '20px', width: 'auto', color: '#495057', fontSize: '14px', lineHeight: '20px', margin: '0' }, "\uB300\uD45C\uC0AC\uC9C4 \uB4F1\uB85D"),
                    React.createElement(ImageUpload_1["default"], { id: "modal", previewImage: previewImage, setImageFile: changeImageFile, setPreviewImage: changePreviewImage }))),
            React.createElement(style_1.FlexDiv, { margin: "16px 0 0 0", justify: "flex-start", align: "start" },
                React.createElement(PButton_1["default"], { color: "pink", fontSize: "14px", height: "40px", width: "341px", fontWeight: "bold" }, "\uB4F1\uB85D\uD558\uAE30")))));
};
exports["default"] = OrganizationRegisterModal;
var StyledPopup = styled_components_1["default"](reactjs_popup_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &-overlay {\n    background-color: rgb(0, 0, 0, 0.8);\n  }\n\n  &-content {\n    background-color: white;\n    width: 40%;\n    height: 65%;\n    border-radius: 10px;\n    padding: 40px 60px 40px 60px;\n  }\n"], ["\n  &-overlay {\n    background-color: rgb(0, 0, 0, 0.8);\n  }\n\n  &-content {\n    background-color: white;\n    width: 40%;\n    height: 65%;\n    border-radius: 10px;\n    padding: 40px 60px 40px 60px;\n  }\n"])));
var CloseButton = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  height: 24px;\n  width: 24px;\n"], ["\n  cursor: pointer;\n  height: 24px;\n  width: 24px;\n"])));
var Input = styled_components_1["default"].input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: ", ";\n  width: ", ";\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"], ["\n  box-sizing: border-box;\n  height: ", ";\n  width: ", ";\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"])), function (props) { return props.height; }, function (props) { return props.width; });
exports.TextArea = styled_components_1["default"].textarea(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 121px;\n  width: 341px;\n  padding: 13px;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  resize: none;\n"], ["\n  box-sizing: border-box;\n  height: 121px;\n  width: 341px;\n  padding: 13px;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  resize: none;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
