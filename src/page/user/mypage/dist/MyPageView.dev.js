"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideMenuItem = exports.Line = exports.SideMenuDiv = exports.ProfileImgBox = exports.ProfileDiv = exports.FlexDiv = exports.MyPageButton = exports.MyPageSpan = exports.LoginPageBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  height: 17px;\n  color: #212529;\n  font-size: 14px;\n  letter-spacing: 0;\n  line-height: 17px;\n  margin: 12px 0;\n  cursor: pointer;\n  list-style: none;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  height: 1px;\n  width: 200px;\n  background-color: #212529;\n  margin: 16px 0;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  margin-top: 21px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  height: 88px;\n  width: 88px;\n  background-color: #adb5bd;\n  border-radius: 100%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n  margin: ", ";\n  height: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  width: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  outline: none;\n  border: ", ";\n  color: ", ";\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 20px;\n  text-align: center;\n  box-sizing: ", ";\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 20px;\n  color: ", ";\n  font-size: ", ";\n  letter-spacing: 0;\n  line-height: 20px;\n  font-weight: ", ";\n  cursor: ", ";\n  margin: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoginPageBox = _styledComponents["default"].div(_templateObject());

exports.LoginPageBox = LoginPageBox;

var MyPageSpan = _styledComponents["default"].span(_templateObject2(), function (props) {
  return props.color || '#495057';
}, function (props) {
  return props.size || '14px';
}, function (props) {
  return props.weight || 'bold';
}, function (props) {
  return props.cursor || 'default';
}, function (props) {
  return props.margin || '0';
});

exports.MyPageSpan = MyPageSpan;

var MyPageButton = _styledComponents["default"].button(_templateObject3(), function (props) {
  return props.height || '48px';
}, function (props) {
  return props.width || '48px';
}, function (props) {
  return props.radius || '100%';
}, function (props) {
  return props.background || '#e64980';
}, function (props) {
  return props.border || 'none';
}, function (props) {
  return props.color || '#ffffff';
}, function (props) {
  return props.box || 'border-box';
});

exports.MyPageButton = MyPageButton;

var FlexDiv = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.width || '100%';
}, function (props) {
  return props.justify || 'center';
}, function (props) {
  return props.align || 'center';
}, function (props) {
  return props.direction || 'row';
}, function (props) {
  return props.margin || '20px 0';
}, function (props) {
  return props.height || '100vh';
});

exports.FlexDiv = FlexDiv;

var ProfileDiv = _styledComponents["default"].div(_templateObject5());

exports.ProfileDiv = ProfileDiv;

var ProfileImgBox = _styledComponents["default"].div(_templateObject6());

exports.ProfileImgBox = ProfileImgBox;

var SideMenuDiv = _styledComponents["default"].div(_templateObject7());

exports.SideMenuDiv = SideMenuDiv;

var Line = _styledComponents["default"].hr(_templateObject8());

exports.Line = Line;

var SideMenuItem = _styledComponents["default"].li(_templateObject9());

exports.SideMenuItem = SideMenuItem;