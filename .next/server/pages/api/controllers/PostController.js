"use strict";
(() => {
var exports = {};
exports.id = 358;
exports.ids = [358];
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
    likesCount: {
        type: Number,
        default: 0
    },
    user: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "User",
        required: true
    },
    avatarUrl: String
}, // это выполняет уже сама схема
{
    timestamps: true
});
// первый параметр - как она будет называться, второе поле указываем схему 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Post) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Post", PostSchema));


/***/ }),

/***/ 1113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "getAll": () => (/* binding */ getAll),
/* harmony export */   "getOne": () => (/* binding */ getOne),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9189);

const getAll = async (req, res)=>{
    try {
        const posts = await _models_Post__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find().populate("user").exec();
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось получить посты"
        });
    }
};
const getOne = async (req, res)=>{
    try {
        const postId = req.params.id;
        _models_Post__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOneAndUpdate */ .Z.findOneAndUpdate({
            _id: postId
        }, {
            $inc: {
                viewsCount: 1
            }
        }, {
            returnDocument: "after"
        }).then((updatedDocument)=>{
            if (!updatedDocument) {
                return res.status(404).json({
                    message: "Статья не найдена"
                });
            }
            res.json(updatedDocument);
        }).catch((error)=>{
            console.log(error);
            return res.status(404).json({
                message: "Статья не найдена"
            });
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: "Не удалось получить пост"
        });
    }
};
const remove = async (req, res)=>{
    try {
        const postId = req.params.id;
        _models_Post__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOneAndDelete */ .Z.findOneAndDelete({
            _id: postId
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
};
const create = async (req, res)=>{
    try {
        const doc = new _models_Post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({
            text: req.body.text,
            user: req.userId
        });
        const post = await doc.save();
        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось создать пост"
        });
    }
};
const update = async (req, res)=>{
    try {
        const postId = req.params.id;
        await _models_Post__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateOne */ .Z.updateOne({
            _id: postId
        }, {
            title: req.body.title,
            text: req.body.text,
            tags: req.body.tags,
            imageUrl: req.body.imageUrl,
            user: req.userId
        });
        res.json({
            succec: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удавлось обновить статью"
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
var __webpack_exports__ = (__webpack_exec__(1113));
module.exports = __webpack_exports__;

})();