"use client";
import React, {useContext, useState} from "react";
import { useRouter } from "next/navigation";
import {
  MdArrowBackIos,
  MdKeyboardArrowRight,
  MdOutlineEdit,
} from "react-icons/md";
import { jost, satoshi } from "@/src/fonts/Fonts";
import { ManagedUI } from "../hooks/useModalContext";
import { AiOutlineReload } from "react-icons/ai";
import { useAppDispatch } from "../hooks/react-redux-hooks";
import { signUpUserAction } from "../redux/actions/auth.action";
import { UserRegisterData } from "../types/types";

const ProfileSummary = () => {
  const router = useRouter();
  const { setOpenModal } = useContext(ManagedUI);
  const dispatch = useAppDispatch();
  const userData:any =  JSON.parse(localStorage.getItem("user_data")!);
  const selectedAccount:any =  localStorage.getItem("selectedAcount")!;
  const userInfo:any =  JSON.parse(localStorage.getItem("user_info")!);
  const interests:any =  JSON.parse(localStorage.getItem("interest")!);

  const [loading, setLoading] = useState(false);
  
  const obj = {
    accountType: selectedAccount,
    fullName: `${userInfo?.firstName} ${userInfo?.lastName}`,
    email: userData?.email,
    password: userData?.password,
    userName: userInfo?.userName,
    phone: "+254704078652",
    interests: interests
  }
  
  const userRegisterData:UserRegisterData = {
    first_name: userInfo?.firstName,
    last_name: userInfo?.lastName,
    email: userData?.email,
    phone_number: "+254704078652",
    password: userData?.password
  }
  console.log("userData",  userRegisterData, selectedAccount);

  const createUserAccount = async() => {
    setLoading(true)
    console.log("registering user");
    const res = await dispatch(signUpUserAction(userRegisterData))
    console.log("res", res);
    
    setLoading(false)
  }
  

  

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
                {obj.accountType}{" "}
                <MdOutlineEdit className="h-[16px w-[16px] !cursor-pointer" />
              </span>
              <span
                className={`mt-[20px] flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
              >
                {obj.fullName}{" "}
                <MdOutlineEdit className="h-[16px w-[16px] !cursor-pointer" />
              </span>
              <span
                className={`mt-[20px] flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
              >
                {obj.email}{" "}
                <MdOutlineEdit className="h-[16px w-[16px] !cursor-pointer" />
              </span>
              <span
                className={`mt-[20px] flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
              >
                {obj.userName}{" "}
                <MdOutlineEdit className="h-[16px w-[16px] !cursor-pointer" />
              </span>
              <span
                className={`mt-[20px] flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
              >
                {obj.phone}{" "}
                <MdOutlineEdit className="h-[16px w-[16px] !cursor-pointer" />
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
            {
              obj.interests.map((interest: any, indx: React.Key | null | undefined) => {
                return (
                  <span
                  key={indx}
                  className={`bg-[#D7FBD7] cursor-pointer py-[5px] px-[8px] rounded-[30px] text-[14px] leading-[19px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                >
                  {interest}
                </span>
                )
              })
            }
           
          </div>

          <button
            onClick={() => {
              createUserAccount()
                setOpenModal(false)
                router.push("/dashboard")
            }}
            disabled={loading}
            className={`my-[40px] ${loading && 'cursor-not-allowed'} flex items-center justify-center gap-3 mx-[15px] lg:mx-[40px] bg-[#2F9B4E] min-w-[315px] lg:min-w-[474px] py-[14px] px-[24px] h-[50px] rounded-[5px] text-white w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className}`}
          >
           {loading ? (<AiOutlineReload className="spin h-8 w-9" />) : "Create Account"} 
            
          </button>
        </div>
      </div>
  );
};

export default ProfileSummary;
