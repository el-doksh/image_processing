import sharp from 'sharp';
import path from 'path';

const resize = async (fileName: string, width: number, height: number) => {
    const imgPath = path.resolve('./assets/full')+`/${fileName}.jpg`;
    await sharp(imgPath).resize(width, height).toFile(`assets/thumb/${fileName}_${height}_${width}.jpg`);
};

export default resize;