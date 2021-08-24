import { combineReducers, configureStore } from '@reduxjs/toolkit';
import alert, { actions as alertActions } from './alert';
import user, { actions as userActions } from './user';

export default configureStore({
  reducer: combineReducers({ alert, user }),
});

const actions = { ...alertActions, ...userActions };

export { actions };
