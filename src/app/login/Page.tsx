import React from "react";
import Navbar from "@/src/components/Navbar";
import Login from "@/src/components/Login";

const Page = () => {
  return (
    <div className="min-h-[100vh] bg-zinc-200 flex items-center justify-center">
      <Navbar />
      <Login />
    </div>
  );
};

export default Page;
