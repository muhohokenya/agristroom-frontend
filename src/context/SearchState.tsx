"use client"
import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface ICurrentState {
    searchedValue: string;
}

type SearchedValueContext = {
    searchedValue: ICurrentState;
    setSearchedValue: Dispatch<SetStateAction<ICurrentState>>
}

const SearchStateDefaultValue: SearchedValueContext = {
    searchedValue: {
        searchedValue: ""
    },
    setSearchedValue: () => ""
}

export const SearchContext = createContext(SearchStateDefaultValue);

const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [searchedValue, setSearchedValue] = useState(SearchStateDefaultValue.searchedValue)
    return (
        <SearchContext.Provider value={{searchedValue, setSearchedValue}}>
            {children}
        </SearchContext.Provider>
    )
}
export function useSearchContext() {
    const context = useContext(SearchContext)
    if (!context) {
        throw new Error("useFormContext must be used within the AppProvider");
    }
    return context;
}

export default SearchProvider