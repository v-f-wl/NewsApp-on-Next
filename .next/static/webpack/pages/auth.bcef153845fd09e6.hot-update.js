"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth",{

/***/ "./src/pages/auth.jsx":
/*!****************************!*\
  !*** ./src/pages/auth.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Auth = ()=>{\n    _s();\n    const [isSingIn, setIsSingIn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (id == \"signin\") {\n            setIsSingIn(true);\n        }\n    }, []);\n    const SignIn = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"flex flex-col gap-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-md text-slate-700\",\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter Your Name\",\n                            className: \"outline-none py-1 px-3 border-b\"\n                        }, void 0, false, {\n                            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-md text-slate-700\",\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"mail\",\n                            placeholder: \"Enter Your Email\",\n                            className: \"outline-none py-1 px-3 border-b\"\n                        }, void 0, false, {\n                            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-md text-slate-700\",\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Create A Password\",\n                            className: \"outline-none py-1 px-3 border-b\"\n                        }, void 0, false, {\n                            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full border mt-4 py-2 rounded-lg\",\n                    children: \"SignUp\"\n                }, void 0, false, {\n                    fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n        lineNumber: 20,\n        columnNumber: 7\n    }, undefined);\n    const LogIn = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"flex flex-col gap-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-md text-slate-700\",\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"mail\",\n                            placeholder: \"Enter Your Email\",\n                            className: \"outline-none py-1 px-3 border-b\"\n                        }, void 0, false, {\n                            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-md text-slate-700\",\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Create A Password\",\n                            className: \"outline-none py-1 px-3 border-b\"\n                        }, void 0, false, {\n                            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full border mt-4 py-2 rounded-lg\",\n                    children: \"LogIn\"\n                }, void 0, false, {\n                    fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-2/3 h-3/4 bg-white rounded-lg grid grid-cols-2 overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-12 bg-orange-400 flex flex-col justify-center text-white gap-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-4xl font-semibold\",\n                            children: \"Welcome To AirPlay\"\n                        }, void 0, false, {\n                            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-mono\",\n                            children: \"The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex- flex-col gap-7\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-b py-4 flex gap-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setIsSingIn(false),\n                                        className: \"font-semibold text-slate-700 \".concat(isSingIn ? \"opacity-60\" : \"\"),\n                                        children: \"LogIn\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setIsSingIn(true),\n                                        className: \"font-semibold text-slate-700 \".concat(isSingIn ? \"\" : \"opacity-60\"),\n                                        children: \"Sing In\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-[300px] h-[500px]\",\n                                children: isSingIn ? SignIn : LogIn\n                            }, void 0, false, {\n                                fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/valentinkim/Desktop/React-app/newsapp/src/pages/auth.jsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Auth, \"D2kHw9PnFAsibuYTe7URFP8TvXA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXV0aC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3QztBQUNHO0FBQ1Q7QUFHbEMsTUFBTUcsT0FBTyxJQUFNOztJQUVqQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUMsS0FBSztJQUM5QyxNQUFNSSxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxFQUFFTyxHQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUUzQlAsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUdNLE1BQU0sVUFBUztZQUNoQkYsWUFBWSxJQUFJO1FBQ2xCLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxNQUFNSSx1QkFDRiw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBS0QsV0FBVTs7OEJBQ2QsOERBQUNFO29CQUFNRixXQUFVOztzQ0FDZiw4REFBQ0c7NEJBQUtILFdBQVU7c0NBQXlCOzs7Ozs7c0NBQ3pDLDhEQUFDSTs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWk4sV0FBVTs7Ozs7Ozs7Ozs7OzhCQUVkLDhEQUFDRTtvQkFBTUYsV0FBVTs7c0NBQ2YsOERBQUNHOzRCQUFLSCxXQUFVO3NDQUF5Qjs7Ozs7O3NDQUN6Qyw4REFBQ0k7NEJBQ0NDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pOLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFFZCw4REFBQ0U7b0JBQU1GLFdBQVU7O3NDQUNmLDhEQUFDRzs0QkFBS0gsV0FBVTtzQ0FBeUI7Ozs7OztzQ0FDekMsOERBQUNJOzRCQUNDQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaTixXQUFVOzs7Ozs7Ozs7Ozs7OEJBRWQsOERBQUNPO29CQUFPUCxXQUFVOzhCQUFxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLL0QsTUFBTVEsc0JBQ0osOERBQUNUO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUtELFdBQVU7OzhCQUNkLDhEQUFDRTtvQkFBTUYsV0FBVTs7c0NBQ2YsOERBQUNHOzRCQUFLSCxXQUFVO3NDQUF5Qjs7Ozs7O3NDQUN6Qyw4REFBQ0k7NEJBQ0NDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pOLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFFZCw4REFBQ0U7b0JBQU1GLFdBQVU7O3NDQUNmLDhEQUFDRzs0QkFBS0gsV0FBVTtzQ0FBeUI7Ozs7OztzQ0FDekMsOERBQUNJOzRCQUNDQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaTixXQUFVOzs7Ozs7Ozs7Ozs7OEJBRWQsOERBQUNPO29CQUFPUCxXQUFVOzhCQUFxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLN0QscUJBQ0UsOERBQUNEO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNTOzRCQUFHVCxXQUFVO3NDQUF5Qjs7Ozs7O3NDQUN2Qyw4REFBQ0c7NEJBQUtILFdBQVU7c0NBQVk7Ozs7Ozs7Ozs7Ozs4QkFFOUIsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ087d0NBQU9HLFNBQVMsSUFBTWhCLFlBQVksS0FBSzt3Q0FBR00sV0FBVyxnQ0FBNkQsT0FBN0JQLFdBQVcsZUFBZSxFQUFFO2tEQUFJOzs7Ozs7a0RBQ3RILDhEQUFDYzt3Q0FBT0csU0FBUyxJQUFNaEIsWUFBWSxJQUFJO3dDQUFHTSxXQUFXLGdDQUE2RCxPQUE3QlAsV0FBVyxLQUFLLFlBQVk7a0RBQUk7Ozs7Ozs7Ozs7OzswQ0FFdkgsOERBQUNNO2dDQUFJQyxXQUFVOzBDQUNaUCxXQUFXSyxTQUFTVSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFDO0dBcEZNaEI7O1FBR1dILGtEQUFTQTs7O0tBSHBCRztBQXNGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXV0aC5qc3g/YWI3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJztcblxuXG5jb25zdCBBdXRoID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtpc1NpbmdJbiwgc2V0SXNTaW5nSW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoaWQgPT0gJ3NpZ25pbicpe1xuICAgICAgc2V0SXNTaW5nSW4odHJ1ZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IFNpZ25JbiA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTZcIj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC04Jz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1zbGF0ZS03MDBcIj5OYW1lPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgWW91ciBOYW1lJyBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdvdXRsaW5lLW5vbmUgcHktMSBweC0zIGJvcmRlci1iJy8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1zbGF0ZS03MDBcIj5FbWFpbDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgdHlwZT1cIm1haWxcIiBcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIFlvdXIgRW1haWwnIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9J291dGxpbmUtbm9uZSBweS0xIHB4LTMgYm9yZGVyLWInLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LXNsYXRlLTcwMFwiPlBhc3N3b3JkPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0NyZWF0ZSBBIFBhc3N3b3JkJyBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdvdXRsaW5lLW5vbmUgcHktMSBweC0zIGJvcmRlci1iJy8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndy1mdWxsIGJvcmRlciBtdC00IHB5LTIgcm91bmRlZC1sZyc+U2lnblVwPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICApXG5cbiAgY29uc3QgTG9nSW4gPShcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE2XCI+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTgnPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtc2xhdGUtNzAwXCI+RW1haWw8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cIm1haWxcIiBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBZb3VyIEVtYWlsJyBcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nb3V0bGluZS1ub25lIHB5LTEgcHgtMyBib3JkZXItYicvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtc2xhdGUtNzAwXCI+UGFzc3dvcmQ8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nQ3JlYXRlIEEgUGFzc3dvcmQnIFxuICAgICAgICAgICAgY2xhc3NOYW1lPSdvdXRsaW5lLW5vbmUgcHktMSBweC0zIGJvcmRlci1iJy8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LWZ1bGwgYm9yZGVyIG10LTQgcHktMiByb3VuZGVkLWxnJz5Mb2dJbjwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG4gIFxuICByZXR1cm4gKCBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIGgtMy80IGJnLXdoaXRlIHJvdW5kZWQtbGcgZ3JpZCBncmlkLWNvbHMtMiBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEyIGJnLW9yYW5nZS00MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlIGdhcC04XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGRcIj5XZWxjb21lIFRvIEFpclBsYXk8L2gyPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ub1wiPlRoZSBkZWNhZGUgdGhhdCBicm91Z2h0IHVzIFN0YXIgVHJlayBhbmQgRG9jdG9yIFdobyBhbHNvIHJlc3VycmVjdGVkIENpY2Vyb+KAlG9yIGF0IGxlYXN0IHdoYXQgdXNlZCB0byBiZSBDaWNlcm/igJRpbiBhbiBhdHRlbXB0IHRvIG1ha2UgdGhlIGRheXMgYmVmb3JlIGNvbXB1dGVyaXplZCBkZXNpZ24gYSBsaXR0bGUgbGVzcyBwYWluc3Rha2luZy48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4LSBmbGV4LWNvbCBnYXAtN1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIHB5LTQgZmxleCBnYXAtOFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNTaW5nSW4oZmFsc2UpfSBjbGFzc05hbWU9e2Bmb250LXNlbWlib2xkIHRleHQtc2xhdGUtNzAwICR7aXNTaW5nSW4gPyAnb3BhY2l0eS02MCcgOiAnJ31gfT5Mb2dJbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNTaW5nSW4odHJ1ZSl9IGNsYXNzTmFtZT17YGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS03MDAgJHtpc1NpbmdJbiA/ICcnIDogJ29wYWNpdHktNjAnfWB9PlNpbmcgSW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMzAwcHhdIGgtWzUwMHB4XVwiPlxuICAgICAgICAgICAgICAgIHtpc1NpbmdJbiA/IFNpZ25JbiA6IExvZ0lufVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgQXV0aDsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdXRoIiwiaXNTaW5nSW4iLCJzZXRJc1NpbmdJbiIsInJvdXRlciIsImlkIiwicXVlcnkiLCJTaWduSW4iLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwibGFiZWwiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJMb2dJbiIsImgyIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/auth.jsx\n"));

/***/ })

});