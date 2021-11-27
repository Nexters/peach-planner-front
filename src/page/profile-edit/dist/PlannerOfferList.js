"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Offer = exports.allOffers = void 0;
var styled_components_1 = require("styled-components");
var style_1 = require("../../component/style/style");
var ClickableButton_1 = require("./ClickableButton");
var LindAndTitle_1 = require("./LindAndTitle");
exports.allOffers = [
    { value: 'Accompany', display: '동행하는 플래너에요' },
    { value: 'NotAccompany', display: '비동행하는 플래너에요' },
    { value: 'MobileWeddingCard', display: '모바일청첩장을 제공해요' },
    { value: 'NotMobileWeddingCard', display: '모바일청첩장을 제공하지 않아요' },
    { value: 'AffiliateWeddingHall', display: '제휴웨딩홀이 있어요' },
    { value: 'MessageCounseling', display: '메시지 상담이 가능해요' },
    { value: 'DoorCounseling', display: '방문 상담이 가능해요' }
];
var PlannerOfferList = function (_a) {
    var plannerOffers = _a.plannerOffers, offers = _a.offers, handleOffers = _a.handleOffers;
    return (React.createElement(style_1.FlexDiv, { width: "632px", margin: "0 0 42px 0", direction: "column", justify: "flex-start", align: "start" },
        React.createElement(LindAndTitle_1["default"], { title: "\uC81C\uACF5 \uD56D\uBAA9", content: "\uC6E8\uB529\uD50C\uB798\uB108\uAC00 \uC81C\uACF5\uD558\uB294 \uD56D\uBAA9\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694." }),
        React.createElement(exports.Offer, { direction: "row", justify: "flex-start", align: "start", margin: "0px", width: "600px" }, plannerOffers
            ? exports.allOffers.map(function (value, index) {
                var isExistOffer = plannerOffers.includes(value.display);
                return (React.createElement(ClickableButton_1["default"], { items: offers, handleItems: handleOffers, content: value, key: index, isAlreadyClicked: isExistOffer }));
            })
            : exports.allOffers.map(function (value, index) {
                return (React.createElement(ClickableButton_1["default"], { items: offers, handleItems: handleOffers, content: value, key: index, isAlreadyClicked: false }));
            }))));
};
exports["default"] = PlannerOfferList;
exports.Offer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: ", ";\n  height: ", ";\n  width: ", ";\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n  margin: ", ";\n  flex-wrap: wrap;\n"], ["\n  min-height: ", ";\n  height: ", ";\n  width: ", ";\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n  margin: ", ";\n  flex-wrap: wrap;\n"])), function (props) { return props.minHeight; }, function (props) { return props.height; }, function (props) { return props.width || '100%'; }, function (props) { return props.justify || 'center'; }, function (props) { return props.align || 'center'; }, function (props) { return props.direction || 'row'; }, function (props) { return props.margin; });
var templateObject_1;
