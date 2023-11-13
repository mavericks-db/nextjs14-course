'use client'

import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children} : {children: React.ReactNode }) {
     const [nameContext, setName] = useState('Mavericks')

    return (
        <AppContext.Provider value={{ nameContext, setName}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}