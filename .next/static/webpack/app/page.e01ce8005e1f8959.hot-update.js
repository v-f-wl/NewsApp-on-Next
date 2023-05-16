/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/MainDash.jsx":
/*!*************************************!*\
  !*** ./src/components/MainDash.jsx ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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
                // @ts-ignore importMeta is replaced in the loader
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
    })();


/***/ }),

/***/ "(app-client)/./src/pages/Dashboard.jsx":
/*!*********************************!*\
  !*** ./src/pages/Dashboard.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header */ \"(app-client)/./src/components/Header.jsx\");\n/* harmony import */ var _components_LeftSide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/LeftSide */ \"(app-client)/./src/components/LeftSide.jsx\");\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MainContainer */ \"(app-client)/./src/components/MainContainer.jsx\");\n/* harmony import */ var _components_MainDash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/MainDash */ \"(app-client)/./src/components/MainDash.jsx\");\n/* harmony import */ var _components_MainDash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_MainDash__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__  auto */ \n\n\n\n\nconst { default: Container  } = __webpack_require__(/*! @/components/Container */ \"(app-client)/./src/components/Container.jsx\");\nconst Dashboard = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/Dashboard.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LeftSide__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/Dashboard.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_MainDash__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                        fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/Dashboard.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border\",\n                        children: \"dfvd\"\n                    }, void 0, false, {\n                        fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/Dashboard.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/Dashboard.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/Dashboard.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFeUM7QUFDSTtBQUNVO0FBQ1Y7QUFFN0MsTUFBTSxFQUFFSSxTQUFTQyxVQUFTLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsMkVBQXdCO0FBRS9ELE1BQU1DLFlBQVksSUFBTTtJQUN0QixxQkFDRSw4REFBQ0Y7OzBCQUNDLDhEQUFDTCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDRSxpRUFBYUE7O2tDQUNaLDhEQUFDRCw0REFBUUE7Ozs7O2tDQUNULDhEQUFDRSw2REFBUUE7Ozs7O2tDQUNULDhEQUFDSzt3QkFBSUMsV0FBVTtrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0tBWE1GO0FBYU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC5qc3g/YjIwZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IExlZnRTaWRlIGZyb20gXCJAL2NvbXBvbmVudHMvTGVmdFNpZGVcIjtcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gXCJAL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lclwiO1xuaW1wb3J0IE1haW5EYXNoIGZyb20gXCJAL2NvbXBvbmVudHMvTWFpbkRhc2hcIjtcblxuY29uc3QgeyBkZWZhdWx0OiBDb250YWluZXIgfSA9IHJlcXVpcmUoXCJAL2NvbXBvbmVudHMvQ29udGFpbmVyXCIpXG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgcmV0dXJuICggIFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZGVyLz5cbiAgICAgIDxNYWluQ29udGFpbmVyPlxuICAgICAgICA8TGVmdFNpZGUvPlxuICAgICAgICA8TWFpbkRhc2gvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPmRmdmQ8L2Rpdj5cbiAgICAgIDwvTWFpbkNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGVmdFNpZGUiLCJNYWluQ29udGFpbmVyIiwiTWFpbkRhc2giLCJkZWZhdWx0IiwiQ29udGFpbmVyIiwicmVxdWlyZSIsIkRhc2hib2FyZCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/pages/Dashboard.jsx\n"));

/***/ })

});