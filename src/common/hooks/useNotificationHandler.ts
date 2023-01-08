import {useEffect, useState} from "react";

import {scrollToRoom} from "../util/scrollToRoom";
import { getRoomId, Room } from "../api/interfaces";

const checkNotificationPermission = async () => {
    if (Notification.permission === "granted") return true;
    const permission = await Notification.requestPermission();
    return permission === "granted";
}

const onClickNotification = (roomId: string) => () => {
    window.focus();
    scrollToRoom(roomId)
}

interface NotificationHandlerProps {
    room: Room;
    isFull: boolean;
}

const useNotificationHandler = ({room, isFull}: NotificationHandlerProps): [boolean, () => void] => {
    const [subscribeStatus, setSubscribeStatus] = useState<boolean>(false);

    const changeSubscribeStatus = () => {
        checkNotificationPermission().then(() => {
            setSubscribeStatus(!subscribeStatus);
        })
    }

    useEffect(() => {
        if (subscribeStatus && !isFull) {
            const notification = new Notification("자리 나면 알림 받기", {
                icon: document.URL + "favicon.ico",
                body: room.roomName,
            });
            notification.onclick = onClickNotification(getRoomId(room));
            setSubscribeStatus(false);
        }
    }, [isFull, subscribeStatus, room])

    return [subscribeStatus, changeSubscribeStatus];
}

export {useNotificationHandler};
