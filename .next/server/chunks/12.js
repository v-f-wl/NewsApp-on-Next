"use strict";
exports.id = 12;
exports.ids = [12];
exports.modules = {

/***/ 569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ dashboard_PostCard)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/ci"
var ci_ = __webpack_require__(8625);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/dashboard/UserBlock.jsx


const UserBlock = ({ userId , color , isLoaded , authorName , dateString  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
        href: `/userprofile?id=${userId}`,
        className: "grid grid-cols-post grid-rows-2 items-center gap-y-0 gap-x-2",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: {
                    backgroundColor: color
                },
                className: "w-8 h-8 rounded-lg row-span-full"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: `
          ${isLoaded ? "" : "w-[100px]"}
          ${isLoaded ? "" : "h-[15px]"}
          ${isLoaded ? "" : "bg-slate-300"}
          ${isLoaded ? "" : "animate-pulse"}
          ${isLoaded ? "" : "rounded-md"}
          font-light 
          text-slate-800 
          text-sm 
          self-end
        `,
                children: isLoaded ? authorName : ""
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "self-start text-xs text-slate-400",
                children: isLoaded ? dateString : ""
            })
        ]
    });
};
/* harmony default export */ const dashboard_UserBlock = (UserBlock);

;// CONCATENATED MODULE: ./src/components/dashboard/Comments.jsx
/* __next_internal_client_entry_do_not_use__  auto */ 






const Comments = ({ isOpen , userId , color , isLoaded , authorName , dateString , onClose , postId , postText  })=>{
    const [areaValue, setAreaValue] = (0,external_react_.useState)("");
    const [commentsHandler, setCommentsHandler] = (0,external_react_.useState)([]);
    const personId = external_js_cookie_default().get("id");
    const personName = external_js_cookie_default().get("name");
    const sendComment = ()=>{
        if (areaValue.length === 0) {
            return;
        }
        const commentInfo = {
            userId: personId,
            text: areaValue,
            name: personName,
            time: new Date()
        };
        external_axios_default().post(`/api/addComments/?id=${postId}`, commentInfo).then((res)=>{
            setAreaValue("");
            setCommentsHandler(res.data.updatedPost.comments);
        }).catch((error)=>console.log(error));
    };
    const convertDate = (dateValue)=>{
        if (!dateValue) {
            return "";
        }
        const date = new Date(dateValue);
        const options = {
            hour: "numeric",
            minute: "numeric",
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        const editData = date.toLocaleDateString("en-US", options);
        return editData;
    };
    (0,external_react_.useEffect)(()=>{
        if (postId !== undefined && isOpen) {
            external_axios_default().get(`/api/postGetOne/?id=${postId}`).then((res)=>{
                if (res.data.comments.length > 0) {
                    setCommentsHandler([
                        ...res.data.comments
                    ]);
                }
            });
        }
    }, [
        postId,
        isOpen
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `${isOpen ? "flex" : "hidden"} fixed top-0 bg-slate-600 bg-opacity-20 left-0 w-full h-full z-20 items-center justify-center`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "h-full w-full lg:w-2/4 lg:max-h-[70vh] p-4 lg:p-8 bg-white lg:rounded-lg flex flex-col gap-4 overflow-y-scroll",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(dashboard_UserBlock, {
                            userId: userId,
                            color: color,
                            isLoaded: isLoaded,
                            authorName: authorName,
                            dateString: dateString
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "cursor-pointer",
                            onClick: onClose,
                            children: /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineClose, {
                                size: 24
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "py-4 text-xl",
                    children: postText
                }),
                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                    className: "mt-2 font-bold text-slate-600 text-xl",
                    children: "Сomments"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "h-auto overflow-y-scroll flex flex-col gap-4",
                    children: commentsHandler.length > 0 ? commentsHandler.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "border rounded-lg p-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: `/userprofile/?id=${item.userId}`,
                                            className: "font-bold text-md text-slate-500",
                                            children: item.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-xs font-light",
                                            children: convertDate(item.time)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "pt-4 text-lg",
                                    children: item.text
                                })
                            ]
                        }, item.userId)) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "capitalize",
                        children: "no comments yet"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "py-4 border-t flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                            value: areaValue,
                            onChange: (e)=>setAreaValue(e.target.value),
                            rows: "2",
                            className: "p-2 w-full resize-none border rounded-lg outline-none"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            onClick: ()=>sendComment(),
                            className: " rounded-lg  py-4 px-2  flex  flex-col  items-center  justify-center bg-orange-400 text-white text-xl font-semibold cursor-pointer ",
                            children: "Send"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const dashboard_Comments = (Comments);

;// CONCATENATED MODULE: ./src/components/dashboard/PostCard.jsx
/* __next_internal_client_entry_do_not_use__  auto */ 







const PostCard = ({ isLoaded , postText , authorName , createdAt , color , userId , idPost , likesArr , comments  })=>{
    const [isMenuOpen, setIsMenuOpen] = (0,external_react_.useState)(false);
    const [isHidden, setIsHidden] = (0,external_react_.useState)(false);
    const [isRemove, setIsRemove] = (0,external_react_.useState)(false);
    const [isLiked, setIsLiked] = (0,external_react_.useState)(false);
    const [likeCounts, setLikeCounts] = (0,external_react_.useState)();
    const [commentsCount, setCommentsCount] = (0,external_react_.useState)();
    const [commentOpen, setCommentOpen] = (0,external_react_.useState)(false);
    const createData = new Date(createdAt);
    const options = {
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const dateString = createData.toLocaleDateString("en-US", options);
    const profileId = external_js_cookie_default().get("id");
    const menu = (event)=>{
        if (isMenuOpen && !event.target.closest(".pin")) {
            setIsMenuOpen(false);
        } else {
            setIsMenuOpen(true);
        }
    };
    const removePost = ()=>{
        external_axios_default()["delete"](`/api/postRemove/?id=${idPost}`).then((res)=>{
            setIsHidden(true);
        }).catch((err)=>console.log(err));
    };
    const changeLikeCount = ()=>{
        if (isLiked) {
            external_axios_default().patch(`/api/postLikeTarger/?id=${idPost}`, {
                userId: profileId
            }).then((res)=>{
                setLikeCounts((prev)=>prev - 1);
                setIsLiked(false);
            });
        } else {
            external_axios_default().patch(`/api/postLikeTarger/?id=${idPost}`, {
                userId: profileId
            }).then((res)=>{
                setLikeCounts((prev)=>prev + 1);
                setIsLiked(true);
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (userId !== undefined && userId === profileId) {
            setIsRemove(true);
        }
        if (likesArr !== undefined) {
            setLikeCounts(likesArr.length);
            if (likesArr.indexOf(profileId) !== -1) {
                setIsLiked(true);
            }
        }
        if (comments !== undefined) {
            setCommentsCount(comments.length);
        }
        const handleClickOutside = (event)=>{
            if (!event.target.closest(".menu-container") || event.target.closest(".pin")) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, [
        comments,
        likesArr,
        profileId,
        userId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `${isHidden ? "hidden" : ""} p-4 bg-white rounded-lg flex flex-col gap-4`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(dashboard_Comments, {
                onClose: ()=>setCommentOpen(false),
                isOpen: commentOpen,
                userId: userId,
                color: color,
                postText: postText,
                isLoaded: isLoaded,
                authorName: authorName,
                dateString: dateString,
                postId: idPost,
                comment: comments
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(dashboard_UserBlock, {
                        userId: userId,
                        color: color,
                        isLoaded: isLoaded,
                        authorName: authorName,
                        dateString: dateString
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: `${isRemove ? "flex" : "hidden"}  relative menu-container z-0`,
                        onClick: (e)=>menu(e),
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineMore, {
                                size: 22
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: `
              ${isMenuOpen ? "visible" : "invisible"}
              ${isMenuOpen ? "top-10" : "top-0"}
              py-3
              px-2
              right-0
              absolute 
              border 
              rounded-lg
              w-[140px]
              bg-white
              shadow-md 
            shadow-slate-400/10
            `,
                                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                    className: `flex flex-col`,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        onClick: ()=>removePost(),
                                        className: `
                    pin
                    relative
                    z-20
                    pin
                    flex 
                    items-center 
                    gap-2 
                    cursor-pointer
                  `,
                                        children: isRemove ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(ci_.CiCircleMinus, {
                                                    size: 24
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "",
                                                    children: "Remove"
                                                })
                                            ]
                                        }) : null
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `
          ${isLoaded ? "" : "h-[50px]"}
          ${isLoaded ? "" : "animate-pulse"}
          ${isLoaded ? "" : "bg-slate-300"}
          ${isLoaded ? "" : "rounded-lg"}

          text-sm 
          lg:text-xl
          tracking-wide
        `,
                children: postText
            }),
            isLoaded ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${profileId ? "flex" : "hidden"} items-center gap-5`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        onClick: ()=>changeLikeCount(),
                        className: "px-2 py-2 border flex items-center gap-2 rounded-full cursor-pointer",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineHeart, {
                                size: 24,
                                className: `${isLiked ? "text-red-500" : "text-slate-400"}`
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "text-slate-800",
                                children: likeCounts
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "px-2 py-2 border flex items-center gap-2 rounded-full cursor-pointer",
                        onClick: ()=>setCommentOpen(true),
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineComment, {
                                size: 24,
                                className: "text-slate-400"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "text-slate-800",
                                children: commentsCount
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "animate-pulsew-[100px]h-[40px]rounded-lg bg-slate-300"
            })
        ]
    });
};
/* harmony default export */ const dashboard_PostCard = (PostCard);


/***/ }),

/***/ 6079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);

const HeaderName = ({ profileColor , name  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white rounded-lg flex items-center gap-4 p-3 lg:p-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    backgroundColor: profileColor
                },
                className: "w-8 h-8 lg:w-14 lg:h-14 rounded-lg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-semibold text-xl lg:text-3xl text-slate-700 tracking-wide",
                children: name
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderName);


/***/ }),

/***/ 5853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);

const ProfileTitle = ({ title  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "font-semibold text-xl lg:text-2xl capitalize text-slate-500",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileTitle);


/***/ })

};
;