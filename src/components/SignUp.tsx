"use client";

import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ManagedUI } from "@/src/hooks/useModalContext";
import { MdClose } from "react-icons/md";
import { satoshi } from "@/src/fonts/Fonts";
import { Input } from "@/src/components/ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { log } from "console";
import { json } from "stream/consumers";

interface Props {}
type Inputs = {
  email: string;
  password: string;
};

function SignUpPage(props: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const { setOpenModal } = useContext(ManagedUI);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isLoading },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    localStorage.setItem("user_data", JSON.stringify(data));
    console.log("data entered", data);
  };

  console.log("<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>");

  return (
    <div className="relative flex flex-col items-center justify-center max-h-[550px] lg:max-h-[616px] mt-10 py-[40px] bg-white w-full max-w-[345px] lg:max-w-[474px] mx-auto rounded-md shadow-md">
      <MdClose
        className="absolute top-3 right-3 text-lg h-[25px] w-[25px] text-[#212121]/70 cursor-pointer"
        onClick={() => {
          router.back();
          //   setOpenModal(false);
        }}
      />
      <div className="flex mt-[30px] ">
        <h2
          className={`font-[600] text-[20px] leading-[24px]  tracking-[0.04em] text-[#212121]`}
        >
          Sign Up to Agristroom
        </h2>
      </div>
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
      <form
        action=""
        className="flex flex-col w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col gap-[15px] lg:gap-[20px] max-w-[315px] lg:min-w-[394px] mx-[15px] lg:mx-[40px]">
          <div className="flex flex-col gap-[8px] w-full ">
            <label>Email Address</label>
            <Input
              className="focus-visible:ring-[#2F9B4E]"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-[8px] w-full">
            <label>Password</label>
            <div className="relative flex items-center">
              <Input
                type={showPassword ? "text" : "password"}
                className="focus-visible:ring-[#2F9B4E]"
                {...register("password", { required: true })}
              />
              <FaEyeSlash
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="absolute cursor-pointer right-3  h-6 w-6 text-[#282828]/70"
              />
            </div>
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
        </div>
        <p className="mt-[10px] text-[#2F9B4E] mx-[15px] lg:mx-[40px] text-[12px] leading-[16px] tracking-[-0.04em] font-[500] w-full max-w-[315px] lg:min-w-[394px]  text-end">
          Forgot password?
        </p>
        <div className="flex w-full mt-[35px] items-center justify-center">
          <button
            type="submit"
            onClick={() => {
              setOpenModal(true);
              router.push("/signup/createaccounts");
            }}
            className={` bg-[#2F9B4E]  max-w-[315px] lg:min-w-[394px] py-[14px] px-[24px] h-[50px] rounded-[5px] text-white w-full text-center text-[16px] leading-[22px] tracking-[-0.04em] ${satoshi.className}`}
          >
            Continue
          </button>
        </div>
      </form>

      <div className="mt-[15px] text-[14px] text-[#212121]/50 font-[500] leading-[19px] tracking-[-0.04em]">
        Already have an account?{" "}
        <Link className="ml-[5px] font-[700] text-[#2F9B4E]" href="/login">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default SignUpPage;
