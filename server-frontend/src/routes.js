import Home from './pages/Home';
import Files from './pages/Files';
import UploadFile from './pages/UploadFile';
import Login from './pages/Login';

const authorizedRoutes = [
  { path: '/', exact: true, component: Home },
  { path: '/files', component: Files },
  { path: '/upload', component: UploadFile },
];

const unAuthorizedRoutes = [{ path: '/', component: Login }];

export const getRoutes = ({ isAuthorized }) =>
  isAuthorized ? authorizedRoutes : unAuthorizedRoutes;
