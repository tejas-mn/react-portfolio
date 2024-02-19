import "./Modal.css";

export const Modal = ({ children, isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className={`modal ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={onClose}>
          ⛌
        </button>
        <br></br>
        {children}
      </div>
    </div>
  );
};
