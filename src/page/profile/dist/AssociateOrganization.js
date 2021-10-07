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
var react_1 = require("react");
var style_1 = require("../../component/style/style");
var LindAndTitle_1 = require("./LindAndTitle");
var PButton_1 = require("../../component/PButton");
var styled_components_1 = require("styled-components");
var HorizontalLine_1 = require("src/component/HorizontalLine");
var ImageUpload_1 = require("./ImageUpload");
var Organization_1 = require("./Organization");
var Image_1 = require("src/api/Image");
var AssociateOrganization = function (_a) {
    var id = _a.id, name = _a.name, margin = _a.margin, handleStores = _a.handleStores;
    var _b = react_1.useState(''), organizationName = _b[0], setOrganizationName = _b[1];
    var _c = react_1.useState(''), previewImage = _c[0], setPreviewImage = _c[1];
    var _d = react_1.useState(null), imageFile = _d[0], setImageFile = _d[1];
    var _e = react_1.useState([]), organizations = _e[0], setOrganizations = _e[1];
    var registOrganization = function () { return __awaiter(void 0, void 0, void 0, function () {
        var organization, s3ImageUrl, store;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!organizationName || organizations.length >= 10)
                        return [2 /*return*/];
                    organization = {
                        name: organizationName,
                        previewImage: previewImage,
                        imageFile: imageFile
                    };
                    return [4 /*yield*/, Image_1.upload(imageFile)];
                case 1:
                    s3ImageUrl = _a.sent();
                    store = {
                        name: organizationName,
                        previewImage: previewImage,
                        imageUrl: s3ImageUrl
                    };
                    setOrganizations(organizations === null || organizations === void 0 ? void 0 : organizations.concat(organization));
                    handleStores(store);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleChangeOrganizationName = function (e) {
        var value = e.target.value;
        setOrganizationName(value);
    };
    var changePreviewImage = function (image) {
        setPreviewImage(image);
    };
    var changeImageFile = function (imageFile) {
        setImageFile(imageFile);
    };
    return (React.createElement(style_1.FlexDiv, { width: "632px", margin: margin, direction: "column", justify: "flex-start", align: "start" },
        React.createElement(LindAndTitle_1["default"], { title: "\uC81C\uD734 " + name + " \uC5C5\uCCB4", content: "\uC81C\uD734\uC5C5\uCCB4\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC5B4\uC694." }),
        React.createElement(style_1.Content, { height: '24px', width: 'auto', color: '#495057', fontSize: '16px', lineHeight: '24px', margin: '20px 0 8px 0' }, name + " \uC5C5\uCCB4 \uC774\uB984"),
        React.createElement(Input, { value: organizationName, onChange: handleChangeOrganizationName }),
        React.createElement(style_1.Content, { height: '24px', width: 'auto', color: '#495057', fontSize: '16px', lineHeight: '24px', margin: '13px 0 12px 0' }, name + " \uC5C5\uCCB4 \uC0AC\uC9C4"),
        React.createElement(ImageUpload_1["default"], { id: id, previewImage: previewImage, setPreviewImage: changePreviewImage, setImageFile: changeImageFile }),
        React.createElement(HorizontalLine_1["default"], { color: "#dee2e6" }),
        React.createElement(style_1.FlexDiv, { margin: "15px 0 72px 0", direction: "row", justify: "space-between", align: "start" },
            React.createElement(PButton_1["default"], { color: "black", fontSize: "14px", height: "45px", width: "126px", onClick: registOrganization }, "\uC5C5\uCCB4 \uB4F1\uB85D\uD558\uAE30"),
            React.createElement(style_1.FlexDiv, { margin: "8px 0 0 0", direction: "row", justify: "flex-end", align: "start" })),
        React.createElement(OrganizationLists, null, organizations ? (organizations.map(function (organization, index) {
            return React.createElement(Organization_1["default"], { key: index, name: organization.name, image: organization.previewImage });
        })) : (React.createElement(React.Fragment, null))),
        React.createElement(HorizontalLine_1["default"], { color: "#868E96" })));
};
exports["default"] = AssociateOrganization;
var Input = styled_components_1["default"].input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 41px;\n  width: 421px;\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"], ["\n  box-sizing: border-box;\n  height: 41px;\n  width: 421px;\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"])));
var OrganizationLists = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  flex-flow: row wrap;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  flex-flow: row wrap;\n"])));
var templateObject_1, templateObject_2;
