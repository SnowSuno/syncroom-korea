import React from "react";

import {StatusType} from "../../../common/classes/types";

import {ReactComponent as Share} from "../../../resource/img/icon/share.svg";
import {ReactComponent as Notification} from "../../../resource/img/icon/notification.svg";

interface ButtonsProps {
    name: string,
    status: StatusType,
    isFull: boolean
}

function Buttons({name, status, isFull}: ButtonsProps) {
    return (
        <div className="buttons">
            <button className="share general">
                <Share/>
                <span>공유</span>
            </button>
            {
                isFull
                    ? <div>
                        <button className="noti">
                            <Notification />
                            <span>참여 가능 알림받기</span>
                        </button>
                    </div>
                    : <div>
                        <button className="general">
                            <span>임시 입장</span>
                        </button>
                        <button className="join">
                            <span>참여하기</span>
                        </button>
                    </div>
            }
        </div>
    )
}

export default Buttons;