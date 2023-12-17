import React, { useCallback } from "react";
import classNames from "classnames";

import Profile from "../../resource/img/icon/Profile";

import Star from "../../resource/img/icon/star.svg?react";

import { Member as IMember } from "@/schema";
import { useUsersStore } from "@/store";

interface MemberProps {
  member: IMember;
}

function Member({ member }: MemberProps) {
  const { starred, addFavorite, deleteFavorite } = useUsersStore(state => ({
    starred: state.favorites.includes(member.nickname),
    addFavorite: state.addFavoriteUser,
    deleteFavorite: state.deleteFavoriteUser,
  }));

  const onClick = useCallback(() => {
    starred ? deleteFavorite(member.nickname) : addFavorite(member.nickname);
  }, [starred, member.nickname, addFavorite, deleteFavorite]);

  return (
    <div className="Member">
      <div className="icon">
        <Profile icon={member.iconInfo} />
      </div>
      <div className="nickname">
        {!!member.nickname ? member.nickname : "임시 입장 중"}
      </div>
      {!!member.userId && (
        <Star
          className={classNames("star", { starred: starred })}
          onClick={onClick}
        />
      )}
    </div>
  );
}

export default React.memo(Member);
