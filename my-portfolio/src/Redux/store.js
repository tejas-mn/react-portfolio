import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('settings', JSON.stringify(state.settings));
});

export default store;
