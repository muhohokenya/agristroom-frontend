"use client";
import Button from "@/src/components/Button";
import Image from "next/image";
import React, { useState } from "react";
import {
  MdOutlineCheckCircleOutline,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import { FaTractor, FaCheckCircle } from "react-icons/fa";
import { accountTypes } from "@/src/utils/data";

interface Props {}

function CreateAccountAs(props: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("")

  const arry:number[] = [];

  const {} = props;

  return (
    <div className="mt-[100px] w-full max-w-[1440px] mx-auto flex min-h-screen ">
      <div className=" flex flex-col items-center justify-center max-h-[528px] lg:max-h-[616px] mt-10 py-[40px] bg-white w-full max-w-[345px] lg:max-w-[638px] mx-auto rounded-md">
        <h2
          className={`font-[600] text-[20px] leading-[24px]  tracking-[0.04em] text-[#212121]`}
        >
          Create Account As
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-[24px] gap-[8px]">
          {accountTypes.map(({Icon, name}: any, indx) => {
            return (
              <div
              onClick={() => setSelectedAccount(selectedAccount === name ? "" : name)}
              key={indx}
                className={`relative flex flex-col items-center cursor-pointer ${selectedAccount === name  ? ' bg-[#F7FFF8]': ' bg-[#FFFFFF]'}  border border-[#EEEEEE] w-[182.5px] min-h-[113px] rounded-md  `}
              >
                <div className=" flex items-center justify-center ">
                  <span className={`" cursor-pointer mt-[23px] ${selectedAccount === name  ? 'text-[#2F9B4E]' : 'text-[#858585]'}  `}>

                  {Icon}
                  </span>
                </div>

                {selectedAccount === name  ? (
                  <FaCheckCircle className="absolute top-3 right-2 text-lg fill-[#2F9B4E] rounded-full text-white" />
                ) : (
                  <MdOutlineRadioButtonUnchecked className="absolute top-3 right-2 text-2xl text-[#BFBFBF]/70 " />
                )}
                <p
                  className={`my-[10px] max-w-[132px] w-full text-center ${selectedAccount === name  ? 'text-[#2F9B4E]' : 'text-[#212121]/50'}  font-[700] text-[16px] leading-[22px] tracking-[-0.04em]`}
                >
                 {name}
                </p>
              </div>
            );
          })}
        </div>
        <Button text="Continue" />
      </div>
    </div>
  );
}

export default CreateAccountAs;
