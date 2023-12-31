"use client";

import { useAuthState } from "@/src/context/auth";
import { toast } from "@/src/hooks/use-toast";
import { ManagedUI } from "@/src/hooks/useModalContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Tooltip } from "primereact/tooltip";
import { useContext } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";

interface IProps {
  toggleSideNav?: () => void;
}

const DashHeader = ({ toggleSideNav }: IProps) => {
  const router = useRouter();
  const { setOpenModal } = useContext(ManagedUI);
  const { user, setUser } = useAuthState();

  const logOut = async () => {
    setUser(null)
    localStorage.clear();
    window.location.reload()
    toast({
      description: "You have successfully logged out!",
      variant: "secondary",
    });
  };



  const nameInitials = `${user?.first_name?.split('')?.[0] || ""}${user?.last_name?.split('')?.[0] || ""}`

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
            <Popover>
              <PopoverTrigger className=" cursor-pointer group relative flex items-center justify-center rounded-full  bg-[#DBF3D9] ">
                {user ? (
                  <>
                    <Tooltip target=".custom-tooltip-btn">{user !== null && user !== undefined ? `${user?.first_name} ${user?.last_name}` : '...'}</Tooltip>
                    <span className="bg-[#DBF3D9] custom-tooltip-btn flex items-center justify-center font-[500] text-sm text-[#212121] h-9 w-9 py-2 px-2 rounded-full uppercase">{nameInitials}</span>
                  </>
                ) : (
                  <BiSolidUserCircle className="profile text-[#2F9B4E] w-10 h-10 " />
                )}
              </PopoverTrigger>
              <PopoverContent className="!max-w-32 flex items-center justify-center">
                {user === null ? (
                  <div>
                    <h4 className="text-slate-900 font-bold text-[14px] ">You are logged out. Please Log in</h4>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <span className="h-16 w-16 bg-[#DBF3D9] rounded-full flex items-center justify-center">
                      <FaUser className="h-10 w-10 text-[#2F9B4E]" />
                    </span>
                    <div className="flex flex-col">
                      <h2 className="text-slate-900 font-bold text-[18px] ">{`${user?.first_name} ${user?.last_name}`}</h2>

                      <Link href="/questions/profile" className="text-slate-400 text-[15px] cursor-pointer">My Profile</Link>
                    </div>
                  </div>
                )}
              </PopoverContent>
            </Popover>

          </li>

          {user === null ? (
            <li
              onClick={() => {
                setOpenModal(true);
                router.push("/auth/login");
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
