import React, { useContext, useEffect, useState } from 'react';
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

        //preload project images 
        data.projects.forEach(project => {
            const img = new Image();
            img.src = project.imageUrl;
            data.projects.imageUrl = img.src;
        });

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