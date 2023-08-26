"use client"
import { useAdminDashboardLayout } from "@/src/context/admin-dashboard";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const NavigationBar = ({ toggleSideNav }: { toggleSideNav: () => void }) => {
    const { onSidebarToggle } = useAdminDashboardLayout();

    return (
        <div className=' fixed top-0 w-full bg-white z-[999] flex items-center justify-between h-[77px] py-2  border border-b-1 px-4'>
            <div className=" lg:hidden">
                <AiOutlineMenu onClick={toggleSideNav} className="text-2xl lg:hidden cursor-pointer" aria-label='Toggle Sidebar' />
            </div>
            <Link href="admin-dashboard" className=' hidden app-logo-link md:flex md:items-center md:justify-center gap-2'>
                <div className="flex">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        priority
                        width={123}
                        height={38}
                        className="object-contain w-[62.83px] h-[19.1px] md:w-[123px] md:h-[38px]"
                    />
                </div>
            </Link>
            <h2 className="">Welcome back Sammy</h2>
            <div className="hidden md:flex items-center justify-center relative">
                <input type="text" className="  max-w-[450px] outline-0 rounded-md px-2 border border-[#2F9B4E] h-[30px]" placeholder="Search.." />
                <FaSearch className="text-[#2F9B4E] -ml-4 cursor-pointer text-[20px]" />
            </div>
            <FaSearch className="text-[#2F9B4E] cursor-pointer text-[20px] flex  lg:hidden" />
        </div>
    )
}

export { NavigationBar };

