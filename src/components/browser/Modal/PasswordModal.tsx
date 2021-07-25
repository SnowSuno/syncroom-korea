import React from "react";
import "./PasswordModal.css"

import {ModalProps} from "./props";

import {ReactComponent as Lock} from "../../../resource/img/icon/lock.svg";

function PasswordModal({close, roomName}: ModalProps) {
    return (<>
        <div className="overlay" onClick={close} />
        <div className="modal">
            <div className="title">
                <Lock fill="#000000"/>
                <span>{roomName}</span>
            </div>
            <input type="text" placeholder="비밀번호를 입력하세요"/>
            <div className="buttons">
                <button className="abort" onClick={close}>
                    <span>취소</span>
                </button>
                <button className="join">
                    <span>참여하기</span>
                </button>
            </div>
        </div>
    </>);
}

export default PasswordModal;