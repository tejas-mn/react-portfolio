import { Settings } from "./Settings";
import Modal from "../utils/Modal";
import { useState } from "react";
import { useFeatureToggle } from "../../Providers/FeatureProvider";
import { Features } from "../../Providers/Features";

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const { features } = useFeatureToggle();

  const openModal = (p) => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section>
      <div style={styles.contactHeader}>
        <h2>📞 Contact</h2>
        {features[Features.ENABLE_SETTINGS] &&
          <button className="view-btn" onClick={openModal}>
            ⚙️ Settings
          </button>
        }
      </div>

      <div>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <Settings />
        </Modal>
      </div>

    </section>
  );
}

const styles = {
  contactHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};
