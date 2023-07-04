import { combineReducers } from "@reduxjs/toolkit";
import errorReducer from "./error.reducer";
import reducer from "./authSlice";
import CurrentUserSlice from "./currentUserSlice";
import getInterestsSlice from "./interestsSlice";


export const rootReducer = combineReducers({
    auth: reducer,
    notifications: errorReducer,
    currentUser: CurrentUserSlice,
    interests: getInterestsSlice
})