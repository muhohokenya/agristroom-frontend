import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./authSlice";
import CurrentUserSlice from "./currentUserSlice";
import errorReducer from "./error.reducer";
import getAllUsers from "./getAllUsersSlice";
import getOneQuestionSlice from "./getOneQuestionSlice";
import getPosts from "./getPostsSlice";
import getRepliesByPostId from "./getReplyBtPostIdSlice";
import getInterestsSlice from "./interestsSlice";
import postAnswerSlice from "./postAnswerSlice";
import postQuestion from "./postQuestion.Slice";
import requestPasswordReset from "./requestPasswordRequest";
import resetPasswordRequest from "./resetPassword";
import upvotePost from "./upVoteForPostSlice";
import upvoteReply from "./upVoteForReplySlice";


export const rootReducer = combineReducers({
    auth: reducer,
    notifications: errorReducer,
    currentUser: CurrentUserSlice,
    interests: getInterestsSlice,
    post: postQuestion,
    onePost: getOneQuestionSlice,
    answerCreated: postAnswerSlice,
    posts: getPosts,
    users: getAllUsers,
    resetPassword: resetPasswordRequest,
    requestPasswordReset: requestPasswordReset,
    upvoteForReply: upvoteReply,
    upvoteForPost: upvotePost,
    replies: getRepliesByPostId
})