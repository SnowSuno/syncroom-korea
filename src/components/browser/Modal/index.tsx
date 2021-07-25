import React, {useState} from "react";
import "./style.css"

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {ModalClass} from "../../../modules/modal/modalClass";
import {closeModal} from "../../../modules/modal";

import {ReactComponent as Lock} from "../../../resource/img/icon/lock.svg";

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
            return (<>
                <div className={`overlay ${fade}`} onClick={close} />
                <div className={`modal ${fade}`}>
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
        case ModalClass.SHARE:
            return (
                <></>
            )
        default:
            return <></>
    }
}

export default Modal;
