"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  MdArrowBackIos,
  MdKeyboardArrowRight,
  MdOutlineEdit,
} from "react-icons/md";
import { jost, satoshi } from "@/src/fonts/Fonts";
import { ManagedUI } from "../hooks/useModalContext";
import { useAppDispatch, useAppSelector } from "../hooks/react-redux-hooks";
import { signUpUserAction } from "../redux/actions/auth.action";
import { UserRegisterData } from "../types/types";
import { InterestType } from "./Interest";
import { RootState } from "../redux";
import { FaSpinner } from "react-icons/fa";
import { toast } from "../hooks/use-toast";
import { useFormContext } from "../context/formstate";

const ProfileSummary = () => {
  const router = useRouter();
  const { setOpenModal } = useContext(ManagedUI);
  const dispatch = useAppDispatch();
  const {state, setState} = useFormContext();

  const error = useAppSelector((state: RootState) => state.notifications)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)


  const [userInfo, setUerInfo] = useState<UserRegisterData>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    account_id: "",
    interests: [],
  });

  useEffect(() => {
    const userRegisterData: UserRegisterData = {
      first_name: state?.first_name,
      last_name: state?.last_name,
      email: state?.email,
      phone_number: state?.phone_number,
      password: state?.password,
      account_id: state.account.id,
      interests: state?.interests,
    };

    setUerInfo(userRegisterData);
  }, [state]);

  const createUserAccount = async () => {
    const res: any = await dispatch(signUpUserAction(userInfo));
    setIsSubmitting(true)
    console.log("response", res.payload, isSubmitting);
    
    if(res?.payload?.success){
      toast({
        title: "Account Created successfully",
        description: "You can now login in with your credentials",
        variant: "primary"
      })
      setIsSubmitting(false)
      router.push("/login");
    }
    
    if(!res?.payload?.success){
      setIsSubmitting(false)
      toast({
        title: "There was a problem",
        description: error.error,
        variant: "destructive"
      })
      setOpenModal(false);
      router.push("/");
    }
  };

  console.log("summary state", state);
  


  return (
    <div className=" flex flex-col  max-h-[500px] items-start  lg:max-h-[600px] mt-10 py-[20px] lg:py-[40px] bg-white w-full  max-w-[345px] lg:min-w-[574px] mx-auto rounded-md shadow-md">
      <div className="flex  mx-[15px] lg:mx-[40px] gap-[14px] items-center ">
        <span className="text-[#212121]  cursor-pointer">
          <MdArrowBackIos onClick={() => router.push("/signup/interest")} />
        </span>
        <h2
          className={`font-[600] text-[20px] lg:text-[24px] leading-[24px]  tracking-[0.04em] text-[#212121] ${jost.className}`}
        >
          Profile Details Summary
        </h2>
      </div>

      <hr className="min-w-[315px] lg:min-w-[474px] mx-[15px] lg:mx-[40px] my-[10px] lg:my-[20px] bg-[#BFBFBF]/60 h-[1px] "></hr>

      <div className="w-full  flex flex-col items-center justify-center gap-[15px] lg:gap-[20px] max-w-[315px] lg:min-w-[474px] mx-[15px] lg:mx-[40px]">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <span
              className={`font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121]/50 ${satoshi.className}`}
            >
              Account Type
            </span>
            <span
              className={`mt-[20px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121]/50 ${satoshi.className}`}
            >
              Full Name
            </span>
            <span
              className={`mt-[20px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121]/50 ${satoshi.className}`}
            >
              Email Address
            </span>
            <span
              className={`mt-[20px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121]/50 ${satoshi.className}`}
            >
              Username
            </span>
            <span
              className={`mt-[20px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121]/50 ${satoshi.className}`}
            >
              Phone Number
            </span>
          </div>
          <div className="flex flex-col items-end ">
            <span
              className={`flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
            >
              {state?.account.name}{" "}
              <MdOutlineEdit onClick={() => router.push("/signup/createaccounts")} className="h-[16px w-[16px] !cursor-pointer !text-[#2F9B4E]" />
            </span>
            <span
              className={`mt-[20px] flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
            >
              {`${state?.first_name} ${state?.last_name}`}{" "}
              <MdOutlineEdit onClick={() => router.push("/signup/accountinformations")} className="h-[16px w-[16px] !cursor-pointer !text-[#2F9B4E]" />
            </span>
            <span
              className={`mt-[20px] flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
            >
              {state?.email}{" "}
              <MdOutlineEdit onClick={() => router.push("/signup")} className="h-[16px w-[16px] !cursor-pointer !text-[#2F9B4E]" />
            </span>
            <span
              className={`mt-[20px] flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
            >
              {state?.user_name}{" "}
              <MdOutlineEdit onClick={() => router.push("/signup")} className="h-[16px w-[16px] !cursor-pointer !text-[#2F9B4E]" />
            </span>
            <span
              className={`mt-[20px] flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
            >
              {state?.phone_number}{" "}
              <MdOutlineEdit onClick={() => router.push("/signup/accountinformations")} className="h-[16px w-[16px] !cursor-pointer !text-[#2F9B4E]" />
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center w-full  mt-[40px]">
          <span
            className={`font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121]/50 ${satoshi.className}`}
          >
            Selected Interests
          </span>
          <span
            onClick={() => router.push("/signup/interest")}
            className={` font-[500] whitespace-nowrap flex items-center text-[14px] leading-[19px] tracking-[-0.04em] text-[#2F9B4E] justify-center cursor-pointer ${satoshi.className}`}
          >
            Add Interests{" "}
            <MdKeyboardArrowRight className="w-[20px] h-[20px] pt-1" />{" "}
          </span>
        </div>

        <div className="flex gap-[6px] flex-wrap  items-center w-full  mt-[13px]">
          {state?.interests?.map((interest: InterestType, indx) => {
            return (
              <span
                key={indx}
                className={`bg-[#D7FBD7] cursor-pointer py-[5px] px-[8px] rounded-[30px] text-[14px] leading-[19px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
              >
                {interest.name}
              </span>
            );
          })}
        </div>

        <button
          onClick={() => {
            createUserAccount();
          }}
          disabled={isSubmitting}
          className={`my-[40px] ${
            isSubmitting && "cursor-not-allowed"
          } flex items-center justify-center gap-3 mx-[15px] lg:mx-[40px] bg-[#2F9B4E] min-w-[315px] lg:min-w-[474px] py-[14px] px-[24px] h-[50px] rounded-[5px] text-white w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${
            satoshi.className
          }`}
        >
          {isSubmitting && <FaSpinner className="animate-spin h-8 w-8 text-white" />} Create Account
        </button>
      </div>
    </div>
  );
};

export default ProfileSummary;
