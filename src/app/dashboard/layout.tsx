"use client";
import {DashLayout} from "@/src/components/layouts/dashboard/dash-layout";
import useGetCurrentUser from "@/src/context/current-user";
import { Inter } from "next/font/google";
import React from "react";

interface Props {
  answers?: React.ReactNode;
  questions?: React.ReactNode;
  children?: React.ReactNode;
}
const inter = Inter({ subsets: ["latin"] });

function Layout(props: Props) {
  const {} = useGetCurrentUser()
  const { children } = props;

  return <DashLayout>{children}</DashLayout>;
}

export default Layout;
