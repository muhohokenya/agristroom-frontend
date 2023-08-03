"use client"
import { PostQuestion } from "@/src/components/PostQuestion";
import { DashboardShell } from "@/src/components/shell";
import React from "react";

export const DashboardLoading = () => {
  return (
    <DashboardShell>
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
