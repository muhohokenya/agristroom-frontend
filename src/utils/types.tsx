import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import React, { ReactNode } from "react"

export type Card = {
    heading?: string;
    image?: string;
    text?: string;
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
  }

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
    resplies?: Reply[]
  }

  export type Account = {
    Icon?: ReactNode;
    name?: string
  }