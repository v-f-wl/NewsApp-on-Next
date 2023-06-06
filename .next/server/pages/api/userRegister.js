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
exports.id = "pages/api/userRegister";
exports.ids = ["pages/api/userRegister"];
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

/***/ "(api)/./src/pages/api/userRegister.js":
/*!***************************************!*\
  !*** ./src/pages/api/userRegister.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectMongoDB */ \"(api)/./utils/connectMongoDB.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/**\n * \n * @param {import('next').NextApiRequest} req \n * @param {import('next').NextApiResponse} res \n */ async function handler(req, res) {\n    console.log(\"connect DB\");\n    (0,_utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (req.method === \"POST\") {\n        try {\n            const password = req.body.password;\n            const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().genSalt(11);\n            const hash = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().hash(password, salt);\n            const doc = new _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                email: req.body.email,\n                fullName: req.body.fullName,\n                passwordHash: hash,\n                avatar: req.body.color\n            });\n            const user = await doc.save();\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n                _id: user._id\n            }, \"secret123\", {\n                expiresIn: \"30d\"\n            });\n            const { passwordHash , ...userData } = user._doc;\n            res.json({\n                ...userData,\n                token\n            });\n        } catch (error) {\n            console.log(error);\n            res.status(500).json({\n                message: \"Не удалось зарегестироваться\"\n            });\n        }\n    } else {\n        return res.status(500).json({\n            message: \"Что-то пошло не так \"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXJSZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNEO0FBQ1Y7QUFDZDtBQUNIO0FBQzNCOzs7O0NBSUMsR0FDYyxlQUFlSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Q0MsUUFBUUMsR0FBRyxDQUFDO0lBQ1pSLGlFQUFTQTtJQUNULElBQUlLLElBQUlJLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLElBQUc7WUFDQyxNQUFNQyxXQUFhTCxJQUFJTSxJQUFJLENBQUNELFFBQVE7WUFDcEMsTUFBTUUsT0FBTyxNQUFNVCxxREFBYyxDQUFDO1lBRWxDLE1BQU1XLE9BQU8sTUFBTVgsa0RBQVcsQ0FBQ08sVUFBVUU7WUFFekMsTUFBTUcsTUFBTSxJQUFJZCxvREFBU0EsQ0FBQztnQkFDeEJlLE9BQU9YLElBQUlNLElBQUksQ0FBQ0ssS0FBSztnQkFDckJDLFVBQVVaLElBQUlNLElBQUksQ0FBQ00sUUFBUTtnQkFDM0JDLGNBQWNKO2dCQUNkSyxRQUFRZCxJQUFJTSxJQUFJLENBQUNTLEtBQUs7WUFDeEI7WUFDQSxNQUFNQyxPQUFPLE1BQU1OLElBQUlPLElBQUk7WUFFM0IsTUFBTUMsUUFBUXJCLHdEQUFRLENBQUM7Z0JBQ3JCdUIsS0FBS0osS0FBS0ksR0FBRztZQUNmLEdBQ0UsYUFDQTtnQkFDRUMsV0FBVztZQUNiO1lBR0YsTUFBTSxFQUFDUixhQUFZLEVBQUUsR0FBR1MsVUFBUyxHQUFHTixLQUFLTyxJQUFJO1lBRTdDdEIsSUFBSXVCLElBQUksQ0FBQztnQkFDUCxHQUFHRixRQUFRO2dCQUNYSjtZQUNGO1FBQ0osRUFBQyxPQUFNTyxPQUFNO1lBQ1h2QixRQUFRQyxHQUFHLENBQUNzQjtZQUNaeEIsSUFBSXlCLE1BQU0sQ0FBQyxLQUFLRixJQUFJLENBQUM7Z0JBQ25CRyxTQUFTO1lBQ1g7UUFDRjtJQUNGLE9BQUs7UUFDSCxPQUFPMUIsSUFBSXlCLE1BQU0sQ0FBQyxLQUFLRixJQUFJLENBQUM7WUFDMUJHLFNBQVM7UUFDWDtJQUNGLENBQUM7QUFFSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BhZ2VzL2FwaS91c2VyUmVnaXN0ZXIuanM/YmE4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdERCIGZyb20gXCIuLi8uLi8uLi91dGlscy9jb25uZWN0TW9uZ29EQlwiO1xuaW1wb3J0IFVzZXJNb2RhbCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvVXNlcidcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXG4vKipcbiAqIFxuICogQHBhcmFtIHtpbXBvcnQoJ25leHQnKS5OZXh0QXBpUmVxdWVzdH0gcmVxIFxuICogQHBhcmFtIHtpbXBvcnQoJ25leHQnKS5OZXh0QXBpUmVzcG9uc2V9IHJlcyBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZygnY29ubmVjdCBEQicpXG4gIGNvbm5lY3REQigpXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkICAgPSByZXEuYm9keS5wYXNzd29yZFxuICAgICAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoMTEpXG4gICAgXG4gICAgICAgIGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgc2FsdClcbiAgICBcbiAgICAgICAgY29uc3QgZG9jID0gbmV3IFVzZXJNb2RhbCh7XG4gICAgICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxuICAgICAgICAgIGZ1bGxOYW1lOiByZXEuYm9keS5mdWxsTmFtZSxcbiAgICAgICAgICBwYXNzd29yZEhhc2g6IGhhc2gsXG4gICAgICAgICAgYXZhdGFyOiByZXEuYm9keS5jb2xvclxuICAgICAgICB9KVxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZG9jLnNhdmUoKVxuICAgIFxuICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHtcbiAgICAgICAgICBfaWQ6IHVzZXIuX2lkXG4gICAgICAgIH0sIFxuICAgICAgICAgICdzZWNyZXQxMjMnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGV4cGlyZXNJbjogJzMwZCdcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICBcbiAgICAgICAgY29uc3Qge3Bhc3N3b3JkSGFzaCwgLi4udXNlckRhdGF9ID0gdXNlci5fZG9jXG4gICAgXG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAuLi51c2VyRGF0YSxcbiAgICAgICAgICB0b2tlblxuICAgICAgICB9KVxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNGA0LXQs9C10YHRgtC40YDQvtCy0LDRgtGM0YHRjydcbiAgICAgIH0pXG4gICAgfVxuICB9ZWxzZXtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgbWVzc2FnZTogJ9Cn0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LogJ1xuICAgIH0pXG4gIH1cbiAgXG59Il0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlVzZXJNb2RhbCIsImp3dCIsImJjcnlwdCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwicGFzc3dvcmQiLCJib2R5Iiwic2FsdCIsImdlblNhbHQiLCJoYXNoIiwiZG9jIiwiZW1haWwiLCJmdWxsTmFtZSIsInBhc3N3b3JkSGFzaCIsImF2YXRhciIsImNvbG9yIiwidXNlciIsInNhdmUiLCJ0b2tlbiIsInNpZ24iLCJfaWQiLCJleHBpcmVzSW4iLCJ1c2VyRGF0YSIsIl9kb2MiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/userRegister.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/userRegister.js"));
module.exports = __webpack_exports__;

})();