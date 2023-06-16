

import React, {useContext, useRef} from 'react'
import { ManagedUI } from '../hooks/useModalContext';
import { createPortal } from 'react-dom';


function Modal(props) {
    const {children} = props;
    const {setOpenModal} = useContext(ManagedUI);
    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target){
            setOpenModal(false)
        }
    }

    return createPortal (
        <div 
        ref={modalRef}
        onClick={(e) => closeModal(e)}
        className="absolute w-[100vw] h-[100vh] z-[999] top-0 left-0 flex justify-center items-center bg-[#000000]/50 ">
            {children}
        </div>, document.body
    )
}

export default Modal
