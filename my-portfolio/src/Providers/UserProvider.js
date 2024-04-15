import React, { useCallback, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

const userContext = createContext();

const UserProvider = ({children}) => {
    const [data, setData] = useState();

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    }, []);
  
    console.log(data);
    return (
    <userContext.Provider value={{
        data
    }}>
        {children}
    </userContext.Provider>
    )
}

const useUser = () => useContext(userContext);

export {
    UserProvider,
    useUser
}