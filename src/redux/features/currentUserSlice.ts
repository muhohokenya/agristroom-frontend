import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../actions/auth.action.action";

interface ICurrentUser {
    id: string,
    first_name: string,
    last_name: string,
    phone_number: string,
    email: string,
    account: {
        id: string,
        name: string
    }
    intereste: { id: string, name: string }[]
}

const initialState = {
    user: {} as ICurrentUser | null,
    loading: false
}


export const CurrentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getCurrentUser.pending, (state, action) => {
            state.user = null;
            state.loading = true
        })
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.loading = false
        })
        builder.addCase(getCurrentUser.rejected, (state, action) => {
            state.user = null;
            state.loading = false
        })
    },
})

export const { } = CurrentUserSlice.actions;
const { reducer } = CurrentUserSlice;

export default reducer;