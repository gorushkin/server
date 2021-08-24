import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false,
  name: '',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

const actions = { ...slice.actions };

export default slice.reducer;
export { actions };
