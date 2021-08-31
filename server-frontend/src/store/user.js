import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: true,
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
