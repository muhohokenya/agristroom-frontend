"use client";

import React, { useContext, useRef } from "react";
import { UseLoginModal } from "../hooks/useLoginModal";
import { createPortal } from "react-dom";

function ModalLogin(props) {
  const { children } = props;
  const { openLoginModal, setOpenLoginModal} = useContext(UseLoginModal);
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenLoginModal(false);
    }
  };

  if (openLoginModal) {
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

export default ModalLogin;
