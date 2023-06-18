"use client";
import TextEditor from "@/src/components/TextEditor";
import { jost, satoshi } from "@/src/utils/Fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface Props {}

function Page(props: Props) {
  const {} = props;

  const [showSideNav, setShowSideNav] = useState(false);
  const router = useRouter()

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className=" max-w-[1200px] mx-auto bg-white min-h-[100vh] pb-[30px] ">
      <div className="flex flex-col-reverse lg:flex-row mt-[15px] lg:mt-0 items-end lg:gap-[120px] justify-between px-[30px] ">
        <div className="flex flex-col pt-[20px] pb-[21px] lg:pr-[30px] px-0 rounded-r-md ">
          <div className="flex gap-[5px]">
            <Image
              src="/user.png"
              alt="prof"
              width={18}
              height={18}
              className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]"
            />
            <div className="flex gap-[5px] items-center">
              <p
                className={`flex  items-center text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[400] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
              >
                Emmanuel - Kajiado County, Kenya{" "}
                <BsDot className="text-black h-4 w-5  text-xl" />{" "}
                <span className="text-[14px]">15/4/2023 | 2.30pm</span>
              </p>
            </div>
          </div>
          <p
            className={`text-[14px] md:text-[18px] lg:text-[26px] mt-[10px] leading-[24px] lg:leading-[42px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
          >
            My apple trees are flowers, but birds are a menace? Do shade nets
            help? Where can I get them?
          </p>
        </div>
        <button onClick={() => router.push("/dashboard")} className="h-[50px] whitespace-nowrap w-[151px] bg-[#2F9B4E] rounded-[5px] py-[14px] px-[24px] font-[700] text-[16px] leading-[22px] tracking-[-0.04em] text-[#FFFFFF]">
          Ask a Question
        </button>
      </div>

      <hr className="mt-[30px]"></hr>

      <div className="flex flex-col lg:flex-row ">
        <div className="flex flex-col">
          <div className="flex px-[10px] lg:px-[30px]">
            <div className="flex flex-col pt-[10px] pr-[8px] items-center justify-start bg-white w-[42px] lg:w-[64px] rounded-l-md">
              <MdArrowDropUp className="w-[35px] h-[25px] text-[#2F9B4E]" />

              <span
                className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
              >
                19.3k
              </span>
              <MdArrowDropDown className="w-[35px] h-[25px] text-[#2F9B4E]" />
            </div>
            <div className="flex flex-col pb-[21px] mx-[12px] lg:pr-[30px] w-full lg:max-w-[660px] bg-white rounded-r-md ">
              <p
                className={`text-[14px] lg:text-[16px] mt-[10px] leading-[28px] lg:leading-[31px] max-w[660px] font-[400] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
              >
                Lorem ipsum dolor sit amet consectetur. Laoreet commodo ac elit
                eros risus. Pellentesque commodo ultricies sagittis dolor
                tincidunt. Leo viverra a est viverra blandit eget nunc ipsum.
                Sed mi tempus orci congue. Condimentum pretium ut diam a
                eleifend ullamcorper in tincidunt. Adipiscing.
              </p>
              <Image
                src="/fruit.png"
                alt="photo"
                width={700}
                height={250}
                className=" rounded-sm mt-[21px] min-w-[314px] md:w-full lg:w-[724px] h-[200px] lg:h-[277px] object-cover"
              />
              <p
                className={`text-[14px] lg:text-[16px] mt-[10px] leading-[28px] lg:leading-[31px] max-w[660px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
              >
                Lorem ipsum dolor sit amet consectetur. Laoreet commodo ac elit
                eros risus. Pellentesque commodo ultricies sagittis dolor
                tincidunt. Leo viverra a est viverra blandit eget nunc ipsum.
                Sed mi tempus orci congue. Condimentum pretium ut diam a
                eleifend ullamcorper in tincidunt. Adipiscing.
              </p>
            </div>
          </div>
          <div className=" w-full">
            <h1
              className={`leading-[38px] px-[30px] font-[600] text-[26px] tracking-[-0.04em] text-[#212121] ${jost.className}`}
            >
              1 Answer
            </h1>
            <div className="flex flex-col">
              <div className="flex px-[30px]">
                <div className="flex flex-col pt-[10px] pr-[8px] items-center justify-start bg-white w-[42px] lg:w-[64px]">
                  <MdArrowDropUp className="w-[35px] h-[25px] text-[#2F9B4E]" />

                  <span
                    className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                  >
                    19.3k
                  </span>
                  <MdArrowDropDown className="w-[35px] h-[25px] text-[#2F9B4E]" />
                </div>
                <div className="flex flex-col pb-[21px] px-[12px] lg:pr-[30px] bg-white ">
                  <p
                    className={`text-[14px] lg:text-[16px] mt-[10px] leading-[28px] lg:leading-[31px] max-w-[660px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                  >
                    Lorem ipsum dolor sit amet consectetur. Laoreet commodo ac
                    elit eros risus. Pellentesque commodo ultricies sagittis
                    dolor tincidunt. Leo viverra a est viverra blandit eget nunc
                    ipsum. Sed mi tempus orci congue. Condimentum pretium ut
                    diam a eleifend ullamcorper in tincidunt. Adipiscing.
                  </p>

                  <div className="flex gap-[5px] mt-[10px]">
                    <Image
                      src="/user-4.png"
                      alt="prof"
                      width={44}
                      height={44}
                      className="w-[22px] lg:w-[44px] h-[22px] lg:h-[44px]"
                    />
                    <div className="flex flex-col md:flex-row items-start gap-[5px] lg:items-center justify-between w-full">
                      <p
                        className={`flex flex-col  items-start text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[400] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                      >
                        <span>Answered by</span>
                        <span className="text-[16px] text-[#2F9B4E]"> Keedlan - Chipangali, Zambia{" "}</span>
                       
                      </p>
                      <span className="text-[14px] leading-[22px] text-[#212121]/70">15/4/2023 | 2.30pm</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="mt-[30px]"></hr>

              <div className="flex flex-col items-start gap-[20px] px-[15px] lg:px-[30px] ">
                <h1
                  className={`leading-[38px] py-[15px] font-[600] text-[26px] tracking-[-0.04em] text-[#212121] ${jost.className}`}
                >
                  Your Answer
                </h1>
                <div className=" flex  items-end ">
                  <TextEditor />
                </div>
                <button
                  type="button"
                  className={`mt-[35px] bg-[#2F9B4E] ml-auto  w-[144px] h-[50px]  py-[14px] px-[24px] rounded-[5px] text-white  text-center text-[16px] leading-[21px] tracking-[-0.04em] ${satoshi.className}`}
                >
                  Post Answer
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:border-l lg:border-[#BFBFBF]/60 ">
          <div className="mt-[20px] px-[15px] flex items-center justify-start">
            <Image
              src="/airtel_add.png"
              alt=""
              width={350}
              height={250}
              className="w-[350px] lg:w-[450px] rounded-md"
            />
          </div>
          <div className="mt-[25px] border border-[#FAFAFA] shadow-sm mx-[15px] px-[5px] ">
            <h2
              className={`font-[600] py-[15px] bg-[#FAFAFA]  text-[18px] leading-[26px] tracking-[-0.03em] text-[#212121]/90 ${jost.className}`}
            >
              Blog Posts
            </h2>
            <div className="flex flex-col gap-[20px] mt-[15px] py-[10px] w-full lg:w-[300px] ">
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                Can any agronomist please share with me a nutritional program
                for apples suitable for Kilifi-south sub-county?
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                A nutritional program for apples suitable
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                
                Can any agronomist please share with me a nutritional program
                for apples suitable for Kilifi-south sub-county?
              </p>
             
            </div>
          </div>
           <div className="mt-[25px] border border-[#FAFAFA] shadow-sm mx-[15px] px-[5px] ">
            <h2
              className={`font-[600] py-[15px] bg-[#FAFAFA]  text-[18px] leading-[26px] tracking-[-0.03em] text-[#212121]/90 ${jost.className}`}
            >
              Hot Topics
            </h2>
            <div className="flex flex-col gap-[20px] mt-[15px] py-[10px] w-full lg:w-[300px] ">
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

export default Page;
