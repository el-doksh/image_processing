import express from 'express';
import images from './api/images';
import validateImagesInputs from '../utilities/validateImagesInputs';

const routes = express.Router();

routes.get('/images', validateImagesInputs, images);

export default routes;