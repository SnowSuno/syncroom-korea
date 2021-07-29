import React from "react";
import "./style.css"

import {ModalClass} from "../../../modules/modal/modalClass";

import ModalRoute from "./ModalRoute";
import PasswordModal from "./PasswordModal";
import ShareModal from "./ShareModal";

function Modal() {
    return (
        <div className='modal-wrap'>
            <ModalRoute route={ModalClass.PASSWORD}>
                <PasswordModal/>
            </ModalRoute>
            <ModalRoute route={ModalClass.SHARE}>
                <ShareModal />
            </ModalRoute>
        </div>
    )
}

export default Modal;
