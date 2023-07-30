"use strict";
(() => {
var exports = {};
exports.id = 242;
exports.ids = [242];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    avatarImg: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    age: {
        type: String,
        default: ""
    },
    hobbies: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User));


/***/ }),

/***/ 3839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2204);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1757);


/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */ async function handler(req, res) {
    if (req.method === "GET") {
        try {
            await (0,_utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            const { userId  } = req.query;
            if (userId === undefined) {
                res.json({
                    mess: "error"
                });
            }
            const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(userId);
            if (!user) {
                return res.status(404).json({
                    message: "Пользователь не найдем"
                });
            }
            const { passwordHash , ...userData } = user._doc;
            res.json({
                ...userData
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Нет доступа",
                error: error
            });
        }
    }
}


/***/ }),

/***/ 2204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectDB = async ()=>mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_KEY).then(()=>console.log("DB Okay")).catch(()=>console.log("Dont Connect"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3839));
module.exports = __webpack_exports__;

})();