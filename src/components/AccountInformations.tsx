"use client";

import { MdArrowBackIos } from "react-icons/md";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { ManagedUI } from "@/src/hooks/useModalContext";
import { jost, satoshi } from "@/src/fonts/Fonts";
import {SubmitHandler, useForm} from "react-hook-form"
import { Input } from "./ui/Input";
import { PhoneInput } from "./ui/PhoneInput";

interface Props {}

type Inputs = {
  firstName: string;
  lastName: string;
  userName: string;
  phone: string
}

function AccountInformation(props: Props) {
  const router = useRouter();
  const { setOpenModal } = useContext(ManagedUI);

  const {
    register, handleSubmit, watch, formState: {errors}
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    localStorage.setItem("user_info", JSON.stringify(data))
    console.log("user ata", data);
    
  }

  console.log("user data");
  

  return (
    <div className=" flex flex-col  max-h-[600px] items-center  lg:max-h-[594px] mt-10 py-[40px] bg-white w-full  max-w-[345px] lg:max-w-[594px] mx-auto rounded-md shadow-md">
      <div className="flex mx-[15px] lg:mx-[40px] gap-[14px] items-center ">
        <MdArrowBackIos
          className=" cursor-pointer"
          onClick={() => router.push("/signup/createaccounts")}
        />
        <h2
          className={`font-[600] text-[20px] lg:text-[24px] leading-[24px]  tracking-[0.04em] text-[#212121] ${jost.className}`}
        >
          Kindly fill in the following information
        </h2>
      </div>

      <hr className="my-[15px] lg:my-[20px] min-w-[315px] lg:min-w-[494px] bg-[#BFBFBF]/60 h-[1px] "></hr>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="w-full flex flex-col gap-[15px] lg:gap-[20px] max-w-[315px] lg:min-w-[494px] mx-[15px] lg:mx-[40px]">
          <div className="flex flex-col gap-[8px] w-full ">
            <label>First Name</label>
            <Input
            {...register("firstName", {required: true})}
              type="text"
              className="w-full h-[48px] px-2 border border-1-[#BFBFBF]/60 outline-0 outline-[#BFBFBF]/60 rounded-[5px] bg-[#FFFFFF] focus:outline focus:outline-[#BFBFBF]/60 "
            />
          </div>
          <div className="flex flex-col gap-[8px] w-full">
            <label>Last Name</label>
            <div className=" flex items-center">
              <Input
               {...register("lastName", {required: true})}
                type="text"
                className="  w-full  h-[48px] px-2 border border-1-[#BFBFBF]/60 outline-0 outline-[#BFBFBF]/60 rounded-[5px]  focus:outline focus:outline-[#BFBFBF]/60 "
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] w-full">
            <label>User Name</label>
            <div className=" flex items-center">
              <Input 
                {...register("userName", {required: true})}
                type="text"
                className="  w-full  h-[48px] px-2 border border-1-[#BFBFBF]/60 outline-0 outline-[#BFBFBF]/60 rounded-[5px]  focus:outline focus:outline-[#BFBFBF]/60 "
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] w-full">
            <label>Phone Number</label>
            <div className=" flex items-center gap-[8px]">
              <PhoneInput {...register("phone")}   />
            </div>
          </div>

          <button
          type="submit"
          onClick={() => {
            setOpenModal(true);
            router.push("/signup/interest");
          }}
          className={`my-[20px] bg-[#2F9B4E] w-full py-[14px]  h-[50px] rounded-[5px] text-white  text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className}`}
        >
          Continue
        </button>
        </div>
      </form>
    </div>
  );
}

export default AccountInformation;
