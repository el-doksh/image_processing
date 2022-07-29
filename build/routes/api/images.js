"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var resize_1 = __importDefault(require("../../resize"));
var fs_1 = require("fs");
var images = express_1.default.Router();
images.get('/images', function (req, res) {
    var fileName = req.query.filename;
    var height = parseInt(req.query.height);
    var width = parseInt(req.query.width);
    try {
        var imgPath = path_1.default.resolve('./assets/thumb') + "/".concat(fileName, "_").concat(width, "_").concat(height, ".jpg");
        if ((0, fs_1.existsSync)(imgPath) === true) {
            res.status(200).sendFile(imgPath);
            return;
        }
        (0, resize_1.default)(fileName, width, height).then(function (reizedImgPath) {
            res.status(200).sendFile(path_1.default.resolve(reizedImgPath));
            return;
        }).catch(function (err) {
            res.status(500).send("internal server error: ".concat(err));
            return;
        });
    }
    catch (error) {
        return;
    }
});
exports.default = images;
