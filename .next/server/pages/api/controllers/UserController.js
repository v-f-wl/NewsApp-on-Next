"use strict";
(() => {
var exports = {};
exports.id = 819;
exports.ids = [819];
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
        type: String,
        required: true
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", UserSchema));


/***/ }),

/***/ 6169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMe": () => (/* binding */ getMe),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "register": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1757);



const register = async (req, res)=>{
    console.log(req.body);
    try {
        const password = req.body.password;
        const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().genSalt(11);
        const hash = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, salt);
        const doc = new _models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({
            email: req.body.email,
            fullName: req.body.fullName,
            passwordHash: hash
        });
        const user = await doc.save();
        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({
            _id: user._id
        }, "secret123", {
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
};
const login = async (req, res)=>{
    try {
        const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
            email: req.body.email
        });
        if (!user) {
            return res.status(404).json({
                message: "Пользователь не найден"
            });
        }
        const isValidPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(req.body.password, user._doc.passwordHash);
        if (!isValidPassword) {
            return res.status(409).json({
                message: "Неверный логин или пароль"
            });
        }
        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({
            _id: user._id
        }, "secret123", {
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
            message: "Не удалось авторизоваться"
        });
    }
};
const getMe = async (req, res)=>{
    try {
        const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.userId);
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
            message: "Нет доступа"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6169));
module.exports = __webpack_exports__;

})();