import path from 'path';

const BASE_DIR = 'uploads';

export const getPathToFileBase = (filename?: string): string =>
  filename
    ? path.join(process.cwd(), BASE_DIR, filename)
    : path.join(process.cwd(), BASE_DIR);
