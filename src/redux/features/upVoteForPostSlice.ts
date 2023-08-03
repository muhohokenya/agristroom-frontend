import { createSlice } from "@reduxjs/toolkit";
import { upVoteForQuestion } from "../actions/upvote";

interface TypeUpVote {
    vote: number;
    post_id: number
}

const initialState = {
    response: {} as TypeUpVote | null,
    loading: false
}

export const postUpVoteForPostSlice = createSlice({
    name: "votes",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(upVoteForQuestion.pending, (state, action) => {
            state.response = null;
            state.loading = true;
        })
    
        builder.addCase(upVoteForQuestion.fulfilled, (state, action) => {
            state.response = action.payload.response;
            state.loading = false;
        })
        builder.addCase(upVoteForQuestion.rejected, (state, action) => {
            state.response = null;
            state.loading = false;
        })
    },
})

export const {} = postUpVoteForPostSlice.actions;
const { reducer } = postUpVoteForPostSlice;

export default reducer;