import express, { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import yaml from 'yamljs';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import fileRouter from './files/file.router';
import {
  errorHandler,
  getPath,
  getPathNew,
  FRONT_FOLDER,
  BASE_DIR_PATH,
} from './helpers';

const swaggerDocument = yaml.load(getPath('doc/api.yml'));

const app = express();
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(cors());
app.use(fileUpload());
app.use(express.json());

const frontFolder = ['../', FRONT_FOLDER];

const pathToFront = getPathNew(frontFolder);

app.use(express.static(pathToFront));

app.use('/status', (_req, res) => {
  res.send('Service is running!');
});

app.use('/files', fileRouter);
app.use('/file', express.static(BASE_DIR_PATH));
app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, res);
  next();
});

export default app;
