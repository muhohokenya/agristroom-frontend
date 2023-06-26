"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdArrowBackIos } from "react-icons/md";
import { jost, satoshi } from "@/src/fonts/Fonts";
import { Input } from "./ui/Input";
import {SubmitHandler, useForm} from "react-hook-form"

type Input = {
  topic: string
}

const AddTopic = () => {
  const router = useRouter();
  const [topic, setTopic] = useState("")

  const {register, handleSubmit, watch, formState: {errors}} = useForm<Input>()

  const onSubmit:SubmitHandler<Input> = (data) => {
    localStorage.setItem("topic", JSON.stringify(data))
   console.log("topic", data);
   
  }
  console.log("my topic");
  
  return (
    <div className=" flex flex-col  max-h-[262px] items-start  lg:max-h-[309px] mt-10 py-[20px] lg:py-[40px] bg-white w-full  max-w-[345px] lg:max-w-[474px] mx-auto rounded-md shadow-md">
      <div className="flex mx-[15px] lg:mx-[40px] gap-[14px] items-center ">
        <MdArrowBackIos
          onClick={() => router.push("/signup/interest")}
          className="cursor-pointer"
        />
        <h2
          className={`font-[600] text-[20px] lg:text-[24px] leading-[24px]  tracking-[0.04em] text-[#212121] ${jost.className}`}
        >
          Add a Topic
        </h2>
      </div>

      <hr className="min-w-[315px] lg:min-w-[394px] mx-[15px] lg:mx-[40px] my-[10px] lg:my-[20px] bg-[#BFBFBF]/60 h-[1px] "></hr>

     <form action="" onSubmit={handleSubmit(onSubmit)}>

      <div className="w-full flex flex-col items-center justify-center gap-[15px] lg:gap-[20px] max-w-[315px] lg:min-w-[394px] mx-[15px] lg:mx-[40px]">
        <p
          className={` w-full text-[14px] leading-[19px] font-[500] text-[#212121]/50 tracking-[-0.04em]  ${satoshi.className}`}
        >
          Topic Name
        </p>
        <div className="flex items-center  w-full ">
          <Input
           {...register("topic", {required: true})}
            placeholder="Add Topic"
            className="w-full bg-transparent  h-[48px] px-2 border border-1-[#BFBFBF]/60 outline-0 outline-[#BFBFBF]/60 rounded-[5px] bg-[#FFFFFF] focus:outline focus:outline-[#BFBFBF]/60 "
          />
        </div>
        <button
        type="submit"
          onClick={() => {
            router.push("/signup/interest");
          }}
          className={`mt-[35px] focus-visible:ring-[#2F9B4E] mx-[15px] lg:mx-[40px] bg-[#2F9B4E] max-w-[315px] lg:max-w-[394px] py-[14px] px-[24px] h-[50px] rounded-[5px] text-white w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className}`}
        >
          Add
        </button>
      </div>
     </form>
    </div>
  );
};

export default AddTopic;
