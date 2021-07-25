import React from "react";
import "./PasswordModal.css"
import {ModalProps} from "./props";

import {joinRoom} from "../../../common/util/joinRoom";
import useInput from "../../../common/hooks/useInput";

import {ReactComponent as Lock} from "../../../resource/img/icon/lock.svg";

function PasswordModal({close, roomName, temp=true}: ModalProps) {
    const password = useInput('');

    return (<>
        <div className="overlay" onClick={close} />
        <div className="modal">
            <div className="title">
                <Lock fill="#000000"/>
                <span>{roomName}</span>
            </div>
            <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                {...password}/>
            <div className="buttons">
                <button className="abort" onClick={close}>
                    <span>취소</span>
                </button>
                <button
                    className="join"
                    onClick={() => {
                        joinRoom(roomName, password.value, temp);
                    }}
                >
                    <span>참여하기</span>
                </button>
            </div>
        </div>
    </>);
}

export default PasswordModal;