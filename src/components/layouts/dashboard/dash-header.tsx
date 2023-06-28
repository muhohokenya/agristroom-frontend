"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

interface IProps{
    toggleSideNav?: ()=>void
}

const DashHeader = ({toggleSideNav}: IProps) => {
  const router = useRouter();
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
          <ul className="hidden lg:flex justify-between gap-[55px]">
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
            <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121] cursor-pointer tracking-[-0.04em]">
              Contact us
            </li>
          </ul>
        </div>
      </div>
  )
}

export default DashHeader