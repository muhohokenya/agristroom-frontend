"use client";

import { useAppDispatch } from "@/src/hooks/react-redux-hooks";
import { toast } from "@/src/hooks/use-toast";
import { logoutUserAction } from "@/src/redux/actions/auth.action";
import { Tooltip } from "primereact/tooltip";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiSolidUserCircle } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

interface IProps {
  toggleSideNav?: () => void;
}

const DashHeader = ({ toggleSideNav }: IProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const logOut = async () => {
    await dispatch(logoutUserAction());
    router.push("/");
    toast({
      description: "You have successfully logged out!",
    });
  };

  return (
    <div className="fixed top-0 w-full bg-white z-[999] h-[77px] flex justify-between items-center border-b-2 border-slate-600/20 pt-[17px] px-[15px] lg:px-[30px] ">
      <div className="flex gap-2 items-center cursor-pointer ">
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
      <div className="flex gap-5 items-center mr-[30px]">
        <ul className="hidden lg:flex items-center justify-between gap-[55px]">
          <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121] cursor-pointer tracking-[-0.04em]">
            About Us
          </li>
          <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121] cursor-pointer tracking-[-0.04em]">
            Blog
          </li>
          <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121] cursor-pointer tracking-[-0.04em]">
            Products
          </li>
          <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121] cursor-pointer tracking-[-0.04em]">
            Events
          </li>
          <li className="text-[14px] cursor-pointer group relative flex items-center justify-center rounded-full bg-[#DBF3D9] leading-[18.9px] font-[500] text-[#212121]  tracking-[-0.04em]">
            <BiSolidUserCircle className="profile text-[#2F9B4E] w-10 h-10 " />
            <span className="bg-[#DBF3D9] hidden absolute top-10 h-6 w-6 left-[15px] rotate-45"></span>
            <div className="bg-[#DBF3D9] hidden px-3 lg:hidden flex-col items-center justify-center absolute top-12 -left-[3px] rounded-sm py-1 text-[#2F9B4E] whitespace-nowrap text-[14px]">
              <div className="div bg-white h-[70px] w-[70px] flex items-center rounded-full justify-center mt-2">
                <Image
                  src="/user-2.png"
                  alt=""
                  width={66}
                  height={66}
                  className="bg-[#DBF3D9] rounded-full"
                />
              </div>
              <div className="flex flex-col items-start justify-center my-2 gap-2 ">
                <span className="pl-2 py-[2px] pr-3 text-white whitespace-nowrap text-[13px] cursor-pointer bg-[#2F9B4E] rounded-full">
                  Account
                </span>
                <span
                  onClick={() => router.push("/dashboard/profile")}
                  className="pl-2 py-[2px] pr-3 text-white whitespace-nowrap text-[13px] cursor-pointer bg-[#2F9B4E] rounded-full"
                >
                  Profile Settings
                </span>
              </div>
            </div>
          </li>
          <li
            onClick={logOut}
            className="text-[16px] bg-[#DBF3D9] py-2 px-[10px] rounded-md text-[#2F9B4E] flex items-center justify-center gap-[10px] leading-[18.9px] font-[500] cursor-pointer tracking-[-0.04em]"
          >
            Log out
            <FiLogOut />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashHeader;
