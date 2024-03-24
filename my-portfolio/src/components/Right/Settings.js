import React, { useState, useEffect,forwardRef, useImperativeHandle  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTheme, updateFeature, updateProjectView } from '../../Redux/settingsSlice';
import { useTheme } from '../../Providers/ThemeProvider';
import './Settings.css';
import { useAlert } from '../../Providers/AlertProvider';
import { useFeatureToggle } from '../../Providers/FeatureProvider';
import { Features } from '../../Providers/Features';
import { SettingsItem, Checkbox } from '../utils/SettingsUtils';

export const Settings = forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const { 
    theme: currentTheme, 
    project_search: ProjectSearch, 
    currentProjectView: currentView 
  } = useSelector((state) => state.settings);
  
  const { theme, toggleTheme, setTheme } = useTheme();
  const { showAlert } = useAlert();
  const { features, toggleFeature, getCurrentProjectView, updateProjectView } = useFeatureToggle();
  const [currentProjectView, setCurrentProjectView] = useState(getCurrentProjectView());
  
  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('settings'));
    if (savedSettings) {
      setTheme(savedSettings.theme)
      console.log(savedSettings);
    }
  }, []);

  const handleThemeChange = (e) => {
    toggleTheme();
  };

  const handleViewChange = (e) => {
    setCurrentProjectView(e.target.value);
    updateProjectView(e.target.value);
  };

  const handleSave = () => {
    dispatch(updateTheme(theme));
    // dispatch(updateFeature(features[Features.PROJECT_SEARCH]));
    // dispatch(updateProjectView(currentProjectView));
  };

  const handleCancel = () => {
    setTheme(currentTheme);
    // toggleFeature(features[Features.PROJECT_SEARCH]);
    // setCurrentProjectView(currentView);
  };

  useImperativeHandle(ref, () => ({
    handleCancel
  }));

  return (
    <div className="settings-container">
      <h2 style={{ margin: '0px' }}>⚙️ Settings</h2>

      <SettingsItem label="Theme:">
        <select value={theme} onChange={handleThemeChange}>
          <option value="light-theme">Light</option>
          <option value="dark-theme">Dark</option>
        </select>
      </SettingsItem>

      <SettingsItem label="Features:">
        {/* <Checkbox
          checked={features[Features.ENABLE_SETTINGS]}
          onChange={() => toggleFeature(Features.ENABLE_SETTINGS)}
          label="Settings"
        />
        <br />
        <Checkbox
          checked={features[Features.THEME_TOGGLE]}
          onChange={() => toggleFeature(Features.THEME_TOGGLE)}
          label="Theme Button"
        /> */}
        <br />
        <Checkbox
          checked={features[Features.PROJECT_SEARCH]}
          onChange={() => toggleFeature(Features.PROJECT_SEARCH)}
          label="Project Search"
        />
      </SettingsItem>

      {/* <SettingsItem label="Profile Picture:">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {profilePicture && (
          <div>
            <img src={profilePicture} alt="Profile" className="profile-picture" />
          </div>
        )}
      </SettingsItem> */}

      <SettingsItem label="Project View:">
        <select value={currentProjectView} onChange={handleViewChange}>
          <option value={Features.PROJECT_GRID_VIEW}>Grid</option>
          <option value={Features.PROJECT_LIST_VIEW}>List</option>
          <option value={Features.PROJECT_DEFAULT_VIEW}>Default</option>
        </select>
      </SettingsItem>

      {/* <SettingsItem label="Upload your data.json:">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </SettingsItem> */}

      {/* <p>Reorder Nav Buttons: </p>
      <NavBar />

      <br /> */}

      <div className="button-container">
        <button
          className="view-btn"
          id="saveButton"
          
          onClick={() => {
            handleSave();
            showAlert({ message: "Saved Successfully", type: "success" })
           }
          }
        >
          Save
        </button>
        <button
          className="view-btn"
          id="saveButton"
          
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
});