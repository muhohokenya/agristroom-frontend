import { BaseURL } from "@/src/lib/constants";
import parseError from "@/src/lib/parseError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setErrorNotification } from "../features/error.reducer";

export const deletePost = createAsyncThunk(
    "get/post",
    async (id: number, thunkAPI) => {
        try {
            const response = await axios.delete(`${BaseURL}/delete-post/${id}`);
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