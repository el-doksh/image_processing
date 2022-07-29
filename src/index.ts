import express from 'express';
import routes from './routes/index';

const app = express();
const port : number = 3000;

app.listen(port, () : void => {
    console.log(`server running at http://localhost:${port}`);
});

app.get('/', (req: express.Request, res: express.Response) : void => {
    res.send('Server is running');
});

app.use('/api', routes);

export default app;
