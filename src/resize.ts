import sharp from 'sharp';
import path from 'path';

const resize = async (fileName: string, width: number, height: number) => {
    try {
        const imgPath : string = path.resolve('./assets/full')+`/${fileName}.jpg`;
        const reizedImgPath = `./assets/thumb/${fileName}_${width}_${height}.jpg`;
        await sharp(imgPath).resize(width, height).toFile(reizedImgPath);

        return reizedImgPath;
    } catch (error) {
        return 'internal server error!';
    }
};

export default resize;