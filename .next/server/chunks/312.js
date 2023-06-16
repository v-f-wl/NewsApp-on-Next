"use strict";
exports.id = 312;
exports.ids = [312];
exports.modules = {

/***/ 4654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);

const Container = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto max-w-screen-xl flex flex-col gap-1 h-[100%]",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 9547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/components/headerUI/Profile.jsx
/* __next_internal_client_entry_do_not_use__  auto */ 





const Profile = ()=>{
    const userInfo = external_js_cookie_default().get("id");
    const [linkProfile, setLinkProfile] = (0,external_react_.useState)("");
    const [linkSettings, setLinkSettings] = (0,external_react_.useState)("");
    const [modal, setModal] = (0,external_react_.useState)(false);
    const nameInfo = external_js_cookie_default().get("name");
    const color = external_js_cookie_default().get("color");
    (0,external_react_.useEffect)(()=>{
        if (userInfo) {
            setLinkProfile(`/profilepage/?id=${userInfo}`);
            setLinkSettings(`/settings/?id=${userInfo}`);
        } else {
            setLinkProfile("/authpage");
            setLinkSettings("/authpage");
        }
    }, [
        userInfo
    ]);
    const openModal = ()=>{
        setModal((modal)=>!modal);
    };
    const exit = ()=>{
        external_js_cookie_default().remove("name");
        external_js_cookie_default().remove("id");
        external_js_cookie_default().remove("token");
        external_js_cookie_default().remove("color");
        window.location.reload();
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "justify-self-end flex items-center md:gap-4 h-full",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "px-2 shadow-sm h-[40px] flex justify-between items-center gap-2 w-[240px] sm:w-[310px] lg:w-[310px] rounded-lg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-2 overflow-hidden",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            style: {
                                backgroundColor: color
                            },
                            className: "w-[25px] h-[25px] lg:max-w-[30px] lg:max-h-[30px] bg-neutral-200 rounded-lg"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "font-light text-sm text-slate-800 w-3/4 overflow-hidden",
                            children: nameInfo
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(fi_.FiMoreVertical, {
                            onClick: ()=>openModal(),
                            size: 24,
                            className: "text-orange-600 cursor-pointer"
                        }),
                        !modal ? null : /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "w-[150px] absolute bg-white p-4 right-0 top-10 border  rounded-lg z-20",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "/",
                                        className: "cursor-pointer flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineBorderlessTable, {
                                                size: 18
                                            }),
                                            "Dashdoard"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: linkProfile,
                                        className: "cursor-pointer flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineUser, {
                                                size: 18
                                            }),
                                            "Profile"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: linkSettings,
                                        className: "cursor-pointer flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineSetting, {
                                                size: 18
                                            }),
                                            "Settings"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: "cursor-pointer flex items-center gap-1",
                                        onClick: ()=>exit(),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlinePoweroff, {
                                                size: 18
                                            }),
                                            "Log out"
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const headerUI_Profile = (Profile);

;// CONCATENATED MODULE: ./src/components/Header.jsx
/* __next_internal_client_entry_do_not_use__  auto */ 





const Header = ({ search  })=>{
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const [isAuth, setIsAuth] = (0,external_react_.useState)(false);
    const info = external_js_cookie_default().get("id");
    (0,external_react_.useEffect)(()=>{
        if (info) {
            setIsAuth(true);
        }
        setIsLoading(true);
    }, [
        info
    ]);
    const Buttons = ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "justify-self-end flex gap-4 items-center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/authpage",
                    className: "cursor-pointer py-2 px-3 rounded-lg border text-orange-400",
                    children: "LogIn"
                }),
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/authpage?id=signup",
                    className: "cursor-pointer py-2 px-3 rounded-lg bg-orange-400 text-white",
                    children: "Sign Up"
                })
            ]
        });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: "h-[65px] bg-white rounded-b-lg grid grid-cols-2 lg:grid-cols-3 grid-rows-1 items-center px-5 shadow-md shadow-slate-400/10",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                href: "/",
                className: "font-semibold text-slate-600 flex items-center gap-1",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineHolder, {
                        size: 24
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "",
                        children: "Flumpf"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "hidden lg:block p-2"
            }),
            !isLoading ? null : isAuth ? /*#__PURE__*/ jsx_runtime.jsx(headerUI_Profile, {}) : /*#__PURE__*/ jsx_runtime.jsx(Buttons, {})
        ]
    });
};
/* harmony default export */ const components_Header = (Header);


/***/ })

};
;