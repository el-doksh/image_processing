import express from 'express';
import path from 'path';
import { existsSync } from 'fs';

const validateImagesInputs = (
    req: express.Request,
    res: express.Response,
    next: () => void
): void => {
    //validate filename is exists and exists in images dir
    const fileName: string = req.query.filename as string;
    if (fileName == undefined) {
        res.status(400).send('error: query parameter "filename" is required');
        return;
    }
    const imgPath = path.resolve('./assets/full') + `/${fileName}.jpg`;
    if (existsSync(imgPath) === false) {
        res.status(400).send('error: image not found');
        return;
    }

    //validate width is exists and number and number more than 0
    const width: number = req.query.width as unknown as number;
    if (width == undefined) {
        res.status(400).send('error: query parameter "width" is required');
        return;
    }
    if (isNaN(width)) {
        res.status(400).send(
            'error: query parameter "width" should be a number'
        );
        return;
    }
    if (width <= 0) {
        res.status(400).send(
            'error: query parameter "width" should be more than 0 '
        );
        return;
    }

    //validate height is exists and number more than 0
    const height: number = req.query.height as unknown as number;
    if (height == undefined) {
        res.status(400).send('error: query parameter "height" is required');
        return;
    }
    if (isNaN(height)) {
        res.status(400).send(
            'error: query parameter "height" should be a number'
        );
        return;
    }
    if (height <= 0) {
        res.status(400).send(
            'error: query parameter "height" should be more than 0 '
        );
        return;
    }

    next();
};

export default validateImagesInputs;
