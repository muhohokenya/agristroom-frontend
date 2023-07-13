import { createSlice } from "@reduxjs/toolkit";
import { getRepliesByPostId } from "../actions/getReplyByPostId";

interface IReplies {
    id: string
    text: string,
    user_id: number;
    user: {
       id: number,
       first_name: string,
       last_name: string,
       phone_number: string 
       country: string,
       county: string,
    }
    post: {
        id: number;
        name: string;
        image: string
    }
}

const initialState = {
    replies: {} as IReplies[] | null,
    loading: false
}

export const getReplyBtPostIdSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getRepliesByPostId.pending, (state, action) => {
            state.replies = null;
            state.loading = true;
        })
        builder.addCase(getRepliesByPostId.fulfilled, (state, action) => {
            state.replies = action.payload.replies;
            state.loading = false;
        })
        builder.addCase(getRepliesByPostId.rejected, (state, action) => {
            state.replies = null;
            state.loading = false;
        })
    },
})

export const {} = getReplyBtPostIdSlice.actions;
const { reducer } = getReplyBtPostIdSlice;

export default reducer;