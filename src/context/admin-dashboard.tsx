
"use client"
import { faDashboard, faFileZipper, faNetworkWired, faUsers, faUsersViewfinder, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useResizeListener } from "primereact/hooks";
import React, { useEffect } from "react";
import { MdLogout, MdSettings } from "react-icons/md";
import { BREAKPOINTS, SIDEBAR_ID } from "../lib/constants";
import { postsLinks, usersLinks } from "../lib/data/data";
import { isWindowReady } from "../lib/utils";
import { AdminDashboardContext, PostNavLink, RawMenuItem, UserNavLink } from "./types";

const AdminDashboardLayoutContext = React.createContext<AdminDashboardContext>(null as unknown as AdminDashboardContext);

const useAdminDashboardLayout = () => {
    return React.useContext(AdminDashboardLayoutContext);
}

const buildUser = (usersLinks: UserNavLink[]) => {
    return usersLinks.map(user => {
        return {
            name: user.name,
            path: `admin-dashboard/${user.path}`
        }
    })
}

const buildPost = (postsLinks: PostNavLink[]) => {
    return postsLinks.map(post => {
        return {
            name: post.name,
            path: `admin-dashboard/${post.path}`
        }
    })
}


const unGroupedNavItems: RawMenuItem[] = [
    { name: "Posts Management", icon: <FontAwesomeIcon icon={faFileZipper} className="text-[#2F9B4E] text-[14px mr-2 max-h-5 max-w-[20px]" />, path: "" },
    { name: "Users Management", icon: <FontAwesomeIcon icon={faUsersViewfinder} className="text-[#2F9B4E] text-[14px mr-2 max-h-5 max-w-[20px]" />, path: "admin-dashboard/settings" },
    { name: "Settings", icon: <MdSettings className="text-[#2F9B4E] text-[14px mr-2 max-h-5 max-w-[20px]" />, path: "admin-dashboard/settings" },
    { name: "Log Out", icon: <MdLogout className="text-[#2F9B4E] text-[14px mr-2 max-h-5 max-w-[20px]" />, path: "" },

]

const AdminDashboardLayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    const buildMenuItem = (rawItem: RawMenuItem) => {
        return {
            label: rawItem.name,
            icon: rawItem.icon ? rawItem.icon : undefined,
            command: () => {
                void router.push(rawItem.path)
            }
        }
    }

    const onSidebarToggle = (): void => {
        if (isWindowReady) {
            const sidebarElement = document.getElementById(SIDEBAR_ID);
            sidebarElement !== null ? sidebarElement.classList.toggle('active') : console.warn(`Element with id = ${SIDEBAR_ID} not found!`);

        }
    }

    const groupedNavItems: AdminDashboardContext['navItems']['grouped'] = [
        {
            label: <><FontAwesomeIcon icon={faUsers} className="mr-2 text-[#2F9B4E] max-h-5 max-w-[20px]" /><span className="text-[14px] text-[#2F9B4E]">Users</span></>,
            items: buildUser(usersLinks).map(buildMenuItem)
        },
        {
            label: <><FontAwesomeIcon icon={faNetworkWired} className="mr-2 text-[#2F9B4E] max-h-5 max-w-[20px]" /><span className="text-[14px] text-[#2F9B4E]">Posts</span></>,
            items: buildPost(postsLinks).map(buildMenuItem)
        },
    ]

    let navItems: AdminDashboardContext['navItems'] = {
        root: {
            label: <><FontAwesomeIcon icon={faDashboard} className="mr-2 max-h-5 max-w-[20px] text-[#2F9B4E]" /><span className="text-[15px] text-[#2F9B4E]">Dashboard</span></>,
            command: () => {
                void router.push("admin-dashboard")
            }
        },
        grouped: groupedNavItems,
        unGrouped: unGroupedNavItems.map(buildMenuItem)
    }

    const [resizeEventData, setResizeEventData] = React.useState({ width: 0, height: 0 });
    const isSmallScreen = resizeEventData.width < BREAKPOINTS.sm
    const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
        listener: (event: Event) => {
            const currentEventTarget = event.currentTarget as Window;
            setResizeEventData({
                width: currentEventTarget.innerWidth,
                height: currentEventTarget.innerHeight
            })
        }
    })

    useEffect(() => {
        setResizeEventData({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    useEffect(() => {
        bindWindowResizeListener();

        return () =>
            unbindWindowResizeListener()
    }, [bindWindowResizeListener, unbindWindowResizeListener])

    const contextValue = React.useMemo(() => {
        return {
            onSidebarToggle,
            isSmallScreen,
            navItems
        }
    }, [isSmallScreen, navItems])

    return (
        <AdminDashboardLayoutContext.Provider value={contextValue}>
            {children}
        </AdminDashboardLayoutContext.Provider>
    )
}

export { AdminDashboardLayoutProvider, useAdminDashboardLayout };
export type { AdminDashboardContext };


