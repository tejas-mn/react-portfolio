import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({children}) => {
    const [alerts, setAlert ] = useState([]);

    const showAlert = (alertObj) => {
        setAlert([...alerts, alertObj]);
    }

    const hideAlert = (index) => {
        setAlert(alerts.filter((e,i) => i!=index));
    }

    return (
        <AlertContext.Provider value={{alerts, showAlert, hideAlert}}>
            {children}
        </AlertContext.Provider>
    )
}

export const useAlert = () => useContext(AlertContext);
