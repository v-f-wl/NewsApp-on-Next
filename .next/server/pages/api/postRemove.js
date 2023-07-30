"use strict";
(() => {
var exports = {};
exports.id = 245;
exports.ids = [245];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2204);
/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9189);


/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */ async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            await (0,_utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            const { id  } = req.query;
            _models_Post__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOneAndDelete */ .Z.findOneAndDelete({
                _id: id
            }).then((doc)=>{
                if (!doc) {
                    return res.status(404).json({
                        message: "Статья не найдена"
                    });
                }
                res.json({
                    message: "Succec"
                });
            }).catch((err)=>{
                res.status(404).json({
                    message: "Проблемы"
                });
            });
        } catch (error) {
            console.log(error);
            res.status(404).json({
                message: "Не удалось удалить пост"
            });
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [414], () => (__webpack_exec__(9242)));
module.exports = __webpack_exports__;

})();