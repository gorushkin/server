import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import swaggerUI from 'swagger-ui-express';
import yaml from 'yamljs';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import path from 'path';
import fileRouter from './files/file.router';
import authRouter from './auth/auth.router';
import {
  errorHandler,
  getPath,
  getPathNew,
  FRONT_FOLDER,
  BASE_DIR_PATH,
} from './helpers';

const swaggerDocument = yaml.load(getPath('doc/api.yml'));

const app = express();
app.use(cors());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(fileUpload());
app.use(express.json());

const frontFolder = ['../', FRONT_FOLDER];

const pathToFront = getPathNew(frontFolder);

const pathToIndex = path.join(process.cwd(), pathToFront, 'index.html');

app.use(express.static(pathToFront));

app.use('/api/status', (_req, res) => {
  res.send('Service is running!');
});

const auth: RequestHandler = (req, _res, next) => {
  const { token } = req.body;
  console.log('token: ', token);
  if (token === '123456789') next();
  throw new Error('Access denied');
};

app.use('/api/files', auth, fileRouter);
app.use('/api/auth', authRouter);

app.use('/api/file', express.static(BASE_DIR_PATH));
app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, res);
  next();
});

const handler: RequestHandler = (_req, res) => res.sendFile(pathToIndex);

app.use('/files', handler);
app.use('/upload', handler);

export default app;
