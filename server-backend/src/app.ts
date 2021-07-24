import express, { Request, Response, NextFunction } from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import fileRouter from './files/file.router';
import { errorHandler } from './helpers';

const app = express();
app.use(cors());

app.use(fileUpload());
app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/files', fileRouter);
app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, res);
  next();
});

export default app;
