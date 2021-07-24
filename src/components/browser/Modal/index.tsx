import ReactDOM from "react-dom";
import React from "react";

import "./style.css"

function Modal() {
    const modalElement: HTMLElement = document.getElementById("modal")!;

    return ReactDOM.createPortal(
        <>
            {

            }

        </>,
        modalElement
    )
}

export default Modal;
