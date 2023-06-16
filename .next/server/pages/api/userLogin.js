"use strict";
(() => {
var exports = {};
exports.id = 688;
exports.ids = [688];
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

/***/ 5304:
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
    if (req.method === "POST") {
        try {
            await (0,_utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
                email: req.body.email
            });
            if (!user) {
                return res.status(404).json({
                    message: "Пользователь не найден"
                });
            }
            const isValidPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare(req.body.password, user._doc.passwordHash);
            if (!isValidPassword) {
                return res.status(409).json({
                    message: "Неверный логин или пароль"
                });
            }
            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({
                _id: user._id
            }, process.env.JVT_SECRET, {
                expiresIn: "30d"
            });
            const { passwordHash , ...userData } = user._doc;
            return res.json({
                ...userData,
                token
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось авторизоваться"
            });
        }
    } else {
        return res.status(500).json({
            message: "Что-то  пошло не так"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [168], () => (__webpack_exec__(5304)));
module.exports = __webpack_exports__;

})();