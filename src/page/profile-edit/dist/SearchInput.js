"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var ic_search_svg_1 = require("../../assets/svg/ic_search.svg");
var SearchInput = function (_a) {
    var height = _a.height, width = _a.width, placeholder = _a.placeholder, handleInput = _a.handleInput, onFocus = _a.onFocus, value = _a.value;
    return (React.createElement(SearchBox, null,
        React.createElement(Input, { height: height, width: width, placeholder: placeholder, onChange: handleInput, onFocus: onFocus, value: value }),
        React.createElement(SearchIcon, { src: ic_search_svg_1["default"] })));
};
exports["default"] = SearchInput;
var SearchBox = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var SearchIcon = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  right: 0;\n  margin-right: 10px;\n  margin-top: 10px;\n"], ["\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  right: 0;\n  margin-right: 10px;\n  margin-top: 10px;\n"])));
var Input = styled_components_1["default"].input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: ", ";\n  width: ", ";\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  position: relative;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"], ["\n  box-sizing: border-box;\n  height: ", ";\n  width: ", ";\n  border: 1px solid #ced4da;\n  padding: 13px;\n  border-radius: 3px;\n  position: relative;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ADB5BD;\n    font-size: 13px;\n  }\n"])), function (props) { return props.height; }, function (props) { return props.width; });
var templateObject_1, templateObject_2, templateObject_3;
