"use client"
import { PostQuestion } from "@/src/components/PostQuestion";
import DashHeader from "@/src/components/layouts/dashboard/dash-header";
import DashSidebar from "@/src/components/layouts/dashboard/dash-sidebar";
import { DashboardShell } from "@/src/components/shell";
import React, { useState } from "react";

export const DashboardLoading = () => {
  const [showSideNav, setShowSideNav] = useState(false)
  return (
    <DashboardShell>
      <DashHeader />
      <DashSidebar showSideNav={false} setShowSideNav={setShowSideNav} />
      <div className="divide-border-200 divide-y rounded-md border">
         <PostQuestion.Skeleton />
         <PostQuestion.Skeleton />
         <PostQuestion.Skeleton />
         <PostQuestion.Skeleton />
         <PostQuestion.Skeleton />
         <PostQuestion.Skeleton />
         <PostQuestion.Skeleton />
         <PostQuestion.Skeleton />
         <PostQuestion.Skeleton />
         <PostQuestion.Skeleton />
         <PostQuestion.Skeleton />
         <PostQuestion.Skeleton />
      </div>
    </DashboardShell>
  );
};

export default DashboardLoading;
