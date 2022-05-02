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
  };

  return __jsx("form", {
    style: {
      marginBottom: "20px"
    },
    onSubmit: function onSubmit(e) {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    "class": "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
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
      lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hiYXIuanMiXSwibmFtZXMiOlsiU2VhcmNoYmFyIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJzZXRRdWVyeSIsInF1ZXJ5Iiwic3RhdGUiLCJzZXRSZXN1bHRzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwibWFyZ2luQm90dG9tIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0VBQUE7O0VBRXBCLGdCQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0VBQUEsSUFBT0MsS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBQ0Esa0JBQ2tCQyx3REFBVSxDQUFDQyxvREFBRCxDQUQ1QjtFQUFBLElBQVFDLFFBQVIsZUFBUUEsUUFBUjtFQUFBLElBQ09DLEtBRFAsZUFDQUMsS0FEQSxDQUNPRCxLQURQOztFQUVBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBTztJQUN4QkEsQ0FBQyxDQUFDQyxjQUFGO0lBQ0FDLGtEQUFNLENBQUNDLElBQVAsQ0FBWTtNQUFFQyxRQUFRLEVBQUUsUUFBWjtNQUFzQlAsS0FBSyxFQUFFO1FBQUNBLEtBQUssRUFBQ0E7TUFBUDtJQUE3QixDQUFaO0VBQ0QsQ0FIRDs7RUFJRixPQUNFO0lBQU0sS0FBSyxFQUFFO01BQUVRLFlBQVksRUFBRTtJQUFoQixDQUFiO0lBQXVDLFFBQVEsRUFBRSxrQkFBQ0wsQ0FBRCxFQUFPLENBQUUsQ0FBMUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQUssU0FBTSxZQUFYO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUNFLElBQUksRUFBQyxNQURQO0lBRUUsU0FBUyxFQUFDLDhCQUZaO0lBR0UsRUFBRSxFQUFDLFdBSEw7SUFJRSxZQUFZLEVBQUVSLEtBSmhCO0lBS0UsUUFBUSxFQUFFLGtCQUFDUSxDQUFEO01BQUEsT0FBT0osUUFBUSxDQUFDSSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0lBQUEsQ0FMWjtJQU1FLFdBQVcsRUFBQyxrQkFOZDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FERixDQURGO0FBY0QsQ0F2QkQ7O0dBQU1qQixTOztLQUFBQSxTO0FBeUJTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjBkYjU0YjkzZDZmN2I1OGIwYjkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vbGliL0NvbnRleHRcIjtcblxuXG5jb25zdCBTZWFyY2hiYXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IHsgc2V0UXVlcnksXG4gICAgc3RhdGU6e3F1ZXJ5fSB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgICBjb25zdCBzZXRSZXN1bHRzID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIFJvdXRlci5wdXNoKHsgcGF0aG5hbWUgOlwiL21vdmllXCIsIHF1ZXJ5OiB7cXVlcnk6cXVlcnl9fSk7XG4gICAgfTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19IG9uU3VibWl0PXsoZSkgPT4ge319PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGdcIlxuICAgICAgICAgIGlkPVwic2VhcmNoYmFyXCJcbiAgICAgICAgICBkZWZhdWx0dmFsdWU9e2lucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFRpdGxlIC4uLlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9