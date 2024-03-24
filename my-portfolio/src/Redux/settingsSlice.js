import { createSlice } from '@reduxjs/toolkit';
import { featureFlags } from '../Providers/Features';
import { Features } from '../Providers/Features';

const initialState = {
  theme: 'light-theme',
  project_search: featureFlags[Features.PROJECT_SEARCH],
  currentProjectView: Features.PROJECT_DEFAULT_VIEW,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateTheme(state, action) {
      state.theme = action.payload;
    },
    updateFeature(state, action) {
      state.project_search = action.payload;
    },
    updateProjectView(state, action) {
      state.currentProjectView = action.payload;
    },
  },
});

export const { updateTheme, updateFeature, updateProjectView } = settingsSlice.actions;
export default settingsSlice.reducer;