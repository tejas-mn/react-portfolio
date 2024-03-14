import React, { createContext, useContext, useEffect, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alerts, setAlert] = useState([]);

    const showAlert = (alertObj) => {
        setAlert((prev) => [...prev, alertObj]);
    }

    const hideAlert = (index) => {
        //bug was here all time directly passing setAlert(alerts.filter()) was updating whole alerts and was rendering all again
        setAlert((prev) => prev.filter((e, i) => i !== index));
        //now setAlert will update based on previous state during runtime.
    }

    useEffect(() => {
        for (let i = 0; i < alerts.length; i++) {
            setTimeout(() => {
                hideAlert(i);
            }, 9000 * (i + 1))
        }
    }, [alerts]);

    return (
        <AlertContext.Provider value={{ alerts, showAlert, hideAlert }}>
            {children}
        </AlertContext.Provider>
    )
}

export const useAlert = () => useContext(AlertContext);
