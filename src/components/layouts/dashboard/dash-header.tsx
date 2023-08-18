"use client";

import React, { useContext } from "react";
import { useAppDispatch, useAppSelector } from "@/src/hooks/react-redux-hooks";
import { toast } from "@/src/hooks/use-toast";
import {
  getCurrentUser,
  logoutUserAction,
} from "@/src/redux/actions/auth.action";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiSolidUserCircle } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { ManagedUI } from "@/src/hooks/useModalContext";
import { RootState } from "@/src/redux";
import { Tooltip } from "primereact/tooltip";
import useGetCurrentUser from "@/src/context/current-user";
import { AuthStateContext } from "@/src/context/auth";

interface IProps {
  toggleSideNav?: () => void;
}

const DashHeader = ({ toggleSideNav }: IProps) => {
  const router = useRouter();
  const { setOpenModal } = useContext(ManagedUI);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthStateContext);
  const state = useAppSelector((state: RootState) => state.currentUser);
  const { user } = useGetCurrentUser()
  const dispatch = useAppDispatch();

  const logOut = async () => {
    const res: any = await dispatch(logoutUserAction());
    if (res.payload?.success) {
      setIsLoggedIn(false)
      await dispatch(getCurrentUser())
      window.location.reload();
      return true;
    }
    toast({
      description: "You have successfully logged out!",
      variant: "secondary",
    });
  };

  const nameInitials = `${state?.user?.first_name?.split('')[0]}${state?.user?.last_name?.split('')[0]}`

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
          <li className=" cursor-pointer group relative flex items-center justify-center rounded-full  bg-[#DBF3D9] ">
            {state?.user ? (
              <>
                <Tooltip target=".custom-tooltip-btn">{state?.user !== null && state?.user !== undefined ? `${state?.user?.first_name} ${state?.user?.last_name}` : '...'}</Tooltip>
                <span className="bg-[#DBF3D9] custom-tooltip-btn flex items-center justify-center font-[500] text-sm text-[#212121] h-9 w-9 py-2 px-2 rounded-full">{nameInitials}</span>
              </>
            ) : (
              <BiSolidUserCircle className="profile text-[#2F9B4E] w-10 h-10 " />
            )}
          </li>

          {state?.user === null && !isLoggedIn ? (
            <li
              onClick={() => {
                setOpenModal(true);
                router.push("/login");
              }}
              className="text-[16px] bg-[#DBF3D9] py-2 px-[10px] rounded-md text-[#2F9B4E] flex items-center justify-center gap-[10px] leading-[18.9px] font-[500] cursor-pointer tracking-[-0.04em]"
            >
              Log In
            </li>
          ) : (
            <li
              onClick={logOut}
              className="text-[16px] bg-[#DBF3D9] py-2 px-[10px] rounded-md text-[#2F9B4E] flex items-center justify-center gap-[10px] leading-[18.9px] font-[500] cursor-pointer tracking-[-0.04em]"
            >
              Log out
              <FiLogOut />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashHeader;
