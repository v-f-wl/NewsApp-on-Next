"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829,154,624];
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

/***/ 5231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ users)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./utils/dbConnect.js

const connection = {};
async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    const db = await external_mongoose_default().connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
}
/* harmony default export */ const utils_dbConnect = (dbConnect);

// EXTERNAL MODULE: ./Models/User.js
var User = __webpack_require__(728);
// EXTERNAL MODULE: ./src/pages/api/users/UserController.js
var UserController = __webpack_require__(1810);
// EXTERNAL MODULE: ./src/pages/api/users/validations.js + 1 modules
var validations = __webpack_require__(6994);
;// CONCATENATED MODULE: ./src/pages/api/users/index.js




utils_dbConnect();
/* harmony default export */ const users = (async (req, res)=>{
    const { method  } = req;
    switch(method){
        case "GET":
            try {
                const user = await User/* default.find */.Z.find({});
                res.status(200).json({
                    success: true,
                    users: user
                });
            } catch (error1) {
                res.status(404).json({
                    success: false,
                    users: "Not found users"
                });
            }
        case "POST":
            try {
                UserController.register(req, res);
            } catch (error1) {
                res.status(500).json({
                    success: false,
                    users: "Not found users"
                });
            }
            break;
        default:
            res.status(404).json({
                success: false,
                users: "Not found users",
                err: error
            });
    }
});


/***/ }),

/***/ 6994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "loginValidator": () => (/* binding */ loginValidator),
  "registerValidator": () => (/* binding */ registerValidator)
});

;// CONCATENATED MODULE: external "express-validator"
const external_express_validator_namespaceObject = require("express-validator");
;// CONCATENATED MODULE: ./src/pages/api/users/validations.js

const loginValidator = [
    (0,external_express_validator_namespaceObject.body)("email", "Неверый формат почты").isEmail(),
    (0,external_express_validator_namespaceObject.body)("password", "Пароль должен быть минимум 5 цифр").isLength({
        min: 5
    })
];
const registerValidator = [
    (0,external_express_validator_namespaceObject.body)("email", "Неверый формат почты").isEmail(),
    (0,external_express_validator_namespaceObject.body)("password", "Пароль должен быть минимум 5 цифр").isLength({
        min: 5
    }),
    (0,external_express_validator_namespaceObject.body)("fullName", "Укажите имя").isLength({
        min: 3
    })
];


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [810], () => (__webpack_exec__(5231)));
module.exports = __webpack_exports__;

})();