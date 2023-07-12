"use client"
import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface CurrentAccountCreationState {
    first_name: string;
    last_name: string;
    user_name: string,
    email: string;
    topic: string;
    phone_number: string;
    password: string;
    account: {
        id: string,
        name: string
    };
    interests: { id: string, name: string }[];
}

type FormContextValue = {
    state: CurrentAccountCreationState;
    setState: Dispatch<SetStateAction<CurrentAccountCreationState>>
}

const formContextDefaultValue: FormContextValue = {
    state: {
        first_name: "",
        last_name: "",
        user_name: "",
        email: "",
        topic: "",
        phone_number: "",
        password: "",
        account: {
            id: "",
            name: ""
        },
        interests: []
    },
    setState: () => {}
}

export const FormStateContext = createContext(formContextDefaultValue);

const FormProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState(formContextDefaultValue.state)
    return (
        <FormStateContext.Provider value={{state, setState}}>
            {children}
        </FormStateContext.Provider>
    )
}

export function useFormContext() {
    const context = useContext(FormStateContext)
    if (!context) {
        throw new Error("useFormContext must be used within the AppProvider");
    }
    return context;
}

export default FormProvider