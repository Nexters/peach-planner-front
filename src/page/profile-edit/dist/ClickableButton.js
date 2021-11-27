"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var style_1 = require("../../component/style/style");
var ClickableButton = function (_a) {
    var items = _a.items, handleItems = _a.handleItems, content = _a.content, isAlreadyClicked = _a.isAlreadyClicked;
    var _b = react_1.useState(isAlreadyClicked), isClicked = _b[0], setIsClicked = _b[1];
    var handleClick = function () {
        if (!isClicked) {
            handleItems(items.concat(content));
        }
        else {
            var removedItems = items.filter(function (item) { return item !== content; });
            handleItems(removedItems);
        }
        setIsClicked(!isClicked);
    };
    react_1.useEffect(function () {
        setIsClicked(isAlreadyClicked);
    }, [isAlreadyClicked]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Circle, { border: isClicked ? '1px solid #E64980' : '1px solid #ced4da', backgroundColor: isClicked ? '#E64980' : '', onClick: handleClick },
            React.createElement(style_1.Content, { height: '24px', width: 'auto', color: isClicked ? '#FFFFFF' : '#868E96', fontSize: '13px', lineHeight: '32px', margin: '9px 20px 9px 20px' }, content.display))));
};
exports["default"] = ClickableButton;
var Circle = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 37px;\n  width: auto;\n  border: ", ";\n  background-color: ", ";\n  border-radius: 20.5px;\n  cursor: pointer;\n  margin: 0px 7px 11px 0px;\n"], ["\n  box-sizing: border-box;\n  height: 37px;\n  width: auto;\n  border: ", ";\n  background-color: ", ";\n  border-radius: 20.5px;\n  cursor: pointer;\n  margin: 0px 7px 11px 0px;\n"])), function (props) { return props.border; }, function (props) { return (props.backgroundColor ? props.backgroundColor : ''); });
var templateObject_1;
