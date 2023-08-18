"use client"
import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';


type AuthContextValue = {
    isLoggedIn: boolean;
    user: {},
    setUser: Dispatch<SetStateAction<object>>,
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>,

}

const AuthContextDefaultValue: AuthContextValue = {
    isLoggedIn: false,
    user: {},
    setUser: () => {},
    setIsLoggedIn: (boolean) => boolean
}

export const AuthStateContext = createContext(AuthContextDefaultValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(AuthContextDefaultValue.isLoggedIn)
    const [user, setUser] = useState(AuthContextDefaultValue.user)
    return (
        <AuthStateContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser}}>
            {children}
        </AuthStateContext.Provider>
    )
}

export function useFormContext() {
    const context = useContext(AuthStateContext)
    if (!context) {
        throw new Error("useFormContext must be used within the AppProvider");
    }
    return context;
}

export default AuthProvider