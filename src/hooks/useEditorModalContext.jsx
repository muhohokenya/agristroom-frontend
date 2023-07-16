"use client"

import { createContext, useState } from "react";

export const UseEditorModal = createContext();

export function UseEditorModalProvider({children}){
    const [openEditorModal, setOpenEditorModal] = useState(false);

    return (
        <UseEditorModal.Provider value={{openEditorModal, setOpenEditorModal}}>
            {children}
        </UseEditorModal.Provider>
    )
}