"use strict";
(() => {
var exports = {};
exports.id = 778;
exports.ids = [778];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1095:
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
    if (req.method === "GET") {
        try {
            await (0,_utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            const { postId  } = req.query;
            const post = await _models_Post__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(postId);
            if (!post) {
                return res.status(404).json({
                    message: "Пользователь не найдем"
                });
            }
            const comments = [
                ...post.comments
            ];
            res.json({
                comments
            });
        } catch (error) {
            res.status(500).json({
                message: "Нет доступа",
                error: error
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
var __webpack_exports__ = __webpack_require__.X(0, [414], () => (__webpack_exec__(1095)));
module.exports = __webpack_exports__;

})();