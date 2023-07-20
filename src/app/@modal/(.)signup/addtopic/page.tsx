import React from "react";
import Modal from "@/src/components/Modal";
import AddTopic from "@/src/components/AddTopic";
import Stepper from "@/src/components/Stepper";

function Page(){
  return (
    <div className="absolute w-full max-w-[1440px] mx-auto flex">
      {/* <Modal> */}
        <AddTopic />
      {/* </Modal> */}
    </div>
  );
};

export default Page;
