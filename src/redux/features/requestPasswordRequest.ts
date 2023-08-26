import { createSlice } from "@reduxjs/toolkit";
import { requestPasswordReset } from "../actions/auth.action.action";


const initialState = {
  result: {} as string | null,
  loading: false,
};

export const requestPasswordResetSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //pending
    builder.addCase(requestPasswordReset?.pending, (state, action) => {
      state.loading = true;
      state.result = null;
    });

    // fullied
    builder.addCase(requestPasswordReset?.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload?.result
    });
    //rejected
    builder.addCase(requestPasswordReset?.rejected, (state, action) => {
      state.loading = false;
      state.result = null;
    });
  },
});

const { reducer } = requestPasswordResetSlice;

export default reducer;
