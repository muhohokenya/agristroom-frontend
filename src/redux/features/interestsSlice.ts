import { createSlice } from "@reduxjs/toolkit";
import { getInterests } from "../actions/interest.action";

interface IInterest {
    id: string,
    name: string,
}

const initialState = {
    interests: {} as IInterest[] | null,
    loading: false
}


export const getInterestSlice = createSlice({
    name: "interests",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getInterests.pending, (state, action) => {
            state.interests = null;
            state.loading = true
        })
        builder.addCase(getInterests.fulfilled, (state, action) => {
            state.interests = action.payload.interests;
            state.loading = false
        })
        builder.addCase(getInterests.rejected, (state, action) => {
            state.interests = null;
            state.loading = false
        })
    },
})

export const {} = getInterestSlice.actions;
const { reducer } = getInterestSlice;

export default reducer;