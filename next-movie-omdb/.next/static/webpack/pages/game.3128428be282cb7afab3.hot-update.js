webpackHotUpdate_N_E("pages/game",{

/***/ "./pages/game.js":
/*!***********************!*\
  !*** ./pages/game.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/List */ "./components/List.js");



var _excluded = ["req", "res", "match", "history", "location"];
var _jsxFileName = "C:\\Users\\jsi-s\\Downloads\\files (1)\\files\\3-getStaticProps\\next-movie-omdb\\pages\\game.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



function Game(_ref) {
  var results = _ref.results;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    results: results,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }));
}

_c = Game;

Game.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var _ctx$query$query, _ctx$query, _yield$response$json, _data$Search;

    var req, res, match, history, location, ctx, search, response, data, results;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req, res = _ref2.res, match = _ref2.match, history = _ref2.history, location = _ref2.location, ctx = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _excluded);
            search = (_ctx$query$query = ctx === null || ctx === void 0 ? void 0 : (_ctx$query = ctx.query) === null || _ctx$query === void 0 ? void 0 : _ctx$query.query) !== null && _ctx$query$query !== void 0 ? _ctx$query$query : ""; // Get external data from the file system, API, DB, etc.

            _context.next = 4;
            return node_fetch__WEBPACK_IMPORTED_MODULE_4___default()("http://mdbapi.com/?apikey=d3353ed0&s=".concat(search, "&type=game"));

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            _context.t1 = _yield$response$json = _context.sent;
            _context.t0 = _context.t1 !== null;

            if (!_context.t0) {
              _context.next = 11;
              break;
            }

            _context.t0 = _yield$response$json !== void 0;

          case 11:
            if (!_context.t0) {
              _context.next = 15;
              break;
            }

            _context.t2 = _yield$response$json;
            _context.next = 16;
            break;

          case 15:
            _context.t2 = [];

          case 16:
            data = _context.t2;
            results = (_data$Search = data.Search) !== null && _data$Search !== void 0 ? _data$Search : []; // The value of the `props` key will be
            //  passed to the `Home` component

            return _context.abrupt("return", {
              results: results
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

var _c;

$RefreshReg$(_c, "Game");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS5qcyJdLCJuYW1lcyI6WyJHYW1lIiwicmVzdWx0cyIsImdldEluaXRpYWxQcm9wcyIsInJlcSIsInJlcyIsIm1hdGNoIiwiaGlzdG9yeSIsImxvY2F0aW9uIiwiY3R4Iiwic2VhcmNoIiwicXVlcnkiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJTZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsU0FBU0EsSUFBVCxPQUEyQjtFQUFBLElBQVhDLE9BQVcsUUFBWEEsT0FBVztFQUN6QixPQUNFLG1FQUNJLE1BQUMsd0RBQUQ7SUFBTSxPQUFPLEVBQUVBLE9BQWY7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURKLENBREY7QUFLRDs7S0FOUUQsSTs7QUFRVEEsSUFBSSxDQUFDRSxlQUFMO0VBQUEsNkxBQXNCO0lBQUE7O0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUNwQkMsR0FEb0IsU0FDcEJBLEdBRG9CLEVBRXBCQyxHQUZvQixTQUVwQkEsR0FGb0IsRUFHcEJDLEtBSG9CLFNBR3BCQSxLQUhvQixFQUlwQkMsT0FKb0IsU0FJcEJBLE9BSm9CLEVBS3BCQyxRQUxvQixTQUtwQkEsUUFMb0IsRUFNakJDLEdBTmlCO1lBUWRDLE1BUmMsdUJBUUxELEdBUkssYUFRTEEsR0FSSyxxQ0FRTEEsR0FBRyxDQUFFRSxLQVJBLCtDQVFMLFdBQVlBLEtBUlAsK0RBUWdCLEVBUmhCLEVBU3BCOztZQVRvQjtZQUFBLE9BVUdDLGlEQUFLLGdEQUNjRixNQURkLGdCQVZSOztVQUFBO1lBVWRHLFFBVmM7WUFBQTtZQUFBLE9BYURBLFFBQVEsQ0FBQ0MsSUFBVCxFQWJDOztVQUFBO1lBQUE7WUFBQTs7WUFBQTtjQUFBO2NBQUE7WUFBQTs7WUFBQTs7VUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBOztZQUFBO1lBQUE7WUFBQTs7VUFBQTtZQUFBLGNBYWtCLEVBYmxCOztVQUFBO1lBYWRDLElBYmM7WUFjZGIsT0FkYyxtQkFjSmEsSUFBSSxDQUFDQyxNQWRELHVEQWNXLEVBZFgsRUFnQnBCO1lBQ0E7O1lBakJvQixpQ0FrQmI7Y0FDTGQsT0FBTyxFQUFQQTtZQURLLENBbEJhOztVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLENBQXRCOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQXNCZUQsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZS4zMTI4NDI4YmUyODJjYjdhZmFiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBHYW1lKHsgcmVzdWx0cyB9KSB7XHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgICAgICA8TGlzdCByZXN1bHRzPXtyZXN1bHRzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuR2FtZS5nZXRJbml0aWFsUHJvcHM9IGFzeW5jICh7XHJcbiAgcmVxLFxyXG4gIHJlcyxcclxuICBtYXRjaCxcclxuICBoaXN0b3J5LFxyXG4gIGxvY2F0aW9uLFxyXG4gIC4uLmN0eFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgc2VhcmNoID0gY3R4Py5xdWVyeT8ucXVlcnkgPz8gXCJcIjtcclxuICAvLyBHZXQgZXh0ZXJuYWwgZGF0YSBmcm9tIHRoZSBmaWxlIHN5c3RlbSwgQVBJLCBEQiwgZXRjLlxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cDovL21kYmFwaS5jb20vP2FwaWtleT1kMzM1M2VkMCZzPSR7c2VhcmNofSZ0eXBlPWdhbWVgXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpID8/IFtdO1xyXG4gIGNvbnN0IHJlc3VsdHMgPSBkYXRhLlNlYXJjaCA/PyBbXTtcclxuXHJcbiAgLy8gVGhlIHZhbHVlIG9mIHRoZSBgcHJvcHNgIGtleSB3aWxsIGJlXHJcbiAgLy8gIHBhc3NlZCB0byB0aGUgYEhvbWVgIGNvbXBvbmVudFxyXG4gIHJldHVybiB7XHJcbiAgICByZXN1bHRzLCBcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=