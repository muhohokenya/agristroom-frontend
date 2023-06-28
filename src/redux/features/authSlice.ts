import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction, signUpUserAction } from "../actions/auth.action";

interface IAccessToken {
  access_token: string;
  token_type: string;
}

const initialState = {
  access_token: {} as IAccessToken | null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //pending
    builder.addCase(signUpUserAction?.pending, (state, action) => {
      state.loading = true;
      state.access_token = null;
    });
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.loading = true;
      state.access_token = null;
    });
   
    // fullied
    builder.addCase(signUpUserAction?.fulfilled, (state, action) => {
      state.loading = false;
      state.access_token = action.payload?.access_token;
    });
    builder.addCase(loginUserAction?.fulfilled, (state, action) => {
      state.loading = false;
      state.access_token = action.payload?.login_token;
    });

    //rejected
    builder.addCase(signUpUserAction?.rejected, (state, action) => {
      state.loading = false;
      state.access_token = null;
    });
    builder.addCase(loginUserAction?.rejected, (state, action) => {
      state.loading = false;
      state.access_token = null;
    });
  },
});

export const {} = authSlice.actions;
const { reducer } = authSlice;

export default reducer;
