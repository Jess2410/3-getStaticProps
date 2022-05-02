webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/Context */ "./lib/Context.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\jsi-s\\Downloads\\files (1)\\files\\3-getStaticProps\\next-movie-omdb\\components\\Header.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Links = function Links(_ref) {
  var children = _ref.children,
      query = _ref.query,
      name = _ref.name;
  return query !== "" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/".concat(name),
      query: {
        query: query
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, children) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/".concat(name)
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, children);
};

_c = Links;

var Header = function Header() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_lib_Context__WEBPACK_IMPORTED_MODULE_3__["Context"]),
      setActive = _useContext.setActive,
      _useContext$state = _useContext.state,
      links = _useContext$state.links,
      active = _useContext$state.active,
      query = _useContext$state.query;

  return __jsx("ul", {
    "class": "nav nav-pills nav-fill",
    style: {
      marginBottom: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, links.map(function (link) {
    return __jsx("li", {
      className: "nav-item",
      onClick: function onClick() {
        return setActive(link);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, __jsx(Links, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      query: ""
    }, link, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }), __jsx("span", {
      className: "nav-link ".concat(link.name === active.name && "isActive"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "fas fa-".concat(link.icon),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }), " \xA0 ", link.name, " ")));
  }));
};

_s(Header, "6hE1iMBgvo2O3ef7HueFWx+EbN4=");

_c2 = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2;

$RefreshReg$(_c, "Links");
$RefreshReg$(_c2, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiTGlua3MiLCJjaGlsZHJlbiIsInF1ZXJ5IiwibmFtZSIsInBhdGhuYW1lIiwiSGVhZGVyIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJzZXRBY3RpdmUiLCJzdGF0ZSIsImxpbmtzIiwiYWN0aXZlIiwibWFyZ2luQm90dG9tIiwibWFwIiwibGluayIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBNkI7RUFBQSxJQUExQkMsUUFBMEIsUUFBMUJBLFFBQTBCO0VBQUEsSUFBakJDLEtBQWlCLFFBQWpCQSxLQUFpQjtFQUFBLElBQVhDLElBQVcsUUFBWEEsSUFBVztFQUN6QyxPQUFPRCxLQUFLLEtBQUssRUFBVixHQUNMLE1BQUMsZ0RBQUQ7SUFBTSxJQUFJLEVBQUU7TUFBRUUsUUFBUSxhQUFNRCxJQUFOLENBQVY7TUFBd0JELEtBQUssRUFBRTtRQUFDQSxLQUFLLEVBQUNBO01BQVA7SUFBL0IsQ0FBWjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQTZERCxRQUE3RCxDQURLLEdBR0wsTUFBQyxnREFBRDtJQUFNLElBQUksRUFBRTtNQUFFRyxRQUFRLGFBQU1ELElBQU47SUFBVixDQUFaO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBdUNGLFFBQXZDLENBSEY7QUFLRCxDQU5EOztLQUFNRCxLOztBQVFOLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07RUFBQTs7RUFDbkIsa0JBRUVDLHdEQUFVLENBQUNDLG9EQUFELENBRlo7RUFBQSxJQUFRQyxTQUFSLGVBQVFBLFNBQVI7RUFBQSxvQ0FDRUMsS0FERjtFQUFBLElBQ1VDLEtBRFYscUJBQ1VBLEtBRFY7RUFBQSxJQUNpQkMsTUFEakIscUJBQ2lCQSxNQURqQjtFQUFBLElBQ3lCVCxLQUR6QixxQkFDeUJBLEtBRHpCOztFQUlBLE9BQ0U7SUFBSSxTQUFNLHdCQUFWO0lBQW1DLEtBQUssRUFBRTtNQUFFVSxZQUFZLEVBQUU7SUFBaEIsQ0FBMUM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNHRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7SUFDbkIsT0FDRTtNQUFJLFNBQVMsRUFBQyxVQUFkO01BQXlCLE9BQU8sRUFBRTtRQUFBLE9BQU1OLFNBQVMsQ0FBQ00sSUFBRCxDQUFmO01BQUEsQ0FBbEM7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNFLE1BQUMsS0FBRDtNQUFPLEtBQUssRUFBQztJQUFiLEdBQW9CQSxJQUFwQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLElBQ0U7TUFDRSxTQUFTLHFCQUFjQSxJQUFJLENBQUNYLElBQUwsS0FBY1EsTUFBTSxDQUFDUixJQUFyQixJQUE2QixVQUEzQyxDQURYO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FHRTtNQUFHLFNBQVMsbUJBQVlXLElBQUksQ0FBQ0MsSUFBakIsQ0FBWjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBSEYsWUFHb0RELElBQUksQ0FBQ1gsSUFIekQsRUFHK0QsR0FIL0QsQ0FERixDQURGLENBREY7RUFXRCxDQVpBLENBREgsQ0FERjtBQWlCRCxDQXRCRDs7R0FBTUUsTTs7TUFBQUEsTTtBQXVCU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMDQ4MTEyODg0YWYwZjlmNzUzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9saWIvQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMaW5rcyA9ICh7IGNoaWxkcmVuLHF1ZXJ5LG5hbWUgfSkgPT4ge1xuICByZXR1cm4gcXVlcnkgIT09IFwiXCIgPyAoXG4gICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC8ke25hbWV9YCwgcXVlcnk6IHtxdWVyeTpxdWVyeX0gfX0+e2NoaWxkcmVufTwvTGluaz5cbiAgKSA6IChcbiAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgLyR7bmFtZX1gIH19PntjaGlsZHJlbn08L0xpbms+XG4gICk7XG59O1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc2V0QWN0aXZlLCBcbiAgICBzdGF0ZToge2xpbmtzLCBhY3RpdmUsIHF1ZXJ5fSxcbn0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxscyBuYXYtZmlsbFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XG4gICAgICB7bGlua3MubWFwKChsaW5rKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKGxpbmspfT5cbiAgICAgICAgICAgIDxMaW5rcyBxdWVyeT1cIlwiIHsuLi5saW5rfSA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtsaW5rLm5hbWUgPT09IGFjdGl2ZS5uYW1lICYmIFwiaXNBY3RpdmVcIn1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmFzIGZhLSR7bGluay5pY29ufWB9PjwvaT4gJm5ic3A7IHtsaW5rLm5hbWV9e1wiIFwifVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbmtzPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L3VsPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=