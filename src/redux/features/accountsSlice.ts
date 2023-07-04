import { createSlice } from "@reduxjs/toolkit";
import { getAccounts } from "../actions/account.action";

interface IAccount {
    id: string,
    name: string,
}

const initialState = {
    accounts: {} as IAccount[] | null,
    loading: false
}


export const getAccountSlice = createSlice({
    name: "interests",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAccounts.pending, (state, action) => {
            state.accounts = null;
            state.loading = true
        })
        builder.addCase(getAccounts.fulfilled, (state, action) => {
            state.accounts = action.payload.accounts;
            state.loading = false
        })
        builder.addCase(getAccounts.rejected, (state, action) => {
            state.accounts = null;
            state.loading = false
        })
    },
})

export const {} = getAccountSlice.actions;
const { reducer } = getAccountSlice;

export default reducer;