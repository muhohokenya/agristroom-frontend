import React from 'react';
import {Menu} from "primereact/menu";
import {MenuItem} from "primereact/menuitem";
import { useAdminDashboardLayout } from '@/src/context/admin-dashboard';

const menuStyles = "w-full mb-2"

const SidebarMenu = () => {
    const { navItems } = useAdminDashboardLayout()
    return (
        <div data-testid='test-id__sidebar-menu' className="w-full h-full bg-[#DBF3D9] px-2 text-[#2F9B4E] py-1">
            <Menu model={[navItems.root] as MenuItem[]} className="text-[14px] !text-[#2F9B4E] mb-2 w-full " />
            <Menu model={navItems.grouped as MenuItem[]} className="text-[14px] !text-[#2F9B4E] mb-2 w-full " />
            <Menu model={navItems.unGrouped as MenuItem[]}  className="text-[14px] !text-[#2F9B4E] "  />
        </div>

    )
}

export { SidebarMenu }