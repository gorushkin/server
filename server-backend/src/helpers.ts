import path from 'path';
import fs from 'fs';
import { Response } from 'express';

export const getPath = (str: string): string => path.join(process.cwd(), str);

const BASE_DIR = getPath('uploads');

export const checkIfUploadFolderExist = (): void => {
  const isFolderExist = fs.existsSync(BASE_DIR);
  if (!isFolderExist) {
    throw new Error('upload folder is not exist!!!');
  }
};

export const getPathToFileBase = (filename?: string): string =>
  filename ? path.join(BASE_DIR, filename) : BASE_DIR;

export const errorHandler = (error: Error, res: Response): void => {
  console.log('error: ', error.message);
  res.status(500).json({ message: error.message });
};
