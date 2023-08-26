import { createSlice } from "@reduxjs/toolkit";
import { resetPassword } from "../actions/auth.action.action";

const initialState = {
  result: {} as string | null,
  loading: false,
};

export const resetPasswordSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //pending
    builder.addCase(resetPassword?.pending, (state, action) => {
      state.loading = true;
      state.result = null;
    });

    // fullied
    builder.addCase(resetPassword?.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload?.result
    });

    //rejected
    builder.addCase(resetPassword?.rejected, (state, action) => {
      state.loading = false;
      state.result = null;
    });
  },
});

const { reducer } = resetPasswordSlice;

export default reducer;
