import React from "react";
import Modal from "@/src/components/Modal";
import Login from "@/src/components/Login";

const Page = () => {
  return (
    <div className=" absolute w-full max-w-[1440px] mx-auto flex">
      <Modal>
        <Login />
      </Modal>
    </div>
  );
};

export default Page;
