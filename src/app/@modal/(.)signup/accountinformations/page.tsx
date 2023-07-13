import React from "react";
import Modal from "@/src/components/Modal";
import AccountInformation from "@/src/components/AccountInformations";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className="absolute w-full max-w-[1440px] mx-auto flex">
      <Modal>
        <AccountInformation />
      </Modal>
    </div>
  );
}

export default Page;
