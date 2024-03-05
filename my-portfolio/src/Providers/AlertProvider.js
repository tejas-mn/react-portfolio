import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({children}) => {
    const [alert, setAlert ] = useState(null);

    const showAlert = (message) => {
        setAlert(message);
    }

    const hideAlert = () => {
        setAlert(null);
    }

    return (
        <AlertContext.Provider value={{alert, showAlert, hideAlert}}>
            {children}
        </AlertContext.Provider>
    )
}

export const useAlert = () => useContext(AlertContext);
