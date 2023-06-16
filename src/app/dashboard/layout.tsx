"use client";
import DashLayout from "@/src/components/layouts/dashboard/dash-layout";
import { Inter } from "next/font/google";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

interface Props {
  answers?: React.ReactNode;
  questions?: React.ReactNode;
  children?: React.ReactNode;
}
const inter = Inter({ subsets: ["latin"] });

function Layout(props: Props) {
  const { children } = props;

  return <DashLayout>{children}</DashLayout>;
}

export default Layout;
