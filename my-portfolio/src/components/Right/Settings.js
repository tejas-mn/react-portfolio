import React, { useState } from 'react';
import { useTheme } from '../../Providers/ThemeProvider';
import './Settings.css';
import { NavBar } from './Navbar';
import { useAlert } from '../../Providers/AlertProvider';

export const Settings = () => {
  const { Currtheme, toggleTheme } = useTheme();
  const [theme, setTheme] = useState('Light');
  const { alert, showAlert } = useAlert();
  const [enableFeature1, setEnableFeature1] = useState(false);
  const [enableFeature2, setEnableFeature2] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    toggleTheme();
  };

  const handleFeature1Change = () => {
    setEnableFeature1(!enableFeature1);
  };

  const handleFeature2Change = () => {
    setEnableFeature2(!enableFeature2);
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
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className="settings-item">
        <p>Features: </p>
        <label>
          <input
            type="checkbox"
            checked={enableFeature1}
            onChange={handleFeature1Change}
          />
          Feature 1
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            checked={enableFeature2}
            onChange={handleFeature2Change}
          />
          Feature 2
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
        <p>Project View: </p>
        <select value={theme} onChange={handleThemeChange}>
          <option value="light">Grid</option>
          <option value="dark">List</option>
          <option value="light">Default</option>
        </select>
      </div>

      <div class="settings-item">
        <p>Project Search: </p>
        <label class="radio-label">
          <input type="radio" name="feature" id="feature1Radio" value="feature1" checked />
          <span class="radio-custom"></span>
          Enable
        </label>
        <br />
        <label class="radio-label">
          <input type="radio" name="feature" id="feature2Radio" value="feature2" />
          <span class="radio-custom"></span>
          Disable
        </label>
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

      <div class="button-container">
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
