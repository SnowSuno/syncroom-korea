import React from "react";
import classNames from "classnames";

import {StatusType} from "../../common/classes/properties";

import {useDispatch} from "react-redux";
import {openModal} from "../../modules/modal";
import {ModalClass} from "../../modules/modal/modalClass";

import {ReactComponent as Share} from "../../resource/img/icon/share.svg";
import {ReactComponent as Notification} from "../../resource/img/icon/notification.svg";

import useLink from "../../common/hooks/useLink";

interface ButtonsProps {
    name: string;
    status: StatusType;
    isFull: boolean;
    changeSubscription: () => void;
    isSubscribed: boolean;
}

function Buttons({name, status, isFull, changeSubscription, isSubscribed}: ButtonsProps) {
    const dispatch = useDispatch();
    const link = useLink();

    const share = () => {dispatch(
        openModal({
            modalClass: ModalClass.FOOLS,
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
                        <button
                          className={classNames("notiBtn", {"subscibed": isSubscribed})}
                          onClick={changeSubscription}
                        >
                            <Notification />
                            <span>{
                              isSubscribed ? "알림 취소" : "자리 나면 알림 받기"
                            }</span>
                        </button>
                    </div>
                    : <div>
                        <button onClick={() => alert("어....이거도 눌러볼줄은 몰랐는데... \n옆 '공유'나 '참여하기'를 눌러보는건 어때요?")}>
                            <span>임시 참여</span>
                        </button>
                        <button className="joinBtn" onClick={link.toInternal("/developers-room")}>
                            <span>참여하기</span>
                        </button>
                    </div>
            }
        </div>
    )
}

export default React.memo(Buttons);
