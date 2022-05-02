module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\jsi-s\\Downloads\\files (1)\\files\\3-getStaticProps\\next-movie-omdb\\components\\Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const placeholderImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDsfRCwQvpsd4O5b6IK9evG9H1PTxZLoI6ew5iVnlz3ftQjMBQ";

const Card = ({
  Title,
  Poster,
  Year,
  imdbID
}) => {
  return __jsx("div", {
    className: "card",
    style: {
      marginBottom: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card-body d-flex justify-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-flex align-items-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: `https://www.imdb.com/title/${imdbID}`,
    target: "_blank",
    style: {
      color: "#9b59b6"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "mr-2 rounded",
    src: Poster === "N/A" ? placeholderImg : Poster,
    alt: "placeholder",
    width: "100",
    height: "130",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "title",
    style: {
      fontSize: "20px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, Title))), __jsx("p", {
    style: {
      fontSize: "20px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, Year)));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
var _jsxFileName = "C:\\Users\\jsi-s\\Downloads\\files (1)\\files\\3-getStaticProps\\next-movie-omdb\\components\\List.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const List = props => {
  if (!props.results.length) return __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 37
    }
  }, "No Results :(");
  return __jsx("div", {
    style: {
      height: "calc(100vh - 180px)",
      overflow: "scroll"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, props.results && props.results.map(result => __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, result, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 55
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./pages/game.js":
/*!***********************!*\
  !*** ./pages/game.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
var _jsxFileName = "C:\\Users\\jsi-s\\Downloads\\files (1)\\files\\3-getStaticProps\\next-movie-omdb\\pages\\game.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Game({
  results
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    results: results,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }));
}

Game.getInitialProps = async _ref => {
  var _ctx$query$query, _ctx$query, _await$response$json, _data$Search;

  let {
    req,
    res,
    match,
    history,
    location
  } = _ref,
      ctx = _objectWithoutProperties(_ref, ["req", "res", "match", "history", "location"]);

  const search = (_ctx$query$query = ctx === null || ctx === void 0 ? void 0 : (_ctx$query = ctx.query) === null || _ctx$query === void 0 ? void 0 : _ctx$query.query) !== null && _ctx$query$query !== void 0 ? _ctx$query$query : ""; // Get external data from the file system, API, DB, etc.

  const response = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`http://omdbapi.com/?apikey=d3353ed0&s=${search}&type=game`);
  const data = (_await$response$json = await response.json()) !== null && _await$response$json !== void 0 ? _await$response$json : [];
  const results = (_data$Search = data.Search) !== null && _data$Search !== void 0 ? _data$Search : []; // The value of the `props` key will be
  //  passed to the `Home` component

  return {
    results
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9nYW1lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbInBsYWNlaG9sZGVySW1nIiwiQ2FyZCIsIlRpdGxlIiwiUG9zdGVyIiwiWWVhciIsImltZGJJRCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwiZm9udFNpemUiLCJMaXN0IiwicHJvcHMiLCJyZXN1bHRzIiwibGVuZ3RoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJtYXAiLCJyZXN1bHQiLCJHYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwicmVzIiwibWF0Y2giLCJoaXN0b3J5IiwibG9jYXRpb24iLCJjdHgiLCJzZWFyY2giLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIlNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFB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O0lBRzNCQyxLQUgyQjtJQUkzQkMsT0FKMkI7SUFLM0JDO0VBTDJCLENBT3ZCO0VBQUEsSUFEREMsR0FDQzs7RUFDSixNQUFNQyxNQUFNLHVCQUFHRCxHQUFILGFBQUdBLEdBQUgscUNBQUdBLEdBQUcsQ0FBRUUsS0FBUiwrQ0FBRyxXQUFZQSxLQUFmLCtEQUF3QixFQUFwQyxDQURJLENBRUo7O0VBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLGlEQUFLLENBQ3pCLHlDQUF3Q0gsTUFBTyxZQUR0QixDQUE1QjtFQUdBLE1BQU1JLElBQUksMkJBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQVQsdUVBQTRCLEVBQXRDO0VBQ0EsTUFBTW5CLE9BQU8sbUJBQUdrQixJQUFJLENBQUNFLE1BQVIsdURBQWtCLEVBQS9CLENBUEksQ0FTSjtFQUNBOztFQUNBLE9BQU87SUFDTHBCO0VBREssQ0FBUDtBQUdELENBckJEOztBQXNCZU0sbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNsQ0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZ2FtZS5qc1wiKTtcbiIsImNvbnN0IHBsYWNlaG9sZGVySW1nID1cbiAgXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibiUzQUFOZDlHY1FEc2ZSQ3dRdnBzZDRPNWI2SUs5ZXZHOUgxUFR4WkxvSTZldzVpVm5sejNmdFFqTUJRXCI7XG5jb25zdCBDYXJkID0gKHsgVGl0bGUsIFBvc3RlciwgWWVhciwgaW1kYklEIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy5pbWRiLmNvbS90aXRsZS8ke2ltZGJJRH1gfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM5YjU5YjZcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiByb3VuZGVkXCJcbiAgICAgICAgICAgICAgc3JjPXtQb3N0ZXIgPT09IFwiTi9BXCIgPyBwbGFjZWhvbGRlckltZyA6IFBvc3Rlcn1cbiAgICAgICAgICAgICAgYWx0PVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEzMFwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAge1RpdGxlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiBcIjIwcHhcIiB9fT57WWVhcn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcblxuY29uc3QgTGlzdCA9IChwcm9wcykgPT4ge1xuICBpZiAoIXByb3BzLnJlc3VsdHMubGVuZ3RoKSByZXR1cm4gPHA+Tm8gUmVzdWx0cyA6KDwvcD47XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDE4MHB4KVwiLCBvdmVyZmxvdzogXCJzY3JvbGxcIiB9fT5cbiAgICAgIHtwcm9wcy5yZXN1bHRzICYmIHByb3BzLnJlc3VsdHMubWFwKChyZXN1bHQpID0+IDxDYXJkIHsuLi5yZXN1bHR9IC8+KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEdhbWUoeyByZXN1bHRzIH0pIHtcclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgICAgIDxMaXN0IHJlc3VsdHM9e3Jlc3VsdHN9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5HYW1lLmdldEluaXRpYWxQcm9wcz0gYXN5bmMgKHtcclxuICByZXEsXHJcbiAgcmVzLFxyXG4gIG1hdGNoLFxyXG4gIGhpc3RvcnksXHJcbiAgbG9jYXRpb24sXHJcbiAgLi4uY3R4XHJcbn0pID0+IHtcclxuICBjb25zdCBzZWFyY2ggPSBjdHg/LnF1ZXJ5Py5xdWVyeSA/PyBcIlwiO1xyXG4gIC8vIEdldCBleHRlcm5hbCBkYXRhIGZyb20gdGhlIGZpbGUgc3lzdGVtLCBBUEksIERCLCBldGMuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwOi8vb21kYmFwaS5jb20vP2FwaWtleT1kMzM1M2VkMCZzPSR7c2VhcmNofSZ0eXBlPWdhbWVgXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpID8/IFtdO1xyXG4gIGNvbnN0IHJlc3VsdHMgPSBkYXRhLlNlYXJjaCA/PyBbXTtcclxuXHJcbiAgLy8gVGhlIHZhbHVlIG9mIHRoZSBgcHJvcHNgIGtleSB3aWxsIGJlXHJcbiAgLy8gIHBhc3NlZCB0byB0aGUgYEhvbWVgIGNvbXBvbmVudFxyXG4gIHJldHVybiB7XHJcbiAgICByZXN1bHRzLCBcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==