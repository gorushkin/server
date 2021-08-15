import path from 'path';
import fs from 'fs';
import os, { homedir } from 'os';
import { Response } from 'express';

export const getPath = (str: string): string => path.join(process.cwd(), str);
export const getPathNew = (array: string[]): string =>
  path.join.apply(null, array);

const HOME_DIR = os.homedir();
const BASE_DIR = 'uploads';
export const BASE_DIR_PATH = path.join(HOME_DIR, BASE_DIR);

export const FRONT_FOLDER = 'server-frontend/build';

export const checkIfUploadFolderExist = (): void => {
  if (!fs.existsSync(BASE_DIR_PATH)) fs.mkdirSync(BASE_DIR_PATH);
};

export const getPathToFileBase = (filename?: string): string =>
  filename ? path.join(BASE_DIR_PATH, filename) : BASE_DIR_PATH;

export const errorHandler = (error: Error, res: Response): void => {
  console.log('error: ', error.message);
  res.status(500).json({ message: error.message });
};
