import { BaseURL } from "@/src/lib/constants";
import { getLoggedInUserToken } from "@/src/lib/utils";
import { UserLoginData, UserRegisterData } from "@/src/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parseError from "../../lib/parseError";
import {
  resetNotifications,
  setErrorNotification,
} from "../features/error.reducer";

export const signUpUserAction = createAsyncThunk(
  "user/signup",
  async (data: UserRegisterData, thunkAPI) => {
    try {
      thunkAPI.dispatch(resetNotifications({}));
      const response = await axios.post(
        `${BaseURL}/register`,
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
      const response = await axios.post(`${BaseURL}/login`, data)
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

export const getCurrentUser = createAsyncThunk(
  "user/me",
  async (_, thunkAPI) => {
    try {
      const accessToken = getLoggedInUserToken()
      const response = await axios.get(`${BaseURL}/user`, {
        headers: {
          Authorization: `${accessToken.token_type} ${accessToken.access_token}`
        }
      })
      return {
        user: response.data[0],
        success: true
      }
    } catch (error) {
      console.log("error", error);
      const err = parseError(error);
      thunkAPI.dispatch(setErrorNotification(err));
      return thunkAPI.rejectWithValue({
        success: false,
      });
    }
  }
)

export const requestPasswordReset = createAsyncThunk(
  "password/request",
  async (data: {
    email: string
  }, thunkAPI) => {
    try {
      const response = await axios.get(`${BaseURL}/request-password-reset`, { data })
      return {
        result: response.data[0],
        success: true
      }
    } catch (error) {
      console.log("error", error);
      const err = parseError(error);
      thunkAPI.dispatch(setErrorNotification(err));
      return thunkAPI.rejectWithValue({
        success: false,
      });
    }
  }
)

export const resetPassword = createAsyncThunk(
  "reset/password",
  async (data: {
    password: string,
    confirmPassword: string,
    token: string
  }, thunkAPI) => {
    try {
      const response = await axios.get(`${BaseURL}/reset-password`, { data })
      return {
        result: response.data[0],
        success: true
      }
    } catch (error) {
      console.log("error", error);
      const err = parseError(error);
      thunkAPI.dispatch(setErrorNotification(err));
      return thunkAPI.rejectWithValue({
        success: false,
      });
    }
  }
)

export const logoutUserAction = () => async (dispatch: any) => {
  try {
    localStorage.clear();
    console.log("logout");
    return { success: true }

  } catch (e: any) {
    return console.error(e.message);

  }

}

