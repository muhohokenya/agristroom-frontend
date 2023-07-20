import Modal from "@/src/components/Modal";
import Stepper from "@/src/components/Stepper";
import { ReactNode } from "react";
import React from "react";

type Props = {
  children: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <Modal>
      {/* <Stepper /> */}
      {children}
    </Modal>
  );
}
