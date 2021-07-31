import React from "react";
import ReactModal from "react-modal";
import "./style.css"

function Modal() {

    return (
        <ReactModal isOpen={true} className="modal">
            This is a Modal
        </ReactModal>
    )
}

export default Modal;
