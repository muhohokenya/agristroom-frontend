"use client"

import { createContext, useState } from "react";

export const ManagedUI = createContext();

export function ManagedUIProvider({children}){
    const [openModal, setOpenModal] = useState(false);
    const [proceed, setProceed] = useState(false)

    return (
        <ManagedUI.Provider value={{openModal, setOpenModal, proceed, setProceed}}>
            {children}
        </ManagedUI.Provider>
    )
}