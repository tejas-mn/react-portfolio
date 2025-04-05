import React, { createContext, useContext, useEffect, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    const showAlert = (alertObj) => {
        setAlerts((prev) => [...prev, alertObj]);
    };

    const hideAlert = (index) => {
        setAlerts((prev) => prev.filter((_, i) => i !== index));
    };

    useEffect(() => {
        if (alerts.length > 0) {
            //Automatically hide the latest alert after 3 seconds
            //In previous logic I was creating new timeouts for every addition or removal in alerts array
            //Also I was not clearing timeouts which was causing inconsistency
            const latestIndex = alerts.length - 1;
            const timer = setTimeout(() => hideAlert(latestIndex), 3000);
            
            return () => clearTimeout(timer); //clears timout for currrent last and new timeout will be set on new alert which got pushed recently
        }
    }, [alerts]);

    return (
        <AlertContext.Provider value={{ alerts, showAlert, hideAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

export const useAlert = () => useContext(AlertContext);
