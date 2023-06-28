import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  resetNotifications,
  setErrorNotification,
} from "../features/error.reducer";
import { UserLoginData, UserRegisterData } from "@/src/types/types";
import axios from "axios";
import { BaseURL } from "@/src/lib/constants";
import parseError from "../../lib/parseError";

export const signUpUserAction = createAsyncThunk(
  "user/signup",
  async (data: UserRegisterData, thunkAPI) => {
    try {
      thunkAPI.dispatch(resetNotifications({}));
      const response = await axios.post(
        `http://dev.agristroom.com/api/api/register`,
        data
      );
      return {
        access_token: response.data,
        success: true,
      };
    } catch (error: any) {
      const err = parseError(error);
      thunkAPI.dispatch(setErrorNotification(err));
      return thunkAPI.rejectWithValue({
        success: false,
      });
    }
  }
);

export const loginUserAction = createAsyncThunk(
  "user/login",
  async (data: UserLoginData, thunkAPI) => {
    try {
      const response = await axios.post(`http://dev.agristroom.com/api/api/login`, data)
      return {
        login_token: response.data,
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
);
