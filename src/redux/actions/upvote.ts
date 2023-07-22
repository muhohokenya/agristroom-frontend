import { BaseURL } from "@/src/lib/constants";
import parseError from "@/src/lib/parseError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setErrorNotification } from "../features/error.reducer";
import { getLoggedInUserToken } from "@/src/lib/utils";

type TypeUpVote = {
    reply_id: number;
    vote: number
}

export const upVotePost = createAsyncThunk(
    "vote/upvote",
    async (data: TypeUpVote, thunkAPI) => {
        try {
            const accessToken = getLoggedInUserToken();
            const response = await axios.post(`${BaseURL}/vote`, data, {
                headers: {
                    Authorization: `${accessToken.token_type} ${accessToken.access_token}`,
                },
            })
            return {
                response: response.data,
                success: true
            }
        } catch (error) {
            const err = parseError(error);
            thunkAPI.dispatch(setErrorNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
)