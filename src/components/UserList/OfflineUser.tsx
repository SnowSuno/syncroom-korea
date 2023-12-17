import React, { useCallback } from "react";

import Delete from "../../resource/img/icon/x.svg?react";
import { useUsersStore } from "@/store";

interface OfflineUserProps {
  userName: string;
  isActive: boolean;
}

function OfflineUser({ userName, isActive }: OfflineUserProps) {
  const deleteFavorite = useUsersStore(state => state.deleteFavoriteUser);

  const deleteSelf = useCallback(() => {
    deleteFavorite(userName);
  }, [deleteFavorite, userName]);

  return (
    <div className="Offline User">
      <svg className="indicator" viewBox="0 0 2 2">
        <circle cx="1" cy="1" r="1" />
      </svg>
      <span>{userName}</span>
      <button className="delete" onClick={deleteSelf} disabled={!isActive}>
        <Delete />
      </button>
    </div>
  );
}

export default React.memo(OfflineUser);
