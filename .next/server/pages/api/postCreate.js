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
exports.id = "pages/api/postCreate";
exports.ids = ["pages/api/postCreate"];
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

/***/ "(api)/./src/pages/api/postCreate.js":
/*!*************************************!*\
  !*** ./src/pages/api/postCreate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectMongoDB */ \"(api)/./utils/connectMongoDB.js\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Post */ \"(api)/./models/Post.js\");\n\n\n/**\n * \n * @param {import('next').NextApiRequest} req \n * @param {import('next').NextApiResponse} res \n */ async function handler(req, res) {\n    if (req.method === \"POST\") {\n        await (0,_utils_connectMongoDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        try {\n            const doc = new _models_Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                text: req.body.text,\n                name: req.body.nameValue,\n                user: req.body.userId,\n                color: req.body.color\n            });\n            const post = await doc.save();\n            res.json(post);\n        } catch (error) {\n            console.log(error);\n            res.status(510).json({\n                message: error\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Bvc3RDcmVhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBQ1Y7QUFFNUM7Ozs7Q0FJQyxHQUNjLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUdELElBQUlFLE1BQU0sS0FBSyxRQUFPO1FBQ3ZCLE1BQU1MLGlFQUFTQTtRQUNmLElBQUc7WUFDRCxNQUFNTSxNQUFNLElBQUlMLG9EQUFTQSxDQUFDO2dCQUN4Qk0sTUFBTUosSUFBSUssSUFBSSxDQUFDRCxJQUFJO2dCQUNuQkUsTUFBTU4sSUFBSUssSUFBSSxDQUFDRSxTQUFTO2dCQUN4QkMsTUFBTVIsSUFBSUssSUFBSSxDQUFDSSxNQUFNO2dCQUNyQkMsT0FBT1YsSUFBSUssSUFBSSxDQUFDSyxLQUFLO1lBQ3ZCO1lBRUEsTUFBTUMsT0FBTyxNQUFNUixJQUFJUyxJQUFJO1lBQzNCWCxJQUFJWSxJQUFJLENBQUNGO1FBQ1gsRUFBQyxPQUFNRyxPQUFNO1lBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWmIsSUFBSWdCLE1BQU0sQ0FBQyxLQUFLSixJQUFJLENBQUM7Z0JBQ25CSyxTQUFTSjtZQUNYO1FBQ0Y7SUFDRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9wYWdlcy9hcGkvcG9zdENyZWF0ZS5qcz9iZGQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2Nvbm5lY3RNb25nb0RCXCI7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uLy4uLy4uL21vZGVscy9Qb3N0J1xuXG4vKipcbiAqIFxuICogQHBhcmFtIHtpbXBvcnQoJ25leHQnKS5OZXh0QXBpUmVxdWVzdH0gcmVxIFxuICogQHBhcmFtIHtpbXBvcnQoJ25leHQnKS5OZXh0QXBpUmVzcG9uc2V9IHJlcyBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZihyZXEubWV0aG9kID09PSAnUE9TVCcpe1xuICAgIGF3YWl0IGNvbm5lY3REQigpXG4gICAgdHJ5e1xuICAgICAgY29uc3QgZG9jID0gbmV3IFBvc3RNb2RlbCh7XG4gICAgICAgIHRleHQ6IHJlcS5ib2R5LnRleHQsXG4gICAgICAgIG5hbWU6IHJlcS5ib2R5Lm5hbWVWYWx1ZSxcbiAgICAgICAgdXNlcjogcmVxLmJvZHkudXNlcklkLFxuICAgICAgICBjb2xvcjogcmVxLmJvZHkuY29sb3JcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBkb2Muc2F2ZSgpXG4gICAgICByZXMuanNvbihwb3N0KVxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIHJlcy5zdGF0dXMoNTEwKS5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogZXJyb3JcbiAgICAgIH0pXG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlBvc3RNb2RlbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkb2MiLCJ0ZXh0IiwiYm9keSIsIm5hbWUiLCJuYW1lVmFsdWUiLCJ1c2VyIiwidXNlcklkIiwiY29sb3IiLCJwb3N0Iiwic2F2ZSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/postCreate.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/postCreate.js"));
module.exports = __webpack_exports__;

})();