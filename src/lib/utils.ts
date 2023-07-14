import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLoggedInUserToken() {
  if (!!localStorage.getItem("access_token")) {
    const userToken = JSON.parse(localStorage.getItem("access_token")!);
    return userToken;
  } else {
    return null
  }
}

