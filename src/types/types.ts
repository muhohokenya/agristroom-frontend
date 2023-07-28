import React, { ReactNode } from "react";

export type Card = {
  heading?: string;
  image?: string;
  text?: string;
};

export type Guide = {
  title?: string;
  image?: string;
  description?: string;
};

export type MasterClass = {
  image?: string;
  title?: string;
  classStatus?: string;
  description?: string;
  username?: string;
  userProfile?: string;
  author?: string;
  views?: number;
  likes?: number;
  date?: string;
};

type Reply = {
  time?: string;
  date?: string;
  response?: string;
};

export type Discussion = {
  country?: string;
  county?: string;
  countryFlagImage?: string;
  question?: string;
  date?: string;
  time?: string;
  image?: string;
  author?: string;
  authorsImage?: string;
  likesCount?: number;
  resplies?: Reply[];
};

export type Account = {
  Icon?: ReactNode;
  name?: string;
  id: string;
};

export interface ICountry {
  name: string;
  code: string;
  dial_code: string;
}

export interface UserRegisterData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  account_id: string;
  interests: { id: string }[];
}
export interface UserLoginData {
  email: string;
  password: string;
}

export interface Post{
  id: number;
  title: string;
  description: string,
  user_id: number;
  created_at: string;
  updated_at: string;
  image: string;
  resplies?: Reply[];
  user: {
    first_name: string;
    last_name: string;
    phone_number: string;
    image: string;
    email: string;
    county: string;
    country: string
  }
}
