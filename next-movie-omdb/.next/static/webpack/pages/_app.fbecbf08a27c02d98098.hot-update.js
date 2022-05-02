webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Searchbar.js":
/*!*********************************!*\
  !*** ./components/Searchbar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Context */ "./lib/Context.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\jsi-s\\Downloads\\files (1)\\files\\3-getStaticProps\\next-movie-omdb\\components\\Searchbar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Searchbar = function Searchbar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      input = _useState[0],
      setInput = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_Context__WEBPACK_IMPORTED_MODULE_2__["Context"]),
      setQuery = _useContext.setQuery,
      query = _useContext.state.query;

  var setResults = function setResults(e) {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
      pathname: "/movie",
      query: {
        query: query
      }
    });
    console.log(setResults);
  };

  return __jsx("form", {
    style: {
      marginBottom: "20px"
    },
    onSubmit: function onSubmit(e) {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    "class": "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    className: "form-control form-control-lg",
    id: "searchbar",
    defaultvalue: input,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    placeholder: "Search Title ...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })));
};

_s(Searchbar, "brkLOGRZGwShxpPf/KQnDByLUDE=");

_c = Searchbar;
/* harmony default export */ __webpack_exports__["default"] = (Searchbar);

var _c;

$RefreshReg$(_c, "Searchbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hiYXIuanMiXSwibmFtZXMiOlsiU2VhcmNoYmFyIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJzZXRRdWVyeSIsInF1ZXJ5Iiwic3RhdGUiLCJzZXRSZXN1bHRzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbkJvdHRvbSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtFQUFBOztFQUVwQixnQkFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztFQUFBLElBQU9DLEtBQVA7RUFBQSxJQUFjQyxRQUFkOztFQUNBLGtCQUNrQkMsd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FENUI7RUFBQSxJQUFRQyxRQUFSLGVBQVFBLFFBQVI7RUFBQSxJQUNPQyxLQURQLGVBQ0FDLEtBREEsQ0FDT0QsS0FEUDs7RUFFQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQU87SUFDeEJBLENBQUMsQ0FBQ0MsY0FBRjtJQUNBQyxrREFBTSxDQUFDQyxJQUFQLENBQVk7TUFBRUMsUUFBUSxFQUFFLFFBQVo7TUFBc0JQLEtBQUssRUFBRTtRQUFDQSxLQUFLLEVBQUNBO01BQVA7SUFBN0IsQ0FBWjtJQUNBUSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsVUFBWjtFQUNELENBSkQ7O0VBS0YsT0FDRTtJQUFNLEtBQUssRUFBRTtNQUFFUSxZQUFZLEVBQUU7SUFBaEIsQ0FBYjtJQUF1QyxRQUFRLEVBQUUsa0JBQUNQLENBQUQsRUFBTyxDQUFFLENBQTFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFLLFNBQU0sWUFBWDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFDRSxJQUFJLEVBQUMsTUFEUDtJQUVFLFNBQVMsRUFBQyw4QkFGWjtJQUdFLEVBQUUsRUFBQyxXQUhMO0lBSUUsWUFBWSxFQUFFUixLQUpoQjtJQUtFLFFBQVEsRUFBRSxrQkFBQ1EsQ0FBRDtNQUFBLE9BQU9KLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDUSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtJQUFBLENBTFo7SUFNRSxXQUFXLEVBQUMsa0JBTmQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLENBREYsQ0FERjtBQWNELENBeEJEOztHQUFNbkIsUzs7S0FBQUEsUztBQTBCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mYmVjYmYwOGEyN2MwMmQ5ODA5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2xpYi9Db250ZXh0XCI7XG5cblxuY29uc3QgU2VhcmNoYmFyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCB7IHNldFF1ZXJ5LFxuICAgIHN0YXRlOntxdWVyeX0gfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gICAgY29uc3Qgc2V0UmVzdWx0cyA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBSb3V0ZXIucHVzaCh7IHBhdGhuYW1lIDpcIi9tb3ZpZVwiLCBxdWVyeToge3F1ZXJ5OnF1ZXJ5fX0pO1xuICAgICAgY29uc29sZS5sb2coc2V0UmVzdWx0cylcbiAgICB9O1xuICByZXR1cm4gKFxuICAgIDxmb3JtIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0gb25TdWJtaXQ9eyhlKSA9PiB7fX0+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiXG4gICAgICAgICAgaWQ9XCJzZWFyY2hiYXJcIlxuICAgICAgICAgIGRlZmF1bHR2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggVGl0bGUgLi4uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaGJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=