import apiPost from "@/src/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetNotifications } from "../features/error.reducer";
import { UserRegisterData } from "@/src/types/types";
import axios from "axios";
import { BaseURL } from "@/src/lib/constants";


export const signUpUserAction = createAsyncThunk(
    "user/signup",
    async (data: UserRegisterData, thunkAPI) => {
     try {
        thunkAPI.dispatch(resetNotifications({}))
        const response = await axios.post(`${BaseURL}/register`,data)
        console.log("response^^^^^^^&&&&&&&&&",response)
        return {
            access_token: response.data,
            success: true
        }
     } catch (error) {
        
     }
    }
)