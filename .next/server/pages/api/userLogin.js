"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/userLogin";
exports.ids = ["pages/api/userLogin"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    fullName: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    passwordHash: {\n        type: String,\n        required: true\n    },\n    avatar: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxVQUFVO1FBQ1JDLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNoQjtJQUNBQyxPQUFPO1FBQ0xILE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtRQUNkRSxRQUFRLElBQUk7SUFDZDtJQUNBQyxjQUFjO1FBQ1pMLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNoQjtJQUNBSSxRQUFRO1FBQ05OLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNoQjtBQUNGLEdBQ0E7SUFDRUssWUFBWSxJQUFJO0FBQ2xCO0FBRUYsaUVBQWVYLDZEQUFvQixJQUFJQSxxREFBYyxDQUFDLFFBQVFDLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9tb2RlbHMvVXNlci5qcz83MzY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBmdWxsTmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgIH0sXG4gICAgcGFzc3dvcmRIYXNoOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgYXZhdGFyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbiAgfVxuKVxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJmdWxsTmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmRIYXNoIiwiYXZhdGFyIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/userLogin.js":
/*!************************************!*\
  !*** ./src/pages/api/userLogin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectMongoDB */ \"(api)/./utils/connectMongoDB.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/**\n * \n * @param {import('next').NextApiRequest} req \n * @param {import('next').NextApiResponse} res \n */ async function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            await (0,_utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                email: req.body.email\n            });\n            if (!user) {\n                return res.status(404).json({\n                    message: \"Пользователь не найден\"\n                });\n            }\n            const isValidPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare(req.body.password, user._doc.passwordHash);\n            if (!isValidPassword) {\n                return res.status(409).json({\n                    message: \"Неверный логин или пароль\"\n                });\n            }\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n                _id: user._id\n            }, \"secret123\", {\n                expiresIn: \"30d\"\n            });\n            const { passwordHash , ...userData } = user._doc;\n            return res.json({\n                ...userData,\n                token\n            });\n        } catch (error) {\n            console.log(error);\n            res.status(500).json({\n                message: \"Не удалось авторизоваться\"\n            });\n        }\n    } else {\n        return res.status(500).json({\n            message: \"Что-то  пошло не так\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXJMb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNEO0FBQ1Y7QUFDZDtBQUNIO0FBQzNCOzs7O0NBSUMsR0FDYyxlQUFlSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixJQUFHO1lBQ0MsTUFBTVAsaUVBQVNBO1lBQ2YsTUFBTVEsT0FBTyxNQUFNUCw0REFBaUIsQ0FBQztnQkFBRVMsT0FBT0wsSUFBSU0sSUFBSSxDQUFDRCxLQUFLO1lBQUE7WUFDNUQsSUFBRyxDQUFDRixNQUFLO2dCQUNQLE9BQU9GLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQzFCQyxTQUFTO2dCQUNYO1lBQ0YsQ0FBQztZQUNELE1BQU1DLGtCQUFrQixNQUFNWixxREFBYyxDQUFDRSxJQUFJTSxJQUFJLENBQUNNLFFBQVEsRUFBRVQsS0FBS1UsSUFBSSxDQUFDQyxZQUFZO1lBQ3RGLElBQUcsQ0FBQ0osaUJBQWdCO2dCQUNsQixPQUFPVCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUMxQkMsU0FBUztnQkFDWDtZQUNGLENBQUM7WUFDRCxNQUFNTSxRQUFRbEIsd0RBQVEsQ0FBQztnQkFDckJvQixLQUFLZCxLQUFLYyxHQUFHO1lBQ2YsR0FDRSxhQUNBO2dCQUNFQyxXQUFXO1lBQ2I7WUFFRixNQUFNLEVBQUNKLGFBQVksRUFBRSxHQUFHSyxVQUFTLEdBQUdoQixLQUFLVSxJQUFJO1lBQzdDLE9BQU9aLElBQUlPLElBQUksQ0FBQztnQkFDZCxHQUFHVyxRQUFRO2dCQUNYSjtZQUNGO1FBRUYsRUFBQyxPQUFNSyxPQUFNO1lBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWm5CLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ25CQyxTQUFTO1lBQ1g7UUFDRjtJQUNKLE9BQU07UUFDSixPQUFPUixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQzFCQyxTQUFTO1FBQ1g7SUFDRixDQUFDO0FBRUgsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9wYWdlcy9hcGkvdXNlckxvZ2luLmpzP2YyNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY29ubmVjdE1vbmdvREJcIjtcbmltcG9ydCBVc2VyTW9kYWwgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1VzZXInXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuLyoqXG4gKiBcbiAqIEBwYXJhbSB7aW1wb3J0KCduZXh0JykuTmV4dEFwaVJlcXVlc3R9IHJlcSBcbiAqIEBwYXJhbSB7aW1wb3J0KCduZXh0JykuTmV4dEFwaVJlc3BvbnNlfSByZXMgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIHRyeXtcbiAgICAgICAgYXdhaXQgY29ubmVjdERCKClcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RhbC5maW5kT25lKHsgZW1haWw6IHJlcS5ib2R5LmVtYWlsfSlcbiAgICAgICAgaWYoIXVzZXIpe1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNC50LTQtdC9J1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNWYWxpZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocmVxLmJvZHkucGFzc3dvcmQsIHVzZXIuX2RvYy5wYXNzd29yZEhhc2gpXG4gICAgICAgIGlmKCFpc1ZhbGlkUGFzc3dvcmQpe1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiAn0J3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHtcbiAgICAgICAgICBfaWQ6IHVzZXIuX2lkXG4gICAgICAgIH0sIFxuICAgICAgICAgICdzZWNyZXQxMjMnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGV4cGlyZXNJbjogJzMwZCdcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgY29uc3Qge3Bhc3N3b3JkSGFzaCwgLi4udXNlckRhdGF9ID0gdXNlci5fZG9jXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgICAgLi4udXNlckRhdGEsXG4gICAgICAgICAgdG9rZW5cbiAgICAgICAgfSlcbiAgICBcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgbWVzc2FnZTogJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LDQstGC0L7RgNC40LfQvtCy0LDRgtGM0YHRjydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgfSBlbHNle1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBtZXNzYWdlOiAn0KfRgtC+LdGC0L4gINC/0L7RiNC70L4g0L3QtSDRgtCw0LonXG4gICAgfSlcbiAgfVxuICBcbn0iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiVXNlck1vZGFsIiwiand0IiwiYmNyeXB0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJpc1ZhbGlkUGFzc3dvcmQiLCJjb21wYXJlIiwicGFzc3dvcmQiLCJfZG9jIiwicGFzc3dvcmRIYXNoIiwidG9rZW4iLCJzaWduIiwiX2lkIiwiZXhwaXJlc0luIiwidXNlckRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/userLogin.js\n");

/***/ }),

/***/ "(api)/./utils/connectMongoDB.js":
/*!*********************************!*\
  !*** ./utils/connectMongoDB.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://admin:123qweasd@cluster0.liynhak.mongodb.net/blog?retryWrites=true&w=majority\").then(()=>console.log(\"DB Okay\")).catch(()=>console.log(\"Dont Connect\"));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0TW9uZ29EQi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsWUFBVyxVQUFZRCx1REFDckIsQ0FBQywrRkFDUkcsSUFBSSxDQUFDLElBQU1DLFFBQVFDLEdBQUcsQ0FBQyxZQUN2QkMsS0FBSyxDQUFDLElBQU1GLFFBQVFDLEdBQUcsQ0FBQztBQUV6QixpRUFBZUosU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3V0aWxzL2Nvbm5lY3RNb25nb0RCLmpzP2YwNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBjb25uZWN0REI9IGFzeW5jICgpID0+IG1vbmdvb3NlXG4uY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9hZG1pbjoxMjNxd2Vhc2RAY2x1c3RlcjAubGl5bmhhay5tb25nb2RiLm5ldC9ibG9nP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpXG4udGhlbigoKSA9PiBjb25zb2xlLmxvZygnREIgT2theScpKVxuLmNhdGNoKCgpID0+IGNvbnNvbGUubG9nKCdEb250IENvbm5lY3QnKSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCXG5cbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3QiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/connectMongoDB.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/userLogin.js"));
module.exports = __webpack_exports__;

})();