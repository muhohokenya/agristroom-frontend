import { BaseURL } from "@/src/lib/constants";
import parseError from "@/src/lib/parseError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setErrorNotification } from "../features/error.reducer";
import { getLoggedInUserToken } from "@/src/lib/utils";

export const postQuestion = createAsyncThunk(
  "post/question",
  async (data: any, thunkAPI) => {
    try {
      const accessToken = getLoggedInUserToken();
      console.log("accessToken from pos question", accessToken);
      const response = await axios.post(`${BaseURL}/post/create`, data, {
        headers: {
          Authorization: `${accessToken.token_type} ${accessToken.access_token}`,
        },
      });
      console.log("response from pos question", response);
      return {
        result: response.data,
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
