"use client"
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface User {
    first_name: string;
    last_name: string;
    email: string;
    phone: string
}

type AuthContextValue = {
    isLoggedIn: boolean;
    user: User | null,
    setUser: Dispatch<SetStateAction<User | null>>,
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>,

}

const AuthContextDefaultValue: AuthContextValue = {
    isLoggedIn: false,
    user: null,
    setUser: () => { },
    setIsLoggedIn: (boolean) => boolean
}

export const AuthStateContext = createContext(AuthContextDefaultValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(AuthContextDefaultValue.isLoggedIn)
    const [user, setUser] = useState(AuthContextDefaultValue.user)
    return (
        <AuthStateContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
            {children}
        </AuthStateContext.Provider>
    )
}

export const useAuthState = () => useContext(AuthStateContext);

export function useFormContext() {
    const context = useContext(AuthStateContext)
    if (!context) {
        throw new Error("useFormContext must be used within the AppProvider");
    }
    return context;
}

export default AuthProvider