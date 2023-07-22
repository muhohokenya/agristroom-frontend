import { createSlice } from "@reduxjs/toolkit";
import { upVotePost } from "../actions/upvote";

interface TypeUpVote {
    reply_id: number;
    vote: number
}

const initialState = {
    response: {} as TypeUpVote | null,
    loading: false
}

export const postUpVoteSlice = createSlice({
    name: "votes",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(upVotePost.pending, (state, action) => {
            state.response = null;
            state.loading = true;
        })
        builder.addCase(upVotePost.fulfilled, (state, action) => {
            state.response = action.payload.response;
            state.loading = false;
        })
        builder.addCase(upVotePost.rejected, (state, action) => {
            state.response = null;
            state.loading = false;
        })
    },
})

export const {} = postUpVoteSlice.actions;
const { reducer } = postUpVoteSlice;

export default reducer;