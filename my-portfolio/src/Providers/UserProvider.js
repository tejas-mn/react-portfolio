import React, { useContext } from 'react';
import useFetch from '../hooks/useFetch';
import { createContext } from 'react';
import FallbackLoader from '../components/utils/components/FallbackLoader';
import { CirclesLoader } from '../components/utils/components/Loaders';

const userContext = createContext();

const UserProvider = ({ children }) => {

    const { data, error, loading } = useFetch('data.json');

    if (error) {
        return "Error Loading data";
    }
    else if (loading) {
        console.log("Loading Data..")
        return <FallbackLoader loader={CirclesLoader} />
    } else {
        console.log(data);
        return (
            <userContext.Provider value={{
                data
            }}>
                {children}
            </userContext.Provider>
        )
    }
}

const useUser = () => useContext(userContext);

export {
    UserProvider,
    useUser
}