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
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var style_1 = require("../../component/style/style");
var PButton_1 = require("../../component/PButton");
var AssociateOrganization_1 = require("./AssociateOrganization");
var MyProfile_1 = require("./MyProfile");
var PlannerArea_1 = require("./PlannerArea");
var PlannerOfferList_1 = require("./PlannerOfferList");
var PlannerOrganization_1 = require("./PlannerOrganization");
var ProfileHeader_1 = require("./ProfileHeader");
var SnsSetting_1 = require("./SnsSetting");
var UserCertification_1 = require("./UserCertification");
var UserProfile_1 = require("./UserProfile");
var react_query_1 = require("react-query");
var User_1 = require("src/api/User");
var Planner_1 = require("src/api/Planner");
var react_1 = require("react");
var Profile = function (_a) {
    var isUpdate = _a.isUpdate;
    var user = react_query_1.useQuery(['getUser'], User_1.getUser).data;
    var _b = react_query_1.useMutation(Planner_1.updateProfile, {
        onSuccess: function (data) { }
    }), mutate = _b.mutate, isLoading = _b.isLoading;
    var _c = react_1.useState({ summary: '', description: '' }), description = _c[0], setDescription = _c[1];
    var _d = react_1.useState({ webUrl: '', instagramUrl: '', facebookUrl: '', blogUrl: '' }), sns = _d[0], setSns = _d[1];
    var _e = react_1.useState([]), regions = _e[0], setRegions = _e[1];
    var _f = react_1.useState([]), offers = _f[0], setOffers = _f[1];
    var _g = react_1.useState(''), orgName = _g[0], setOrgName = _g[1];
    var _h = react_1.useState([]), studios = _h[0], setStudios = _h[1];
    var _j = react_1.useState([]), dresses = _j[0], setDresses = _j[1];
    var _k = react_1.useState([]), makeUps = _k[0], setMakeUps = _k[1];
    var handleDescription = function (e) {
        var _a;
        var id = e.target.name;
        var value = e.target.value;
        setDescription(__assign(__assign({}, description), (_a = {}, _a[id] = value, _a)));
    };
    var handleSns = function (e) {
        var _a;
        var id = e.target.name;
        var value = e.target.value;
        setSns(__assign(__assign({}, sns), (_a = {}, _a[id] = value, _a)));
    };
    var handleRegions = function (selectedRegions) {
        setRegions(selectedRegions);
    };
    var handleOffers = function (selectedOffers) {
        setOffers(selectedOffers);
    };
    var handleOrgName = function (e) {
        var value = e.target.value;
        setOrgName(value);
    };
    var handleStudio = function (studio) {
        studios.push(studio);
        setStudios(studios);
    };
    var handleDress = function (dress) {
        dresses.push(dress);
        setDresses(dresses);
    };
    var handleMakeUp = function (makeUp) {
        makeUps.push(makeUp);
        setMakeUps(makeUps);
    };
    var handleRegister = function () {
        var affilicatedDress = dresses.map(function (dress) {
            return {
                companyName: dress.name,
                description: '',
                location: '',
                primaryImageUrl: dress.imageUrl,
                tel: '',
                type: ''
            };
        });
        var affilicatedStudios = studios.map(function (studio) {
            return {
                companyName: studio.name,
                description: '',
                location: '',
                primaryImageUrl: studio.imageUrl,
                tel: '',
                type: ''
            };
        });
        var affilicatedMakeUps = makeUps.map(function (makeUp) {
            return {
                companyName: makeUp.name,
                description: '',
                location: '',
                primaryImageUrl: makeUp.imageUrl,
                tel: '',
                type: ''
            };
        });
        var request = {
            affiliatedCompanyInfoDTO: {
                affiliatedCompanyId: 1
            },
            affiliatedDressCompanyDTOList: affilicatedDress,
            affiliatedStudioCompanyDTOList: affilicatedStudios,
            affiliatedMakeupCompanyDTOList: affilicatedMakeUps,
            areaInfoDTO: {
                locationList: regions
            },
            myProfileDTO: description,
            snsInfoDTO: {
                externalLinks: {
                    blogLink: sns.blogUrl,
                    facebookLink: sns.facebookUrl,
                    instagramLink: sns.instagramUrl
                },
                webSiteUrl: sns.webUrl
            },
            supportInfoDTO: {
                supportInfoList: offers
            }
        };
        mutate(request);
    };
    return (React.createElement(Container, null,
        React.createElement(InnerContainer, null,
            React.createElement(ProfileHeader_1["default"], { isUpdate: isUpdate })),
        React.createElement(InnerContainer, null,
            React.createElement(style_1.FlexDiv, { width: "310px", height: "auto", justify: "flex-start", align: "start", direction: "column", margin: "0 105px 0 0" },
                React.createElement(UserProfile_1["default"], null),
                React.createElement(UserCertification_1["default"], null)),
            React.createElement(style_1.FlexDiv, { direction: "column", margin: "0", width: "990px" },
                React.createElement(MyProfile_1["default"], { handleDescription: handleDescription }),
                React.createElement(SnsSetting_1["default"], { handleSns: handleSns }),
                React.createElement(PlannerArea_1["default"], { regions: regions, handleRegions: handleRegions }),
                React.createElement(PlannerOfferList_1["default"], { offers: offers, handleOffers: handleOffers }),
                React.createElement(PlannerOrganization_1["default"], { handleOrgName: handleOrgName }),
                React.createElement(AssociateOrganization_1["default"], { id: "studio", name: "\uC2A4\uD29C\uB514\uC624", margin: "0 0 72px 0", handleStores: handleStudio }),
                React.createElement(AssociateOrganization_1["default"], { id: "dress", name: "\uB4DC\uB808\uC2A4", margin: "0 0 72px 0", handleStores: handleDress }),
                React.createElement(AssociateOrganization_1["default"], { id: "makeup", name: "\uBA54\uC774\uD06C\uC5C5", margin: "0 0 24px 0", handleStores: handleMakeUp }),
                React.createElement(style_1.FlexDiv, { direction: "row", margin: "0 0 320px 48px", justify: "flex-start" },
                    React.createElement(PButton_1["default"], { color: "pink", fontSize: "14px", height: "40px", width: "312px", fontWeight: "bold", onClick: handleRegister }, isUpdate ? '수정하기' : '등록하기'))))));
};
exports["default"] = Profile;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 16px auto;\n"], ["\n  margin: 16px auto;\n"])));
var InnerContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  width: 1100px;\n  margin: 0 auto;\n"], ["\n  display: flex;\n  width: 1100px;\n  margin: 0 auto;\n"])));
var templateObject_1, templateObject_2;
