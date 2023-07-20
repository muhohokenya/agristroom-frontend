"use client";

import { PostQuestion } from "@/src/components/PostQuestion";
import { DashboardShell } from "@/src/components/shell";
import React from "react";

interface Props {}

function Dashboard(props: Props) {

  return (
    <div className="px-[15px] py-[30px]  max-w-[1200px] mx-auto bg-white ">
      <DashboardShell>
        <PostQuestion />
      </DashboardShell>
    </div>
  );
}

export default Dashboard;
