import React, { type ReactElement } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Member } from "@/schema";

import { Star } from "@/assets/icons";

interface Props {
  member: Member;
}

const Component: React.FC<Props> = ({ member }) => {
  return (
    <button className="h-10 flex flex-row items-center group hover:bg-gray-100 px-2 rounded-xl gap-3">
      <Avatar>
        <AvatarImage src={member.iconInfo.url} alt={member.nickname} />
        <AvatarFallback className="truncate">
          {member.nickname[0]}
        </AvatarFallback>
      </Avatar>
      <span className="text-sm text-gray-500 font-medium truncate flex-1 text-left">
        {member.nickname}
      </span>
      <button className="hidden group-hover:block text-gray-300 hover:text-gray-400">
        <Star className="w-5 h-5" />
      </button>
    </button>
  );
};

const List: React.FC<{
  children: ReactElement<Props>[];
}> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <ul className="flex-1 flex flex-col items-stretch">{children}</ul>
      <span className="text-gray-600 text-xs font-medium px-2 -mb-1">
        👤&nbsp;&nbsp;{children.length} / 5
      </span>
    </div>
  );
};

export const Profile = Object.assign(Component, { List });
