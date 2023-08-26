import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../actions/getPosts.action";

export interface IPost {
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

export const getPostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state, action) => {
            state.interests = null;
            state.loading = true;
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.interests = action.payload.posts;
            state.loading = false;
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            state.interests = null;
            state.loading = false;
        })
    },
})

export const { } = getPostsSlice.actions;
const { reducer } = getPostsSlice;

export default reducer;