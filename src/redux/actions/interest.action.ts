import { BaseURL } from "@/src/lib/constants";
import parseError from "@/src/lib/parseError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setErrorNotification } from "../features/error.reducer";

export const getInterests = createAsyncThunk(
    "get/interests", 
    async (_, thunkAPI) => {
       try {
        
        const response = await axios.get(`${BaseURL}/interests`)
        return {
          interests: response.data,
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