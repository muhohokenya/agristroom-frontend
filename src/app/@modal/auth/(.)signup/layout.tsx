import Modal from "@/src/components/modals/Modal";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <Modal>
      {children}
    </Modal>
  );
}
