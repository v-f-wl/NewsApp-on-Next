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
exports.id = "pages/api/getLikesUser";
exports.ids = ["pages/api/getLikesUser"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PostSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    text: {\n        type: String,\n        required: true\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    likesCount: {\n        type: Number,\n        default: 0\n    },\n    likesUser: {\n        type: Array,\n        default: []\n    },\n    user: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n        ref: \"User\",\n        required: true\n    },\n    color: {\n        type: String,\n        required: true\n    }\n}, // это выполняет уже сама схема\n{\n    timestamps: true\n});\n// первый параметр - как она будет называться, второе поле указываем схему \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Posts) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Posts\", PostSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNoQjtJQUNBQyxNQUFNO1FBQ0pILE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNoQjtJQUNBRSxZQUFZO1FBQ1ZKLE1BQU1LO1FBQ05DLFNBQVM7SUFDWDtJQUNBQyxXQUFXO1FBQ1RQLE1BQU1RO1FBQ05GLFNBQVMsRUFBRTtJQUNiO0lBQ0FHLE1BQU07UUFDSlQsTUFBTUosdUVBQThCO1FBQ3BDZ0IsS0FBSztRQUNMVixVQUFVLElBQUk7SUFDaEI7SUFDQVcsT0FBTztRQUNMYixNQUFNQztRQUNOQyxVQUFVLElBQUk7SUFDaEI7QUFDRixHQUNBLCtCQUErQjtBQUMvQjtJQUNFWSxZQUFZLElBQUk7QUFDbEI7QUFFRiwyRUFBMkU7QUFDM0UsaUVBQWVsQiw4REFBcUIsSUFBSUEscURBQWMsQ0FBQyxTQUFTQyxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbW9kZWxzL1Bvc3QuanM/NDZiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IFBvc3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgdGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGxpa2VzQ291bnQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIGxpa2VzVXNlcjoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBbXVxuICAgIH0sXG4gICAgdXNlcjoge1xuICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgcmVmOiAnVXNlcicsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgfSxcbiAgLy8g0Y3RgtC+INCy0YvQv9C+0LvQvdGP0LXRgiDRg9C20LUg0YHQsNC80LAg0YHRhdC10LzQsFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxuICB9XG4pXG4vLyDQv9C10YDQstGL0Lkg0L/QsNGA0LDQvNC10YLRgCAtINC60LDQuiDQvtC90LAg0LHRg9C00LXRgiDQvdCw0LfRi9Cy0LDRgtGM0YHRjywg0LLRgtC+0YDQvtC1INC/0L7Qu9C1INGD0LrQsNC30YvQstCw0LXQvCDRgdGF0LXQvNGDIFxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlBvc3RzIHx8IG1vbmdvb3NlLm1vZGVsKCdQb3N0cycsIFBvc3RTY2hlbWEpIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiUG9zdFNjaGVtYSIsIlNjaGVtYSIsInRleHQiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJuYW1lIiwibGlrZXNDb3VudCIsIk51bWJlciIsImRlZmF1bHQiLCJsaWtlc1VzZXIiLCJBcnJheSIsInVzZXIiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiY29sb3IiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiUG9zdHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Post.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/getLikesUser.js":
/*!***************************************!*\
  !*** ./src/pages/api/getLikesUser.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectMongoDB */ \"(api)/./utils/connectMongoDB.js\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Post */ \"(api)/./models/Post.js\");\n\n\n/**\n * \n * @param {import('next').NextApiRequest} req \n * @param {import('next').NextApiResponse} res \n */ async function handler(req, res) {\n    if (req.method === \"GET\") {\n        await (0,_utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        try {\n            const postId = req.query.id; // Используйте req.query.id для получения параметра id из URL\n            const { userId  } = req.body;\n            const post = await _models_Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(postId);\n            if (!post) {\n                return res.status(404).json({\n                    success: false,\n                    message: \"Статья не найдена\"\n                });\n            }\n            let bool = false;\n            const { likesUser  } = post;\n            likesUser.forEach((element)=>{\n                if (element === userId) {\n                    bool = true;\n                }\n            });\n            res.json({\n                success: bool\n            });\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                message: \"Не удалось получить массив likesUser\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldExpa2VzVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFDVDtBQUU3Qzs7OztDQUlDLEdBQ2MsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTUwsaUVBQVNBO1FBQ2YsSUFBSTtZQUNGLE1BQU1NLFNBQVNILElBQUlJLEtBQUssQ0FBQ0MsRUFBRSxFQUFFLDZEQUE2RDtZQUMxRixNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHTixJQUFJTyxJQUFJO1lBQzNCLE1BQU1DLE9BQU8sTUFBTVYsNkRBQWtCLENBQUNLO1lBRXRDLElBQUksQ0FBQ0ssTUFBTTtnQkFDVCxPQUFPUCxJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUMxQkMsU0FBUyxLQUFLO29CQUNkQyxTQUFTO2dCQUNYO1lBQ0YsQ0FBQztZQUNELElBQUlDLE9BQU8sS0FBSztZQUNoQixNQUFNLEVBQUVDLFVBQVMsRUFBRSxHQUFHUDtZQUN0Qk8sVUFBVUMsT0FBTyxDQUFDQyxDQUFBQSxVQUFXO2dCQUMzQixJQUFHQSxZQUFZWCxRQUFRO29CQUNyQlEsT0FBTyxJQUFJO2dCQUNiLENBQUM7WUFDSDtZQUNBYixJQUFJVSxJQUFJLENBQUM7Z0JBQ1BDLFNBQVNFO1lBQ1g7UUFDRixFQUFFLE9BQU9JLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtZQUNkakIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDbkJFLFNBQVM7WUFDWDtRQUNGO0lBQ0YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvYXBpL2dldExpa2VzVXNlci5qcz82YjY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2Nvbm5lY3RNb25nb0RCXCI7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uLy4uLy4uL21vZGVscy9Qb3N0JztcblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7aW1wb3J0KCduZXh0JykuTmV4dEFwaVJlcXVlc3R9IHJlcSBcbiAqIEBwYXJhbSB7aW1wb3J0KCduZXh0JykuTmV4dEFwaVJlc3BvbnNlfSByZXMgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgYXdhaXQgY29ubmVjdERCKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBvc3RJZCA9IHJlcS5xdWVyeS5pZDsgLy8g0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSByZXEucXVlcnkuaWQg0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQv9Cw0YDQsNC80LXRgtGA0LAgaWQg0LjQtyBVUkxcbiAgICAgIGNvbnN0IHsgdXNlcklkIH0gPSByZXEuYm9keTsgXG4gICAgICBjb25zdCBwb3N0ID0gYXdhaXQgUG9zdE1vZGVsLmZpbmRCeUlkKHBvc3RJZCk7XG5cbiAgICAgIGlmICghcG9zdCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6ICfQodGC0LDRgtGM0Y8g0L3QtSDQvdCw0LnQtNC10L3QsCcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbGV0IGJvb2wgPSBmYWxzZVxuICAgICAgY29uc3QgeyBsaWtlc1VzZXIgfSA9IHBvc3Q7XG4gICAgICBsaWtlc1VzZXIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYoZWxlbWVudCA9PT0gdXNlcklkKSB7XG4gICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXMuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/QvtC70YPRh9C40YLRjCDQvNCw0YHRgdC40LIgbGlrZXNVc2VyJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJQb3N0TW9kZWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicG9zdElkIiwicXVlcnkiLCJpZCIsInVzZXJJZCIsImJvZHkiLCJwb3N0IiwiZmluZEJ5SWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJib29sIiwibGlrZXNVc2VyIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/getLikesUser.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/getLikesUser.js"));
module.exports = __webpack_exports__;

})();