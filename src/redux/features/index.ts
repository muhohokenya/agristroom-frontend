import { combineReducers } from "@reduxjs/toolkit";
import errorReducer from "./error.reducer";
import reducer from "./authSlice";
import CurrentUserSlice from "./currentUserSlice";
import getInterestsSlice from "./interestsSlice";
import getPosts from "./getPostsSlice";
import postQuestion  from "./postQuestion.Slice";
import  getOneQuestionSlice  from "./getOneQuestionSlice";
import  postAnswerSlice  from "./postAnswerSlice";
import getRepliesByPostId from "./getReplyBtPostIdSlice";
import upvoteReply from "./upVoteForReplySlice";
import upvotePost from "./upVoteForPostSlice";


export const rootReducer = combineReducers({
    auth: reducer,
    notifications: errorReducer,
    currentUser: CurrentUserSlice,
    interests: getInterestsSlice,
    post: postQuestion,
    onePost: getOneQuestionSlice,
    answerCreated: postAnswerSlice,
    posts: getPosts,
    upvoteForReply: upvoteReply,
    upvoteForPost: upvotePost,
    replies: getRepliesByPostId
})