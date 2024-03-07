import React, { createContext, useContext, useState } from 'react';
import { featureFlags } from './Features';

const FeatureToggleContext = createContext();

export const FeatureToggleProvider = ({ children }) => {
    const [features, setFeature] = useState(featureFlags);

    const toggleFeature = (featureName) => {
        setFeature({...features, [featureName] : !features[featureName]  })
    }
    
    return (
        <FeatureToggleContext.Provider value={{features, toggleFeature}}>
            {children}
        </FeatureToggleContext.Provider>
    );
};

export const useFeatureToggle = () => useContext(FeatureToggleContext);

