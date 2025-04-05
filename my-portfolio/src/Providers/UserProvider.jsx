import React, { useContext, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { createContext } from 'react';

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
    await Promise.all([...preloadPromises]);
};

const userContext = createContext();

const UserProvider = ({ children }) => {
    const { data, error, loading } = useFetch('/data.json');

    useEffect(() => {
        if (data && data.projects) {
            preloadProjectImages(data.projects)
                .then(() => {
                    console.log('All project images preloaded successfully');
                })
                .catch((error) => {
                    console.error('Failed to preload project images:', error);
                });
        }
    }, [data]); 

    if (error) {
        return <div>Error Loading Data</div>;
    }

    if (loading) {
        return <div>Loading Data...</div>; 
    }

    return (
        <userContext.Provider value={{ data }}>
            {children}
        </userContext.Provider>
    );
};

const useUser = () => useContext(userContext);

export {
    UserProvider,
    useUser
}