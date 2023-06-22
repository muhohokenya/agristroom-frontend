"use client";

import React from "react";
import InterestPage from "@/src/components/Interest";
import Navbar from "@/src/components/Navbar";

interface Props {}

function Page(props: Props) {
  return (
    <div className="min-h-[100vh] bg-zinc-200 flex items-center justify-center">
      <Navbar />
      <InterestPage />
    </div>
  );
}

export default Page;
