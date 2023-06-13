"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
interface Props {}

function Navbar(props: Props) {
  const {} = props;
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className="fixed top-0 w-full max-w-[1440px] mx-auto z-40  bg-transparent ">
      <div className=" w-full max-w-[1440px] mx-auto bg-[#FAFAFA]  z-50  h-[100px] flex justify-between items-center border-b-2 border-slate-600/20 pt-[17px] px-[15px] lg:px-[100px] ">
        <div className="flex gap-2 items-center ">
          <Image
            src="/menu.png"
            alt="menu"
            width={18}
            height={14}
            onClick={toggleSideNav}
            className="flex lg:hidden top-[5px] left-[3px] h-[14px] w-[18px] cursor-pointer"
          />
          <Image
            src="/logo-box.png"
            alt="Logo"
            priority
            width={44}
            height={50}
            className="object-contain w-[22.12px] h-[25.13px] md:w-[44px] md:h-[50px]"
          />
          <Image
            src="/logo.png"
            alt="Logo"
            priority
            width={123}
            height={38}
            className="object-contain w-[62.83px] h-[19.1px] md:w-[123px] md:h-[38px]"
          />
        </div>
        <div className="flex gap-5 items-center">
          <ul className="hidden lg:flex justify-between gap-3">
            <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121]">
              About Us
            </li>
            <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121]">
              Blog
            </li>
            <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121]">
              Products
            </li>
            <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121]">
              Events
            </li>
            <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121]">
              Contact us
            </li>
            <li className="text-[14px] leading-[18.9px] font-[500] text-[#2F9B4E]">
              Partner with us
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <Link
              href="/signup"
              className="flex items-center text-white justify-center py-[10px] px-[20px] gap-[10px] w-[78px] md:w-[88px] h-[33px] md:h-[39px] bg-[#2F9B4E] rounded-[3px] text-[14px] whitespace-nowrap"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="flex items-center text-[#2F9B4E] justify-center py-[10px] px-[20px] gap-[10px] w-[78px] h-[39px] bg-[#DBF3D9] rounded-[3px] text-[14px] whitespace-nowrap"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>

      {/* side nav bar */}
      <div
        className={`${
          showSideNav
            ? "-translate-x-2 transform transition-all duration-700"
            : " -translate-x-[170px] transform transition-all duration-500"
        } w-fit shadow-md lg:hidden  top-[100px]  bg-white px-[12px] py-[17px]` }
      >
        <ul className="w-full px-3 py-1 flex flex-col gap-5 h-auto">
          <li
            onClick={() => setShowSideNav(false)}
            className="cursor-pointer text-[14px] leading-[18.9px] font-[500] text-[#212121] hover:bg-[#2F9B4E] hover:text-white px-[8px] py-[5px] rounded-md"
          >
            About Us
          </li>
          <li
            onClick={() => setShowSideNav(false)}
            className="cursor-pointer text-[14px] leading-[18.9px] font-[500] text-[#212121] hover:bg-[#2F9B4E] hover:text-white px-[8px] py-[5px] rounded-md"
          >
            Blog
          </li>
          <li
            onClick={() => setShowSideNav(false)}
            className="cursor-pointer text-[14px] leading-[18.9px] font-[500] text-[#212121] hover:bg-[#2F9B4E] hover:text-white px-[8px] py-[5px] rounded-md"
          >
            Products
          </li>
          <li
            onClick={() => setShowSideNav(false)}
            className="cursor-pointer text-[14px] leading-[18.9px] font-[500] text-[#212121] hover:bg-[#2F9B4E] hover:text-white px-[8px] py-[5px] rounded-md"
          >
            Events
          </li>
          <li
            onClick={() => setShowSideNav(false)}
            className="cursor-pointer text-[14px] leading-[18.9px] font-[500] text-[#212121] hover:bg-[#2F9B4E] hover:text-white px-[8px] py-[5px] rounded-md"
          >
            Contact us
          </li>
          <li
            onClick={() => setShowSideNav(false)}
            className="cursor-pointer text-[14px] leading-[18.9px] font-[500] text-[#2F9B4E] hover:bg-[#2F9B4E] hover:text-white px-[8px] py-[5px] rounded-md"
          >
            Partner with us
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
