import React from "react";
import { Member } from "../common/api/interfaces";

interface Props {
  member: Member;
}

export const Profile: React.FC<Props> = ({ member }) => {
  
  return (
    <div className="flex flex-row  mb-2">
      <div className="bg-gray-200 w-6 h-6 rounded-2xl mr-3"/>
      <span className="text-sm text-gray-500 line-clamp-1">{member.nickname}</span>
    </div>
  );
};
