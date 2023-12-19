import React from "react";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Member from "./Member";

import { Member as IMember } from "@/schema";

interface MemberListProps {
  members: IMember[];
}

function MemberList({ members }: MemberListProps) {
  return (
    <div className="MemberList">
      <div className="line">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="MemberContainer">
        <TransitionGroup>
          {members.map(member => (
            <CSSTransition key={member.userId} timeout={200} classNames="wrap">
              <Member member={member} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default React.memo(MemberList);
