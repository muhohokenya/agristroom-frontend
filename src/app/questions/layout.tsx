
import { DashLayout } from "@/src/components/layouts/dashboard/dash-layout";
import useGetCurrentUser from "@/src/context/current-user";
import { BaseURL } from "@/src/lib/constants";
import axios from "axios";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

interface Props {
  answers?: React.ReactNode;
  questions?: React.ReactNode;
  children?: React.ReactNode;
}
const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
  const response = await axios.get(`${BaseURL}/posts`);
  let res = response.data.data?.splice(0, 3)
  let des = []
  for (let i = 0; i < res.length; i++) {
    des.push(`${res[i]?.title}-${res[i]?.description}`)
  }
  return {
    title: ` Recent community discussions - Agristroom`,
    description: `recent questions`
  };
}

function Layout(props: Props) {
  useGetCurrentUser()
  const { children } = props;

  return <DashLayout>{children}</DashLayout>;
}

export default Layout;
