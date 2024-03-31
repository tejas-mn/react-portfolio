import { PicContainer } from "./PicContainer";
import { ProfileDetails } from "./ProfileDetails";
import { ProfileLinks } from "./ProfileLinks";
import { useTheme } from "../../Providers/ThemeProvider";
import Modal from "../utils/Modal";
import { Settings } from "../Right/Settings";
import { useFeatureToggle } from "../../Providers/FeatureProvider";
import { Features } from "../../Providers/Features";
import { useState, useRef } from "react";
import "./Left.css";

export function LeftComponent() {
  const [modalOpen, setModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { features } = useFeatureToggle();
  const childRef = useRef(null);

  const openModal = (p) => {
    setModalOpen(true);
  };

  const closeModal = () => {
    if (childRef.current) {
      childRef.current.handleCancel();
    }
    setModalOpen(false);
  };

  return (
    <div className="left-01">
      <PicContainer />
      <div className="btm-txt">
        <ProfileDetails />
        <ProfileLinks />
      </div>
      {
        features[Features.THEME_TOGGLE] && <button
          style={styles.btn}
          className="view-btn theme-btn"
          onClick={() => toggleTheme()}
        >
          {theme === "light-theme" ? "🌗" : "🌓"}
        </button>
      }
      {features[Features.ENABLE_SETTINGS] &&
        <button className="view-btn" style={styles.btn} onClick={openModal}>
          ⚙️
        </button>
      }

      <div>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <Settings ref={childRef}/>
        </Modal>
      </div>
    </div>
  );
}

const styles = {
  btn: { marginTop: "30px", borderRadius: "100px" },
};
