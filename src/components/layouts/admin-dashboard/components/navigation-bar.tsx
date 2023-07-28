"use client"
import { Menubar, } from "primereact/menubar";
import Image from "next/image"
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useAdminDashboardLayout } from "@/src/context/admin-dashboard";

const NavigationBar = () => {
    const { onSidebarToggle, isSmallScreen } = useAdminDashboardLayout();

    return (
        <div className=' flex  items-center justify-between py-2 h-auto border border-b-1 px-4'>
            <Link href="admin-dashboard" className='app-logo-link flex items-center justify-center gap-2'>
                <div className=" pl-4">
                    <AiOutlineMenu onClick={onSidebarToggle} className="text-2xl cursor-pointer" aria-label='Toggle Sidebar' />
                </div>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    priority
                    width={123}
                    height={38}
                    className="object-contain w-[62.83px] h-[19.1px] md:w-[123px] md:h-[38px]"
                /></Link>
            <h2 className="">Welcome back Sammy</h2>
            <input type="text" className=" w-[450px] outline-0 rounded-md px-2 border border-[#2F9B4E] h-[30px]" placeholder="Search.." />
        </div>
    )
}

export { NavigationBar }