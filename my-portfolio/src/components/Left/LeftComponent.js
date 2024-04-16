import { useState, useRef } from "react";
import React from "react";
import { PicContainer } from "./PicContainer";
import { ProfileDetails } from "./ProfileDetails";
import { ProfileLinks } from "./ProfileLinks";
import { useTheme } from "../../Providers/ThemeProvider";
import Modal from "../utils/Modal";
import { Toggle } from "../utils/Toggle";
import { Settings } from "../Right/Settings";
import { useFeatureToggle } from "../../Providers/FeatureProvider";
import { Features } from "../../Providers/Features";
import "./Left.css";
import CustomizedSnackbars from "../utils/MUIAlert";

export const LeftComponent = React.memo(() => {            //memoized this as whenever we scroll in app compo child components like this one gets re rendering and was causing Snackbar transition on each scroll
  const [modalOpen, setModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [show, setShow] = useState(null);
  const { features } = useFeatureToggle();
  const childRef = useRef(null);

  const handleClick = () => {
    toggleTheme();
    setShow((prev)=>prev!==null?!prev:true);
  }

  const openModal = () => setModalOpen(true);

  const closeModal = () => {
    if (childRef.current) {
      childRef.current.handleCancel();
    }
    setModalOpen(false);
  };

  const themeToggleButton = features[Features.THEME_TOGGLE] && (
    <button
      style={styles.btn}
      className="view-btn theme-btn"
      onClick={toggleTheme}
    >
      {theme === "light-theme" ? "🌗" : "🌓"}
    </button>
  );

  const settingsButton = features[Features.ENABLE_SETTINGS] && (
    <button className="view-btn" style={styles.btn} onClick={openModal}>
      ⚙️
    </button>
  );

  return (
    <div className="left-01">
      <PicContainer />
      <div className="btm-txt">
        <ProfileDetails />
        <ProfileLinks />
      </div>
      {/* {themeToggleButton} */}
      <Toggle
            label={theme === "light-theme" ? "Dark" : "Light"}
            toggled={theme === "dark-theme"}
            onClick={handleClick}
        />
      {settingsButton}
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <Settings ref={childRef} />
      </Modal>

      <CustomizedSnackbars theme={theme} showAlert={show}/>
    </div>
  );
});

const styles = {
  btn: { marginTop: "30px", borderRadius: "100px" },
};