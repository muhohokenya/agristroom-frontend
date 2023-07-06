import { createSlice } from "@reduxjs/toolkit";
import { getInterests } from "../actions/interest.action";
import { postQuestion } from "../actions/postQuestion.action";

interface IPost {
    name: string,
}

const initialState = {
    post: {} as IPost | null,
    loading: false
}

export const postQuestionSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(postQuestion.pending, (state, action) => {
            state.post = null;
            state.loading = true;
        })
        builder.addCase(postQuestion.fulfilled, (state, action) => {
            state.post = action.payload.result;
            state.loading = false;
        })
        builder.addCase(postQuestion.rejected, (state, action) => {
            state.post = null;
            state.loading = false;
        })
    },
})

export const {} = postQuestionSlice.actions;
const { reducer } = postQuestionSlice;

export default reducer;