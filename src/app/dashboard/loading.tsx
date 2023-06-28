
import { PostQuestion } from "@/src/components/PostQuestion";
import DashHeader from "@/src/components/layouts/dashboard/dash-header";
import { DashboardShell } from "@/src/components/shell";
import React from "react";

export const DashboardLoading = () => {
  return (
    <DashboardShell>
      <DashHeader />
      <div className="divide-border-200 divide-y rounded-md border">
         <PostQuestion.Skeleton />
      </div>
    </DashboardShell>
  );
};

export default DashboardLoading;
