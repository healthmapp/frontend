import { createContext, useState, useEffect } from 'react'



export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {

    
    return (
        <LocationContext.Provider value={{}}>
            {children}
        </LocationContext.Provider>
    )
}
