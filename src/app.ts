import express from 'express';
import fileUpload, { UploadedFile } from 'express-fileupload';
import fs from 'fs';
import path from 'path';

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

app.post('/upload', async (req, res) => {
  try {
    if (req.files) {
      const { name, data } = req.files['file'] as UploadedFile;
      const fileName = path.join(process.cwd(), 'uploads', name);
      await fs.promises.writeFile(fileName, data);
      res.status(200).send({ message: `${name} uploaded!!!` });
    } else {
      res.status(200).send({ message: 'empty' });
    }
  } catch (error) {
    res.status(200).send({ message: error });
  }
});

export default app;
