import React from "react";
import { Avatar } from "@radix-ui/react-avatar";
import { Member } from "@/schema";
import tw from "twin.macro";

interface Props {
  member: Member;
}

const Component: React.FC<Props> = ({ member }) => {
  return (
    <div className="flex flex-row h-8">
      <Avatar />
      <span>{member.nickname}</span>
    </div>
  );
};

const List = tw.ul`flex flex-col h-40`;

export const Profile = Object.assign(Component, { List });
