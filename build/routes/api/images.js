"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var images = express_1.default.Router();
images.get('/images', function (req, res) {
    // const fileName = req.params.filename as string;
    var fileName = req.query.filename;
    console.log(fileName);
    // const ImgPath : string = path.resolve('./assets/full')+`/${fileName}.jpg`;
    var ImgPath = path_1.default.resolve('./assets/full') + "/".concat(fileName, ".jpg");
    // resize image
    // async function resize(ImgPath: string) {
    //     await sharp(ImgPath).resize(400, 400).toFile('assets/thumb');
    // }
    // fsPromises.readFile(
    //     `../assets/images/${req.params.filename}`, (err, image) => {
    //         if (err) {
    //             throw err;
    //         }
    //         console.log(image);
    //         res.setHeader('Content-Type', 'image/jpg');
    //         res.setHeader('Content-Length', ''); // Image size here
    //         res.setHeader('Access-Control-Allow-Origin', '*'); // If needs to be public
    //         res.send(image);
    //     }
    // );
    res.sendFile(ImgPath);
    //     res.send('he;;p');
    //     const fileName = 'pyramids';
    //     const filePath = `assets/full/${fileName}.jpg`;
    //     fs = require('fs'),
    //     path = require('path'),
    //     url = require('url');
    //     imageDir = 'C:/Users/Ionut/maguay/node/public/uploaded/';
    //  http.use(express.static('public'));
    // console.log(req.filename);
    // console.log(req.height);
    // console.log(req.width);
    // res.send(express.static('images') );
    // // res.sendFile(`assets/full/${fileName}.jpg`);
    // const respo = "<img src=`"+filePath+"` alt='My_Logo'>";
    // res.send(respo);
    // res.send('Hello its my images');
});
exports.default = images;
