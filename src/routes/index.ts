import express from 'express';
import images from './api/images';
import logger from '../utilities/logger';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Server running');
});

routes.get('/images', logger, images);

export default routes;