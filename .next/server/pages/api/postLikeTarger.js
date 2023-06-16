"use strict";
(() => {
var exports = {};
exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2338:
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
    if (req.method === "PATCH") {
        await (0,_utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        try {
            const postId = req.query.id;
            const { userId  } = req.body;
            const updatedPost = await _models_Post__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(postId);
            if (!updatedPost) {
                return res.status(404).json({
                    success: false,
                    message: "Статья не найдена"
                });
            }
            const { likesUser  } = updatedPost;
            const userIndex = likesUser.indexOf(userId);
            if (userIndex === -1) {
                likesUser.push(userId);
            } else {
                likesUser.splice(userIndex, 1);
            }
            updatedPost.likesCount = likesUser.length;
            updatedPost.markModified("likesUser");
            await updatedPost.save();
            res.json({
                success: true,
                updatedPost
            });
        } catch (error) {
            res.status(500).json({
                message: "Не удалось обновить статью",
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
var __webpack_exports__ = __webpack_require__.X(0, [414], () => (__webpack_exec__(2338)));
module.exports = __webpack_exports__;

})();