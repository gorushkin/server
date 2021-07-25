import express, { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import swaggerUI from 'swagger-ui-express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import fileRouter from './files/file.router';
import { errorHandler, getPath } from './helpers';

const swaggerDocument = JSON.parse(
  fs.readFileSync(getPath('doc/api.json'), 'utf-8')
);

const app = express();
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
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
