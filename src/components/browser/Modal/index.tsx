import ReactDOM from "react-dom";
import React, {useState} from "react";

import "./style.css"

function Modal() {
    const modalElement: HTMLElement = document.getElementById("modal")!;



    return ReactDOM.createPortal(
        <>
            <div>
                hello im a modal
            </div>

        </>,
        modalElement
    )
}


export default Modal;
