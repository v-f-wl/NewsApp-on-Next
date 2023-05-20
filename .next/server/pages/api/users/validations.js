"use strict";
(() => {
var exports = {};
exports.id = 624;
exports.ids = [624];
exports.modules = {

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6994));
module.exports = __webpack_exports__;

})();