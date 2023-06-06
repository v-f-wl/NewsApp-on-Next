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
exports.id = "pages/api/userGetOne";
exports.ids = ["pages/api/userGetOne"];
exports.modules = {

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

/***/ "(api)/./src/pages/api/userGetOne.js":
/*!*************************************!*\
  !*** ./src/pages/api/userGetOne.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectMongoDB */ \"(api)/./utils/connectMongoDB.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n\n\n/**\n * \n * @param {import('next').NextApiRequest} req \n * @param {import('next').NextApiResponse} res \n */ async function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            await (0,_utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            const { userId  } = req.query;\n            const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(userId);\n            if (!user) {\n                return res.status(404).json({\n                    message: \"Пользователь не найдем\"\n                });\n            }\n            const { passwordHash , ...userData } = user._doc;\n            res.json({\n                ...userData\n            });\n        } catch (error) {\n            console.log(error);\n            res.status(500).json({\n                message: \"Нет доступа\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXJHZXRPbmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBQ1Y7QUFDNUM7Ozs7Q0FJQyxHQUNjLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLElBQUc7WUFDRCxNQUFNTCxpRUFBU0E7WUFDZixNQUFNLEVBQUVNLE9BQU0sRUFBRSxHQUFHSCxJQUFJSSxLQUFLO1lBQzVCLE1BQU1DLE9BQU8sTUFBTVAsNkRBQWtCLENBQUNLO1lBQ3RDLElBQUcsQ0FBQ0UsTUFBSztnQkFDUCxPQUFPSixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUMxQkMsU0FBUztnQkFDWDtZQUNGLENBQUM7WUFDRCxNQUFNLEVBQUNDLGFBQVksRUFBRSxHQUFHQyxVQUFTLEdBQUdOLEtBQUtPLElBQUk7WUFFN0NYLElBQUlPLElBQUksQ0FBQztnQkFDUCxHQUFHRyxRQUFRO1lBQ2I7UUFDRixFQUFDLE9BQU1FLE9BQU07WUFDWEMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaWixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkMsU0FBUztZQUNYO1FBQ0Y7SUFDRixDQUFDO0FBRUgsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9wYWdlcy9hcGkvdXNlckdldE9uZS5qcz9jZDRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2Nvbm5lY3RNb25nb0RCXCI7XG5pbXBvcnQgVXNlck1vZGFsIGZyb20gJy4uLy4uLy4uL21vZGVscy9Vc2VyJ1xuLyoqXG4gKiBcbiAqIEBwYXJhbSB7aW1wb3J0KCduZXh0JykuTmV4dEFwaVJlcXVlc3R9IHJlcSBcbiAqIEBwYXJhbSB7aW1wb3J0KCduZXh0JykuTmV4dEFwaVJlc3BvbnNlfSByZXMgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgdHJ5e1xuICAgICAgYXdhaXQgY29ubmVjdERCKClcbiAgICAgIGNvbnN0IHsgdXNlcklkIH0gPSByZXEucXVlcnlcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kYWwuZmluZEJ5SWQodXNlcklkKVxuICAgICAgaWYoIXVzZXIpe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xuICAgICAgICAgIG1lc3NhZ2U6ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQvdCw0LnQtNC10LwnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBjb25zdCB7cGFzc3dvcmRIYXNoLCAuLi51c2VyRGF0YX0gPSB1c2VyLl9kb2NcbiAgXG4gICAgICByZXMuanNvbih7XG4gICAgICAgIC4uLnVzZXJEYXRhXG4gICAgICB9KVxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogJ9Cd0LXRgiDQtNC+0YHRgtGD0L/QsCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIFxufSJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJVc2VyTW9kYWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlcklkIiwicXVlcnkiLCJ1c2VyIiwiZmluZEJ5SWQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInBhc3N3b3JkSGFzaCIsInVzZXJEYXRhIiwiX2RvYyIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/userGetOne.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/userGetOne.js"));
module.exports = __webpack_exports__;

})();