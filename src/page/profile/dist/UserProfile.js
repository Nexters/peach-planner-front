"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var style_1 = require("../../component/style/style");
var PButton_1 = require("../../component/PButton");
var ic_account_default_svg_1 = require("../../assets/svg/ic_account_default.svg");
var ic_changephoto_svg_1 = require("../../assets/svg/ic_changephoto.svg");
var react_1 = require("react");
var userProps = {
    name: '홍길동',
    type: '플래너'
};
var UserProfile = function (_a) {
    var name = _a.name, type = _a.type;
    var _b = react_1.useState(''), previewImage = _b[0], setPreviewImage = _b[1];
    var _c = react_1.useState(null), imageFile = _c[0], setImageFile = _c[1];
    var handleFile = function (e) {
        var file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImageFromFile(file);
        }
    };
    var setImageFromFile = function (file) {
        var reader = new FileReader();
        reader.onloadend = function () {
            var image = reader.result;
            if (image) {
                setPreviewImage(image.toString());
            }
        };
        reader.readAsDataURL(file);
    };
    return (React.createElement(style_1.FlexDiv, { justify: "flex-start", margin: "0 0 0 0" },
        React.createElement(Box, null,
            React.createElement(style_1.FlexDiv, { margin: "0", direction: "column" },
                React.createElement(ProfileImageBox, null,
                    React.createElement(ProfileImage, { src: previewImage ? previewImage : ic_account_default_svg_1["default"] }),
                    React.createElement(Input, { id: "profile-image-file", type: "file", onChange: handleFile }),
                    React.createElement(Label, { htmlFor: "profile-image-file" },
                        React.createElement(EditIcon, { src: ic_changephoto_svg_1["default"] }))),
                React.createElement(style_1.Title, { height: '27px', width: 'auto', fontSize: '18px', lineHeight: '27px', margin: '24px 0 7px 0' }, name ? name : ''),
                React.createElement(TypeBox, null,
                    React.createElement(style_1.Content, { height: '19px', width: 'auto', color: '#D6336C', fontSize: '13px', lineHeight: '19px', margin: '2px 4px 2px 4px' }, type === 'USER' ? '유저' : '플래너')),
                React.createElement(style_1.FlexDiv, { margin: "18px 0 0 0", direction: "column" },
                    React.createElement(PButton_1["default"], { fontSize: "14px", height: "41px", width: "98px" }, "\uACC4\uC815 \uC124\uC815"))))));
};
exports["default"] = UserProfile;
var TypeBox = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 22px;\n  border-radius: 3px;\n  background-color: #fff0f6;\n  display: flex;\n  justify-content: 'center';\n  align-items: 'center';\n"], ["\n  height: 22px;\n  border-radius: 3px;\n  background-color: #fff0f6;\n  display: flex;\n  justify-content: 'center';\n  align-items: 'center';\n"])));
var Box = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 340px;\n  width: 310px;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: 'center';\n  align-items: 'center';\n"], ["\n  box-sizing: border-box;\n  height: 340px;\n  width: 310px;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: 'center';\n  align-items: 'center';\n"])));
var ProfileImageBox = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n"])));
var ProfileImage = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 124px;\n  width: 124px;\n  margin: 0;\n  border-radius: 100%;\n  position: relative;\n"], ["\n  height: 124px;\n  width: 124px;\n  margin: 0;\n  border-radius: 100%;\n  position: relative;\n"])));
var EditIcon = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 41px;\n  width: 41px;\n  border: 1px solid #ffffff;\n  background-color: #f1f3f5;\n  border-radius: 100%;\n  position: absolute;\n  cursor: pointer;\n"], ["\n  box-sizing: border-box;\n  height: 41px;\n  width: 41px;\n  border: 1px solid #ffffff;\n  background-color: #f1f3f5;\n  border-radius: 100%;\n  position: absolute;\n  cursor: pointer;\n"])));
var Label = styled_components_1["default"].label(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n"])));
var Input = styled_components_1["default"].input(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: none;\n"], ["\n  display: none;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
