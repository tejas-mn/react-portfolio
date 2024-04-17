import React, { useContext, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { createContext } from 'react';
import FallbackLoader from '../components/utils/components/FallbackLoader';
import { CirclesLoader } from '../components/utils/components/Loaders';

const preloadImage = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = url;
    });
};

const preloadProjectImages = async (projects) => {
    const preloadPromises = projects.map((project) => preloadImage(project.imageUrl));
    await Promise.all(preloadPromises);
};

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

        preloadProjectImages(data.projects)
            .then(() => {
                console.log('All project images preloaded successfully');
            })
            .catch((error) => {
                console.error('Failed to preload project images:', error);
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