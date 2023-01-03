import React from "react";

import {TransitionGroup, CSSTransition} from "react-transition-group";

import {MemberType} from "../../common/classes/Member";
import Member from "./Member";

interface MemberListProps {
    members: MemberType[]
}

function MemberList({members}: MemberListProps) {
    return (
        <div className="MemberList">
            <div className="line">
                <div/><div/><div/><div/><div/>
            </div>
            <div className="MemberContainer">
                <TransitionGroup>
                    {members.map((member, index) => {
                        const key = (member.type === "private")
                            ? index
                            : member.nickname + member.icon;
                        return (
                            <CSSTransition key={key} timeout={200} classNames="wrap">
                                <Member member={member}/>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </div>
        </div>
    );
}

export default React.memo(MemberList);
