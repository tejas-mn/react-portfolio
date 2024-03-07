class Features {
    static PROJECT_VIEW = "PROJECT_VIEW";
    static PROJECT_SEARCH = "PROJECT_SEARCH";
    static ENABLE_SETTINGS = "ENABLE_SETTINGS";
    static THEME_TOGGLE = "THEME_TOGGLE";
}                                                       

const featureFlags = {
    ENABLE_SETTINGS: true,
    THEME_TOGGLE : true,
    PROJECT_SEARCH : false
};

export {Features, featureFlags};