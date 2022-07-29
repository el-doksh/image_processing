import express from 'express';
import path from 'path';
import resize from '../../resize';
import { existsSync } from 'fs';

const images = express.Router();

images.get('/images', (req: express.Request, res: express.Response) => {
    const fileName : string = req.query.filename as string;
    const height : number  = parseInt(req.query.height as string);
    const width : number  = parseInt(req.query.width as string);
    try {

        const imgPath = path.resolve('./assets/thumb')+`/${fileName}_${width}_${height}.jpg`;
        if(existsSync(imgPath) === true) {
            res.status(200).sendFile(imgPath);
            return;
        }
        
        resize(fileName, width, height).then((reizedImgPath) => {
            res.status(200).sendFile(path.resolve(reizedImgPath));
            return;
        }).catch( (err) => {
            res.status(500).send(`internal server error: ${err}`);
            return;
        });
    
    } catch (error) {
        return;
    }
});

export default images;
