import { createSlice } from "@reduxjs/toolkit";
import { postAnswer } from "../actions/postReply.action";

interface IAnswer {
    text: string,
    post_id: string
}

const initialState = {
    post: {} as IAnswer | null,
    loading: false
}

export const postAnswerSlice = createSlice({
    name: "answer",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(postAnswer.pending, (state, action) => {
            state.post = null;
            state.loading = true;
        })
        builder.addCase(postAnswer.fulfilled, (state, action) => {
            state.post = action.payload.result;
            state.loading = false;
        })
        builder.addCase(postAnswer.rejected, (state, action) => {
            state.post = null;
            state.loading = false;
        })
    },
})

export const {} = postAnswerSlice.actions;
const { reducer } = postAnswerSlice;

export default reducer;