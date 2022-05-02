webpackHotUpdate_N_E("pages/serie",{

/***/ "./node_modules/node-fetch/browser.js":
false,

/***/ "./pages/serie.js":
/*!************************!*\
  !*** ./pages/serie.js ***!
  \************************/
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
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/List */ "./components/List.js");



var _excluded = ["req", "res", "match", "history", "location"];
var _jsxFileName = "C:\\Users\\jsi-s\\Downloads\\files (1)\\files\\3-getStaticProps\\next-movie-omdb\\pages\\serie.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
// import fetch from "node-fetch";


function Serie(_ref) {
  var results = _ref.results;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    results: results,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }));
}

_c = Serie;

Serie.getInitialProps = /*#__PURE__*/function () {
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
            return fetch("http://www.omdbapi.com/?apikey=d3353ed0&s=".concat(search, "&type=serie"));

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

/* harmony default export */ __webpack_exports__["default"] = (Serie);

var _c;

$RefreshReg$(_c, "Serie");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VyaWUuanMiXSwibmFtZXMiOlsiU2VyaWUiLCJyZXN1bHRzIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwicmVzIiwibWF0Y2giLCJoaXN0b3J5IiwibG9jYXRpb24iLCJjdHgiLCJzZWFyY2giLCJxdWVyeSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIlNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxPQUE0QjtFQUFBLElBQVhDLE9BQVcsUUFBWEEsT0FBVztFQUMxQixPQUNFLG1FQUNJLE1BQUMsd0RBQUQ7SUFBTSxPQUFPLEVBQUVBLE9BQWY7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURKLENBREY7QUFLRDs7S0FOUUQsSzs7QUFRVEEsS0FBSyxDQUFDRSxlQUFOO0VBQUEsNkxBQXVCO0lBQUE7O0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUNyQkMsR0FEcUIsU0FDckJBLEdBRHFCLEVBRXJCQyxHQUZxQixTQUVyQkEsR0FGcUIsRUFHckJDLEtBSHFCLFNBR3JCQSxLQUhxQixFQUlyQkMsT0FKcUIsU0FJckJBLE9BSnFCLEVBS3JCQyxRQUxxQixTQUtyQkEsUUFMcUIsRUFNbEJDLEdBTmtCO1lBUWZDLE1BUmUsdUJBUU5ELEdBUk0sYUFRTkEsR0FSTSxxQ0FRTkEsR0FBRyxDQUFFRSxLQVJDLCtDQVFOLFdBQVlBLEtBUk4sK0RBUWUsRUFSZixFQVNyQjs7WUFUcUI7WUFBQSxPQVVFQyxLQUFLLHFEQUNtQkYsTUFEbkIsaUJBVlA7O1VBQUE7WUFVZkcsUUFWZTtZQUFBO1lBQUEsT0FhRkEsUUFBUSxDQUFDQyxJQUFULEVBYkU7O1VBQUE7WUFBQTtZQUFBOztZQUFBO2NBQUE7Y0FBQTtZQUFBOztZQUFBOztVQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7O1lBQUE7WUFBQTtZQUFBOztVQUFBO1lBQUEsY0FhaUIsRUFiakI7O1VBQUE7WUFhZkMsSUFiZTtZQWNmYixPQWRlLG1CQWNMYSxJQUFJLENBQUNDLE1BZEEsdURBY1UsRUFkVixFQWdCckI7WUFDQTs7WUFqQnFCLGlDQWtCZDtjQUNMZCxPQUFPLEVBQVBBO1lBREssQ0FsQmM7O1VBQUE7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FBdkI7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBc0JlRCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXJpZS4zYjhkY2NlZTQ5OTMxZDllYzc4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBTZXJpZSh7IHJlc3VsdHMgfSkge1xyXG4gIHJldHVybihcclxuICAgIDw+XHJcbiAgICAgICAgPExpc3QgcmVzdWx0cz17cmVzdWx0c30gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblNlcmllLmdldEluaXRpYWxQcm9wcz0gYXN5bmMgKHtcclxuICByZXEsXHJcbiAgcmVzLFxyXG4gIG1hdGNoLFxyXG4gIGhpc3RvcnksXHJcbiAgbG9jYXRpb24sXHJcbiAgLi4uY3R4XHJcbn0pID0+IHtcclxuICBjb25zdCBzZWFyY2ggPSBjdHg/LnF1ZXJ5Py5xdWVyeSA/PyBcIlwiO1xyXG4gIC8vIEdldCBleHRlcm5hbCBkYXRhIGZyb20gdGhlIGZpbGUgc3lzdGVtLCBBUEksIERCLCBldGMuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9ZDMzNTNlZDAmcz0ke3NlYXJjaH0mdHlwZT1zZXJpZWBcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCkgPz8gW107XHJcbiAgY29uc3QgcmVzdWx0cyA9IGRhdGEuU2VhcmNoID8/IFtdO1xyXG5cclxuICAvLyBUaGUgdmFsdWUgb2YgdGhlIGBwcm9wc2Aga2V5IHdpbGwgYmVcclxuICAvLyAgcGFzc2VkIHRvIHRoZSBgSG9tZWAgY29tcG9uZW50XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3VsdHMsIFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VyaWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=