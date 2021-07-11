import express from 'express';
import fileUpload, { UploadedFile } from 'express-fileupload';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const upload = multer({ dest: 'uploads/' });

const app = express();

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (req.files) {
      const file = req.files['file'] as UploadedFile;
      const { name, data } = file;
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
