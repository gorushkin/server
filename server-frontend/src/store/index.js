import { combineReducers, configureStore } from '@reduxjs/toolkit';
import alert, { actions as alertActions } from './alert';

export default configureStore({
  reducer: combineReducers({ alert }),
});

const actions = { ...alertActions };

export { actions };
