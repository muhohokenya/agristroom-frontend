"use client";

import React, { forwardRef, useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEyeSlash, FaSpinner } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ManagedUI } from "@/src/hooks/useModalContext";
import { MdClose } from "react-icons/md";
import { satoshi } from "@/src/fonts/Fonts";
import { Input } from "@/src/components/ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useFormContext } from "../context/formstate";
import { toast } from "../hooks/use-toast";
import Stepper from "./Stepper";

interface Props {}
type Inputs = {
  username: string;
  email: string;
  password: string;
};

const SignUpPage = (props: Props) => {
  const router = useRouter();
  const { setOpenModal } = useContext(ManagedUI);
  const { state, setState } = useFormContext();
  // const { data } = useSession();

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isLoading },
  } = useForm<Inputs>({
    defaultValues: state,
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsSubmitting(true);
    setState((prevState) => ({
      ...prevState,
      user_name: data.username,
      email: data.email,
      password: data.password,
    }));
    setIsSubmitting(false);
    setOpenModal(true);
    router.push("/signup/accountinformations");
  };

  useEffect(() => {
    reset({
      username: state.user_name,
      email: state.email,
      password: state.password,
    });
  }, [reset]);


  return (
    <div className="relative flex flex-col items-center justify-center  max-w-[345px] lg:max-w-[474px] mx-auto w-full bg-white">
    <Stepper />
    <div className="relative border-t border-t-slate-200 flex flex-col items-center justify-center h-auto mt-10 py-[40px] bg-white w-full max-w-[345px] lg:max-w-[474px] mx-auto rounded-md shadow-md">
      <div className="flex mt-[15px] ">
        <h2
          className={`font-[600] text-[18px] leading-[24px]  tracking-[0.04em] text-[#212121]`}
        >
          Sign Up to Agristroom
        </h2>
      </div>
      {/* <div className="mt-[15px] flex flex-col gap-[10px] lg:mt-[35px] w-full max-w-[315px] lg:min-w-[394px] mx-[15px] lg:mx-[40px]">
        <div className="flex items-center cursor-pointer border border-[#2F9B4E] px-[10px] h-[48px] rounded-[4px] gap-[22px]   ">
          <FcGoogle className="h-[24px] w-[23.85px]" />
          <button
            className="text-[16px] text-[#2F9B4E] font-[700] leading-[22px] tracking-[0.04em]"
          >
            Sign up with Google
          </button>
        </div>
        <div className="flex items-center cursor-pointer border border-[#2F9B4E] px-[10px] h-[48px] rounded-[4px] gap-[22px]">
          <FaFacebook className="text-[#1877F2] w-[24px] h-[23.85px]" />
          <p className="text-[16px] text-[#2F9B4E] font-[700] leading-[22px] tracking-[0.04em]">
            Sign up with Facebook
          </p>
        </div>
      </div>
      <div className="my-[15px] lg:my-[25px] flex   w-full items-center justify-center px-[40px] ">
        <p className=" flex items-center gap-[21px] justify-center before:content-[''] before:h-[1px] before:min-w-[75px] lg:before:min-w-[114px] before:bg-[#BFBFBF]/40 before:block after:content-[''] after:h-[1px] after:min-w-[75px] lg:after:min-w-[114px] after:bg-[#BFBFBF]/40 after:block w-full min-w-[96px] min-h-[16px] font-[500] text-[12px] leading-[16px] tracking-[0.04em] whitespace-nowrap">
          Or Sign up with email
        </p>
      </div> */}
      <form
        action=""
        className="flex flex-col w-full mt-[15px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col gap-[15px] lg:gap-[20px] max-w-[315px] lg:min-w-[394px] mx-[15px] lg:mx-[40px]">
          
          <div className="flex flex-col gap-[8px] w-full ">
            <label className="text-[13px]">Email Address</label>
            <Input
              className="focus-visible:ring-[#2F9B4E]"
              {...register("email", { required: true })}
            />
            {errors.email && errors.email.type === "required" && (
              <span className="text-red-400 text-[12px] mt-1 w-full">
                Email is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-[8px] w-full">
            <label className="text-[13px]">Password</label>
            <div className="relative flex flex-col items-center justify-center">
              <Input
                type={showPassword ? "text" : "password"}
                className="focus-visible:ring-[#2F9B4E]"
                {...register("password", { required: true })}
              />
              <span className="flex items-start justify-end absolute cursor-pointer right-3">
                <FaEyeSlash
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="  h-8 w-8 text-[#2F9B4E] "
                />
              </span>
              {errors.password && (
                <span className="text-red-500 text-[12px] w-full">
                  Password is required
                </span>
              )}
            </div>
          </div>
        </div>
        <p className="mt-[10px] text-[#2F9B4E] mx-[15px] lg:mx-[40px] text-[12px] leading-[16px] tracking-[-0.04em] font-[500] w-full max-w-[315px] lg:min-w-[394px]  text-end">
          Forgot password?
        </p>
        <div className="flex w-full mt-[35px] items-center justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={` bg-[#2F9B4E] ${
              isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
            } flex items-center mx-auto justify-center gap-2 max-w-[315px] lg:min-w-[394px] py-[14px] px-[24px] h-[50px] rounded-[5px] text-white w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${
              satoshi.className
            }`}
          >
            {isSubmitting && (
              <FaSpinner className="animate-spin max-h-10 max-w-10 text-white" />
            )}
            <span>Continue</span>
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
    </div>
  );
};

export default SignUpPage;
