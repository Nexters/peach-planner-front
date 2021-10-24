"use strict";
exports.__esModule = true;
var style_1 = require("../../component/style/style");
var ClickableButton_1 = require("./ClickableButton");
var LindAndTitle_1 = require("./LindAndTitle");
var offerFirsts = [
    { value: 'Accompany', display: '동행하는 플래너에요' },
    { value: 'NotAccompany', display: '비동행하는 플래너에요' },
    { value: 'MobileWeddingCard', display: '모바일청첩장을 제공해요' }
];
var offerSeconds = [
    { value: 'NotMobileWeddingCard', display: '모바일청첩장을 제공하지 않아요' },
    { value: 'AffiliateWeddingHall', display: '제휴웨딩홀이 있어요' },
    { value: 'MessageCounseling', display: '메시지 상담이 가능해요' }
];
var offerThirds = [{ value: 'DoorCounseling', display: '방문 상담이 가능해요' }];
var PlannerOfferList = function (_a) {
    var offers = _a.offers, handleOffers = _a.handleOffers;
    return (React.createElement(style_1.FlexDiv, { width: "632px", margin: "0 0 72px 0", direction: "column", justify: "flex-start", align: "start" },
        React.createElement(LindAndTitle_1["default"], { title: "\uC81C\uACF5 \uD56D\uBAA9", content: "\uC6E8\uB529\uD50C\uB798\uB108\uAC00 \uC81C\uACF5\uD558\uB294 \uD56D\uBAA9\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694." }),
        React.createElement(style_1.FlexDiv, { direction: "row", justify: "flex-start", align: "start", margin: "0px" }, offerFirsts.map(function (value, index) {
            return (React.createElement(ClickableButton_1["default"], { items: offers, handleItems: handleOffers, content: value, key: index }));
        })),
        React.createElement(style_1.FlexDiv, { direction: "row", justify: "flex-start", align: "start", margin: "0px" }, offerSeconds.map(function (value, index) {
            return (React.createElement(ClickableButton_1["default"], { items: offers, handleItems: handleOffers, content: value, key: index }));
        })),
        React.createElement(style_1.FlexDiv, { direction: "row", justify: "flex-start", align: "start", margin: "0px" }, offerThirds.map(function (value, index) {
            return (React.createElement(ClickableButton_1["default"], { items: offers, handleItems: handleOffers, content: value, key: index }));
        }))));
};
exports["default"] = PlannerOfferList;
