import React from "react";
import Modal from "@/src/components/Modal";
import AccountInformation from "@/src/components/AccountInformations";
import Stepper from "@/src/components/Stepper";

interface Props { }

function Page(props: Props) {
  const { } = props;

  return (
    <div className="absolute w-full max-w-[1440px] mx-auto flex">
      <AccountInformation />
    </div>
  );
}

export default Page;
