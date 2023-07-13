
import React from "react";
import ProfileSummary from "@/src/components/Profilesummary";
import Navbar from "@/src/components/Navbar";

const Page = () => {

  return (
    <div className="min-h-[100vh] bg-zinc-200 flex items-center justify-center">
      <Navbar />
      <ProfileSummary />
    </div>
  );
};

export default Page;
