"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_query_1 = require("react-query");
var Post_1 = require("src/api/Post");
var styled_components_1 = require("styled-components");
var style_1 = require("../../../component/style/style");
var snap1_png_1 = require("./dummy/snap1.png");
var SmallRecommendPost_1 = require("./SmallRecommendPost");
var RecommendPost = function () {
    var posts = react_query_1.useQuery(['recommendedPost'], Post_1.fetchRecommendedPost).data;
    return (React.createElement(style_1.FlexDiv, { margin: '40px 0 0 0', direction: "column" },
        React.createElement(style_1.FlexDiv, { height: '56px', justify: "between", margin: '0 0 8px 0' },
            React.createElement(Title, null, "\uCD94\uCC9C \uD3EC\uC2A4\uD2B8")),
        React.createElement(style_1.FlexDiv, { margin: '0 0 0px 0', justify: "flex-start", align: "start" },
            React.createElement(PostBox, { onClick: function (e) { return (window.location.href = posts ? posts[0].blogUrl : ''); } },
                React.createElement(Image, { src: snap1_png_1["default"] }),
                React.createElement(PostTitle, null, posts ? posts[0].title : ''),
                React.createElement(PostContent, null, posts ? posts[0].description : '')),
            React.createElement(style_1.FlexDiv, { margin: '0', width: '414px', justify: "start", align: "start", direction: "column" }, posts ? (posts
                .filter(function (_, index) {
                if (index === 0)
                    return false;
                return true;
            })
                .map(function (post, index) {
                return (React.createElement(SmallRecommendPost_1["default"], { key: index, title: post.title, content: post.description, img: post.imageUrl, tag: post.hastTag.split(','), blogUrl: post.blogUrl }));
            })) : (React.createElement(React.Fragment, null))))));
};
exports["default"] = RecommendPost;
var PostBox = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: start;\n  flex-direction: column;\n\n  cursor: pointer;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: start;\n  flex-direction: column;\n\n  cursor: pointer;\n"])));
var Image = styled_components_1["default"].img.attrs(function (props) { return ({ src: props.src }); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 385px;\n  width: 646px;\n  margin: 0;\n  border-radius: 10px;\n"], ["\n  height: 385px;\n  width: 646px;\n  margin: 0;\n  border-radius: 10px;\n"])));
var Title = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 29px;\n  width: auto;\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 29px;\n"], ["\n  height: 29px;\n  width: auto;\n  color: #000000;\n  font-size: 20px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 29px;\n"])));
var PostTitle = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 41px;\n  width: auto;\n  color: #000000;\n  font-size: 28px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 41px;\n  margin: 14px 0 11px 0;\n"], ["\n  height: 41px;\n  width: auto;\n  color: #000000;\n  font-size: 28px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 41px;\n  margin: 14px 0 11px 0;\n"])));
var PostContent = styled_components_1["default"].span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 20px;\n  width: 646px;\n  color: #495057;\n  font-size: 14px;\n  line-height: 20px;\n"], ["\n  height: 20px;\n  width: 646px;\n  color: #495057;\n  font-size: 14px;\n  line-height: 20px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
