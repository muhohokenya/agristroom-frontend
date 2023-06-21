"use client"

import React, {useContext, useRef} from 'react'
import { ManagedUI } from '../hooks/useModalContext';
import { createPortal } from 'react-dom';
import {useRouter} from "next/navigation"


function Modal(props) {
    const {children} = props;
    const {setOpenModal} = useContext(ManagedUI);
    const modalRef = useRef();
    const router = useRouter();

    const closeModal = (e) => {
        if(modalRef.current === e.target){
            router.back()
            setOpenModal(false)
        }
    }

    return createPortal (
        <div 
        ref={modalRef}
        onClick={(e) => closeModal(e)}
        className="absolute w-[100vw] h-[100vh] z-[999] top-0 left-0 flex justify-center items-center bg-zinc-300 ">
            {children}
        </div>, document.body
    )
}

export default Modal
