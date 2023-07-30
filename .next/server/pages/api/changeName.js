"use strict";
(() => {
var exports = {};
exports.id = 466;
exports.ids = [466];
exports.modules = {

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

/***/ 7653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2204);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1757);
/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9189);



/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */ async function handler(req, res) {
    (0,_utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    if (req.method === "PATCH") {
        try {
            const { id  } = req.query;
            const { nameValue  } = req.body;
            if (!id || !nameValue) {
                return res.status(400).json({
                    message: "Недостаточно данных для обновления"
                });
            }
            const updatedUser = await _models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOneAndUpdate */ .Z.findOneAndUpdate({
                _id: id
            }, {
                $set: {
                    fullName: nameValue
                }
            }, {
                new: true
            });
            if (!updatedUser) {
                return res.status(404).json({
                    message: "Пользователь не найден"
                });
            }
            _models_Post__WEBPACK_IMPORTED_MODULE_2__/* ["default"].updateMany */ .Z.updateMany({
                user: id
            }, {
                $set: {
                    name: nameValue
                }
            }).then((updatedPost)=>{
                if (!updatedPost) {
                    return res.status(404).json({
                        message: "Пост не найден"
                    });
                }
                res.json({
                    user: updatedUser,
                    post: updatedPost
                });
            }).catch((error)=>{
                res.status(500).json({
                    message: "Произошла ошибка при обновлении поста",
                    error: error
                });
            });
        } catch (error) {
            res.status(500).json({
                message: "Произошла ошибка при обновлении пользователя",
                error: error
            });
        }
    } else {
        res.status(400).json({
            message: "Метод не разрешен"
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
var __webpack_exports__ = __webpack_require__.X(0, [414], () => (__webpack_exec__(7653)));
module.exports = __webpack_exports__;

})();