import { Settings } from "./Settings";
import Modal from "../utils/Modal";
import { useState } from "react";

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

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
        <button className="view-btn" onClick={openModal}>
          ⚙️ SETTINGS
        </button>
      </div>

      <div style={{
       
      }}>
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