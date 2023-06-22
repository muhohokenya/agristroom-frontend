
import React from "react";
import Modal from "@/src/components/Modal";
import SignUp from "@/src/components/SignUp";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className="absolute w-full max-w-[1440px] mx-auto flex">
        <Modal>
          <SignUp />
        </Modal>
    </div>
  );
}

export default Page;
