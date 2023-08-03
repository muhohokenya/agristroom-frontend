import { useMutation, useQuery } from "@tanstack/react-query";
import { BaseURL } from "../lib/constants";
import axios from "axios";


export const checkIfEmailExist = async (email: string) => {
    const { data } = await axios.post(`${BaseURL}/email-exists`, { email });
    return data;
  }

export  const checkIfUserNameExists = async (username: string) => {
    const { data } = await axios.post(`${BaseURL}/username-exists`, { username });
    return data;
  }