import React, { useContext, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { OvalLoader, TailSpinLoader } from '../components/utils/components/Loaders.jsx';
import { createContext } from 'react';
import { cacheManager } from '../utils/cacheManager';

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

const RESUME_URL = import.meta.env.VITE_RESUME_URL;

const UserProvider = ({ children }) => {
    const { data, error, loading } = useFetch(
        RESUME_URL,
        undefined,
        3600000 * 24 // 24 hours cache
    );

    useEffect(() => {
        if (data && data.data.projects) {
            preloadProjectImages(data.data.projects)
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
        const Loader = OvalLoader.Component;
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Loader {...TailSpinLoader.props} />
             </div>
        );
    }

    return (
        <userContext.Provider value={data.data}>
            {children}
        </userContext.Provider>
    );
};

const useUser = () => {
    const context = useContext(userContext);
    
    // Add cache control methods
    const clearCache = () => {
        cacheManager.clearKey(RESUME_URL);
    };

    const clearAllCache = () => {
        cacheManager.clear();
    };

    return {
        ...context,
        clearCache,
        clearAllCache
    };
};

export {
    UserProvider,
    useUser
}