"use client";

import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEyeSlash, FaSpinner } from "react-icons/fa";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";
import Button from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { useAppDispatch, useAppSelector } from "../hooks/react-redux-hooks";
import { RootState } from "../redux";
import { getCurrentUser, loginUserAction } from "../redux/actions/auth.action";
import { useForm } from "react-hook-form";
import { satoshi } from "../fonts/Fonts";
import { toast } from "../hooks/use-toast";
import { ManagedUI } from "../hooks/useModalContext";
import { resetNotifications } from "../redux/features/error.reducer";

type LoginInput = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { setOpenModal } = useContext(ManagedUI);
  const { formState, handleSubmit, register } = useForm<LoginInput>();

  // state
  const [showPassword, setShowPassword] = useState(false);
  const result = useAppSelector((state: RootState) => state.auth);
  const error = useAppSelector((state: RootState) => state.notifications);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  

  const submitLogin = async (data: LoginInput) => {
    setIsSubmitting(true)
    const res: any = await dispatch(loginUserAction(data));
    localStorage.setItem("access_token", JSON.stringify(res.payload.login_token))
    
    if(res.payload.success){
      setIsSubmitting(false)
      toast({
        description: "You have successfully login in",
        variant: "secondary"
      })
      setOpenModal(false)
      router.push("/dashboard")
    }

    if(!res.payload.success){
      setIsSubmitting(false)
      toast({
        title: "Login Fail",
        description: "Something went wrong check your credentials",
        variant: "destructive"
      })
      router.refresh()
    }
  };

  useEffect(() => {
  
  },[])


  useEffect(() => {
    return () => {
      dispatch(resetNotifications({}));
    };
  }, [dispatch]);
 

  return (
    <div className="relative flex flex-col items-center justify-center max-h-[550px] lg:max-h-[616px] mt-10 py-[40px] bg-white w-full max-w-[345px] lg:max-w-[474px] mx-auto rounded-md shadow-md">
      <MdClose
        className="absolute top-3 right-3 text-lg h-[25px] w-[25px] text-[#212121]/70 cursor-pointer"
        onClick={() => {
          router.back();
          setOpenModal(false)
        }}
      />
      <div className="flex mt-[30px]">
        <h2
          className={`font-[600] text-[20px] leading-[24px]  tracking-[0.04em] text-[#212121]`}
        >
          Login In to Agristroom
        </h2>
      </div>

      {/* <div className="mt-[15px] flex flex-col gap-[10px] lg:mt-[35px] w-full max-w-[315px] lg:min-w-[394px] mx-[15px] lg:mx-[40px]">
        <div className="flex items-center cursor-pointer border border-[#2F9B4E] px-[10px] h-[48px] rounded-[4px] gap-[22px]   ">
          <FcGoogle className="h-[24px] w-[23.85px]" />
          <p className="text-[16px] text-[#2F9B4E] font-[700] leading-[22px] tracking-[0.04em]">
            Log in with Google
          </p>
        </div>
        <div className="flex items-center cursor-pointer border border-[#2F9B4E] px-[10px] h-[48px] rounded-[4px] gap-[22px]">
          <FaFacebook className="text-[#1877F2] w-[24px] h-[23.85px]" />
          <p className="text-[16px] text-[#2F9B4E] font-[700] leading-[22px] tracking-[0.04em]">
            Log in with Facebook
          </p>
        </div>
      </div>
      <div className="my-[15px] lg:my-[25px] flex   w-full items-center justify-center px-[40px] ">
        <p className=" flex items-center gap-[21px] justify-center before:content-[''] before:h-[1px] before:min-w-[75px] lg:before:min-w-[114px] before:bg-[#BFBFBF]/40 before:block after:content-[''] after:h-[1px] after:min-w-[75px] lg:after:min-w-[114px] after:bg-[#BFBFBF]/40 after:block w-full min-w-[96px] min-h-[16px] font-[500] text-[12px] leading-[16px] tracking-[0.04em] whitespace-nowrap">
          Or log in with email
        </p>
      </div> */}
      <form action="" className="w-full mt-[15px]" onSubmit={handleSubmit(submitLogin)}>
        <div className="w-full flex flex-col gap-[15px] lg:gap-[20px] max-w-[315px] lg:min-w-[394px] mx-[15px] lg:mx-[40px]">
          <div className="flex flex-col gap-[8px] w-full ">
            <label>Email Address</label>
            <Input
              type={"text"}
              className="focus-visible:ring-[#2F9B4E] w-full"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-[8px] w-full">
            <label>Password</label>
            <div className="relative flex items-center justify-between">
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
            </div>
          </div>
        </div>
        <p className="mt-[10px] text-[#2F9B4E] mx-[15px] lg:mx-[40px] text-[12px] leading-[16px] tracking-[-0.04em] font-[500] w-full max-w-[315px] lg:min-w-[394px]  text-end">
          Forgot password?
        </p>
        <div className=" mt-[35px] flex items-center justify-center">
          <button
            type="submit"
            disabled= {isSubmitting}
            className={` bg-[#2F9B4E] ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"} flex items-center justify-center gap-1 max-w-[315px] lg:min-w-[394px] py-[14px] px-[24px] h-[50px] rounded-[5px] text-white w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className}`}
          >
           {isSubmitting && <FaSpinner className="animate-spin h-8 w-8 text-white" />} Log In
          </button>
        </div>
      </form>

      <div className="mt-[15px] text-[14px] text-[#212121]/50 font-[500] leading-[19px] tracking-[-0.04em]">
        Dont have an account yet?{" "}
        <Link className="ml-[5px] font-[700] text-[#2F9B4E]" href="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
