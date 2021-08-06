import defaultConfig from './default';
import local from './local';
import deployed from './deployed';

const serverTypeMapping = { local, deployed };

export const config =
  serverTypeMapping[process.env.REACT_APP_LOCATION] || defaultConfig;
