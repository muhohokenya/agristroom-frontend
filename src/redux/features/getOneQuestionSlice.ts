import { createSlice } from "@reduxjs/toolkit";
import { getOneQuestion } from "../actions/getOneQuestion.action";

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
    interests: {} as IPost | null,
    loading: false
}

export const getOneQuestionSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getOneQuestion.pending, (state, action) => {
            state.interests = null;
            state.loading = true;
        })
        builder.addCase(getOneQuestion.fulfilled, (state, action) => {
            state.interests = action.payload.post;
            state.loading = false;
        })
        builder.addCase(getOneQuestion.rejected, (state, action) => {
            state.interests = null;
            state.loading = false;
        })
    },
})

export const {} = getOneQuestionSlice.actions;
const { reducer } = getOneQuestionSlice;

export default reducer;