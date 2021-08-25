import React from "react";

import {Status, StatusType} from "../../../common/classes/properties";

import {joinRoom} from "../../../common/util/joinRoom";

import {useDispatch} from "react-redux";
import {openModal} from "../../../modules/modal";
import {ModalClass} from "../../../modules/modal/modalClass";

import {ReactComponent as Share} from "../../../resource/img/icon/share.svg";
import {ReactComponent as Notification} from "../../../resource/img/icon/notification.svg";

interface ButtonsProps {
    name: string,
    status: StatusType,
    isFull: boolean
}

function Buttons({name, status, isFull}: ButtonsProps) {
    const dispatch = useDispatch();
    const join = (status === Status.PUBLIC)
        ? (temp: boolean) => {
            joinRoom(name, '', temp);
        }
        : (temp: boolean) => {
            dispatch(openModal({
                modalClass: ModalClass.PASSWORD,
                roomName: name,
                temp
            }))
        };
    const share = () => {dispatch(
        openModal({
            modalClass: ModalClass.SHARE,
            roomName: name,
            status
        })
    )};

    return (
        <div className="Buttons">
            <button className="shareBtn" onClick={share}>
                <Share/>
                <span>공유</span>
            </button>
            {
                isFull
                    ? <div>
                        <button className="notiBtn">
                            <Notification />
                            <span>자리 나면 알림 받기</span>
                        </button>
                    </div>
                    : <div>
                        <button onClick={() => join(true)}>
                            <span>임시 참여</span>
                        </button>
                        <button className="joinBtn" onClick={() => join(false)}>
                            <span>참여하기</span>
                        </button>
                    </div>
            }
        </div>
    )
}

export default React.memo(Buttons);