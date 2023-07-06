import { createSlice } from "@reduxjs/toolkit";
import { getInterests } from "../actions/interest.action";
import { postQuestion } from "../actions/postQuestion.action";
import { getQuestion } from "../actions/getQuestions.action";

interface IPost {
    id: string
    name: string,
    user_id: number;
    user: {
       id: number,
       first_name: string,
       last_name: string,
       phone_number: string 
    }
}

const initialState = {
    interests: {} as IPost[] | null,
    loading: false
}

export const getQuestionSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getQuestion.pending, (state, action) => {
            state.interests = null;
            state.loading = true;
        })
        builder.addCase(getQuestion.fulfilled, (state, action) => {
            state.interests = action.payload.posts;
            state.loading = false;
        })
        builder.addCase(getQuestion.rejected, (state, action) => {
            state.interests = null;
            state.loading = false;
        })
    },
})

export const {} = getQuestionSlice.actions;
const { reducer } = getQuestionSlice;

export default reducer;