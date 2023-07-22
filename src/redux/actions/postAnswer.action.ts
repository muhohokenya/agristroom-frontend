import { BaseURL } from "@/src/lib/constants";
import parseError from "@/src/lib/parseError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setErrorNotification } from "../features/error.reducer";
import { getLoggedInUserToken } from "@/src/lib/utils";

type Answer = {
    text: string;
    post_id: number;
}

export const postAnswer = createAsyncThunk(
  "post/answer",
  async (data:Answer, thunkAPI) => {
    try {
      const accessToken = getLoggedInUserToken();
      const response = await axios.post(`${BaseURL}/reply/create`, data, {
          headers: {
              Authorization: `${accessToken.token_type} ${accessToken.access_token}`,
            },
        });
      return {
        text: response?.data,
        success: true,
      };
    } catch (error) {
      const err = parseError(error);
      thunkAPI.dispatch(setErrorNotification(err));
      return thunkAPI.rejectWithValue({
        success: false,
      });
    }
  }
);
