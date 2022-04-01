import React from "react";
import "./style.scss"

import {ModalClass} from "../../modules/modal/modalClass";

import ModalRoute from "./ModalRoute";
import PasswordModal from "./PasswordModal";
import ShareModal from "./ShareModal";

import FoolsShareModal from "./FoolsShareModal";

function Modal() {
    return (
        <div className='ModalContainer'>
            <ModalRoute route={ModalClass.PASSWORD}>
                <PasswordModal/>
            </ModalRoute>
            <ModalRoute route={ModalClass.SHARE}>
                <ShareModal />
            </ModalRoute>
            <ModalRoute route={ModalClass.FOOLS}>
                <FoolsShareModal/>
            </ModalRoute>
        </div>
    )
}

export default React.memo(Modal);
