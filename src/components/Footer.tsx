import Image from "next/image";
import {
    AiFillInstagram,
    AiFillLinkedin,
    AiFillYoutube,
    AiOutlineTwitter,
  } from "react-icons/ai";
  import { FaFacebook } from "react-icons/fa";
import { jost, satoshi } from "../fonts/Fonts";



export const Footer = () => {
    return (
      <div className=" bg-white w-full   ">
        <div className="max-w-[1440px] w-full py-[35px] lg:py-[77px] px-[15px] lg:px-[100px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mb-[50px]  ">
          <div className="flex flex-col  justify-center">
            <div className="flex gap-2 items-center ">
              <Image
                src="/logo-box.png"
                alt="Logo"
                priority
                width={34}
                height={39}
                className="object-contain w-[22.12px] h-[25.13px] md:w-[44px] md:h-[50px]"
              />
              <Image
                src="/logo.png"
                alt="Logo"
                priority
                width={96}
                height={30}
                className="object-contain w-[62.83px] h-[19.1px] md:w-[123px] md:h-[38px]"
              />
            </div>
            <ul className="flex flex-col mt-[8px]">
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2
              className={`font-[600] mt-[40px] lg:mt-0 text[20px] leading-[24px] tracking-[-0.04em] text-[#212121]  ${jost.className}`}
            >
              Company
            </h2>
            <ul className="flex flex-col mt-[10px]  lg:mt-[15px]">
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2
              className={`font-[600] mt-[40px] lg:mt-0 text[20px] leading-[24px] tracking-[-0.04em] text-[#212121]  ${jost.className}`}
            >
              Products
            </h2>
            <ul className="flex flex-col mt-[10px]  lg:mt-[15px]">
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2
              className={`font-[600] mt-[40px] lg:mt-0 text[20px] leading-[24px] tracking-[-0.04em] text-[#212121]  ${jost.className}`}
            >
              Research
            </h2>
  
            <ul className="flex flex-col mt-[10px]  lg:mt-[15px]">
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
              <li
                className={`font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Loren Inpsum Dolor
              </li>
            </ul>
          </div>
          <div className="flex flex-col !mt-2 h-full">
            <h2
              className={`font-[600] mt-[40px] lg:mt-0 text[20px] leading-[24px] tracking-[-0.04em] text-[#212121]  ${jost.className}`}
            >
              Follow Us!
            </h2>
            <ul className="flex flex-wrap mt-[10px]  lg:mt-[15px] gap-[14px] w-fit">
              <span className="bg-[#DBF3D9] w-[32px] h-[34px] flex items-center justify-center rounded-md cursor-pointer ">
                <AiFillInstagram className={`w-[24px] h-[24px] text-[#2F9B4E]`} />
              </span>
              <span className="bg-[#DBF3D9] w-[32px] h-[34px] flex items-center justify-center rounded-md cursor-pointer ">
                <AiFillYoutube className={`w-[24px] h-[24px] text-[#2F9B4E] `} />
              </span>
              <span className="bg-[#DBF3D9] w-[32px] h-[34px] flex items-center justify-center rounded-md cursor-pointer ">
                <AiFillLinkedin className={`w-[24px] h-[24px] text-[#2F9B4E]`} />
              </span>
              <span className="bg-[#DBF3D9] w-[32px] h-[34px] flex items-center  justify-center rounded-md cursor-pointer">
                <AiOutlineTwitter
                  className={`w-[24px] h-[24px] text-[#2F9B4E]`}
                />
              </span>
              <span className="bg-[#DBF3D9] w-[32px] h-[34px] flex items-center justify-center rounded-md cursor-pointer ">
                <FaFacebook className={`w-[24px] h-[24px] text-[#2F9B4E]`} />
              </span>
            </ul>
          </div>
        </div>
        <hr></hr>
        <p
          className={`mt-[26px] font-[400] text-[16px] leading-[28px] tracking-[-0.04em] ${satoshi.className}`}
        >
          © Copyright Agistroom 2023
        </p>
        </div>
      </div>
    );
  };