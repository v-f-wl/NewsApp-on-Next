"use strict";
(() => {
var exports = {};
exports.id = 471;
exports.ids = [471];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const PostSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    likesCount: {
        type: Number,
        default: 0
    },
    likesUser: {
        type: Array,
        required: true,
        default: []
    },
    user: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "User",
        required: true
    },
    color: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Posts) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Posts", PostSchema));


/***/ }),

/***/ 3748:
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
    if (req.method === "POST") {
        await (0,_utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        try {
            const postId = req.query.id; // Используйте req.query.id для получения параметра id из URL// Получите userId из тела запроса
            const value = req.body;
            const updatedPost = await _models_Post__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(postId);
            if (!updatedPost) {
                return res.status(404).json({
                    success: false,
                    message: "Статья не найдена"
                });
            }
            const { comments  } = updatedPost;
            comments.push(value);
            updatedPost.markModified("comments"); // Помечаем likesUser как модифицированное поле
            await updatedPost.save(); // Сохраняем обновленную статью
            res.json({
                updatedPost
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Не удалось обновить статью"
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

const connectDB = async ()=>mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb+srv://admin:mGGtyZRdxf9gRNlJ@cluster0.liynhak.mongodb.net/blog?retryWrites=true&w=majority").then(()=>console.log("DB Okay")).catch(()=>console.log("Dont Connect"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3748));
module.exports = __webpack_exports__;

})();