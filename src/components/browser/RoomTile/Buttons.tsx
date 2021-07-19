import React from "react";

import {StatusType} from "../../../common/classes/types";

interface ButtonsProps {
    name: string,
    status: StatusType,
    isFull: boolean
}

function Buttons({name, status, isFull}: ButtonsProps) {
    return (
        <div className="buttons">
            <button className="share">
                <span>공유</span>
            </button>
            {
                isFull
                    ? <div>
                        <button>
                            <span>(종) 참여 가능 알림받기</span>
                        </button>
                    </div>
                    : <div>
                        <button>
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