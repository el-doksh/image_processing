"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = require("fs");
var validateImagesInputs = function (req, res, next) {
    //validate filename is exists and exists in images dir
    var fileName = req.query.filename;
    if (fileName == undefined) {
        res.status(400).send('error: query parameter "filename" is required');
        return;
    }
    var imgPath = path_1.default.resolve('./assets/full') + "/".concat(fileName, ".jpg");
    if ((0, fs_1.existsSync)(imgPath) === false) {
        res.status(400).send('error: image not found');
        return;
    }
    //validate width is exists and number and number more than 0
    var width = req.query.width;
    if (width == undefined) {
        res.status(400).send('error: query parameter "width" is required');
        return;
    }
    if (isNaN(width)) {
        res.status(400).send('error: query parameter "width" should be a number');
        return;
    }
    if (width <= 0) {
        res.status(400).send('error: query parameter "width" should be more than 0 ');
        return;
    }
    //validate height is exists and number more than 0
    var height = req.query.height;
    if (height == undefined) {
        res.status(400).send('error: query parameter "height" is required');
        return;
    }
    if (isNaN(height)) {
        res.status(400).send('error: query parameter "height" should be a number');
        return;
    }
    if (height <= 0) {
        res.status(400).send('error: query parameter "height" should be more than 0 ');
        return;
    }
    next();
};
exports.default = validateImagesInputs;
