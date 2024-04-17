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
    await Promise.all([...preloadPromises, preloadImage("https://i.pinimg.com/originals/cc/6a/fc/cc6afc451a6d3857d556331e16e10bf7.gif"), 
    preloadImage("https://chosenoneappearal.com/cdn/shop/files/ezgif.com-gif-maker_-_2023-09-18T121549.841_1000x.gif?v=1695053769")]);
};

const userContext = createContext();

const UserProvider = ({ children }) => {

    const { data, error, loading } = useFetch('data.json');

    if (error) {
        return "Error Loading data";
    }
    else if (loading) {
        console.log("Loading Data..")
        // return <FallbackLoader loader={CirclesLoader} />
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