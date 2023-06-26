import { combineReducers } from "@reduxjs/toolkit";
import errorReducer from "./error.reducer";
import reducer from "./authSlice";


export const rootReducer = combineReducers({
    auth: reducer,
    notifications: errorReducer
})