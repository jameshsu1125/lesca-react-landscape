"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _lescaSensorOrientationChange = _interopRequireDefault(require("lesca-sensor-orientation-change"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAAEJCAMAAAC+OgsQAAAAsVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3mHKcAAAAOnRSTlMABEAJEGFwMLCgHxV/VpEaTjsNNDdGLCNKUSbb59X5Wr3x7Kbe0fWYwXlmKOLFybjNa6uHjIK0nXReMhnzogAADBhJREFUeNrs2mtP2mAAhuGnLXIeZKigUMpJy8Epduhw9///YdPKCrTESULW+qbXZ0jem/BA0lZfxMLlvi2TDXjlOjLXnc+bSxnLuSV0JWOtCf0w94s64J0tU22GSF2m+jvEoSVTrQm5TZkqH+LXZ9AQW8HzpdlDrPWAqdFDXMGhxrZBQywTqlj7Q+wTWn79IUor3k32YiqE3JoMUOsdaDwzZ4hvmonGaIhzGSLRGA1RxthpNG+IyUbzhphsNG+IicaWeUOMN7oGDjHWaOQQ9xvNHOJuo6lD3DaaO8So0eAhRo0GD3Gj+csbm12Yy+VyuVwul8v9Z3eD+VPjBFaB3VIGtRsup+MNf2ftplW3zKm5C2XJ3ANGk4V9Vz2B8+vVI68eOsoKpwz0z5yT7rriwSgrl0CcIXhzSydWugUvI084/oTx93CQQaMSCY5s7u68d/WtIMmZgF9SBrzAuC3JvmdPRcfo+Ozyp01Ja7jJwN9Hx8ezJWtNjOcoplqKFKTz2exCkTkxo2vJWkJDqZtA/f0wPATtWmFjAlXt67LVk/pwo0gD2oWNpr0aA2dSbQRdpawLN440BX+gHdPk2VqVcmQujWG09/qqtgprwJYCWCtlKwgkO/HDUIS6PrTwvGCb5OJb2vUMPUuWi5/2GnvhEWYw0J6mD3NHH2ltz156gKn2LWERfoTflKomlKUOPCqmCPizSePfpuXeoXs5bZhJF2F7mq7gRVpAUXEvHkfodxX3iOfI8rhXqgK4kp7gQgmdp/4nK0fLgaWEBrSlW8ZKVT2MW0NTh1i16ie0dNAc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';
var defaultStyle = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: 'rgba(0, 0, 0, 1)',
  backgroundImage: "url(".concat(defaultIcon, ")"),
  backgroundSize: '10vw'
};

var Landscape = function Landscape(props) {
  var deviceWidth = props.deviceWidth;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useEffect)(function () {
    _lescaSensorOrientationChange["default"].addListener(function (e) {
      if (deviceWidth !== false) {
        var dw = deviceWidth || 750;
        var s = window.screen.width / dw;
        var p = document.querySelector('meta[name="viewport"]');
        p.content = "width=".concat(dw, ", minimum-scale=").concat(s, ", maximum-scale=").concat(s, ", initial-scale=").concat(s);
      }

      if (e === 0 || !e) setState(false);else setState(true);
    });
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: state && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: _objectSpread(_objectSpread({}, defaultStyle), props.style)
    })
  });
};

Landscape.defaultProps = {
  style: defaultStyle,
  deviceWidth: false
};
var _default = Landscape;
exports["default"] = _default;