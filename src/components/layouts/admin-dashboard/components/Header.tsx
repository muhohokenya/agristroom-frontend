
"use client";

import { useAdminDashboardLayout } from "@/src/context/admin-dashboard";
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    const {onSidebarToggle, isSmallScreen} = useAdminDashboardLayout();
    const welcomeTextStyles = isSmallScreen ? 'text-sm' : 'text-lg'
  return (
    <div className='relative flex sm:flex-col md:flex  items-center justify-center h-[40px] border border-b-1 px-4'>
     <div className="absolute left-0 pl-4">
        <AiOutlineMenu  onClick={onSidebarToggle} className="text-2xl cursor-pointer" aria-label='Toggle Sidebar' />
     </div>
     <div className="flex justify-center">
        <div>
            <h2 className={welcomeTextStyles}>Welcome back Sammy</h2>
        </div>
     </div>
    </div>
  )
}

export default Header