"use strict";
exports.id = 923;
exports.ids = [923];
exports.modules = {

/***/ 1460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ dashboard_PostCard)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/ci"
var ci_ = __webpack_require__(8625);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(5828);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
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
          w-[250]
          lg:w-[290px]
          overflow-hidden
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







const Comments = ({ isOpen , userId , color , isLoaded , authorName , dateString , onClose , postId , postText , imagePost  })=>{
    const [areaValue, setAreaValue] = (0,external_react_.useState)("");
    const [commentsHandler, setCommentsHandler] = (0,external_react_.useState)();
    const [commentLoaded, setCommentLoaded] = (0,external_react_.useState)(false);
    const [buttonDisabled, setButtonDisabled] = (0,external_react_.useState)(false);
    const personId = external_js_cookie_default().get("id");
    const personName = external_js_cookie_default().get("name");
    (0,external_react_.useEffect)(()=>{
        if (isOpen) {
            external_axios_default().get(`/api/getComments/?postId=${postId}`).then((res)=>{
                setCommentsHandler(res.data.comments);
                setCommentLoaded(true);
            });
        }
    }, [
        isOpen,
        postId
    ]);
    const sendComment = ()=>{
        if (areaValue.length === 0 || buttonDisabled) {
            return;
        }
        setButtonDisabled(true);
        const commentInfo = {
            userId: personId,
            text: areaValue,
            name: personName,
            time: new Date()
        };
        external_axios_default().post(`/api/addComments/?id=${postId}`, commentInfo).then((res)=>{
            setAreaValue("");
            setCommentsHandler(res.data.updatedPost.comments);
            setButtonDisabled(false);
        }).catch(()=>setButtonDisabled(false));
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
    const CommentBlock = ({ name , userId , time , text  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "border-l border-orange-400 p-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: `/userprofile/?id=${userId}`,
                            className: "font-bold text-md text-slate-500",
                            children: name
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text-xs font-light",
                            children: convertDate(time)
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "pt-2 text-md",
                    children: text
                })
            ]
        }, (0,external_uuid_.v4)());
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
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "py-4 text-xl",
                    children: [
                        postText,
                        imagePost !== undefined && imagePost.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex items-center overflow-hidden",
                            children: imagePost.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-[100px] h-[100px] rounded-lg",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: item.url,
                                        className: "h-full w-full object-cover rounded-lg"
                                    })
                                }, `${item.id}1fddv2a`))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                    className: "font-bold text-slate-600 text-xl",
                    children: "Сomments"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "h-full overflow-y-scroll flex flex-col gap-4",
                    children: commentLoaded ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                        children: commentsHandler.length == 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "font-semibold capitalize text-lg",
                            children: "no comments yet"
                        }) : commentsHandler.map((item)=>/*#__PURE__*/ jsx_runtime.jsx(CommentBlock, {
                                userId: item.userId,
                                name: item.name,
                                time: item.time,
                                text: item.text
                            }, (0,external_uuid_.v4)()))
                    }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "",
                        children: "Loading..."
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
                            className: `
              ${buttonDisabled ? "opacity-40" : ""}
              rounded-lg 
              py-4
              px-2 
              flex 
              flex-col 
              items-center 
              justify-center
              bg-orange-400
              text-white
              text-xl
              font-semibold
              cursor-pointer
              `,
                            children: "Send"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const dashboard_Comments = (Comments);

;// CONCATENATED MODULE: ./src/components/dashboard/EditPost.jsx
/* __next_internal_client_entry_do_not_use__  auto */ 


const EditPost = ({ openEdit , postText , onClose , editedText , posrId  })=>{
    const [postValue, setPostValue] = (0,external_react_.useState)(postText);
    const [isLoaded, setIsLoaded] = (0,external_react_.useState)(false);
    const setEdit = ()=>{
        setIsLoaded(true);
        external_axios_default().patch("/api/postEdit", {
            postId: posrId,
            editedText: postValue
        }).then(()=>{
            onClose();
            setIsLoaded(false);
            editedText(postValue);
        });
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `${openEdit ? "flex" : "hidden"} fixed top-0 lg:bg-slate-600 lg:bg-opacity-20 left-0 w-full h-full z-20 items-center justify-center`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: " h-full w-full  lg:w-2/4  lg:h-auto  lg:max-h-[70vh]  p-4  lg:p-8  bg-slate-600  lg:bg-white  bg-opacity-20  lg:rounded-lg  flex  flex-col  gap-4  overflow-y-scroll  justify-center ",
            children: [
                isLoaded ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "w-full h-[250px] bg-white border flex items-center justify-center rounded-lg font-semibold text-xl",
                    children: "Please Wait.."
                }) : /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                    className: "w-full h-[250px] resize-none text-xl font-medium p-2 lg:p-4 outline-none border border-orange-400 rounded-lg",
                    value: postValue,
                    onChange: (e)=>setPostValue(e.target.value)
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            onClick: onClose,
                            className: "cursor-pointer bg-white font-semibold text-lg py-3 px-2 lg:border rounded-lg",
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            onClick: setEdit,
                            className: "cursor-pointer font-semibold text-lg py-3 px-5 bg-orange-400 text-white rounded-lg ",
                            children: "Edit"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const dashboard_EditPost = (EditPost);

;// CONCATENATED MODULE: ./src/components/dashboard/PostCard.jsx
/* __next_internal_client_entry_do_not_use__  auto */ 









const PostCard = ({ isLoaded , postText , authorName , createdAt , color , userId , idPost , likesArr , comments , imagePost , tags , selectTag  })=>{
    const [isMenuOpen, setIsMenuOpen] = (0,external_react_.useState)(false);
    const [isHidden, setIsHidden] = (0,external_react_.useState)(false);
    const [isRemove, setIsRemove] = (0,external_react_.useState)(false);
    const [isLiked, setIsLiked] = (0,external_react_.useState)(false);
    const [likeCounts, setLikeCounts] = (0,external_react_.useState)();
    const [commentsCount, setCommentsCount] = (0,external_react_.useState)();
    const [commentOpen, setCommentOpen] = (0,external_react_.useState)(false);
    const [textPost, setTextPost] = (0,external_react_.useState)(postText);
    const [editOpen, setEditOpen] = (0,external_react_.useState)(false);
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
        external_axios_default()["delete"](`/api/postRemove/?id=${idPost}`).then(()=>{
            setIsHidden(true);
        }).catch((err)=>console.log(err));
    };
    const changeLikeCount = ()=>{
        if (isLiked) {
            external_axios_default().patch(`/api/postLikeTarger/?id=${idPost}`, {
                userId: profileId
            }).then(()=>{
                setLikeCounts((prev)=>prev - 1);
                setIsLiked(false);
            });
        } else {
            external_axios_default().patch(`/api/postLikeTarger/?id=${idPost}`, {
                userId: profileId
            }).then(()=>{
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
            /*#__PURE__*/ jsx_runtime.jsx(dashboard_EditPost, {
                openEdit: editOpen,
                postText: postText,
                editedText: (value)=>setTextPost(value),
                onClose: ()=>setEditOpen(false),
                posrId: idPost
            }),
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
                imagePost: imagePost
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
              ${isMenuOpen ? "top-10" : "top-8"}
              transition-all
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
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: `flex flex-col gap-2`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
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
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(ci_.CiCircleMinus, {
                                                        size: 24
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "",
                                                        children: "Remove"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            onClick: ()=>setEditOpen(true),
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
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(ci_.CiEdit, {
                                                        size: 24
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "",
                                                        children: "Edit"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
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
                children: textPost
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "",
                children: tags && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "flex items-center flex-wrap gap-2",
                    children: tags.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            onClick: ()=>selectTag(item),
                            className: "text-sm cursor-pointer text-slate-400 lg:hover:text-orange-400 lg:transition",
                            children: [
                                "#",
                                item
                            ]
                        }, (0,external_uuid_.v4)()))
                })
            }),
            isLoaded && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: imagePost.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "flex justify-center",
                    children: imagePost.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: " max-w-[290px] max-h-[290px] lg:max-w-[350px] lg:max-h-[350px] flex items-center justify-center rounded-lg overflow-hidden",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: item.url,
                                alt: "Description of the image",
                                className: "w-auto h-auto rounded-lg object-cover object-center"
                            }, `${item.id}1fd2a`)
                        }, item.id))
                }) : null
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
                        onClick: ()=>setCommentOpen(true),
                        className: "px-2 py-2 border flex items-center gap-2 rounded-full cursor-pointer",
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

/***/ 7031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ profileMail_AboutInfo)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: ./src/components/profileMail/ProfileTitle.jsx
var ProfileTitle = __webpack_require__(5853);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: ./src/components/profileMail/Label.jsx

const Label = ({ id , type , label , setValue , newValue  })=>{
    const changeValue = (e)=>{
        setValue((prev)=>{
            const data = {
                ...prev
            };
            data[id] = e.target.value;
            return data;
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "text-lg font-semibold text-slate-500",
                children: label
            }),
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                value: newValue || " ",
                onChange: (e)=>changeValue(e),
                id: id,
                type: type,
                className: "border w-[300px] p-2 rounded-lg outline-none"
            })
        ]
    });
};
/* harmony default export */ const profileMail_Label = (Label);

;// CONCATENATED MODULE: ./src/components/profileMail/AboutModal.jsx
/* __next_internal_client_entry_do_not_use__  auto */ 





const AboutModal = ({ isModals , closeModals , valueHobbies , valueCity , valueAge  })=>{
    const [dataValue, setDataValue] = (0,external_react_.useState)({
        city: null,
        age: null,
        hobbies: null
    });
    const outModal = (0,external_react_.useRef)();
    const btnModal = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let newData = {
            ...dataValue
        };
        newData = {
            city: valueCity,
            age: valueAge,
            hobbies: valueHobbies
        };
        setDataValue(newData);
    }, [
        valueHobbies,
        valueCity,
        valueAge
    ]);
    const idUser = external_js_cookie_default().get("id");
    const closeModal = (event)=>{
        const element = event.target;
        if (element === outModal.current || element === btnModal.current) {
            closeModals();
        }
    };
    const onSubmit = ()=>{
        const newData = JSON.parse(JSON.stringify(dataValue));
        external_axios_default().patch(`/api/changeAboutValue/?id=${idUser}`, newData).then(()=>{
            console.log("dvdf");
            window.location.reload();
            closeModals();
        }).catch((error)=>{
            console.log(error, "error");
        });
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        ref: outModal,
        onClick: (e)=>closeModal(e),
        className: `${isModals ? "block" : "hidden"} fixed inset-0 bg-slate-400 bg-opacity-40 flex items-center justify-center`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "bg-white rounded-lg py-6 px-4",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(ProfileTitle/* default */.Z, {
                    title: "Edit About Value"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mt-4 flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(profileMail_Label, {
                                    newValue: dataValue.city,
                                    setValue: (value)=>setDataValue(value),
                                    id: "city",
                                    type: "text",
                                    label: "City"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(profileMail_Label, {
                                    newValue: dataValue.age,
                                    setValue: (value)=>setDataValue(value),
                                    id: "age",
                                    type: "number",
                                    label: "Age"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(profileMail_Label, {
                                    newValue: dataValue.hobbies,
                                    setValue: (value)=>setDataValue(value),
                                    id: "hobbies",
                                    type: "text",
                                    label: "Hobbies"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    onClick: onSubmit,
                                    className: "bg-orange-400 text-white py-2 px-4 hover:opacity-40 transition-opacity flex items-center justify-center text-lg font-semibold rounded-lg cursor-pointer",
                                    children: "Save"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    onClick: (e)=>closeModal(e),
                                    ref: btnModal,
                                    className: "border py-2 px-4 hover:opacity-40 transition-opacity flex items-center justify-center text-lg font-semibold rounded-lg cursor-pointer",
                                    children: "Back"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const profileMail_AboutModal = (AboutModal);

;// CONCATENATED MODULE: ./src/components/profileMail/AboutInfo.jsx
/* __next_internal_client_entry_do_not_use__  auto */ 




const AboutInfo = ({ isPerson , city , age , hobbies  })=>{
    const [isModal, setIsModal] = (0,external_react_.useState)(false);
    const [mobileBlock, setMobileBlock] = (0,external_react_.useState)(false);
    const LiItem = ({ children  })=>/*#__PURE__*/ jsx_runtime.jsx("li", {
            className: "flex gap-2 items-start",
            children: children
        });
    const LiTitle = ({ title  })=>/*#__PURE__*/ jsx_runtime.jsx("h3", {
            className: "text-slate-600 font-semibold text-lg w-[100px]",
            children: title
        });
    const LiValue = ({ value  })=>/*#__PURE__*/ jsx_runtime.jsx("span", {
            className: "pt-[2px] w-[200px] text-slate-500",
            children: value
        });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: " absolute top-20 right-0 h-auto px-2 py-4 w-full min-h-8 rounded-lg overflow-hidden lg:sticky lg:px-4  lg:py-8  lg:bg-white ",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                onClick: ()=>setMobileBlock(!mobileBlock),
                className: " absolute  top-3  right-4  w-8  h-8  flex  items-center  justify-center  rounede-lg  lg:hidden ",
                children: /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineInfoCircle, {
                    size: 24,
                    className: "text-slate-500"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `
        ${mobileBlock ? "visible" : "invisible"} 
        ${mobileBlock ? "opacity-100" : "opacity-0"} 
        top-8 
        mt-12 
        p-4
        bg-white 
        border
        rounded-lg
        transition-all
        
        lg:mt-0 
        lg:p-0
        lg:visible
        lg:opacity-100
        lg:block
        lg:border-none
        `,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(ProfileTitle/* default */.Z, {
                                title: "About Me"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineEdit, {
                                onClick: ()=>setIsModal(true),
                                size: 24,
                                className: `
                ${isPerson ? "block" : "hidden"}
                absolute 
                top-0
                right-0
                cursor-pointer
                lg:right-4 
              `
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "mt-6 flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(LiItem, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(LiTitle, {
                                        title: "City"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(LiValue, {
                                        value: city
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(LiItem, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(LiTitle, {
                                        title: "Age"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(LiValue, {
                                        value: age
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(LiItem, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(LiTitle, {
                                        title: "Hobbies"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(LiValue, {
                                        value: hobbies
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(profileMail_AboutModal, {
                        isModals: isModal,
                        valueHobbies: hobbies,
                        valueCity: city,
                        valueAge: age,
                        closeModals: ()=>setIsModal(false)
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const profileMail_AboutInfo = (AboutInfo);


/***/ }),

/***/ 6079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);

const HeaderName = ({ profileColor , name  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white rounded-lg flex min-h-[50px] h-auto items-center gap-4 p-3 lg:p-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    backgroundColor: profileColor
                },
                className: "w-8 h-8 lg:w-14 lg:h-14 rounded-lg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-semibold text-xl lg:text-3xl text-slate-700 tracking-wide w-[290px] lg:w-[300px] overflow-hidden",
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