"use client"

import React, {useState} from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { satoshi } from "@/src/utils/Fonts";
import {useRouter} from "next/navigation"

interface Props {}

function SignUp(props: Props) {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
  const {} = props;

  return (
    <div className="mt-[100px] w-full max-w-[1440px] mx-auto flex min-h-screen ">
      <div className=" flex flex-col items-center justify-center max-h-[528px] lg:max-h-[616px] mt-10 py-[40px] bg-white w-full max-w-[345px] lg:max-w-[474px] mx-auto rounded-md">
        <h2
          className={`font-[600] text-[20px] leading-[24px]  tracking-[0.04em] text-[#212121]`}
        >
          Sign Up to Agristroom
        </h2>
        <div className="mt-[15px] flex flex-col gap-[10px] lg:mt-[35px] w-full max-w-[315px] lg:min-w-[394px] mx-[15px] lg:mx-[40px]">
          <div className="flex items-center cursor-pointer border border-[#2F9B4E] px-[10px] h-[48px] rounded-[4px] gap-[22px]   ">
            <FcGoogle className="h-[24px] w-[23.85px]" />
            <p className="text-[16px] text-[#2F9B4E] font-[700] leading-[22px] tracking-[0.04em]">
              Continue with Google
            </p>
          </div>
          <div className="flex items-center cursor-pointer border border-[#2F9B4E] px-[10px] h-[48px] rounded-[4px] gap-[22px]">
            <FaFacebook className="text-[#1877F2] w-[24px] h-[23.85px]" />
            <p className="text-[16px] text-[#2F9B4E] font-[700] leading-[22px] tracking-[0.04em]">
              Continue with Google
            </p>
          </div>
        </div>
        <div className="my-[15px] lg:my-[25px] flex   w-full items-center justify-center px-[40px] ">
          <p className=" flex items-center gap-[21px] justify-center before:content-[''] before:h-[1px] before:min-w-[75px] lg:before:min-w-[114px] before:bg-[#BFBFBF]/40 before:block after:content-[''] after:h-[1px] after:min-w-[75px] lg:after:min-w-[114px] after:bg-[#BFBFBF]/40 after:block w-full min-w-[96px] min-h-[16px] font-[500] text-[12px] leading-[16px] tracking-[0.04em] whitespace-nowrap">
            Or log in with email
          </p>
        </div>
        <div className="w-full flex flex-col gap-[15px] lg:gap-[20px] max-w-[315px] lg:min-w-[394px] mx-[15px] lg:mx-[40px]">
          <div className="flex flex-col gap-[8px] w-full ">
            <label>Email Address</label>
            <input
              type="text"
              className="w-full h-[48px] px-2 border border-1-[#BFBFBF]/60 outline-0 outline-[#BFBFBF]/60 rounded-[5px] bg-[#FFFFFF] focus:outline focus:outline-[#BFBFBF]/60 "
            />
          </div>
          <div className="flex flex-col gap-[8px] w-full">
            <label>Password</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text": "password"}
                className="  w-full  h-[48px] px-2 border border-1-[#BFBFBF]/60 outline-0 outline-[#BFBFBF]/60 rounded-[5px]  focus:outline focus:outline-[#BFBFBF]/60 "
              />
              <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer right-3  h-6 w-6 text-[#282828]/70" />
            </div>
          </div>
        </div>
        <p className="mt-[10px] text-[#2F9B4E] mx-[15px] lg:mx-[40px] text-[12px] leading-[16px] tracking-[-0.04em] font-[500] w-full max-w-[315px] lg:min-w-[394px]  text-end">Forgot password?</p>
        <button
          type="button"
          onClick={() => router.push('/signup/createaccounts')}
          className={`mt-[35px] bg-[#2F9B4E]  max-w-[315px] lg:min-w-[394px] py-[14px] px-[24px] h-[50px] rounded-[5px] text-white w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className}`}>
            Continue
        </button>

        <div className="mt-[15px] text-[14px] text-[#212121]/50 font-[500] leading-[19px] tracking-[-0.04em]">Already have an account? <Link className="ml-[5px] font-[700] text-[#2F9B4E]" href="/login">Log In</Link></div>
      </div>
    </div>
  );
}

export default SignUp;
