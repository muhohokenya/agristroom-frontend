"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { ManagedUI } from "../hooks/useModalContext";
import { useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs";
interface Props {}

function Navbar(props: Props) {
  const {} = props;
  const router = useRouter();
  const [showSideNav, setShowSideNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const { openModal, setOpenModal } = useContext(ManagedUI);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  const toggleSearch = () => {
    console.log('====================================');
    console.log("clicking the change button");
    console.log('====================================');
    setOpenSearch(!openSearch);
  };

  return (
    <div className="border-b-2 fixed top-0 inset-x-0 z-40  border-slate-600/20 bg-[#FAFAFA] h-[100px]">
      <div className=" w-full max-w-[1440px] mx-auto ">
        <div className=" w-full max-w-[1440px] mx-auto  z-50  h-[100px] flex justify-between items-center  pt-[17px] px-[15px] lg:px-[100px] ">
          <div className="flex gap-2 items-center ">
            <Image
              src="/menu.png"
              alt="menu"
              width={18}
              height={14}
              onClick={toggleSideNav}
              className="flex lg:hidden top-[5px] left-[3px] h-[14px] w-[18px] cursor-pointer"
            />
            <div
              className="flex items-center gap-2 ml-1 cursor-pointer"
              onClick={() => router.push("/")}
            >
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
              <div
                onClick={toggleSearch}
                className="flex py-1 cursor-pointer bg-[#2F9B4E] items-center justify-center rounded-lg px-2 w-12 h-[39px]"
              >
                <BsSearch className=" text-white h-9 w-9" />
              </div>
              <Link
                onClick={() => setOpenModal(true)}
                href="/signup"
                className="flex items-center text-white justify-center py-[10px] px-[20px] gap-[10px] w-[78px] md:w-[88px] h-[33px] md:h-[39px] bg-[#2F9B4E] rounded-[3px] text-[14px] whitespace-nowrap"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                onClick={() => setOpenModal(true)}
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
          } w-fit shadow-md lg:hidden  top-[100px]  bg-[#FAFAFA] px-[12px] py-[17px]`}
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

        <div className={`bg-[#DBF3D9] rounded-md  py-2 w-full mt-[200px] ${openSearch ? " -translate-y-[180px] transform transition-all duration-700" : "-translate-y-[400px] transform transition-all duration-700"}`}>
          <div className="flex w-full items-center justify-center my-2">
          <input className="w-[800px] px-2 h-[40px] outline-0 ring-0 border border-[#2F9B4E] focus:outline-0 focus:ring-0 rounded-l-[3px]" />
          <button className="flex items-center text-white justify-center py-[10px] px-[20px] gap-[10px] w-[78px] md:w-[88px] h-[40px] bg-[#2F9B4E] rounded-r-[3px] text-[14px] whitespace-nowrap">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
