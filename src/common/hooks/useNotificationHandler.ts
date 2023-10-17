import { useEffect, useState } from "react";

import RoomType from "../classes/Room";
import { scrollToRoom } from "../util/scrollToRoom";

const checkNotificationPermission = async () => {
  if (Notification.permission === "granted") return true;
  const permission = await Notification.requestPermission();
  return permission === "granted";
};

const onClickNotification = (roomId: number) => () => {
  window.focus();
  scrollToRoom(roomId);
};

interface NotificationHandlerProps {
  room: RoomType;
  isFull: boolean;
}

const useNotificationHandler = ({
  room,
  isFull,
}: NotificationHandlerProps): [boolean, () => void] => {
  const [subscribeStatus, setSubscribeStatus] = useState<boolean>(false);

  const changeSubscibeStatus = () => {
    checkNotificationPermission().then(() => {
      setSubscribeStatus(!subscribeStatus);
    });
  };

  useEffect(() => {
    if (subscribeStatus && !isFull) {
      const noti = new Notification("자리 나면 알림 받기", {
        icon: document.URL + "favicon.ico",
        body: room.name,
      });
      noti.onclick = onClickNotification(room.id);
      setSubscribeStatus(false);
    }
  }, [isFull, subscribeStatus, room.name, room.id]);

  return [subscribeStatus, changeSubscibeStatus];
};

export { useNotificationHandler };
