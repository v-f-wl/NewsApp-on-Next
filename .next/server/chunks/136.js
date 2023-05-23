"use strict";
exports.id = 136;
exports.ids = [136];
exports.modules = {

/***/ 4654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);

const Container = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto max-w-screen-xl flex flex-col gap-1 h-screen",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 3517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ci"
var ci_ = __webpack_require__(8625);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/components/headerUI/Profile.jsx



const Profile = ()=>{
    const exitApp = ()=>{};
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "md:justify-self-end flex items-center md:gap-4",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(ci_.CiTimer, {
                size: 24
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "px-2 shadow-sm h-[40px] flex justify-between items-center gap-2 w-[300px] rounded-lg",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-[30px] h-[30px] bg-neutral-200 rounded-lg"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "font-light text-sm text-slate-800",
                                children: "Tristan Preston"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(fi_.FiMoreVertical, {
                        onClick: ()=>exitApp(),
                        size: 24,
                        className: "text-orange-600 cursor-pointer"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const headerUI_Profile = (Profile);

;// CONCATENATED MODULE: ./src/components/headerUI/Search.jsx


const Search = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "hidden lg:block justify-self-center relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "shadow-sm h-[40px] flex justify-between items-center gap-2 w-[300px] rounded-lg",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "text",
                        placeholder: "Search...",
                        className: "w-full px-2 outline-none text-sm font-light"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "p-1",
                        children: /*#__PURE__*/ jsx_runtime.jsx(ci_.CiSearch, {
                            size: 24
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "hidden absolute top-10 border w-[1000px] right-[-50%] translate-x-2/4 bg-gray-500",
                children: "modal"
            })
        ]
    });
};
/* harmony default export */ const headerUI_Search = (Search);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Header.jsx
/* __next_internal_client_entry_do_not_use__  auto */ 




const Header = ()=>{
    const [isAuth, setIsAuth] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "h-[65px] bg-white rounded-b-lg grid grid-cols-2 lg:grid-cols-3 items-center px-5 shadow-md shadow-slate-400/10",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/",
                className: "text-2xl font-semibold text-slate-600 tracking-big",
                children: "AirPlay"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(headerUI_Search, {}),
            isAuth ? /*#__PURE__*/ jsx_runtime.jsx(headerUI_Profile, {}) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "justify-self-end flex gap-4 items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/auth",
                        className: "py-2 px-3 rounded-lg border text-orange-400",
                        children: "LogIn"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/auth?id=signin",
                        className: "py-2 px-3 rounded-lg bg-orange-400 text-white",
                        children: "Sign In"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);


/***/ })

};
;