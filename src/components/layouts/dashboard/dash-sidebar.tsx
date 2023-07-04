"use client";

import { jost } from "@/src/fonts/Fonts";
import { useAppDispatch } from "@/src/hooks/react-redux-hooks";
import { toast } from "@/src/hooks/use-toast";
import { logoutUserAction } from "@/src/redux/actions/auth.action";
import { useRouter } from "next/navigation";
import { Tooltip } from "primereact/tooltip";
import { Dispatch, SetStateAction, useRef } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaAppleAlt, FaHome, FaPlayCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface IProps {
  showSideNav?: boolean;
  setShowSideNav: Dispatch<SetStateAction<boolean>>;
}

const DashSidebar = ({ showSideNav, setShowSideNav }: IProps) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (e: any) => {
    if (sidebarRef?.current && !sidebarRef?.current?.contains(e.target)) {
      setShowSideNav(false);
    }
  };

  const dispatch = useAppDispatch();
  const router = useRouter()

  const logOut = async () => {
    await dispatch(logoutUserAction());
    router.push("/");
    toast({
      description: "You have successfully logged out!",
    });
  };

  return (
    <div
      className={`
          fixed inset-0 lg:w-[200px] lg:static z-[1000] transition
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
         w-[200px] bg-[#BFBFBF] lg:bg-[#BFBFBF]/40 h-screen lg:h-[calc(100vh-77px)] mt-[77px] lg:mt-0 pt-[30px] px-[20px]
        
        `}
        ref={sidebarRef}
      >
        <div className="flex flex-col ">
          <h4 className="text-[14px] fonr-[500] leading-[22px] tracking-[-0.08em] text-[#212121]/50">
            FEEDS
          </h4>
          <div className="flex flex-col mt-[16px] gap-[24px]">
            <span
              className={`flex gap-[16px] items-center text-[16px] leading-[22px] font-[400] tracking-[-0.02em] text-[#2F9B4E] cursor-pointer ${jost.className}`}
            >
              <FaHome />
              <span>Home</span>
            </span>
            <span className="flex gap-[16px] items-center text-[16px] leading-[22px] font-[400] tracking-[-0.02em] text-[#212121]/70 cursor-pointer">
              <FaPlayCircle className=" rotate-45" /> <span>Popular</span>
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
              <li className="text-[16px] leading-[22px] font-[400] text-[#212121]/70 tracking-[-0.02em] cursor-pointer ">
                Apple Farms
              </li>
              <li className="text-[16px] leading-[22px] font-[400] cursor-pointer text-[#212121]/70 tracking-[-0.02em]">
                Honey Crisp
              </li>
              <li className="text-[16px] leading-[22px] font-[400] cursor-pointer text-[#212121]/70 tracking-[-0.02em]">
                EverCrisp
              </li>
              <li className="text-[16px] leading-[22px] font-[400] cursor-pointer text-[#212121]/70 tracking-[-0.02em]">
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
          <li className="text-[16px] flex items-center justify-start w-fit pl-1 py-1 pr-3 rounded-md bg-[#DBF3D9] leading-[18.9px] font-[500] text-[#2F9B4E] cursor-pointer tracking-[-0.04em]">
            Profile
          </li>
          <li
            onClick={logOut}
            className="text-[16px] bg-[#DBF3D9] w-fit py-1 pl-1 pr-3 rounded-md text-[#2F9B4E] flex items-center justify-start gap-[10px] leading-[18.9px] font-[500] cursor-pointer tracking-[-0.04em]"
          >
            Log out
          </li>
        </div>
      </div>
    </div>
  );
};

export default DashSidebar;
