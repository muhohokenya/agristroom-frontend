"use client";

import { Dispatch, useRef } from "react";
import { FaAppleAlt, FaHome, FaPlayCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface IProps {
  showSideNav: boolean;
  setShowSideNav: Dispatch<boolean>;
}

const DashSidebar = ({ showSideNav, setShowSideNav }: IProps) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (e: any) => {
    if (sidebarRef?.current && !sidebarRef?.current?.contains(e.target)) {
      setShowSideNav(false);
    }
  };

  return (
    <div
      className={`
          fixed inset-0 lg:w-[312px] lg:static z-[1000] transition
          ${
            showSideNav
              ? "translate-x-0 transform transition-all duration-700"
              : "-translate-x-[100%] lg:translate-x-0 transform transition-all duration-700"
          }
          `}
      onClick={handleOutsideClick}
    >
      <div
        className={`
         w-[312px] bg-[#BFBFBF] lg:bg-[#BFBFBF]/40 h-screen lg:h-[calc(100vh-77px)] mt-[77px] lg:mt-0 pt-[30px] px-[30px]
        
        `}
        ref={sidebarRef}
      >
        <div className="flex flex-col ">
          <h4 className="text-[14px] fonr-[500] leading-[22px] tracking-[-0.08em] text-[#212121]/50">
            FEEDS
          </h4>
          <div className="flex flex-col mt-[16px] gap-[24px]">
            <span className="flex gap-[16px] items-center text-[16px] leading-[22px] font-[700] tracking-[-0.02em] text-[#2F9B4E] cursor-pointer">
              <FaHome /> Home
            </span>
            <span className="flex gap-[16px] items-center text-[16px] leading-[22px] font-[500] tracking-[-0.02em] text-[#212121]/70 cursor-pointer">
              <FaPlayCircle className=" rotate-45" /> Popular
            </span>
          </div>
        </div>
        <div className="mt-[37px] ">
          <h4 className="mt-[16px] text-[14px] fonr-[500] leading-[22px] tracking-[-0.08em] text-[#212121]/50 uppercase">
            Topics
          </h4>
          <div className="flex items-start ju gap-[16px] mt-[15px]">
            <FaAppleAlt />
            <ul className="flex flex-col gap-[16px]">
              <li className="text-[16px] leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.02em] cursor-pointer ">
                Apple Farms
              </li>
              <li className="text-[16px] leading-[22px] font-[500] cursor-pointer text-[#212121]/70 tracking-[-0.02em]">
                Honey Crisp
              </li>
              <li className="text-[16px] leading-[22px] font-[500] cursor-pointer text-[#212121]/70 tracking-[-0.02em]">
                EverCrisp
              </li>
              <li className="text-[16px] leading-[22px] font-[500] cursor-pointer text-[#212121]/70 tracking-[-0.02em]">
                Lady Alice
              </li>
            </ul>
            <MdOutlineKeyboardArrowDown className="ml-auto h-[26px] w-[20px] cursor-pointer" />
            {/* <MdOutlineKeyboardArrowUp className="ml-auto h-[26px] w-[20px]" /> */}
          </div>
        </div>
        <div className="flex flex-col gap-[16px] mt-[37px] border-t border-slate-400 lg:hidden">
          <span className="flex gap-[16px] items-center mt-[10px] cursor-pointer text-[16px] leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.02em]">
            About Us
          </span>
          <span className="flex gap-[16px] items-center cursor-pointer text-[16px] leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.02em]">
            Blog
          </span>
          <span className="flex gap-[16px] items-center cursor-pointer text-[16px] leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.02em]">
            Products
          </span>
          <span className="flex gap-[16px] items-center cursor-pointer text-[16px] leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.02em]">
            Events
          </span>
          <span className="flex gap-[16px] items-center cursor-pointer text-[16px] leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.02em]">
            Contact us
          </span>
          <span className="flex gap-[16px] items-center cursor-pointer text-[16px] leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.02em]">
            Log out
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashSidebar;
