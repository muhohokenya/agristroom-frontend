import { createSlice } from "@reduxjs/toolkit";
import { postAnswer } from "../actions/postAnswer.action";

interface IAnswerRes {
    text: string,
    success: boolean

}

const initialState = {
    response: {} as IAnswerRes | null,
    loading: false
}

export const postAnswerSlice = createSlice({
    name: "answer",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(postAnswer.pending, (state, action) => {
            state.response = null;
            state.loading = true;
        })
        builder.addCase(postAnswer.fulfilled, (state, action) => {
            state.response = action.payload;
            state.loading = false;
        })
        builder.addCase(postAnswer.rejected, (state, action) => {
            state.response = null;
            state.loading = false;
        })
    },
})

export const {} = postAnswerSlice.actions;
const { reducer } = postAnswerSlice;

export default reducer;