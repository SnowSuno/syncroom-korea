import React, {useState} from "react";
import "./style.css"

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {ModalClass} from "../../../modules/modal/modalClass";
import {closeModal} from "../../../modules/modal";

import PasswordModal from "./PasswordModal";

function Modal() {
    const {modalClass, roomName} = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();

    const [fade, setFade] = useState('');
    const close = () => {
        setFade('fade');
        setTimeout(() => {
            dispatch(closeModal());
            setFade('');
        }, 200);
    };

    switch (modalClass) {
        case ModalClass.PASSWORD:
            return (<div className={fade}>
                <PasswordModal {...{close, roomName}}/>
            </div>);
        case ModalClass.SHARE:
            return (<div className={fade}>
                <></>
            </div>);
        default:
            return <></>;
    }
}

export default Modal;
