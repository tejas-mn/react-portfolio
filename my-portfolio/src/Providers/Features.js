class Features {
    static PROJECT_LIST_VIEW = "PROJECT_LIST_VIEW";
    static PROJECT_GRID_VIEW = "PROJECT_GRID_VIEW";
    static PROJECT_DEFAULT_VIEW = "PROJECT_DEFAULT_VIEW";
    static PROJECT_SEARCH = "PROJECT_SEARCH";
    static ENABLE_SETTINGS = "ENABLE_SETTINGS";
    static THEME_TOGGLE = "THEME_TOGGLE";
}                                                       

const featureFlags = {
    ENABLE_SETTINGS: true,
    THEME_TOGGLE : true,
    PROJECT_SEARCH : false,
    PROJECT_LIST_VIEW : false,
    PROJECT_GRID_VIEW : false,
    PROJECT_DEFAULT_VIEW : true
};

export {Features, featureFlags};