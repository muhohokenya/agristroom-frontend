"use client"

import TextEditor from "@/src/components/TextEditor";
import { jost, satoshi } from "@/src/utils/Fonts";
import { discussions } from "@/src/utils/data";
import Image from "next/image";
import React from "react";
import { BiMessage } from "react-icons/bi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className="flex-1 h-screen px-[30px] py-[30px] ml-[312px] w-[calc(100% - 312px)] ">
      <div className=" flex items-end gap-[20px]">
        <TextEditor />
        <button
          type="button"
          className={`mt-[35px] bg-[#2F9B4E]  w-[144px] h-[50px]  py-[14px] px-[24px] rounded-[5px] text-white  text-center text-[16px] leading-[21px] tracking-[-0.04em] ${satoshi.className}`}
        >
          Post Question
        </button>
      </div>

      <div className="flex border-t border-t-[#BFBFBF]/60 mt-[30px] bg-white">
        <div className="flex flex-col ">
          <h2
            className={`font-[600]  text-[26px] leading-[42px] tracking-[-0.04em] tex-[#212121] ${jost.className}`}
          >
            Recent Community Discussions
          </h2>
          <div className="grid grid-cols-1 mt-[15px] gap-[15px] h-[500px] pb-[15px] no-scrollbar overflow-auto ">
            {discussions.map((discussion, indx) => {
              return (
                <div className="flex max-w-[713px] min-h-[167px] cursor-pointer">
                  <div className="flex flex-col pt-[20px] px-[8px] lg:px-[15px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px] rounded-l-md">
                    <MdOutlineKeyboardArrowUp className="w-[20px] h-[17px] text-[#2F9B4E]" />

                    <span
                      className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                    >
                      {discussion.likesCount}k
                    </span>
                    <MdOutlineKeyboardArrowDown className="w-[20px] h-[17px] text-[#2F9B4E]" />
                  </div>
                  <div className="flex flex-col pt-[20px] pb-[21px] px-[12px] lg:pl-[20px] lg:pr-[30px]  bg-[#FAFAFA] rounded-r-md ">
                    <div className="flex gap-[5px]">
                      <Image
                        src={discussion.authorsImage!}
                        alt="prof"
                        width={18}
                        height={18}
                        className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]"
                      />
                      <div className="flex gap-[5px] items-center ">
                        <p
                          className={`text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                        >
                          {discussion.author} - {discussion.county} County,{" "}
                          {discussion.country}
                        </p>
                        <Image
                          src={discussion.countryFlagImage!}
                          alt="flag"
                          width={21}
                          height={15}
                          className="w-[19px] lg:w-[21px] h-[14px] lg:h-[15px]"
                        />
                      </div>
                    </div>
                    <p
                      className={`text-[14px] lg:text-[18px] mt-[10px] leading-[24px] lg:leading-[31px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
                    >
                      {discussion.question}
                    </p>
                    {discussion.image !== "" &&
                    discussion.image == undefined ? (
                      <Image
                        src={discussion.image!}
                        alt="photo"
                        width={724}
                        height={277}
                        className="hidden lg:block rounded-sm mt-[21px]"
                      />
                    ) : null}
                    <div className="flex flex-row items-center justify-between my-[21px]">
                      <div className="flex gap-3">
                        <BiMessage className="w-[12.8px] lg:w-[20px] h-[12px] lg:h-[18px] text-[#212121]/70" />

                        <p
                          className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                        >
                          {discussion.resplies?.length} replies
                        </p>
                      </div>
                      <p
                        className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                      >
                        {discussion.date} | {discussion.time}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-[300px] mx-[21px] border-l border-[#BFBFBF]/60 pl-[15px]">
          <div className="mt-[20px]">
            <Image src="/pink.png" alt="" width={300} height={250} />
          </div>
          <div className="mt-[25px] ">
            <h2
              className={`font-[600] my-[15px] bg-[#FAFAFA]  text-[26px] leading-[42px] tracking-[-0.04em] tex-[#212121] ${jost.className}`}
            >
              Hot Topics
            </h2>
            <div className="flex flex-col gap-[20px] mt-[15px] py-[10px] h-52 no-scrollbar overflow-auto">
              <p
                className={`font-[500] text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>
                Can any agronomist please share with me a nutritional program
                for apples suitable for Kilifi-south sub-county?
              </p>
              <p
                className={`font-[500] text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🙋🏼‍♂️</span>A nutritional program for apples suitable
              </p>
              <p
                className={`font-[500] text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>
                Can any agronomist please share with me a nutritional program
                for apples suitable for Kilifi-south sub-county?
              </p>
              <p
                className={`font-[500] text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🙋🏼‍♂️</span>A nutritional program for apples suitable
              </p>
              <p
                className={`font-[500] text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>
                Can any agronomist please share with me a nutritional program
                for apples suitable for Kilifi-south sub-county?
              </p>
              <p
                className={`font-[500] text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>
                Can any agronomist please share with me a nutritional program
                for apples suitable for Kilifi-south sub-county?
              </p>
              <p
                className={`font-[500] text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>
                Can any agronomist please share with me a nutritional program
                for apples suitable for Kilifi-south sub-county?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
