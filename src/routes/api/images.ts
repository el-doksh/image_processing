import express from 'express';

const images = express.Router();

images.get('/images', (req, res) => {
    // console.log(req.filename);
    // console.log(req.height);
    // console.log(req.width);
    
    res.send('Hello its my images');
});

export default images;
