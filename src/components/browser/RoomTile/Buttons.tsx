import React from "react";

import {StatusType} from "../../../common/classes/types";

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
    const join = () => {
        dispatch(openModal({
            modalClass: ModalClass.PASSWORD,
            roomName: name
        }))
    };

    return (
        <div className="buttons">
            <button className="share">
                <Share/>
                <span>공유</span>
            </button>
            {
                isFull
                    ? <div>
                        <button className="noti">
                            <Notification />
                            <span>자리 나면 알림 받기</span>
                        </button>
                    </div>
                    : <div>
                        <button
                            // className="general"
                            onClick={() => joinRoom(name, "", true)}
                        >
                            <span>임시 참여</span>
                        </button>
                        <button
                            className="join"
                            // onClick={() => joinRoom(name, "", false)}
                            onClick={join}
                        >
                            <span>참여하기</span>
                        </button>
                    </div>
            }
        </div>
    )
}

export default Buttons;