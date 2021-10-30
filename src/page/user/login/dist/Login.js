"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var axios_1 = require("axios");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var style_1 = require("src/component/style/style");
var AuthStatus_1 = require("src/atoms/AuthStatus");
var OAuth_1 = require("../OAuth/OAuth");
var ic_share_kakao_png_1 = require("../../../assets/img/ic_share_kakao.png");
var User_1 = require("src/api/User");
var emailRegExp = /^[0-9a-z]([-_\.]?[0-9a-z])*@[0-9a-z]([-_\.]?[0-9a-z])*\.[a-z]/;
var passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
var Login = function () {
    var history = react_router_dom_1.useHistory();
    var _a = AuthStatus_1.usePeachTokenState(), setPeachTokenState = _a[1];
    var _b = AuthStatus_1.useUserTypeState(), setUserTypeState = _b[1];
    var _c = react_1.useState(true), isValidEmail = _c[0], setIsValidEmail = _c[1];
    var _d = react_1.useState(true), isValidPassword = _d[0], setIsValidPassword = _d[1];
    var _e = react_1.useState({
        email: '',
        password: ''
    }), inputs = _e[0], setInputs = _e[1];
    var email = inputs.email, password = inputs.password;
    var handleForm = function (e) {
        e.preventDefault();
        if (email === '' || email.match(emailRegExp) === null) {
            setIsValidEmail(false);
            return;
        }
        else {
            setIsValidEmail(true);
        }
        if (!password) {
            setIsValidPassword(false);
            return;
        }
        login({
            userName: email,
            password: password,
            loginType: 'BASIC'
        });
    };
    var handleInput = function (e) {
        var _a;
        var _b = e.target, value = _b.value, name = _b.name;
        setInputs(__assign(__assign({}, inputs), (_a = {}, _a[name] = value, _a)));
    };
    var login = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var res, accessToken, refreshToken, user, expireTime;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('/auth/login', data)];
                case 1:
                    res = _a.sent();
                    accessToken = res.data.accessToken;
                    refreshToken = res.data.refreshToken;
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);
                    return [4 /*yield*/, User_1.getUser()];
                case 2:
                    user = _a.sent();
                    setUserTypeState(user.userType ? user.userType : 'USER');
                    history.push('/');
                    alert('로그인되었습니다.');
                    expireTime = Date.parse(res.data.expireDateTime);
                    setPeachTokenState(accessToken);
                    return [2 /*return*/];
            }
        });
    }); };
    var refreshToken = function () { return __awaiter(void 0, void 0, void 0, function () {
        var refreshToken, accessToken, config, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    refreshToken = localStorage.getItem('refreshToken');
                    accessToken = localStorage.getItem('accessToken');
                    config = {
                        headers: {
                            Authorization: "Bearer " + accessToken
                        }
                    };
                    return [4 /*yield*/, axios_1["default"].post('/auth/token/refresh', { refreshToken: refreshToken }, config)];
                case 1:
                    res = _a.sent();
                    localStorage.setItem('accessToken', res.data.accessToken);
                    localStorage.setItem('refreshToken', res.data.refreshToken);
                    setPeachTokenState(accessToken);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(style_1.FlexDiv, { direction: 'column', height: '700px', justify: 'flex-start' },
        react_1["default"].createElement(style_1.Title, { color: '#212529', height: '24px', fontSize: '18px', lineHeight: '27px', margin: '40px 0 24px' },
            "\uB85C\uADF8\uC778",
            ' '),
        react_1["default"].createElement("form", { onSubmit: handleForm },
            react_1["default"].createElement(style_1.FlexDiv, { justify: "flex-start", align: "flex-start", direction: "column", width: "undefined" },
                react_1["default"].createElement(Label, null, "\uC774\uBA54\uC77C"),
                react_1["default"].createElement(Input, { name: "email", value: email, placeholder: "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.", type: "text", id: "inputEmail", onChange: handleInput }),
                !isValidEmail && (react_1["default"].createElement(style_1.Content, { color: "#E03131", fontSize: "12px", height: "18px", width: "undefined", lineHeight: "18px" }, "\uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")),
                react_1["default"].createElement(Label, null, "\uBE44\uBC00\uBC88\uD638"),
                react_1["default"].createElement(Input, { name: "password", value: password, placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.", type: "password", id: "inputPassword", onChange: handleInput }),
                !isValidPassword && (react_1["default"].createElement(style_1.Content, { color: "#E03131", fontSize: "12px", height: "18px", width: "162px", lineHeight: "18px" }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")),
                react_1["default"].createElement(LogInButton, { radius: "3px", width: "312px", height: "40px", type: "submit", margin: "16px 0 0 0" }, "\uB85C\uADF8\uC778"))),
        react_1["default"].createElement(style_1.FlexDiv, { margin: "8px 0 20px 0", justify: "flex-end", width: '313px' },
            react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center', cursor: 'pointer' }, onClick: function () { return history.push('/findEmail'); } },
                react_1["default"].createElement(Span, { weight: "normal", cursor: "pointer" }, "\uC774\uBA54\uC77C"),
                react_1["default"].createElement("div", { style: { width: '4px', height: '4px', margin: '0 5px', backgroundColor: '#ced4da' } }),
                react_1["default"].createElement(Span, { weight: "normal", cursor: "pointer" }, "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"))),
        react_1["default"].createElement(style_1.FlexDiv, { margin: "0" },
            react_1["default"].createElement(Span, { weight: "normal" }, "\uB610\uB294")),
        react_1["default"].createElement("a", { href: OAuth_1.KAKAO_AUTH_URL, style: { textDecoration: 'none' } },
            react_1["default"].createElement(LogInButton, { radius: "3px", background: "#FFF000", border: "none", width: "312px", height: "40px", margin: "13px 0 10px" },
                react_1["default"].createElement(Image, { src: ic_share_kakao_png_1["default"] }),
                react_1["default"].createElement(Span, { color: "#000", cursor: "pointer" }, "\uCE74\uCE74\uC624\uB85C \uB85C\uADF8\uC778"))),
        react_1["default"].createElement(LogInButton, { radius: "3px", background: "#f1f3f5", border: "none", width: "312px", height: "40px", margin: "0 0 17.5px", onClick: function () { return history.push('/signUp'); } },
            react_1["default"].createElement(Span, { color: "#000", weight: "normal", cursor: "pointer" },
                "\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?",
                ' '),
            react_1["default"].createElement(Span, { color: "#000", cursor: "pointer" }, "\uD68C\uC6D0\uAC00\uC785 \uD558\uAE30")),
        react_1["default"].createElement(style_1.FlexDiv, null,
            react_1["default"].createElement(Span, { weight: "normal", margin: "0 5px 0 0" }, "\uD50C\uB798\uB108\uC774\uC2E0\uAC00\uC694?"),
            react_1["default"].createElement(Span, { color: "#E64980", cursor: "pointer", onClick: function () {
                    history.push('/plannerSignUp');
                } }, "\uD50C\uB798\uB108 \uAC00\uC785"))));
};
exports["default"] = Login;
var Span = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 20px;\n  width: auto;\n  color: ", ";\n  letter-spacing: 0;\n  line-height: 19px;\n  text-align: center;\n  margin: ", ";\n  cursor: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"], ["\n  height: 20px;\n  width: auto;\n  color: ", ";\n  letter-spacing: 0;\n  line-height: 19px;\n  text-align: center;\n  margin: ", ";\n  cursor: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"])), function (props) { return props.color || '#495057'; }, function (props) { return props.margin || '0'; }, function (props) { return props.cursor || 'default'; }, function (props) { return props.size || '14px'; }, function (props) { return props.weight || 'bold'; });
var Input = styled_components_1["default"].input.attrs(function (props) { return ({
    type: props.type || 'text'
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 41px;\n  width: 313px;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  color: #adb5bd;\n  font-size: 13px;\n  padding: 10.5px 11.5px;\n"], ["\n  box-sizing: border-box;\n  height: 41px;\n  width: 313px;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  color: #adb5bd;\n  font-size: 13px;\n  padding: 10.5px 11.5px;\n"])));
var LogInButton = styled_components_1["default"].button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  outline: none;\n  border: ", "; // 1px solid #e64980;\n  color: ", "; //#e64980\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 20px;\n  text-align: center;\n  box-sizing: ", ";\n  cursor: pointer;\n  margin: ", ";\n  :nth-child(1) {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    :hover {\n      background-color: #f8d756;\n    }\n  }\n  :nth-child(5) {\n    :hover {\n      background-color: #c2255c;\n    }\n  }\n  :nth-child(6) {\n    :hover {\n      background-color: #ced4da;\n    }\n  }\n"], ["\n  height: ", ";\n  width: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  outline: none;\n  border: ", "; // 1px solid #e64980;\n  color: ", "; //#e64980\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 20px;\n  text-align: center;\n  box-sizing: ", ";\n  cursor: pointer;\n  margin: ", ";\n  :nth-child(1) {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    :hover {\n      background-color: #f8d756;\n    }\n  }\n  :nth-child(5) {\n    :hover {\n      background-color: #c2255c;\n    }\n  }\n  :nth-child(6) {\n    :hover {\n      background-color: #ced4da;\n    }\n  }\n"])), function (props) { return props.height || '48px'; }, function (props) { return props.width || '48px'; }, function (props) { return props.radius || '100%'; }, function (props) { return props.background || '#e64980'; }, function (props) { return props.border || 'none'; }, function (props) { return props.color || '#ffffff'; }, function (props) { return props.box || 'border-box'; }, function (props) { return props.margin || '0'; });
var Label = styled_components_1["default"].label(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  font-size: 14px;\n  color: #495057;\n  line-height: 20px;\n  margin-bottom: 5.5px;\n  &:not(:first-child) {\n    margin-top: 4px;\n  }\n"], ["\n  flex: 1;\n  font-size: 14px;\n  color: #495057;\n  line-height: 20px;\n  margin-bottom: 5.5px;\n  &:not(:first-child) {\n    margin-top: 4px;\n  }\n"])));
var Image = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n  margin-right: 6.7px;\n"], ["\n  width: 20px;\n  height: 20px;\n  margin-right: 6.7px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
