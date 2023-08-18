"use client"

import { createContext, useState } from "react";

export const UseLoginModal = createContext();

export function UseLoginModalProvider({children}){
    const [openLoginModal, setOpenLoginModal] = useState(false);

    return (
        <UseLoginModal.Provider value={{openLoginModal, setOpenLoginModal}}>
            {children}
        </UseLoginModal.Provider>
    )
}