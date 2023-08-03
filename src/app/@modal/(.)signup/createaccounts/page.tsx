import CreateAccountAs from "@/src/components/Createaccount";
import Modal from "@/src/components/Modal";
import Stepper from "@/src/components/Stepper";
import React from "react";

interface Props { }

function Page(props: Props) {
  const { } = props;

  return (
    <div className="absolute w-full max-w-[1440px] mx-auto flex ">
      <CreateAccountAs />
    </div>
  );
}

export default Page;
