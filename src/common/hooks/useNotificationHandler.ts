import {useEffect, useState} from "react";

const checkNotificationPermission = async () => {
    if (Notification.permission === "granted") return true;
    const permission = await Notification.requestPermission();
    return permission === "granted";
}

interface NotificationHandlerProps {
    roomName: string;
    isFull: boolean;
}

const useNotificationHandler = ({roomName, isFull}: NotificationHandlerProps): [boolean, () => void] => {
    const [subscribeStatus, setSubscribeStatus] = useState<boolean>(false);

    const changeSubscibeStatus = () => {
        checkNotificationPermission().then(() => {
            setSubscribeStatus(!subscribeStatus);
        })
    }

    useEffect(() => {
        if (subscribeStatus && !isFull) {
            new Notification("자리 나면 알림 받기", {
                icon: document.URL + "favicon.ico",
                body: roomName
            });
            setSubscribeStatus(false);
        }
    }, [isFull, subscribeStatus, roomName])

    return [subscribeStatus, changeSubscibeStatus];
}

export {useNotificationHandler};
