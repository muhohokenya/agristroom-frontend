import React from "react";
import AccountInformation from "@/src/components/AccountInformations";
import Navbar from "@/src/components/Navbar";

interface Props {}

function Page(props: Props) {
  return (
    <div className="min-h-screen bg-zinc-200 w-full flex items-center justify-center">
      <Navbar />
      <AccountInformation />
    </div>
  );
}

export default Page;
