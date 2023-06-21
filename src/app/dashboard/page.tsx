"use client";


import TextEditor from "@/src/components/ui/TextEditor";
import { jost, satoshi } from "@/src/fonts/Fonts";
import { discussions } from "@/src/lib/data/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BiMessage } from "react-icons/bi";
import {
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";

interface Props {}

function Dashboard(props: Props) {
  const router = useRouter();

  return (
    <div className="px-[15px] py-[30px]  max-w-[1200px] mx-auto bg-white ">
      <div className="flex flex-col lg:flex-row items-end gap-[20px]">
        <div className=" flex   items-end ">
          <TextEditor />
        </div>
        <button
          type="button"
          className={`mt-[35px] bg-[#2F9B4E]  w-[144px] h-[50px]  py-[14px] px-[24px] rounded-[5px] text-white  text-center text-[16px] leading-[21px] tracking-[-0.04em] ${satoshi.className}`}
        >
          Post Question
        </button>
      </div>

      <div className="flex bg-white flex-col justify-between lg:flex-row x border-t border-t-[#BFBFBF]/60 mt-[30px] ">
        <div className="flex flex-col ">
          <h2
            className={`font-[600]  text-[26px] leading-[42px] tracking-[-0.04em] tex-[#212121] ${jost.className}`}
          >
            Recent Community Discussions
          </h2>
          <div className="grid grid-cols-1 mt-[15px] gap-[15px] h-screen pb-[15px] no-scrollbar overflow-auto w-full  ">
            {discussions.map((discussion, indx) => {
              return (
                <div
                  key={indx}
                  onClick={() => router.push("/dashboard/answers")}
                  className="flex min-w-[350px] md:max-w-full lg:max-w-[713px] min-h-[167px] lg:min-h-[220px] xl:min-h-[167px] cursor-pointer lg:px-0 "
                >
                  <div className="flex flex-col pt-[20px] px-[8px] lg:px-[15px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px] rounded-l-md">
                    <MdArrowDropUp className="w-[35px] h-[25px] text-[#2F9B4E]" />

                    <span
                      className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                    >
                      {discussion.likesCount}k
                    </span>
                    <MdArrowDropDown className="w-[35px] h-[25px] text-[#2F9B4E]" />
                  </div>
                  <div className="flex w-full flex-col pt-[20px] pb-[21px] px-[12px] lg:pl-[20px] lg:pr-[30px]  bg-[#FAFAFA] rounded-r-md ">
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
                          className={`text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[400] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
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
                    <div className="flex flex-row items-center justify-between my-[21px] ">
                      <div className="flex items-center gap-3">
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

        <hr className="border-l border-[#BFBFBF]/60 lg:hidden"></hr>

        <div className="min-w-[300px] mx-[15px] lg:mx-[21px]   lg:border-l lg:border-[#BFBFBF]/60 lg:pl-[15px]">
          <div className="mt-[20px]">
            <Image
              src="/airtel_add.png"
              alt=""
              width={350}
              height={250}
              className="lg:w-[350px]"
            />
          </div>
          <div className="mt-[25px] border border-[#FAFAFA] shadow-sm ">
            <h2
              className={`font-[600] py-[15px] bg-[#FAFAFA]  text-[18px] leading-[26px] tracking-[-0.03em] text-[#212121]/90 ${jost.className}`}
            >
              Hot Topics
            </h2>
            <div className="flex flex-col gap-[20px] mt-[15px] py-[10px] w-[300px] ">
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>
                Can any agronomist please share with me a nutritional program
                for apples suitable for Kilifi-south sub-county?
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🙋🏼‍♂️</span>A nutritional program for apples suitable
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>
                Can any agronomist please share with me a nutritional program
                for apples suitable for Kilifi-south sub-county?
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🙋🏼‍♂️</span>A nutritional program for apples suitable
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>
                Can any agronomist please share with me a nutritional program
                for apples suitable for Kilifi-south sub-county?
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>
                A nutritional program for apples suitable
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>
                A nutritional program for apples suitable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
