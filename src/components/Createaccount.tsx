"use client";

import React, { useState } from "react";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { accountTypes } from "@/src/lib/data/data";
import { satoshi } from "@/src/fonts/Fonts";
import { Account } from "../types/types";

interface Props {}

function CreateAccountAs(props: Props) {
  const router = useRouter();
  const [selectedAccount, setSelectedAccount] = useState<Account>({
    name: "",
    id: "",
  });

  console.log("<selected account", JSON.stringify({id: selectedAccount.id, name: selectedAccount.name}));
  

  return (
      <div className=" relative flex flex-col items-center justify-center max-h-[638px] lg:max-h-[565px] mt-10 py-[40px] bg-white w-full max-w-[400px] lg:max-w-[638px] mx-auto rounded-md shadow-md">
        <h2
          className={`font-[600] text-[20px] leading-[24px]  tracking-[0.04em] text-[#212121]`}
        >
          Create Account As
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-[24px] gap-[8px]">
          {accountTypes.map((accnt: any, indx) => {
            
            return (
              <div
                onClick={() =>
                    setSelectedAccount(selectedAccount === accnt ? {} : accnt)
                }
                key={indx}
                className={`relative flex flex-col items-center cursor-pointer ${
                  selectedAccount === accnt ? " bg-[#F7FFF8]" : " bg-[#FFFFFF]"
                }  border border-[#EEEEEE] w-[152px] lg:w-[182.5px] min-h-[113px] rounded-md  `}
              >
                <div className=" flex items-center justify-center ">
                  <span
                    className={`" cursor-pointer mt-[23px] ${
                      selectedAccount === accnt
                        ? "text-[#2F9B4E]"
                        : "text-[#858585]"
                    }  `}
                  >
                    {accnt.Icon}
                  </span>
                </div>

                {selectedAccount === accnt ? (
                  <FaCheckCircle className="absolute top-3 right-2 text-lg fill-[#2F9B4E] rounded-full text-white" />
                ) : (
                  <MdOutlineRadioButtonUnchecked className="absolute top-3 right-2 text-2xl text-[#BFBFBF]/70 " />
                )}
                <p
                  className={`my-[10px] max-w-[132px] w-full text-center ${
                    selectedAccount === accnt
                      ? "text-[#2F9B4E]"
                      : "text-[#212121]/50"
                  }  font-[700] text-[16px] leading-[22px] tracking-[-0.04em]`}
                >
                  {accnt.name}
                </p>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => {
            router.push("/signup/accountinformations")
           localStorage.setItem("selectedAcount",JSON.stringify({id: selectedAccount.id, name: selectedAccount.name}));
          }
          }
          className={`mt-[35px] bg-[#2F9B4E] max-w-[315px] lg:max-w-[560px] py-[14px] px-[24px] h-[50px] rounded-[5px] text-white w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className}`}
        >
          Continue
        </button>
      </div>
  );
}

export default CreateAccountAs;
