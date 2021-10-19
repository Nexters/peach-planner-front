"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var Image_1 = require("src/api/Image");
var CompanyRegisterModal = function (_a) {
    var showImageModal = _a.showImageModal, closeImageModal = _a.closeImageModal;
    var _b = react_query_1.useMutation(Company_1.registerCompany, {
        onSuccess: function (data) {
            closeImageModal();
        }
    }), mutate = _b.mutate, isLoading = _b.isLoading;
    var _c = react_1.useState(''), companyName = _c[0], setCompanyName = _c[1];
    var _d = react_1.useState(''), region = _d[0], setRegion = _d[1];
    var _e = react_1.useState(''), description = _e[0], setDescription = _e[1];
    var _f = react_1.useState(''), phoneFirst = _f[0], setPhoneFirst = _f[1];
    var _g = react_1.useState(''), phoneMiddle = _g[0], setPhoneMiddle = _g[1];
    var _h = react_1.useState(''), phoneLast = _h[0], setPhoneLast = _h[1];
    var _j = react_1.useState(''), previewImage = _j[0], setPreviewImage = _j[1];
    var _k = react_1.useState(null), imageFile = _k[0], setImageFile = _k[1];
    var validateInput = function () {
        return (phoneFirst.length === 3 &&
            phoneMiddle.length === 4 &&
            phoneLast.length === 4 &&
            companyName.length > 0 &&
            region.length > 0 &&
            description.length > 0 &&
            imageFile);
    };
    var handleRegisterCompany = function () { return __awaiter(void 0, void 0, void 0, function () {
        var s3ImageUrl, tel, companyRequest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!validateInput())
                        return [2 /*return*/];
                    return [4 /*yield*/, Image_1.upload(imageFile)];
                case 1:
                    s3ImageUrl = _a.sent();
                    tel = phoneFirst + '-' + phoneMiddle + '-' + phoneLast;
                    companyRequest = {
                        location: region,
                        name: companyName,
                        profilePath: s3ImageUrl,
                        tel: tel,
                        summary: description,
                        images: [s3ImageUrl]
                    };
                    mutate(companyRequest);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleChangeCompanyName = function (e) {
        var value = e.target.value;
        setCompanyName(value);
    };
    var handleRegion = function (e) {
        var value = e.target.value;
        setRegion(value);
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
                    React.createElement(Input, { height: "41px", width: "341px", placeholder: "\uC5C5\uCCB4 \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", onChange: handleChangeCompanyName }),
                    React.createElement(style_1.Content, { height: '20px', width: 'auto', color: '#495057', fontSize: '14px', lineHeight: '20px', margin: '16px 0 6px 0' }, "\uB300\uD45C \uC804\uD654\uBC88\uD638"),
                    React.createElement(style_1.FlexDiv, { margin: "0 0 0 0", justify: "flex-start", direction: "row" },
                        React.createElement(Input, { height: "41px", width: "51px", placeholder: "010", onChange: handleFirst, maxLength: 3 }),
                        React.createElement(style_1.Content, { height: '16px', width: 'auto', color: '#ADB5BD', fontSize: '13px', lineHeight: '16px', margin: '0px 6px 0 6px' }, "-"),
                        React.createElement(Input, { height: "41px", width: "60px", placeholder: "1234", onChange: handleMiddle, maxLength: 4 }),
                        React.createElement(style_1.Content, { height: '16px', width: 'auto', color: '#ADB5BD', fontSize: '13px', lineHeight: '16px', margin: '0px 6px 0 6px' }, "-"),
                        React.createElement(Input, { height: "41px", width: "60px", placeholder: "1234", onChange: handleLast, maxLength: 4 })),
                    React.createElement(style_1.Content, { height: '20px', width: 'auto', color: '#495057', fontSize: '14px', lineHeight: '20px', margin: '16px 0 6px 0' }, "\uC704\uCE58"),
                    React.createElement(SearchInput_1["default"], { height: "41px", width: "341px", placeholder: "\uC704\uCE58\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.", handleInput: handleRegion }),
                    React.createElement(style_1.Content, { height: '20px', width: 'auto', color: '#495057', fontSize: '14px', lineHeight: '20px', margin: '16px 0 6px 0' }, "\uC5C5\uCCB4 \uC18C\uAC1C"),
                    React.createElement(exports.TextArea, { placeholder: "\uC5C5\uCCB4 \uC18C\uAC1C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.", onChange: handleDescription })),
                React.createElement(style_1.FlexDiv, { margin: "0", height: "400px", justify: "flex-start", align: "start", direction: "column" },
                    React.createElement(style_1.Content, { height: '20px', width: 'auto', color: '#495057', fontSize: '14px', lineHeight: '20px', margin: '0' }, "\uB300\uD45C\uC0AC\uC9C4 \uB4F1\uB85D"),
                    React.createElement(ImageUpload_1["default"], { id: "modal", previewImage: previewImage, setImageFile: changeImageFile, setPreviewImage: changePreviewImage }))),
            React.createElement(style_1.FlexDiv, { margin: "16px 0 0 0", justify: "flex-start", align: "start" },
                React.createElement(PButton_1["default"], { color: "pink", fontSize: "14px", height: "40px", width: "341px", fontWeight: "bold", onClick: handleRegisterCompany }, "\uB4F1\uB85D\uD558\uAE30")))));
};
exports["default"] = CompanyRegisterModal;
var StyledPopup = styled_components_1["default"](reactjs_popup_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &-overlay {\n    background-color: rgb(0, 0, 0, 0.8);\n  }\n\n  &-content {\n    background-color: white;\n    width: 40%;\n    height: 65%;\n    border-radius: 10px;\n    padding: 40px 60px 40px 60px;\n  }\n"], ["\n  &-overlay {\n    background-color: rgb(0, 0, 0, 0.8);\n  }\n\n  &-content {\n    background-color: white;\n    width: 40%;\n    height: 65%;\n    border-radius: 10px;\n    padding: 40px 60px 40px 60px;\n  }\n"])));
var CloseButton = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  height: 24px;\n  width: 24px;\n"], ["\n  cursor: pointer;\n  height: 24px;\n  width: 24px;\n"])));
var Input = styled_components_1["default"].input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: ", ";\n  width: ", ";\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"], ["\n  box-sizing: border-box;\n  height: ", ";\n  width: ", ";\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"])), function (props) { return props.height; }, function (props) { return props.width; });
exports.TextArea = styled_components_1["default"].textarea(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 121px;\n  width: 341px;\n  padding: 13px;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  resize: none;\n"], ["\n  box-sizing: border-box;\n  height: 121px;\n  width: 341px;\n  padding: 13px;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  resize: none;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
