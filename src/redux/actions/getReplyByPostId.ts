import { BaseURL } from "@/src/lib/constants";
import parseError from "@/src/lib/parseError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setErrorNotification } from "../features/error.reducer";
import { getLoggedInUserToken } from "@/src/lib/utils";

export const getRepliesByPostId = createAsyncThunk(
  "get/replies",
  async (id:number, thunkAPI) => {
    try {
      const response = await axios.get(`${BaseURL}/reply/post/${id}`);
      return {
        replies: response.data,
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
