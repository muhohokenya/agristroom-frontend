
"use client"
import React from "react";
import { SidebarMenu } from "./components/sidebar-menu";
import { TopBar } from "./components/top-bar";
import { MAIN_CONTENT_ID, SIDEBAR_ID } from "@/src/lib/constants";
import { AdminDashboardLayoutProvider } from "@/src/context/admin-dashboard";
const AppLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <div className="fixed w-full z-10 top-0">
                <TopBar />
            </div>
            <main className="flex fixed top-14 w-full h-[100vh]">
                <div className='app-sidebar active' id={SIDEBAR_ID} data-testid='test-id__sidebar'>
                    <SidebarMenu />
                </div>
                <div className='app-content w-full' id={MAIN_CONTENT_ID}>
                    <div className="content-wrapper w-full">
                        <div className="grid w-full">
                            <div className="w-full col-12">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

const AdminDashboardLayoutContainer = ({ children }: { children: React.ReactNode }) =>  {
    return (
        <AdminDashboardLayoutProvider>
            <AppLayout>{children}</AppLayout>
        </AdminDashboardLayoutProvider>
    )
}

export { AdminDashboardLayoutContainer }