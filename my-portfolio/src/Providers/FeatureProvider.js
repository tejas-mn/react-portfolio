import React, { createContext, useContext, useState, useEffect } from 'react';
import { featureFlags } from './Features';
import { Features } from './Features';

const FeatureToggleContext = createContext();

export const FeatureToggleProvider = ({ children }) => {
    const [features, setFeature] = useState(featureFlags);

    const toggleFeature = (featureName) => {
        setFeature((prevFeatures) => ({ ...prevFeatures, [featureName]: !features[featureName] }))
    }

    const updateFeatures = (featuresToUpdate) => {
        setFeature((prevFeatures) => ({ ...prevFeatures, ...featuresToUpdate }))
    }

    function getCurrentProjectView() {
        if (features[Features.PROJECT_LIST_VIEW]) return Features.PROJECT_LIST_VIEW;
        if (features[Features.PROJECT_GRID_VIEW]) return Features.PROJECT_GRID_VIEW;
        if (features[Features.PROJECT_DEFAULT_VIEW]) return Features.PROJECT_DEFAULT_VIEW;
    }

    function updateProjectView(newView) {
        const updatedFeatures = {
            [Features.PROJECT_LIST_VIEW]: newView === Features.PROJECT_LIST_VIEW,
            [Features.PROJECT_GRID_VIEW]: newView === Features.PROJECT_GRID_VIEW,
            [Features.PROJECT_DEFAULT_VIEW]: newView === Features.PROJECT_DEFAULT_VIEW
        };
        updateFeatures(updatedFeatures);
    }

    return (
        <FeatureToggleContext.Provider value={{ features, toggleFeature, updateFeatures, getCurrentProjectView, updateProjectView }}>
            {children}
        </FeatureToggleContext.Provider>
    );
};

export const useFeatureToggle = () => useContext(FeatureToggleContext);