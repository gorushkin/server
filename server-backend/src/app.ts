import express from 'express';
import fileUpload from 'express-fileupload';

import fileRouter from './files/file.router';

const app = express();

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

export default app;