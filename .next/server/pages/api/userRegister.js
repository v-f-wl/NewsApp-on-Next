"use strict";
(() => {
var exports = {};
exports.id = 975;
exports.ids = [975];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

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

/***/ 2023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2204);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1757);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);




/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */ async function handler(req, res) {
    console.log("connect DB");
    (0,_utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    if (req.method === "POST") {
        try {
            const password = req.body.password;
            const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().genSalt(11);
            const hash = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().hash(password, salt);
            const doc = new _models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
                email: req.body.email,
                fullName: req.body.fullName,
                passwordHash: hash,
                avatar: req.body.color
            });
            const user = await doc.save();
            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({
                _id: user._id
            }, process.env.JVT_SECRET, {
                expiresIn: "30d"
            });
            const { passwordHash , ...userData } = user._doc;
            res.json({
                ...userData,
                token
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось зарегестироваться"
            });
        }
    } else {
        return res.status(500).json({
            message: "Что-то пошло не так "
        });
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
var __webpack_exports__ = (__webpack_exec__(2023));
module.exports = __webpack_exports__;

})();