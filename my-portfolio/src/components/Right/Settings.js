import React, { useState } from 'react';
import { useTheme } from '../../Providers/ThemeProvider';
import './Settings.css';
import { NavBar } from './Navbar';
import { useAlert } from '../../Providers/AlertProvider';
import { useFeatureToggle } from '../../Providers/FeatureProvider';
import { Features } from '../../Providers/Features';

export const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { showAlert } = useAlert();
  const [profilePicture, setProfilePicture] = useState(null);
  const { features, toggleFeature } = useFeatureToggle();

  const handleThemeChange = (e) => {
    toggleTheme();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  return (
    <div className="settings-container">
      <h2 style={{
        margin: '0px'
      }}>⚙️ Settings</h2>
      <div className="settings-item">
        <p>Theme: </p>
        <select value={theme} onChange={handleThemeChange}>
          <option value="light-theme">Light</option>
          <option value="dark-theme">Dark</option>
        </select>
      </div>

      <div className="settings-item">
        <p>Features: </p>
        <label>
          <input
            type="checkbox"
            checked={features[Features.ENABLE_SETTINGS]}
            onChange={() => toggleFeature(Features.ENABLE_SETTINGS)}
          />
          Settings
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            checked={features[Features.THEME_TOGGLE]}
            onChange={() => toggleFeature(Features.THEME_TOGGLE)}
          />
          Theme Button
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            checked={features[Features.PROJECT_SEARCH]}
            onChange={() => toggleFeature(Features.PROJECT_SEARCH)}
          />
          Project Search
        </label>

      </div>
      <div className="settings-item">
        <p>Profile Picture: </p>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {profilePicture && (
          <div>
            <img src={profilePicture} alt="Profile" className="profile-picture" />
          </div>
        )}
      </div>
      <div className="settings-item">
        <p>Default Project View: </p>
        <select value={theme} onChange={handleThemeChange}>
          <option value="light">Grid</option>
          <option value="dark">List</option>
          <option value="light">Default</option>
        </select>
      </div>


      <div className="settings-item">
        <p>Upload your data.json: </p>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {profilePicture && (
          <div>
            <img src={profilePicture} alt="Profile" className="profile-picture" />
          </div>
        )}
      </div>
      <p>Reorder Nav Buttons: </p>
      <NavBar />

      <br />

      <div className="button-container">
        <button className="view-btn" id="saveButton" onClick={() => showAlert({
          message: "Saved Successfully",
          type: "success"
        }
        )}>Save</button>
        {/* <button className="view-btn" id="closeButton">Close</button> */}
      </div>
    </div>
  );
};