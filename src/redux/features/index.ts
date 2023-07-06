import { combineReducers } from "@reduxjs/toolkit";
import errorReducer from "./error.reducer";
import reducer from "./authSlice";
import CurrentUserSlice from "./currentUserSlice";
import getInterestsSlice from "./interestsSlice";
import getQuestion from "./getQuestionSlice";
import postQuestion  from "./postQuestion.Slice";
import  getOneQuestionSlice  from "./getOneQuestionSlice";
import  postAnswerSlice  from "./postReplySlice";


export const rootReducer = combineReducers({
    auth: reducer,
    notifications: errorReducer,
    currentUser: CurrentUserSlice,
    interests: getInterestsSlice,
    post: postQuestion,
    onePost: getOneQuestionSlice,
    anserCreated: postAnswerSlice,
    posts: getQuestion
})