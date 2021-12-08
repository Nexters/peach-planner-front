"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var style_1 = require("../../../component/style/style");
var PlannerCard_1 = require("../../../component/PlannerCard");
var react_query_1 = require("react-query");
var Planner_1 = require("../../../api/Planner");
var styled_components_1 = require("styled-components");
var react_router_1 = require("react-router");
var react_1 = require("react");
var SelectStatus_1 = require("src/atoms/SelectStatus");
var Pick_1 = require("src/api/Pick");
var App_1 = require("src/App");
var SearchResult = function (_a) {
    var location = _a.location, support = _a.support;
    var history = react_router_1.useHistory();
    var hookLocation = react_router_1.useLocation();
    var sortingParam = new URLSearchParams(hookLocation.search).get('sort');
    var supportInfos = support.join();
    var getPlanners = sortingParam === 'popular' ? Planner_1.fetchPopularPlanners : Planner_1.fetchPlanners;
    var _b = react_1.useState(''), sort = _b[0], setSort = _b[1];
    var _c = SelectStatus_1.useSelectedSortingState(), selectedSortingState = _c[0], setSelectedSortingState = _c[1];
    var planners = react_query_1.useQuery(['searchPlanners', { location: location, supportInfos: supportInfos, isNew: sortingParam === 'new', sort: sort }], getPlanners).data;
    var _d = react_query_1.useMutation(Pick_1.pick, {
        onSuccess: function (data) {
            App_1.queryClient.invalidateQueries(['searchPlanners']);
        },
        onError: function (error) {
            if (error.response.status === 401) {
                history.push('/login');
            }
        }
    }), mutate = _d.mutate, isLoading = _d.isLoading;
    var handleChange = function (e) {
        var value = e.target.value;
        setSort(value);
        setSelectedSortingState(value);
    };
    return (React.createElement(style_1.FlexDiv, { justify: "flex-start", align: "start", width: "880px", margin: '0', direction: "column" },
        React.createElement(style_1.FlexDiv, { align: "start", height: "56px", margin: '0', direction: "column" },
            React.createElement(style_1.Title, { height: '24px', width: 'auto', fontSize: '16px', lineHeight: '24px', margin: '0' }, sortingParam ? (sortingParam === 'new' ? '신규 플래너' : '인기 플래너') : '전체')),
        React.createElement("select", { name: "select", id: "select", onChange: handleChange, value: selectedSortingState },
            React.createElement("option", { value: "createdDate,DESC" }, "\uCD5C\uC2E0\uC21C"),
            React.createElement("option", { value: "pick,DESC" }, "\uC778\uAE30\uC21C"),
            React.createElement("option", { value: "review,DESC" }, "\uB9AC\uBDF0\uC21C")),
        React.createElement(SearchResultList, null, planners ? (planners.content.map(function (planner, index) {
            var _a, _b, _c, _d;
            return (React.createElement(PlannerCard_1["default"], { key: planner.id, margin: '0 12px 32px 0', size: '206px', imagePath: planner.images[0], heartCount: planner.likes, reviewCount: planner.reviews, name: planner.name, organization: (_a = planner.company) === null || _a === void 0 ? void 0 : _a.name, region: planner.locations.join(','), id: planner.id, blogLink: (_b = planner.externalLinks) === null || _b === void 0 ? void 0 : _b.blogLink, instagramLink: (_c = planner.externalLinks) === null || _c === void 0 ? void 0 : _c.instagramLink, facebookLink: (_d = planner.externalLinks) === null || _d === void 0 ? void 0 : _d.facebookLink, postLiked: planner.postLiked, mutate: mutate }));
        })) : (React.createElement(React.Fragment, null)))));
};
exports["default"] = SearchResult;
var SearchResultList = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 16px 0 32px 0;\n  flex-wrap: wrap;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 16px 0 32px 0;\n  flex-wrap: wrap;\n"])));
var templateObject_1;
