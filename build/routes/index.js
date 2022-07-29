"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./api/images"));
var validateImagesInputs_1 = __importDefault(require("../utilities/validateImagesInputs"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('Server running');
});
routes.get('/images', validateImagesInputs_1.default, images_1.default);
exports.default = routes;
