"use client";

import React, { useContext, useRef } from "react";
import { UseEditorModal } from "../hooks/useEditorModalContext";
import { createPortal } from "react-dom";
import {  useRouter } from "next/navigation"

function ModalEditor(props) {
  const { children } = props;
  const { openEditorModal, setOpenEditorModal} = useContext(UseEditorModal);
  const modalRef = useRef();
  const router = useRouter();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenEditorModal(false);
    }
  };

  if (openEditorModal) {
    return createPortal(
      <div
        ref={modalRef}
        onClick={(e) => closeModal(e)}
        className="fixed px-2 w-[100vw] min-h-screen z-[999] top-0 left-0 flex justify-center items-center bg-black/70 "
      >
        {children}
      </div>,
      document.body
    );
  }

  return <></>;
}

export default ModalEditor;
