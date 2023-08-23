import AddTopic from "@/src/components/AddTopic";
import Navbar from "@/src/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-zinc-200 w-full flex items-center justify-center">
      <Navbar />
      <AddTopic />
    </div>
  );
};

export default Page;
