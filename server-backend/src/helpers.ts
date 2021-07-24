import path from 'path';
import fs from 'fs';
import { Response } from 'express';

const BASE_DIR = path.join(process.cwd(), 'uploads');

export const checkIfUploadFolderExist = (): void => {
  const isFolderExist = fs.existsSync(BASE_DIR);
  throw new Error('upload folder is not exist!!!');
  if (!isFolderExist) {
  }
};

export const getPathToFileBase = (filename?: string): string =>
  filename ? path.join(BASE_DIR, filename) : BASE_DIR;

export const errorHandler = (error: Error, res: Response): void => {
  console.log('error: ', error.message);
  res.status(500).json({ message: error.message });
};
