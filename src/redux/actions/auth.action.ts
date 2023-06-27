import apiPost from "@/src/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetNotifications } from "../features/error.reducer";
import { UserRegisterData } from "@/src/types/types";
import axios from "axios";
import { BaseURL } from "@/src/lib/constants";

export const signUpUserAction = createAsyncThunk(
  "user/signup",
  async (thunkAPI) => {
    try {
    //   thunkAPI.dispatch(resetNotifications({}));
      const response = await axios.post(
        `http://dev.agristroom.com/api/api/register`,
        {
          first_name: "Sammy",
          last_name: "Kirigha",
          email: "sammy@gmail.com",
          phone_number: "+254704078652",
          password: "password",
        }
      );
      console.log("response^^^^^^^&&&&&&&&&", response);
      return {
        access_token: response.data,
        success: true,
      };
    } catch (error) {}
  }
);
// http://localhost:3000/
