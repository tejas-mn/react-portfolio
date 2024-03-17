import React, { useState } from 'react';
import { useTheme } from '../../Providers/ThemeProvider';
import './Settings.css';
import { NavBar } from './Navbar';
import { useAlert } from '../../Providers/AlertProvider';
import { useFeatureToggle } from '../../Providers/FeatureProvider';
import { Features } from '../../Providers/Features';
import { useLocalStorage } from '../../hooks/customHooks';

const SettingsItem = ({ label, children }) => (
  <div className="settings-item">
    <p>{label}</p>
    {children}
  </div>
);

const Checkbox = ({ checked, onChange, label }) => (
  <label>
    <input type="checkbox" checked={checked} onChange={onChange} />
    {label}
  </label>
);

export const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { showAlert } = useAlert();
  const [profilePicture, setProfilePicture] = useState(null);
  const { features, toggleFeature, getCurrentProjectView, updateProjectView } = useFeatureToggle();
  const [currentProjectView, setCurrentProjectView] = useState(getCurrentProjectView());
  
  const [settings, setSettings] = useState({
    settings : {
      general : {
        theme : 'dark-theme',
        project_search : true,
        project_view : 'PROJECT_DEFAULT_VIEW'
      }
    }
  });

  const [localSettings, setLocalSettings] = useLocalStorage("settings", () => JSON.stringify(settings));

  const handleThemeChange = (e) => {
    toggleTheme();
  };

  const handleViewChange = (e) => {
    setCurrentProjectView(e.target.value);
    updateProjectView(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

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
          onClick={() => showAlert({ message: "Saved Successfully", type: "success" })}
        >
          Save
        </button>
      </div>
    </div>
  );
};