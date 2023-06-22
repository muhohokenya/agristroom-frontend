import React from "react";
import SignUpPage from "@/src/components/SignUp";
import Navbar from "@/src/components/Navbar";

interface Props {}

function SignUp(props: Props) {
  const {} = props;

  return (
    <div className=" min-h-screen bg-zinc-200 w-full flex items-center justify-center">
      <Navbar />
      <SignUpPage />
    </div>
  );
}

export default SignUp;
