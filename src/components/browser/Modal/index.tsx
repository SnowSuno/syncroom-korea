import React from "react";
import "./style.css"

import {ModalClass} from "../../../modules/modal/modalClass";

import ModalRoute from "./ModalRoute";
import PasswordModal from "./PasswordModal";

function Modal() {
    return (
        <div className='modal-wrap'>
            <ModalRoute route={ModalClass.PASSWORD}>
                <PasswordModal/>
            </ModalRoute>
        </div>
    )
}

export default Modal;
