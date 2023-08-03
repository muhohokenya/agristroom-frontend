import { createSlice } from "@reduxjs/toolkit";
import {  upVoteForReply } from "../actions/upvote";

interface TypeUpVote {
    reply_id: number;
    vote: number;
}

const initialState = {
    response: {} as TypeUpVote | null,
    loading: false
}

export const postUpVoteForReplySlice = createSlice({
    name: "votes",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(upVoteForReply.pending, (state, action) => {
            state.response = null;
            state.loading = true;
        })

        builder.addCase(upVoteForReply.fulfilled, (state, action) => {
            state.response = action.payload.response;
            state.loading = false;
        })
        builder.addCase(upVoteForReply.rejected, (state, action) => {
            state.response = null;
            state.loading = false;
        })
    },
})

export const {} = postUpVoteForReplySlice.actions;
const { reducer } = postUpVoteForReplySlice;

export default reducer;