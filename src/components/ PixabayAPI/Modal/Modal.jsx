import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "0",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.32)",
  },
};

// Make sure to bind modal to your appElement
Modal.setAppElement("#root");

function Modale({ largeImg, closeModal }) {
  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div>
        <img src={largeImg} alt="" style={{ width: "100%" }} />
        <button onClick={closeModal} style={{ marginTop: "10px" }}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export { Modale };
