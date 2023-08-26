import { useAdminDashboardLayout } from '@/src/context/admin-dashboard';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { Dispatch, SetStateAction, useRef } from 'react';

interface IProps {
    openSideBar?: boolean;
    setOpenSideBar: Dispatch<SetStateAction<boolean>>;
}

const SidebarMenu = ({ openSideBar, setOpenSideBar }: IProps) => {
    const { navItems } = useAdminDashboardLayout()

    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const handleOutsideClick = (e: any) => {
        if (sidebarRef?.current && !sidebarRef?.current?.contains(e.target)) {
            setOpenSideBar(false);
        }
    };

    return (
        <div className={`
           fixed inset-0 lg:w-[200px] z-[1000] lg:static  transition mt-[77px]
          ${openSideBar
                ? "translate-x-0 transform transition-all duration-700"
                : "-translate-x-[100%] lg:translate-x-0 transform transition-all duration-700"
            }
          `}
            onClick={handleOutsideClick} >
            <div
                className={` z-0 w-[200px] transform transition-all duration-700 bg-[#DBF3D9] lg:bg-[#DBF3D9]/40 h-screen lg:h-[calc(100vh-77px)] lg:mt-0 `}
                ref={sidebarRef}
            >
                <div className={`h-full text-[#2F9B4E] `} >
                    <Menu model={[navItems.root] as MenuItem[]} className="text-[14px] !text-[#2F9B4E] mb-2 w-full " />
                    <Menu model={navItems.grouped as MenuItem[]} className="text-[14px] !text-[#2F9B4E] mb-2 w-full " />
                    <Menu model={navItems.unGrouped as MenuItem[]} className="text-[14px] !text-[#2F9B4E] " />
                </div>
            </div>
        </div>
    )
}

export { SidebarMenu };

