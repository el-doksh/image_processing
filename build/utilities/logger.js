"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    var url = req.filename;
    console.log("".concat(url, " has visited"));
    next();
};
exports.default = logger;
