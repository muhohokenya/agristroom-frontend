"use client";

import React, { useEffect } from "react";
import InterestPage from "@/src/components/Interest";
import Navbar from "@/src/components/Navbar";
import { useAppDispatch } from "@/src/hooks/react-redux-hooks";
import { getInterests } from "@/src/redux/actions/interest.action";

interface Props {}

function Page(props: Props) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getInterest = async() => {
      let res = await dispatch(getInterests())
      console.log("interests", res);
    };
    getInterest()
  },[dispatch])
  
  return (
    <div className="min-h-[100vh] bg-zinc-200 flex items-center justify-center">
      <Navbar />
      <InterestPage />
    </div>
  );
}

export default Page;
