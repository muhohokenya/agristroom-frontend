import React from "react";
import Modal from "@/src/components/Modal";
import ProfileSummary from "@/src/components/Profilesummary";
import Stepper from "@/src/components/Stepper";

const Page = () => {
  return (
    <div className=" absolute w-full max-w-[1440px] mx-auto flex">
      {/* <Modal> */}
        <ProfileSummary />
      {/* </Modal> */}
    </div>
  );
};

export default Page;
