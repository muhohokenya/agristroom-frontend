import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../actions/getAllUsers";
import { IPost } from "./getPostsSlice";

interface IUser {
    id: string
    name: string,
    phone_number: string;
    country: string;
    county: string;
    email: string;
    username: string;
    created_at: string;
    account: {
        id: number;
        name: string
    }
    updated_at: string;
    posts: IPost[];
    replies: any[]

}

const initialState = {
    users: {} as IUser[] | null,
    loading: false
}

export const getAllUsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllUsers.pending, (state, action) => {
            state.users = null;
            state.loading = true;
        })
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload.users;
            state.loading = false;
        })
        builder.addCase(getAllUsers.rejected, (state, action) => {
            state.users = null;
            state.loading = false;
        })
    },
})

export const { } = getAllUsersSlice.actions;
const { reducer } = getAllUsersSlice;

export default reducer;