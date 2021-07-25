import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'alert',
  initialState: {
    message: null,
    type: null,
  },
  reducers: {
    showAlert(state, { payload }) {
      return { ...state, message: payload };
    },
    hideAlert() {
      return { message: null, type: null };
    },
  },
});

const actions = { ...slice.actions };

export default slice.reducer;
export { actions };
