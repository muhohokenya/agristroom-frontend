import {createSlice} from "@reduxjs/toolkit"
import {signUpUserAction} from "../actions/auth.action"


const initialState = {
    access_token: null,
    loading: false
} 

export const authSlice = createSlice({
name: "auth",
initialState,
reducers: {},
extraReducers: (builder) => {
    builder.addCase(signUpUserAction?.pending, (state, action) => {
        state.loading = true;
        state.access_token = null;
    })
    builder.addCase(signUpUserAction?.fulfilled, (state, action) => {
        state.loading = false;
        state.access_token = action.payload?.access_token;
    })
    builder.addCase(signUpUserAction?.rejected, (state, action) => {
        state.loading = false;
        state.access_token = null;
    })
}
})

export const {} = authSlice.actions;
const {reducer} = authSlice;

export default reducer;