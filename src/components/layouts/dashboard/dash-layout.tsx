import React, { ReactNode, useState } from "react";
import DashHeader from "./dash-header";
import DashSidebar from "./dash-sidebar";

const DashLayout = ({ children }: { children: ReactNode }) => {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className=" w-full max-h-screen overflow-hidden">
      <DashHeader toggleSideNav={toggleSideNav} />
      <div className="flex overflow-hidden pt-[77px]">
        <DashSidebar
          setShowSideNav={setShowSideNav}
          showSideNav={showSideNav}
        />

        <div className="flex-1 h-[calc(100vh-77px)] light-scrollbar overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
