import React from "react";
import CreateAccountAs from "@/src/components/Createaccount";
import Navbar from "@/src/components/Navbar";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className="min-h-screen bg-zinc-200 w-full flex items-center justify-center">
      <Navbar />
      <CreateAccountAs />
    </div>
  );
}

export default Page;
