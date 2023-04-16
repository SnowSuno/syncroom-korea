import React from "react";
import { motion } from "framer-motion";
import { Member } from "../common/api/interfaces";

interface Props {
  member: Member;
}

export const Profile: React.FC<Props> = ({ member }) => {
  
  const profileImgUri = typeof member.iconInfo.type === "undefined"
    ? "https://syncroom.yamaha.com/mypage/assets/img/user/img_0.png"
    : member.iconInfo.type === "preset"
      ? `https://syncroom.yamaha.com/mypage/assets/img/user/img_${member.iconInfo.preset}.png`
      : member.iconInfo.url;
  
  return (
    <motion.div className="flex flex-row py-1 px-2 items-center hover:bg-gray-100 rounded-md cursor-pointer">
      <img
        className="w-7 h-7 rounded-2xl mr-3.5"
        src={profileImgUri}
        alt={member.nickname}
      />
      <div className="text-sm text-gray-500 line-clamp-1">{member.nickname}</div>
    </motion.div>
  );
};
