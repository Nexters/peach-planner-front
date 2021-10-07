"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var style_1 = require("../../../component/style/style");
var SmallRecommendPost = function (_a) {
    var title = _a.title, content = _a.content, img = _a.img, tag = _a.tag, blogUrl = _a.blogUrl;
    return (React.createElement(PostBox, { onClick: function (e) { return (window.location.href = blogUrl); } },
        React.createElement(style_1.FlexDiv, { margin: '0', "justify-content": "flex-start", align: "start", direction: "column" },
            React.createElement(Title, null, title),
            React.createElement(Content, null, content),
            React.createElement(style_1.FlexDiv, { margin: '0', width: 'auto', direction: "row" },
                React.createElement(Tag, null,
                    React.createElement(TagContent, null, tag[0])),
                React.createElement(Tag, null,
                    React.createElement(TagContent, null, tag[1])))),
        React.createElement(Image, { src: img })));
};
exports["default"] = SmallRecommendPost;
var PostBox = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0 0 56px 0;\n  width: 414px;\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  flex-direction: row;\n  cursor: pointer;\n"], ["\n  margin: 0 0 56px 0;\n  width: 414px;\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  flex-direction: row;\n  cursor: pointer;\n"])));
var Tag = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 25px;\n  border: 1px solid #ced4da;\n  display: flex;\n  margin-top: 21px;\n  margin-right: 8px;\n  justify-content: center;\n  align-items: center;\n"], ["\n  box-sizing: border-box;\n  height: 25px;\n  border: 1px solid #ced4da;\n  display: flex;\n  margin-top: 21px;\n  margin-right: 8px;\n  justify-content: center;\n  align-items: center;\n"])));
var Image = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 120px;\n  width: 120px;\n  margin: 0;\n  border-radius: 10px;\n"], ["\n  height: 120px;\n  width: 120px;\n  margin: 0;\n  border-radius: 10px;\n"])));
var Title = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 27px;\n  width: auto;\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 29px;\n"], ["\n  height: 27px;\n  width: auto;\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 29px;\n"])));
var Content = styled_components_1["default"].span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 40px;\n  width: 254px;\n  color: #495057;\n  font-size: 14px;\n  line-height: 20px;\n  margin: 8px 0 0 0;\n"], ["\n  height: 40px;\n  width: 254px;\n  color: #495057;\n  font-size: 14px;\n  line-height: 20px;\n  margin: 8px 0 0 0;\n"])));
var TagContent = styled_components_1["default"].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 18px;\n  width: auto;\n  color: #000000;\n  font-size: 12px;\n  line-height: 18px;\n  margin: 4px 9px 4px 9px;\n"], ["\n  height: 18px;\n  width: auto;\n  color: #000000;\n  font-size: 12px;\n  line-height: 18px;\n  margin: 4px 9px 4px 9px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
