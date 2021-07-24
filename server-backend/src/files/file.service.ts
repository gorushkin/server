import { UploadedFile } from 'express-fileupload';
import { promises as fs } from 'fs';
import { getPathToFileBase, checkIfUploadFolderExist } from '../helpers';

export const getFiles = async (): Promise<string[]> => {
  checkIfUploadFolderExist();
  const baseDir = getPathToFileBase();
  const files = await fs.readdir(baseDir);
  return files;
};

// export const getFile = async (filename: string): Promise<string> => {
//   const pathToFile = getPathToFileBase(filename)
//   const data = await fs.readFile(pathToFile);
//   return 'file';
// };

export const addFile = async (file: UploadedFile): Promise<string> => {
  try {
    const { name, data } = file;
    const fileName = getPathToFileBase(name);
    await fs.writeFile(fileName, data);
    return `${name} uploaded!!!`;
  } catch (error) {
    return error.message;
  }
};
