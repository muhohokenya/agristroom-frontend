
"use client"
import { AdminDashboardLayoutProvider } from "@/src/context/admin-dashboard";
import React, { useState } from "react";
import { NavigationBar } from "./components/navigation-bar";
import { SidebarMenu } from "./components/sidebar-menu";


const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const [openSideBar, setOpenSideBar] = useState(false);

    const toggleSideNav = () => {
        console.log('====================================');
        console.log("toggling");
        console.log('====================================');
        setOpenSideBar(!openSideBar);
    }

    return (
        <div className=" w-full max-h-screen overflow-hidden  ">
            <NavigationBar toggleSideNav={toggleSideNav} />
            <div className="flex overflow-hidden ">
                <SidebarMenu setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
                <div className={`flex-1 h-[calc(100vh-77px)] light-scrollbar overflow-y-auto overflow-x-hidden`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

const AdminDashboardLayoutContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <AdminDashboardLayoutProvider>
            <AppLayout>{children}</AppLayout>
        </AdminDashboardLayoutProvider>
    )
}

export { AdminDashboardLayoutContainer };

