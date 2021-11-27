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
var PlannerCompany_1 = require("./PlannerCompany");
var ProfileHeader_1 = require("./ProfileHeader");
var SnsSetting_1 = require("./SnsSetting");
var UserProfile_1 = require("./UserProfile");
var react_query_1 = require("react-query");
var User_1 = require("src/api/User");
var Planner_1 = require("src/api/Planner");
var react_1 = require("react");
var react_router_1 = require("react-router");
var Profile = function (_a) {
    var _b, _c, _d, _e;
    var isUpdate = _a.isUpdate;
    var user = react_query_1.useQuery(['user'], User_1.getUser).data;
    var planner = react_query_1.useQuery(['planner'], Planner_1.fetchPlannerMe).data;
    var history = react_router_1.useHistory();
    var _f = react_query_1.useMutation(Planner_1.updateProfile, {
        onSuccess: function (data) {
            alert("\uD504\uB85C\uD544 " + (isUpdate ? '수정' : '등록') + "\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
            history.push('/');
        }
    }), mutate = _f.mutate, isLoading = _f.isLoading;
    var _g = react_1.useState({
        summary: '',
        description: ''
    }), description = _g[0], setDescription = _g[1];
    var _h = react_1.useState({ webUrl: '', instagramUrl: '', facebookUrl: '', blogUrl: '' }), sns = _h[0], setSns = _h[1];
    var _j = react_1.useState([]), regions = _j[0], setRegions = _j[1];
    var _k = react_1.useState([]), offers = _k[0], setOffers = _k[1];
    var _l = react_1.useState(), company = _l[0], setCompany = _l[1];
    var _m = react_1.useState(''), inputCompanyName = _m[0], setInputCompanyName = _m[1];
    var _o = react_1.useState([]), studios = _o[0], setStudios = _o[1];
    var _p = react_1.useState([]), dresses = _p[0], setDresses = _p[1];
    var _q = react_1.useState([]), makeUps = _q[0], setMakeUps = _q[1];
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
    var handleCompany = function (company) {
        setCompany(company);
    };
    var handleCompanyName = function (e) {
        var value;
        if (typeof e !== 'string') {
            value = e.target.value;
        }
        else {
            value = e;
        }
        setInputCompanyName(value);
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
        if (description.description === '' || description.summary === '') {
            alert('플래너 한줄 소개와 플래너 소개는 필수 값 입니다.');
            return;
        }
        var affilicatedDress = dresses.map(function (dress) {
            return {
                companyName: dress.name,
                description: '',
                location: '',
                primaryImageUrl: dress.imageUrl,
                tel: '',
                type: 'DRESS'
            };
        });
        var affilicatedStudios = studios.map(function (studio) {
            return {
                companyName: studio.name,
                description: '',
                location: '',
                primaryImageUrl: studio.imageUrl,
                tel: '',
                type: 'STUDIO'
            };
        });
        var affilicatedMakeUps = makeUps.map(function (makeUp) {
            return {
                companyName: makeUp.name,
                description: '',
                location: '',
                primaryImageUrl: makeUp.imageUrl,
                tel: '',
                type: 'MAKEUP'
            };
        });
        var request = {
            affiliatedCompanyInfo: {
                affiliatedCompanyId: company === null || company === void 0 ? void 0 : company.id
            },
            affiliatedDressCompanyList: affilicatedDress,
            affiliatedStudioCompanyList: affilicatedStudios,
            affiliatedMakeupCompanyList: affilicatedMakeUps,
            areaInfo: {
                locationList: regions.map(function (value) { return value.display; })
            },
            myProfile: description,
            snsInfo: {
                externalLinks: {
                    blogLink: sns.blogUrl,
                    facebookLink: sns.facebookUrl,
                    instagramLink: sns.instagramUrl
                },
                webSiteUrl: sns.webUrl
            },
            supportInfo: {
                supportInfoList: offers.map(function (value) { return value.value; })
            }
        };
        mutate(request);
    };
    react_1.useEffect(function () {
        var plannerRegions = PlannerArea_1.allRegions.filter(function (region) { return planner === null || planner === void 0 ? void 0 : planner.locations.includes(region.display); });
        setRegions(plannerRegions);
        var plannerOffers = PlannerOfferList_1.allOffers.filter(function (offer) { return planner === null || planner === void 0 ? void 0 : planner.supportInfos.includes(offer.display); });
        setOffers(plannerOffers);
    }, [planner]);
    return (React.createElement(Container, null,
        React.createElement(InnerContainer, null,
            React.createElement(ProfileHeader_1["default"], { isUpdate: isUpdate })),
        React.createElement(InnerContainer, null,
            React.createElement(style_1.FlexDiv, { width: "310px", height: "auto", justify: "flex-start", align: "start", direction: "column", margin: "0 105px 0 0" },
                React.createElement(UserProfile_1["default"], { name: user === null || user === void 0 ? void 0 : user.name, type: user === null || user === void 0 ? void 0 : user.userType })),
            React.createElement(style_1.FlexDiv, { direction: "column", margin: "0", width: "990px" },
                React.createElement(MyProfile_1["default"], { summary: planner === null || planner === void 0 ? void 0 : planner.summary, description: planner === null || planner === void 0 ? void 0 : planner.description, handleDescription: handleDescription }),
                React.createElement(SnsSetting_1["default"], { instagram: (_b = planner === null || planner === void 0 ? void 0 : planner.externalLinks) === null || _b === void 0 ? void 0 : _b.instagramLink, blog: (_c = planner === null || planner === void 0 ? void 0 : planner.externalLinks) === null || _c === void 0 ? void 0 : _c.blogLink, facebook: (_d = planner === null || planner === void 0 ? void 0 : planner.externalLinks) === null || _d === void 0 ? void 0 : _d.facebookLink, handleSns: handleSns }),
                React.createElement(PlannerArea_1["default"], { plannerRegions: planner === null || planner === void 0 ? void 0 : planner.locations, regions: regions, handleRegions: handleRegions }),
                React.createElement(PlannerOfferList_1["default"], { plannerOffers: planner === null || planner === void 0 ? void 0 : planner.supportInfos, offers: offers, handleOffers: handleOffers }),
                React.createElement(PlannerCompany_1["default"], { defaultCompanyName: (_e = planner === null || planner === void 0 ? void 0 : planner.company) === null || _e === void 0 ? void 0 : _e.name, companyName: inputCompanyName, handleCompanyName: handleCompanyName, handleCompanyItem: handleCompany }),
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
