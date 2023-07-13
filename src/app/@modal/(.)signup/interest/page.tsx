import React from "react";
import Modal from "@/src/components/Modal";
import InterestPage from "@/src/components/Interest";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className=" absolute w-full max-w-[1440px] mx-auto flex">
      <Modal>
        <InterestPage />
      </Modal>
    </div>
  );
}

export default Page;
