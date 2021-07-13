import express, { RequestHandler } from 'express';
import { UploadedFile } from 'express-fileupload';
import { getPathToFileBase } from '../helpers';

import * as filesService from './file.service';

const router = express.Router();

const getFiles: RequestHandler = async (_req, res) => {
  const files = await filesService.getFiles();
  res.json({ files });
};

const getFile: RequestHandler = async (req, res) => {
  const {
    params: { filename },
  } = req;
  const pathToFile = getPathToFileBase(filename);
  res.download(pathToFile);
};

const addFile: RequestHandler = async (req, res) => {
  if (req.files) {
    const file = req.files['file'] as UploadedFile;
    const message = await filesService.addFile(file);
    res.status(200).send({ message });
  } else {
    res.status(200).send({ message: 'empty' });
  }
};

router.get('/', getFiles);
router.get('/:filename', getFile);
router.post('/', addFile);

export default router;
