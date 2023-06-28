"use client";

import { PostQuestion } from "@/src/components/PostQuestion";
import { DashboardShell } from "@/src/components/shell";
import { useAppSelector } from "@/src/hooks/react-redux-hooks";
import { RootState } from "@/src/redux";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {}

 function Dashboard(props: Props) {
  const result = useAppSelector((state: RootState) => state.auth);
  const error = useAppSelector((state: RootState) => state.notifications);
  console.log("result", result, error);

  return (
    <div className="px-[15px] py-[30px]  max-w-[1200px] mx-auto bg-white ">
      <DashboardShell>
        <PostQuestion />
      </DashboardShell>
    </div>
  );
}

export default Dashboard
