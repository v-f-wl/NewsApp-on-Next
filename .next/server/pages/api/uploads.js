"use strict";
(() => {
var exports = {};
exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 5746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "cloudinary"
const external_cloudinary_namespaceObject = require("cloudinary");
;// CONCATENATED MODULE: external "multer"
const external_multer_namespaceObject = require("multer");
var external_multer_default = /*#__PURE__*/__webpack_require__.n(external_multer_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/uploads.js


external_cloudinary_namespaceObject.v2.config({
    cloud_name: "dxzx1bkz1",
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
const upload = external_multer_default()({
    dest: "uploads/"
});
async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const fileStr = req.body.data;
            const uploadedImage = await external_cloudinary_namespaceObject.v2.uploader.upload(fileStr, {
                upload_preset: "dev_setups"
            });
            res.json({
                id: uploadedImage.public_id,
                url: uploadedImage.secure_url
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error uploading image"
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
var __webpack_exports__ = (__webpack_exec__(5746));
module.exports = __webpack_exports__;

})();