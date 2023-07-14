import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import jwt from 'jsonwebtoken';

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


const SignToken = async (email: string)=> {
const token = await jwt.sign({id:email}, process.env.NEXT_PUBLIC_JWT_SECRET_KEY!, {expiresIn: '1d'});
    return token
}

export default SignToken;
